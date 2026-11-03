/** The reference controller still owns image/caption selection. Keep a window
 * of three project names visible as its active thumbnail changes. */
export function installProjectNavigation(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('.gp-project-thumbs');
  if (!track) return () => {};
  const thumbs = [...track.querySelectorAll<HTMLElement>('.gp-project-thumb')];
  const update = () => {
    const active = Math.max(0, thumbs.findIndex(thumb => thumb.classList.contains('is-active')));
    thumbs.forEach((thumb, index) => thumb.setAttribute('aria-pressed', String(index === active)));
    const first = Math.min(Math.max(0, active - 1), Math.max(0, thumbs.length - 3));
    track.scrollTo({ left: first * track.clientWidth / 3, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth' });
  };
  const keyboard = (event: KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target instanceof HTMLElement && event.target.matches('.gp-project-thumb')) {
      event.preventDefault(); event.target.click();
    }
  };
  const observer = new MutationObserver(update);
  thumbs.forEach(thumb => observer.observe(thumb, { attributes: true, attributeFilter: ['class'] }));
  track.addEventListener('keydown', keyboard);
  window.addEventListener('resize', update);
  update();
  return () => { observer.disconnect(); track.removeEventListener('keydown', keyboard); window.removeEventListener('resize', update); };
}
