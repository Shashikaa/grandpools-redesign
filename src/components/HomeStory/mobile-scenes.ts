import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Native touch scrolling drives these local timelines. There is no wheel hijack or pin spacer. */
export function installMobileScenes(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add('(max-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    const context = gsap.context(() => {
      // Measure CSS's stable small viewport, rather than the changing browser toolbar.
      const viewport = root.querySelector<HTMLElement>('#wellness-mobile')?.offsetHeight || innerHeight;
      const q = (selector: string) => root.querySelectorAll<HTMLElement>(selector);
      root.dataset.mobileMotion = 'ready';
      q('.gp-mobile-rise').forEach(panel => {
        const trigger = { trigger: panel, start: 'top bottom', end: 'top 15%', scrub: true, invalidateOnRefresh: true };
        // The panel moves upward naturally; an opening crop reveals its image from below.
        gsap.fromTo(panel, { clipPath: 'inset(9% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: trigger });
        const background = panel.querySelector<HTMLElement>('[data-mobile-background]');
        if (background) gsap.fromTo(background, { y: -viewport * .45, scale: 1.12 }, { y: 0, scale: 1, ease: 'none', scrollTrigger: { ...trigger, end: 'top top' } });
      });
      q('.gp-process-founder,.gp-process-engineering,.gp-process-mobile-content .l-intro__content-image').forEach(part => {
        gsap.fromTo(part, { y: 65, opacity: .3 }, { y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: part, start: 'top 95%', end: 'top 60%', scrub: true } });
      });
      q('#wellness-mobile .l-wellness__webgl-caption,.gp-expert-panel h2,.gp-app-panel .appsec-phone-wrapper,.gp-app-panel .appsec-content > div:last-child').forEach(part => {
        gsap.fromTo(part, { y: 55, opacity: .2 }, { y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: part, start: 'top bottom', end: 'top 55%', scrub: true } });
      });
      // GP panels receive the same stationary-photo / rising-window entrance.
      q('.gp-expert-panel,.gp-app-panel').forEach(panel => {
        const surface = panel.querySelector('.luxury-stage-surface');
        const background = panel.querySelector('.s7-mob-bg,.appsec-bg');
        if (surface) gsap.fromTo(surface, { clipPath: 'inset(14% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'top top', scrub: true } });
        if (background) gsap.fromTo(background, { scale: 1.12, y: -viewport * .22 }, { scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'top top', scrub: true } });
      });
      const quality = root.querySelector<HTMLElement>('#nature-mobile');
      if (quality) {
        const main = quality.querySelector('.gp-mobile-quality-main');
        const heading = quality.querySelector('.gp-quality-mobile-heading');
        const video = quality.querySelector('.gp-mobile-quality-video');
        const prose = quality.querySelector<HTMLElement>('.gp-mobile-quality-prose');
        const timeline = gsap.timeline({ scrollTrigger: {
          trigger: quality, start: 'top top', end: () => `+=${quality.offsetHeight - viewport}`,
          scrub: true, invalidateOnRefresh: true,
          onUpdate: self => { quality.dataset.progress = self.progress.toFixed(3); },
        }});
        timeline.to(heading, { y: -70, opacity: 0, duration: .45, ease: 'none' }, 0)
          .fromTo(video, { y: viewport * .95, clipPath: 'inset(100% 0 0 0)' }, { y: 0, clipPath: 'inset(0% 0 0 0)', duration: .6, ease: 'none' }, .18)
          .fromTo(prose, { y: viewport, clipPath: 'inset(100% 0 0 0)' }, { y: 0, clipPath: 'inset(0% 0 0 0)', duration: .7, ease: 'none' }, .3)
          .to(main, { clipPath: 'inset(0 0 100% 0)', duration: .65, ease: 'none' }, .72)
          .to(video, { y: -viewport * .45, clipPath: 'inset(0 0 100% 0)', duration: .7, ease: 'none' }, 1)
          .to(prose, { y: () => -Math.max(100, (prose?.offsetHeight || 0) - viewport * .2), duration: .7, ease: 'none' }, 1.3);
        gsap.fromTo(quality.querySelector('[data-mobile-quality-image]'), { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: quality, start: 'top bottom', end: 'top top', scrub: true } });
      }
      const gallery = root.querySelector('.gp-mobile-project-slider');
      const introCopy = root.querySelector('#l-residences-sticky-2 .l-residences__webgl-caption');
      if (gallery && introCopy) gsap.to(introCopy, { y: -55, opacity: 0, ease: 'none', scrollTrigger: { trigger: gallery, start: 'top 90%', end: 'top 25%', scrub: true } });
    }, root);
    return () => { context.revert(); delete root.dataset.mobileMotion; };
  });
  return () => media.revert();
}
