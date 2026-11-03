import gsap from 'gsap';
import {SplitText} from 'gsap/SplitText';
gsap.registerPlugin(SplitText);
/** Start each reveal when its own reading phase is in view. */
export function installHomeEntrances(root:HTMLElement) {
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return()=>{};
  const selector='[data-gp-entrance],.gp-process-opening h2,.gp-process-opening .gp-eyebrow,.gp-harmony-copy h2,.gp-harmony-copy p,.gp-quality-prose p,.gp-projects-intro-copy h2,.gp-projects-intro-copy p,.gp-closing-panel h2,.gp-closing-panel p';
  const elements=[...root.querySelectorAll<HTMLElement>(selector)].filter(el=>el.offsetWidth>0&&!el.closest('#l-gallery-sticky,.l-residences__caption,.gp-invitation-underlay,.gp-process-workspace')&&!el.querySelector('h1,h2,h3,p'));
  const records=elements.map(el=>{
    const title=el.matches('h1,h2,h3,.h1,.h2,.g1');
    const split=SplitText.create(el,{type:title?'lines,words,chars':'lines',mask:'lines',aria:'auto'});
    const targets=title?split.chars:split.lines;
    gsap.set(targets,{yPercent:105,opacity:0});
    return {el,split,targets,title,shown:false,tween:null as gsap.core.Tween|null};
  });
  const at=(el:HTMLElement)=>{
    const scene=el.closest<HTMLElement>('#about,#wellness,#nature,#l-residences-sticky-1,#interiors');
    if(!scene)return -Infinity;
    const start=scene.getBoundingClientRect().top+(window.__gpHomeScroller?.scroll??window.scrollY);
    let beat=0;
    if(scene.id==='about')beat=.8;
    if(scene.id==='wellness')beat=.75;
    if(scene.id==='nature')beat=el.closest('.l-nature__caption')?2.05:el.closest('.l-nature__slider')?3.75:.75;
    if(scene.id==='interiors')beat=.6;
    if(scene.id==='l-residences-sticky-1')beat=-.8;
    return start+innerHeight*beat;
  };
  const update=()=>{
    const y=window.__gpHomeScroller?.scroll??window.scrollY;
    records.forEach(r=>{
      if(r.shown||y<at(r.el))return;
      const box=r.el.getBoundingClientRect();
      if(box.top>innerHeight*.98||box.bottom<80)return;
      r.shown=true;
      const projectIntro=!!r.el.closest('.gp-projects-intro-copy');
      r.tween=gsap.to(r.targets,{yPercent:0,opacity:1,duration:projectIntro ? 0.8 : r.title ? 1.15 : 1.05,stagger:r.title?{amount:projectIntro ? 0.18 : 0.30}:.07,ease:'power3.out',overwrite:'auto'});
    });
  };
  update();window.addEventListener('grandpools:scroll',update);
  return()=>{window.removeEventListener('grandpools:scroll',update);records.forEach(r=>{r.tween?.kill();r.split.revert()})};
}
