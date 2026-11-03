'use client';
import {useEffect,useState} from 'react';
export default function PageProgress({ready}:{ready:boolean}) {
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    if(!ready)return;
    const update=()=>{
      const native=document.documentElement.classList.contains('gp-home-mobile');
      const height=native?document.documentElement.scrollHeight:(document.querySelector<HTMLElement>('.js-page-content-wrapper')?.scrollHeight??document.documentElement.scrollHeight);
      const limit=Math.max(1,height-innerHeight);
      setProgress(Math.max(0,Math.min(1,(window.__gpHomeScroller?.scroll??window.scrollY)/limit)));
    };
    update();window.addEventListener('grandpools:scroll',update);window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
    return()=>{window.removeEventListener('grandpools:scroll',update);window.removeEventListener('scroll',update);window.removeEventListener('resize',update)};
  },[ready]);
  if(!ready)return null;
  return <div className="gp-page-progress" role="progressbar" aria-label="Page scroll progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress*100)}><span style={{transform:`scaleX(${progress})`}}/></div>;
}
