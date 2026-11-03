'use client';
import { useEffect, useRef } from 'react';
import InvitationSection from './sections/InvitationSection';
import PricingControls from './PricingControls';

const clamp = (n:number) => Math.max(0, Math.min(1,n));
/** Drive the original GP panels from the same virtual scroll as the Springs masks. */
export default function InvitationScene({ready,costBand}:{ready:boolean;costBand:number}) {
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{
    if(!ready || !root.current) return;
    const section=root.current;
    const select=(s:string)=>Array.from(section.querySelectorAll<HTMLElement>(s));
    const update=()=>{
      if(innerWidth<=1024 || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
      const vh=innerHeight, y=window.__gpHomeScroller?.scroll ?? window.scrollY;
      const start=section.getBoundingClientRect().top+y;
      const entry=clamp((y-start+vh)/vh), story=clamp((y-start)/(vh*1.35));
      // Hold the transparent viewport still while the two panels approach from
      // opposite edges. The retained scroller takes over at the sticky start.
      const view=section.querySelector<HTMLElement>('.gp-invitation-view')!;
      const underlay=section.querySelector<HTMLElement>('.gp-invitation-underlay')!;
      underlay.style.visibility=entry>0?'visible':'hidden';
      view.style.translate=`0px ${-Math.max(0,Math.min(vh,start-y))}px`;
      select('.s9-left-side').forEach(e=>e.style.transform=`translateY(${(1-entry)*100}%)`);
      select('.s9-right-side').forEach(e=>e.style.transform=`translateY(${-(1-entry)*100}%)`);
      select('.s9-bg-img-left,.s9-bg-img-right').forEach(e=>e.style.scale=String(1+story*.12));
      select('.s9-native-title-wrapper-1,.s9-native-title-wrapper-2').forEach(e=>e.style.opacity=story>0?'0':'1');
      select('.s9-global-flight-container').forEach(e=>{e.style.opacity=story>0?'1':'0';e.style.visibility=story>0?'visible':'hidden'});
      const surface=section.querySelector('.gp-invitation-view')!.getBoundingClientRect();
      const destinations=select('.s9-target-wrapper .h2 > span');
      select('.s9-flight-part1,.s9-flight-part2').forEach((e,i)=>{
        const target=destinations[i]?.getBoundingClientRect(); if(!target) return;
        const sx=surface.width/2-(i===0?e.offsetWidth:0),sy=vh/2-e.offsetHeight/2;
        const dx=i===0?target.right+12-e.offsetWidth-surface.left:target.left-surface.left;
        e.style.transform=`translate(${sx+(dx-sx)*story}px,${sy+(target.top-surface.top-sy)*story}px)`;
      });
      select('.s9-para-desktop').forEach(e=>{e.style.opacity=String(clamp((story-.3)/.6));e.style.transform=`translateY(${30*(1-story)}px)`});
    };
    update();window.addEventListener('grandpools:scroll',update);window.addEventListener('resize',update);
    return()=>{window.removeEventListener('grandpools:scroll',update);window.removeEventListener('resize',update)};
  },[ready]);
  return <section ref={root} className="gp-invitation" id="gp-invitation"><div className="gp-invitation-view" data-scroll="" data-scroll-sticky="" data-scroll-target="#gp-invitation"><div className="gp-invitation-underlay gp-story js-scroll-parent-ignore" aria-hidden="true" inert><PricingControls active={costBand}/></div><InvitationSection/></div></section>;
}
