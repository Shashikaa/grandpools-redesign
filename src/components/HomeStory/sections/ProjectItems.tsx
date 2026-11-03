import RollingText from '@/src/components/RollingText';
import type { HomeProject } from '../scene-data';
import { motionData } from '../motion-attributes';

type Props = { project: HomeProject };
const buttonClass = 'group btn-underline font-body gp-original-button';

/** Each incoming photo gets its own authored wipe/zoom interval. */
export function ProjectSlide({ project }: Props) {
  const index = project.number - 1;
  const keyframes = {
    [`data-parallax--${(index + 2) * 100}-0`]: motionData({ 'clip-path': 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)', transform: 'scale(1.1)' }),
    [`data-parallax--${(index + 3) * 100}-0`]: motionData({ 'clip-path': 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)', transform: 'scale(1)' }),
    [`data-parallax--${(index + 1) * 100}-0`]: motionData({ 'clip-path': 'polygon(100% 0%,100% 0%,100% 100%,100% 100%)', transform: 'scale(1.2)' }),
  };
  return <div className="l-residences__slide" data-gp-project-slide={project.number} {...keyframes} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky">
    <div className="background background--cover">
      <picture className="is-invisible--js is-hidden--no-js img-cover parallax-image-move" data-plugin="appear" draggable={false}>
        <img alt={`${project.title} swimming pool by Grand Pools`} className="img-cover" decoding="async" loading="lazy" src={project.image} />
      </picture>
    </div>
  </div>;
}

export function ProjectCard({ project }: Props) {
  return <div aria-hidden={project.number !== 1} className={`ui-background ui-dark ${project.number === 1 ? '' : 'is-hidden'}`} data-content-animation-item={project.number}>
    <div className="l-residences__caption__card ui-background">
      <div className="l-residences__caption__card-content">
        <p className="l-residences__caption__type text-t1 leading-trim">{project.title}</p>
        <p className="l-residences__caption__description text-color-small text-small leading-trim">{project.category}</p>
        <div className="gp-card-progress" aria-hidden="true"><span className="js-residences-progress-line" /></div>
        <div className="l-residences__caption__item"><p className="text-small gp-project-description">{project.description}</p></div>
      </div>
      <div className="l-residences__caption__button group group--button group--nowrap group--middle ui-background">
        <a className={buttonClass} data-ajax-page-ignore="true" data-barba-prevent="all" href={project.href}><RollingText label="Explore Project">EXPLORE PROJECT</RollingText></a>
      </div>
    </div>
  </div>;
}

export function ProjectMobileImage({ project }: Props) {
  return <li className="mobile-scrollable__item">
    <picture className="is-invisible--js is-hidden--no-js img-cover" data-plugin="appear" draggable={false}>
      <img alt={`${project.title} swimming pool by Grand Pools`} className="img-cover" decoding="async" loading="lazy" src={project.image} />
    </picture>
  </li>;
}

export function ProjectMobileCard({ project }: Props) {
  return <div aria-hidden={project.number !== 1} className={`l-residences__caption__item px-layout pt-layout pb-2 ui-background ui-dark ${project.number === 1 ? '' : 'is-hidden'}`} data-content-animation-item={project.number}>
    <div className="l-residences__caption__top">
      <p className="l-residences__caption__type h2 leading-trim">{project.title}</p>
      <p className="l-residences__caption__description text-color-small text-small leading-trim">{project.category}</p>
      <p className="text-small gp-mobile-project-description">{project.description}</p>
      <a className={buttonClass} href={project.href}><RollingText label="Explore Project">EXPLORE PROJECT</RollingText></a>
    </div>
    <div className="row row--nowrap mt-3" />
  </div>;
}

export function ProjectThumbnail({ project }: Props) {
  return <a className={`gp-project-thumb js-mobile-scrollable-thumbnail${project.number === 1 ? ' is-active' : ''}`} role="button" tabIndex={0} aria-label={`View ${project.title}`}>{project.title}</a>;
}
