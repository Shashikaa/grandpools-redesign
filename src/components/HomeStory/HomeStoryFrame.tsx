'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useSite } from '@/src/app/context/SiteContext';
import Founder from '@/src/components/Home/Sectionseven';
import AppSection from '@/src/components/Appsection';
import InvitationScene from './InvitationScene';
import LazyWaveCanvas from '@/src/components/LazyWaveCanvas';
import CTA from '@/src/components/SectionCTA';
import Footer from '@/src/components/Footer';
import Stage from '@/src/components/motion/LuxuryStage';
import PricingControls from './PricingControls';
import PageProgress from './PageProgress';
import MobileHome from './MobileHome';
import {installHomeEntrances} from './entrances';
import './mobile-home.css';
import { startHomeMotion } from './runtime';

const mobileQuery='(max-width:1024px)';
const subscribeMobile=(callback:()=>void)=>{const m=matchMedia(mobileQuery);m.addEventListener('change',callback);return()=>m.removeEventListener('change',callback)};
const mobileSnapshot=()=>matchMedia(mobileQuery).matches;
const serverMobile=()=>false;

export default function HomeStoryFrame({ opening, collection }: { opening: ReactNode; collection: ReactNode }) {
  const mobile=useSyncExternalStore(subscribeMobile,mobileSnapshot,serverMobile);
  const previousMode=useRef<boolean|null>(null);
  const root = useRef<HTMLDivElement>(null);
  const { preloaderDone, menuOpen, smootherRef } = useSite();
  const [costBand,setCostBand] = useState(0);
  const [ready, setReady] = useState(false);
  const [pricingSlots, setPricingSlots] = useState<HTMLElement[]>([]);
  const [waveSlots, setWaveSlots] = useState<HTMLElement[]>([]);
  const [error, setError] = useState(false);
  const current = useRef({ preloaderDone, menuOpen });
  current.current = { preloaderDone, menuOpen };

  useEffect(() => {
    if(!preloaderDone || mobile!==matchMedia(mobileQuery).matches)return;
    if(mobile){
      document.documentElement.classList.add('gp-home-mobile');
      const adapter={get scroll(){return window.scrollY},scrollTo(target:number|string|Element,options:{immediate?:boolean}={}){
        if(typeof target==='number')window.scrollTo({top:target,behavior:options.immediate?'instant':'smooth'});
        else (typeof target==='string'?document.querySelector(target):target)?.scrollIntoView({behavior:'smooth'});
      },start(){},stop(){},resize(){}};
      window.__gpHomeScroller=adapter;
      if(smootherRef)smootherRef.current=adapter;
      setReady(true);return;
    }
    if(!root.current)return;
    let cancelled = false;
    startHomeMotion(root.current).then(adapter => {
      if (cancelled) return;
      if (smootherRef) smootherRef.current = adapter;
      setWaveSlots(Array.from(root.current!.querySelectorAll<HTMLElement>('[data-gp-wave-slot]')));
      setPricingSlots(Array.from(root.current!.querySelectorAll<HTMLElement>('[data-gp-pricing-slot]')));
      setReady(true);
    }).catch(reason => {
      console.error('Grand Pools homepage motion:', reason);
      document.documentElement.classList.add('gp-home-motion-failed');
      setError(true);
    });
    return () => { cancelled = true; };
  }, [preloaderDone, smootherRef,mobile]);

  useEffect(()=>{
    if(previousMode.current!==null&&previousMode.current!==mobile&&(ready||Boolean(window.__gpHomeRuntimePromise)))location.reload();
    previousMode.current=mobile;
  },[mobile,ready]);
  useEffect(()=>{
    if(!ready||mobile||!root.current)return;
    return installHomeEntrances(root.current);
  },[ready,mobile]);

  useEffect(() => {
    if (!ready || process.env.NODE_ENV !== 'development' || !root.current) return;
    // Fast Refresh can replace opaque server markup underneath the imperative
    // plugins. A document reload is the same lifecycle used for route changes.
    const first = root.current.querySelector<HTMLElement>('.gp-opening-story > :first-child');
    if (!first) return;
    first.dataset.gpMotionBound = 'true';
    const observer = new MutationObserver(() => {
      if (!root.current?.querySelector('.gp-opening-story > [data-gp-motion-bound]')) location.reload();
    });
    observer.observe(root.current, { childList:true, subtree:true });
    return () => observer.disconnect();
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const updateLock = () => {
      const state = current.current;
      const modalLock = document.body.style.overflow === 'hidden' || document.documentElement.style.overflow === 'hidden';
      if (!state.preloaderDone || state.menuOpen || modalLock) window.__gpHomeScroller?.stop();
      else window.__gpHomeScroller?.start();
    };
    updateLock();
    const observer = new MutationObserver(updateLock);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, [ready, preloaderDone, menuOpen]);

  useEffect(() => {
    // The retained imperative runtime belongs to this document. Departing the
    // homepage uses a full navigation so it cannot leak input handlers or a
    // transformed scroll root into an unchanged route.
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin) return;
      if (anchor.id === 'header-logo-inner' && anchor.closest('#site-header') && url.pathname === '/') {
        event.preventDefault(); event.stopImmediatePropagation();
        window.__gpHomeScroller?.scrollTo(0); return;
      }
      if (url.pathname !== location.pathname || url.search !== location.search) {
        event.preventDefault(); event.stopImmediatePropagation();
        location.assign(url.href);
      } else if (url.hash && document.querySelector(url.hash)) {
        event.preventDefault(); event.stopImmediatePropagation();
        window.__gpHomeScroller?.scrollTo(url.hash);
      }
    };
    document.addEventListener('click', navigate, true);
    return () => document.removeEventListener('click', navigate, true);
  }, []);

  if(mobile)return <MobileHome ready={ready}/>;

  return <div ref={root} className="gp-springs" data-home-story="grand-pools">
    <div className="page-content-wrapper">
      <div className="page-content-wrapper__inner js-page-content-wrapper">
        <div className="page-content js-page-content">
          {opening}
          <div className="luxury-page gp-native-expert-app" id="meet-the-expert">
            <Stage enabled={ready} flow transition="flow" className="gp-expert-panel"><Founder /></Stage>
            <Stage enabled={ready} flow transition="flow" className="gp-app-panel"><AppSection /></Stage>
          </div>
          {collection}
          <div className="luxury-page gp-native-ending">
            <InvitationScene ready={ready} costBand={costBand} />
            <section className="gp-closing-panel" id="gp-closing-panel"><div id="contact-form"><CTA /></div><Footer /></section>
          </div>
        </div>
      </div>
    </div>
    {waveSlots.map((slot,index)=>createPortal(<LazyWaveCanvas imageSrc="/Forest.webp" preloaderDone={preloaderDone}/>, slot, `gp-wave-${index}`))}
    {pricingSlots.map((slot, index) => createPortal(<PricingControls active={costBand} onChange={setCostBand} />, slot, `gp-cost-${index}`))}
    <PageProgress ready={ready}/>
    {error && <p className="gp-motion-error" role="status">The animation files could not load. Refresh to retry.</p>}
  </div>;
}
