import { GRAND_POOLS_DATA } from '@/src/app/projects/[slug]/data';

/** The same real project records used by /projects/[slug], in their existing order. */
export const HOME_PROJECTS = Object.entries(GRAND_POOLS_DATA).map(([slug, project], index) => ({
  slug,
  title: project.title,
  category: project.category,
  description: project.description,
  image: project.images[0].startsWith('/') ? project.images[0] : `/${project.images[0]}`,
  href: `/projects/${slug}`,
  number: index + 1,
}));
export type HomeProject = (typeof HOME_PROJECTS)[number];

/** Preserve the collage's image order, including intentional repeats. */
export const HERO_COLLAGE_IMAGES = [
  '/hero-home.webp', '/pool-courtyard-bg.webp', '/camberwell3.webp',
  '/sliderimage1.webp', '/sliderimage1.webp', '/secninebg.webp',
  '/camberwell5.webp', '/pool.webp', '/murray-st-prahran.webp',
  '/reayhero.webp', '/camberwell.webp', '/pool-courtyard-bg.webp',
  '/kooyong-rd-toorak.webp', '/hero-murray.webp', '/camberwell3.webp',
  '/camberwell.webp', '/secninebg.webp', '/camberwell5.webp', '/hero-murray.webp',
] as const;
