import {chooseCheckpoint,orderedCheckpoints} from './scroll-model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type LegacyQuery = any; // The retained, isolated public runtime exposes a jQuery plugin API.
type HomeScroller = {
  scroll: number;
  scrollTo(target: number | string | Element, options?: { immediate?: boolean; force?: boolean; duration?: number }): void;
  start(): void;
  stop(): void;
  resize(): void;
};
declare global {
  interface Window {
    jQuery?: LegacyQuery;
    __gpHomeRuntimePromise?: Promise<HomeScroller>;
    __gpHomeScroller?: HomeScroller;
    __gpConfigureMotion?: (query: LegacyQuery) => void;
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.gpHomeRuntime = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Unable to load homepage motion file: ${src}`));
    document.body.appendChild(script);
  });
}
const frame = () => new Promise<void>(resolve => requestAnimationFrame(() => resolve()));

function prepareGraphics(root: HTMLElement) {
  let webgl = false;
  try {
    const probe = document.createElement('canvas');
    const context = probe.getContext('webgl2') || probe.getContext('webgl');
    webgl = Boolean(context);
    context?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch { /* Static GP imagery remains visible without a GPU context. */ }
  document.documentElement.classList.toggle('gp-home-webgl', webgl);
  if (webgl) return;
  document.documentElement.classList.add('gp-home-no-webgl');
  root.querySelectorAll<HTMLElement>('[data-plugin]').forEach(element => {
    const plugins = element.dataset.plugin!.split(/\s+/);
    if (!plugins.some(plugin => plugin.startsWith('webgl'))) return;
    const pattern = element.dataset.parallaxPattern;
    element.dataset.plugin = plugins.filter(plugin => !plugin.startsWith('webgl') && !(plugin === 'parallax' && pattern?.startsWith('webgl'))).join(' ');
    if (pattern?.startsWith('webgl')) {
      element.dataset.gpFallback = pattern;
      delete element.dataset.parallaxPattern;
    }
  });
}

/** One input owner: the retained scroller controls both its masks and GP endings. */
export function startHomeMotion(root: HTMLElement): Promise<HomeScroller> {
  if (window.__gpHomeRuntimePromise) return window.__gpHomeRuntimePromise;
  window.__gpHomeRuntimePromise = (async () => {
    const html = document.documentElement;
    html.classList.add('gp-home-active', 'has-hover', 'js');
    if (navigator.platform.toUpperCase().includes('WIN')) html.classList.add('is-win');
    // Every native GP section participates in snapping before plugins measure.
    root.querySelectorAll<HTMLElement>('.gp-expert-panel,.gp-app-panel,#gp-invitation,#contact-form').forEach(el=>{
      el.dataset.scrollSnapPoint=JSON.stringify([{viewport:0,element:0}]);
    });
    prepareGraphics(root);
    await document.fonts.ready;
    // Queue the page chunk before the shared bootstrap can run jQuery.ready.
    await loadScript('/home-motion/js/motion-config.js');
    await loadScript('/home-motion/js/landing.js');
    await loadScript('/home-motion/js/shared.js');
    const $ = window.jQuery!;
    let engine: LegacyQuery;
    for (let attempt = 0; attempt < 120; attempt++) {
      engine = $.fn.scroller && $('body').scroller('instance');
      if (engine) break;
      await frame();
    }
    if (!engine) throw new Error('Homepage scroller did not initialize.');
    const smooth = Boolean(engine.custom && engine.scroller);
    html.classList.toggle('gp-home-smooth', smooth);
    const nativeParent = root.querySelector('.js-page-content-wrapper')!;
    const adapter: HomeScroller = {
      get scroll() { return smooth ? engine.scrollTop() : window.scrollY; },
      scrollTo(target, options = {}) {
        if (typeof target === 'number') {
          if (smooth) options.immediate ? engine.scrollTop(target) : engine.scrollTo(target);
          else window.scrollTo({ top: target, behavior: options.immediate ? 'instant' : 'smooth' });
          return;
        }
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) return;
        if (smooth) engine.scrollToElement($(element), 0, !options.immediate);
        else element.scrollIntoView({ behavior: options.immediate ? 'instant' : 'smooth', block: 'start' });
      },
      start() { engine.setDisabled(false); },
      stop() { engine.setDisabled(true); },
      resize() {
        if (smooth) engine.scroller?.update();
        engine.update();
      },
    };
    window.__gpHomeScroller = adapter;
    if (smooth) {
      // Keep the original Springs easing/input scale. Its compiled wheel-end
      // snap listener is disabled here so only the authored GP checkpoints own
      // destination selection; the same retained engine still animates travel.
      engine.setScrollSnapPoints([]);
      let stops:number[]=[], gestureStart=0, gestureTarget=0, lastInput=0;
      let timer:ReturnType<typeof setTimeout>;
      const measureStops=()=>{
        const max=Math.max(0,(nativeParent as HTMLElement).scrollHeight-innerHeight);
        const authored=engine.getSnapPoints().map((point:any)=>{
          const box=$(point.reference).pageOffset();
          return box.scrollTop-box.scrollViewportSize*point.viewport+box.height*point.element;
        });
        const invitation=root.querySelector('#gp-invitation');
        const innerEnd=invitation ? invitation.getBoundingClientRect().top+adapter.scroll+innerHeight*1.35 : 0;
        stops=orderedCheckpoints([0,...authored,innerEnd],max);
        if(process.env.NODE_ENV==='development') root.dataset.snapCheckpoints=JSON.stringify(stops);
      };
      measureStops();
      $(nativeParent).on('delta.gpHomeSnap', (event:any)=>{
        const detail=event.originalEvent?.detail; if(!detail||engine.disabled)return;
        const now=performance.now();
        if(now-lastInput>320 || Math.sign(detail.next-detail.current)!==Math.sign(gestureTarget-gestureStart)) gestureStart=detail.current;
        gestureTarget=detail.next;lastInput=now;
        clearTimeout(timer);
        timer=setTimeout(()=>{
          if(engine.disabled)return;
          measureStops();
          const target=chooseCheckpoint(gestureStart,gestureTarget,stops,innerHeight);
          if(process.env.NODE_ENV==='development') root.dataset.snapDestination=String(target);
          if(target!==null)engine.scrollTo(target);
        },250);
      });
      window.addEventListener('grandpools:seek',()=>clearTimeout(timer));
      window.addEventListener('resize',measureStops);
    }
    gsap.registerPlugin(ScrollTrigger);
    if (smooth) {
      // GP's retained Ready-to-Dive timeline measures the same virtual position.
      ScrollTrigger.scrollerProxy(window, {
        scrollTop(value?: number) { if (typeof value === 'number') engine.scrollTop(value); return engine.scrollTop(); },
        getBoundingClientRect: () => ({ top: 0, left: 0, width: innerWidth, height: innerHeight }),
        pinType: 'transform', fixedMarkers: true,
      });
    }
    let previous = -1;
    const notify = () => {
      const y = adapter.scroll;
      if (Math.abs(y - previous) < 0.05) return;
      previous = y;
      ScrollTrigger.update();
      window.dispatchEvent(new CustomEvent('grandpools:scroll', { detail: { y } }));
    };
    $(nativeParent).on('scroll.gpHomeBridge', notify);
    const tick=()=>{ notify(); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    window.addEventListener('scroll', notify, { passive: true });
    // A small captured wheel step in an internal scene must reach the runtime;
    // GP menu/modal scroll areas retain their own native wheel/touch handling.
    const refresh = () => { adapter.resize(); ScrollTrigger.refresh(); };
    const observer = new ResizeObserver(() => requestAnimationFrame(refresh));
    observer.observe(nativeParent);
    html.classList.add('gp-home-runtime-ready');
    adapter.start();
    await frame();
    refresh();
    notify();
    // Local videos only. Pause off-screen players so decoding doesn't compete
    // with the mask timelines. An unbuffered/unsupported video keeps its poster.
    const mediaObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }), { rootMargin: '50% 0px' });
    root.querySelectorAll('video').forEach(video => mediaObserver.observe(video));
    return adapter;
  })();
  return window.__gpHomeRuntimePromise;
}
