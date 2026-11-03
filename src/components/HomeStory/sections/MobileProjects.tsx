'use client';
import { useRef, useState } from 'react';
import { HOME_PROJECTS } from '../scene-data';
import RollingText from '@/src/components/RollingText';

/** Like PricingControls, one React selection changes all visible project text together. */
export default function MobileProjects() {
  const track=useRef<HTMLUListElement>(null);
  const names=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0);
  const update=(index:number)=>{
    setActive(index);
    const first=Math.min(Math.max(0,index-1),HOME_PROJECTS.length-3);
    names.current?.scrollTo({left:first*names.current.clientWidth/3,behavior:'smooth'});
  };
  const project=HOME_PROJECTS[active];
  return <section className="gp-mobile-project-slider ui-dark ui-background" aria-label="Our pool projects">
    <div className="mx-layout">
      <ul ref={track} className="gp-native-project-track" onScroll={event=>{const el=event.currentTarget;const index=Math.max(0,Math.min(HOME_PROJECTS.length-1,Math.round(el.scrollLeft/Math.max(1,el.clientWidth))));if(index!==active)update(index);}}>
        {HOME_PROJECTS.map(item=><li key={item.slug}><img src={item.image} alt={`${item.title} swimming pool by Grand Pools`} width={640} height={760} loading="lazy" decoding="async" /></li>)}
      </ul>
      <div ref={names} className="gp-project-thumbs" role="group" aria-label="Choose a project">
        {HOME_PROJECTS.map((item,index)=><button key={item.slug} type="button" className={`gp-project-thumb btn-underline${index===active?' is-active':''}`} aria-pressed={index===active} onClick={()=>track.current?.scrollTo({left:index*track.current.clientWidth,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})}>{item.title}</button>)}
      </div>
    </div>
    <div className="gp-selected-project px-layout" aria-live="polite" aria-atomic="true">
      <h2>{project.title}</h2><p className="gp-project-category">{project.category}</p>
      <p className="gp-mobile-project-description">{project.description}</p>
      <a className="btn-underline gp-original-button font-body" href={project.href}><RollingText>Explore Project</RollingText></a>
    </div>
  </section>;
}
