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
      root.dataset.mobileMotion = 'ready';
      const process = root.querySelector<HTMLElement>('.gp-mobile-process-story');
      if (process) {
        const view = process.querySelector<HTMLElement>('.gp-process-mobile-view')!;
        const first = process.querySelector<HTMLElement>('#about-mobile')!;
        const second = process.querySelector<HTMLElement>('.gp-process-mobile-content')!;
        const third = process.querySelector<HTMLElement>('.gp-process-services')!;
        const vh = view.offsetHeight || viewport;
        const secondOverflow = Math.max(0, second.offsetHeight - vh);
        const thirdOverflow = Math.max(0, third.offsetHeight - vh);
        const travel = 2 * vh + secondOverflow + thirdOverflow;
        process.style.height = `${4 * vh + secondOverflow + thirdOverflow}px`;
        gsap.set(third, { autoAlpha: 0, y: 0 });
        const sequence = gsap.timeline({ scrollTrigger: {
          trigger: process, start: 'top top', end: () => `+=${travel}`,
          scrub: true, invalidateOnRefresh: true,
          onUpdate: self => { process.dataset.progress = self.progress.toFixed(3); },
        }});
        sequence.fromTo(second, { y: vh }, { y: 0, duration: 1, ease: 'none' }, 0)
          .set(first, { autoAlpha: 0 }, 1)
          .set(third, { autoAlpha: 1 }, 1);
        let beat = 1;
        if (secondOverflow > 0) {
          sequence.to(second, { y: -secondOverflow, duration: secondOverflow / vh, ease: 'none' }, beat);
          beat += secondOverflow / vh;
        }
        sequence.to(second, { y: -second.offsetHeight, duration: 1, ease: 'none' }, beat);
        beat += 1;
        if (thirdOverflow > 0) sequence.to(third, { y: -thirdOverflow, duration: thirdOverflow / vh, ease: 'none' }, beat);
      }
      const quality = root.querySelector<HTMLElement>('#nature-mobile');
      if (quality) {
        const details = quality.querySelector('.gp-mobile-quality-details');
        const main = quality.querySelector('.gp-mobile-quality-main');
        gsap.timeline({ scrollTrigger: {
          trigger: quality, start: 'top top', end: () => `+=${quality.offsetHeight - viewport}`,
          scrub: true, invalidateOnRefresh: true,
          onUpdate: self => { quality.dataset.progress = self.progress.toFixed(3); },
        }})
          .fromTo(details, { y: viewport }, { y: 0, duration: 1, ease: 'none' }, 0)
          .fromTo(main, { y: 0 }, { y: -viewport, duration: 1, ease: 'none' }, 0)
          .to({}, { duration: .3 })
          .to(details, { y: -viewport, duration: .7, ease: 'none' });
      }
    }, root);
    return () => { context.revert(); delete root.dataset.mobileMotion; };
  });
  return () => media.revert();
}
