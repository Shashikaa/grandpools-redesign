'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
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
import {installHomeEntrances} from './entrances';
import { startHomeMotion } from './runtime';

export default function HomeStoryFrame({ opening, collection }: { opening: ReactNode; collection: ReactNode }) {
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
    if(!preloaderDone || !root.current)return;
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
  }, [preloaderDone, smootherRef]);

  useEffect(()=>{
    if(!ready||!root.current||matchMedia("(max-width:1024px)").matches)return;
    return installHomeEntrances(root.current);
  },[ready]);

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
