const clamp=(value:number)=>Math.max(0,Math.min(1,value));
/** Photo masks and captions share the same measured viewport beats in both directions. */
export function installDesktopProjects(root:HTMLElement) {
  const section=root.querySelector<HTMLElement>('#l-residences-sticky-1');
  const slides=[...root.querySelectorAll<HTMLElement>('[data-gp-project-slide]')];
  const caption=section?.querySelector<HTMLElement>('.l-residences__caption');
  const controller=section?.querySelector<HTMLElement>('.js-residences-content');
  if(!section||!caption||!controller)return()=>{};
  let selected=-1;
  const update=()=>{
    if(innerWidth<=1024)return;
    const y=window.__gpHomeScroller?.scroll??scrollY;
    const start=section.getBoundingClientRect().top+y;
    const beat=(y-start)/innerHeight;
    slides.forEach((slide,index)=>{
      const progress=clamp(beat-(index+1));
      slide.style.clipPath=`inset(0 0 0 ${(1-progress)*100}%)`;
      slide.style.transform=`scale(${1.12-progress*.12})`;
    });
    caption.style.transform=`translateX(${(1-clamp(beat-1))*60}vw)`;
    const index=Math.max(0,Math.min(slides.length-1,Math.floor(beat-1.5)));
    if(selected!==index){selected=index;window.jQuery?.(controller).contentAnimation('open',index+1);}
    const progress=clamp((beat-2)/Math.max(1,slides.length-1));
    section.querySelectorAll<HTMLElement>('.js-residences-progress-line').forEach(line=>line.style.width=`${progress*100}%`);
    section.dataset.activeProject=String(index+1);
  };
  update();window.addEventListener('grandpools:scroll',update);window.addEventListener('resize',update);
  return()=>{window.removeEventListener('grandpools:scroll',update);window.removeEventListener('resize',update);slides.forEach(slide=>{slide.style.removeProperty('clip-path');slide.style.removeProperty('transform')});caption.style.removeProperty('transform');};
}
