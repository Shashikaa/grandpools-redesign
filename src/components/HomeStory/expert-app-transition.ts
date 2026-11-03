const clamp=(value:number,max:number)=>Math.max(0,Math.min(max,value));
/** Bounded native/virtual handoff: Expert lifts to uncover App; Projects then covers App. */
export function installExpertAppTransition(root: HTMLElement) {
  const group=root.querySelector<HTMLElement>('.gp-native-expert-app');
  const view=group?.querySelector<HTMLElement>('.gp-expert-app-view');
  const expert=group?.querySelector<HTMLElement>('.gp-expert-panel');
  const app=group?.querySelector<HTMLElement>('.gp-app-panel');
  if(!group||!view||!expert||!app)return()=>{};
  let expertOverflow=0,appOverflow=0;
  const measure=()=>{
    if(innerWidth>1024){group.style.removeProperty('height');expertOverflow=0;appOverflow=0;return;}
    const vh=view.offsetHeight||innerHeight;
    expertOverflow=Math.max(0,(expert.querySelector<HTMLElement>('.luxury-stage-surface')?.scrollHeight||vh)-vh);
    appOverflow=Math.max(0,(app.querySelector<HTMLElement>('.luxury-stage-surface')?.scrollHeight||vh)-vh);
    const height=3*vh+expertOverflow+appOverflow;
    if(group.style.height!==`${height}px`)group.style.height=`${height}px`;
  };
  const update=()=>{
    if(matchMedia('(prefers-reduced-motion:reduce)').matches){view.style.removeProperty('transform');expert.style.removeProperty('transform');app.style.removeProperty('transform');group.style.removeProperty('height');return;}
    const vh=view.offsetHeight||innerHeight;
    const y=window.__gpHomeScroller?.scroll??scrollY;
    const start=group.getBoundingClientRect().top+y;
    const delta=y-start;
    view.style.transform=document.documentElement.classList.contains('gp-home-smooth')?`translateY(${clamp(delta,vh*2)}px)`:'none';
    expert.style.transform=`translateY(${-clamp(delta,expertOverflow+vh)}px)`;
    app.style.transform=innerWidth<=1024?`translateY(${-clamp(delta-expertOverflow-vh,appOverflow)}px)`:'none';
    group.dataset.handoff=delta<expertOverflow+vh?'expert':'app';
  };
  const resize=()=>{measure();update();};
  const observer=new ResizeObserver(resize);
  [expert,app].forEach(panel=>{const surface=panel.querySelector('.luxury-stage-surface');if(surface)observer.observe(surface);});
  resize();window.addEventListener('grandpools:scroll',update);window.addEventListener('resize',resize);
  return()=>{observer.disconnect();window.removeEventListener('grandpools:scroll',update);window.removeEventListener('resize',resize);group.style.removeProperty('height');view.style.removeProperty('transform');expert.style.removeProperty('transform');app.style.removeProperty('transform');};
}
