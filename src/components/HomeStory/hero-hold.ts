/** Hold the desktop hero stationary; the incoming Process mask owns its reveal. */
export function installHeroHold(root:HTMLElement) {
  const hero=root.querySelector<HTMLElement>('#l-gallery-sticky');
  const layer=hero?.querySelector<HTMLElement>('[data-gp-hero-hold]');
  if(!hero||!layer)return()=>{};
  const update=()=>{
    if(innerWidth<=1024)return;
    const y=window.__gpHomeScroller?.scroll??scrollY;
    const top=hero.getBoundingClientRect().top+y;
    layer.style.transform=document.documentElement.classList.contains('gp-home-smooth')?`translateY(${Math.max(0,Math.min(hero.offsetHeight-innerHeight,y-top))}px)`:'none';
  };
  update();window.addEventListener('grandpools:scroll',update);window.addEventListener('resize',update);
  return()=>{window.removeEventListener('grandpools:scroll',update);window.removeEventListener('resize',update);layer.style.removeProperty('transform');};
}
