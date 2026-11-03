import { GRAND_POOLS_DATA } from '@/src/app/projects/[slug]/data';
import { PROJECTS_INTRO_CONTENT } from '../home-content';
import { MQ_XL, MQ_LG, StoryRollingLink } from './StoryPrimitives';

export function ProjectsScene() {
  const { eyebrow, title, description, introImage, cardCtaLabel, mobileThumbsAriaLabel } =
    PROJECTS_INTRO_CONTENT;

  const projects = Object.entries(GRAND_POOLS_DATA).map(([slug, project], index) => {
    const firstImage = project.images[0].startsWith('/')
      ? project.images[0]
      : `/${project.images[0]}`;
    return {
      slug,
      title: project.title,
      category: project.category,
      description: project.description,
      image: firstImage,
      href: `/projects/${slug}`,
      number: index + 1,
      hidden: index > 0,
      slideStart: (index + 1) * 100,
      slideOpen: (index + 2) * 100,
      slideSettle: (index + 3) * 100,
    };
  });

  const projectsHeight = (projects.length + 3) * 100;

  return (
    <>
      <div
        className="l-residences sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--md-down"
        data-plugin="reveal"
        data-project-count={String(projects.length)}
        id="l-residences-sticky-1"
        style={{ height: `${projectsHeight}vh` }}
      >
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-snap-point='[{"viewport":0,"element":0},{"viewport":0,"element":200},{"viewport":0,"element":300},{"viewport":0,"element":400},{"viewport":0,"element":500},{"viewport":0,"element":600}]'
          data-scroll-sticky=""
          data-scroll-target="#l-residences-sticky-1"
        >
          <div className="l-residences__slide l-residences__webgl">
            <div className="background background--cover background--bottom">
              <picture
                className="is-invisible--js is-hidden--no-js img-cover parallax-image-move"
                data-plugin="appear"
                draggable={false}
              >
                <source
                  data-srcset={introImage}
                  height={451}
                  media={MQ_XL}
                  srcSet={introImage}
                  width={720}
                />
                <source
                  data-srcset={introImage}
                  height={451}
                  media={MQ_LG}
                  srcSet={introImage}
                  width={720}
                />
                <img
                  alt=""
                  data-parallax--200-0='{"transform": "scale(1.0)"}'
                  data-parallax-0-0='{"transform": "scale(1.2)"}'
                  data-parallax-clamp="true"
                  data-plugin="parallax"
                  data-src={introImage}
                  draggable={false}
                  height={451}
                  src={introImage}
                  width={720}
                />
              </picture>
            </div>
            <div className="l-residences__webgl-caption gp-projects-intro-copy">
              <div>
                <p className="gp-eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
                <p className="gp-projects-intro-description">{description}</p>
              </div>
            </div>
          </div>

          {projects.map((project) => {
            const dynamicParallaxProps: Record<string, string> = {
              [`data-parallax--${project.slideOpen}-0`]:
                '{"clip-path":"polygon(0% 0%,100% 0%,100% 100%,0% 100%)","transform":"scale(1.1)"}',
              [`data-parallax--${project.slideSettle}-0`]:
                '{"clip-path":"polygon(0% 0%,100% 0%,100% 100%,0% 100%)","transform":"scale(1)"}',
              [`data-parallax--${project.slideStart}-0`]:
                '{"clip-path":"polygon(100% 0%,100% 0%,100% 100%,100% 100%)","transform":"scale(1.2)"}',
            };
            return (
              <div
                key={project.slug}
                className="l-residences__slide"
                {...dynamicParallaxProps}
                data-parallax-clamp="true"
                data-parallax-enable-mq="md-up"
                data-parallax-measure-selector=".sticky"
                data-plugin="parallax"
              >
                <div className="background background--cover">
                  <picture
                    className="is-invisible--js is-hidden--no-js img-cover parallax-image-move"
                    data-plugin="appear"
                    draggable={false}
                  >
                    <img
                      alt={`${project.title} swimming pool by Grand Pools`}
                      className="img-cover"
                      decoding="async"
                      loading="lazy"
                      src={project.image}
                    />
                  </picture>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="sticky__layer sticky__layer--sticky"
          data-parallax-pattern="residencesSlide"
          data-plugin="parallax"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#l-residences-sticky-1"
        >
          <div
            className="l-residences__caption col col--md-3 offset--md-9"
            data-parallax--100-0='{"transform": "translateX(60vw)"}'
            data-parallax--200-0='{"transform": "translateX(0vw)"}'
            data-parallax-clamp="true"
            data-parallax-enable-mq="md-up"
            data-parallax-measure-selector=".sticky"
            data-plugin="parallax"
          >
            <div className="l-residences__caption__line">
              <div className="l-residences__caption__line-progress js-residences-progress-line" />
            </div>
            <div
              className="l-residences__caption__content-animation js-residences-content"
              data-content-animation-animations='{
        "changeShow": {"name": "fadeIn"},
        "changeHide": {"name": "fadeOut"}
      }'
              data-content-animation-plugins="controller events"
              data-content-aninmation-fixed-height="true"
              data-plugin="contentAnimation"
            >
              <div className="content-animation">
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    aria-hidden={project.hidden ? 'true' : 'false'}
                    className={`ui-background ui-dark${project.hidden ? ' is-hidden' : ''}`}
                    data-content-animation-item={project.number}
                  >
                    <div className="l-residences__caption__card ui-background">
                      <div className="l-residences__caption__card-content">
                        <p className="l-residences__caption__type text-t1 leading-trim">
                          {project.title}
                        </p>
                        <p className="l-residences__caption__description text-color-small text-small leading-trim">
                          {project.category}
                        </p>
                        <div className="gp-card-progress" aria-hidden="true">
                          <span className="js-residences-progress-line" />
                        </div>
                        <div className="l-residences__caption__item">
                          <p className="text-small gp-project-description">{project.description}</p>
                        </div>
                      </div>
                      <div className="l-residences__caption__button group group--button group--nowrap group--middle ui-background">
                        <StoryRollingLink
                          href={project.href}
                          label={cardCtaLabel}
                          preventAjax
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div data-themed-class="ui-dark" id="residences" />
      </div>

      <div
        className="l-residences__webgl-container sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--lg-up ui-dark ui-background"
        id="l-residences-sticky-2"
      >
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#l-residences-sticky-2"
        >
          <div className="l-residences__webgl pt-3">
            <div
              className="background background--cover"
              data-parallax--200-0='{"transform": "scale(1.0)"}'
              data-parallax-0-0='{"transform": "scale(1.2)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-down"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <picture
                className="is-invisible--js is-hidden--no-js img-cover"
                data-plugin="appear"
                draggable={false}
              >
                <img
                  alt=""
                  data-src={introImage}
                  draggable={false}
                  height={1280}
                  src={introImage}
                  width={720}
                />
              </picture>
            </div>
            <div className="l-residences__webgl-caption px-layout">
              <div className="col">
                <p className="g1 leading-trim">{title}</p>
                <div className="col col--xs-2 mt-1">
                  <p className="text-c1 leading-trim">{eyebrow}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="residences-mobile" />
        <div className="l-residences__theme" data-themed-class="ui-dark" />
      </div>

      <div className="l-residences__slider-container gp-mobile-project-slider is-hidden--lg-up ui-dark ui-background">
        <div className="l-residences__slider__gradient">
          <div />
        </div>
        <div className="l-residences__slider pt-3">
          <div
            className="l-residences__slider__images mx-layout js-residences-content-animation-controller"
            data-plugin="mobileScrollable"
          >
            <div className="p-relative">
              <ul className="mobile-scrollable col col--md-auto mx-auto">
                {projects.map((project) => (
                  <li key={project.slug} className="mobile-scrollable__item">
                    <picture
                      className="is-invisible--js is-hidden--no-js img-cover"
                      data-plugin="appear"
                      draggable={false}
                    >
                      <img
                        alt={`${project.title} swimming pool by Grand Pools`}
                        className="img-cover"
                        decoding="async"
                        loading="lazy"
                        src={project.image}
                      />
                    </picture>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gp-project-thumbs group group--nowrap" aria-label={mobileThumbsAriaLabel}>
              {projects.map((project) => (
                <a
                  key={project.slug}
                  className={`gp-project-thumb js-mobile-scrollable-thumbnail${
                    project.number === 1 ? ' is-active' : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title}`}
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
          <div className="l-residences__caption col col--xs-4 ui-dark">
            <div
              data-content-animation-animations='{
        "changeShow": {"name": "fadeIn"},
        "changeHide": {"name": "fadeOut"}
      }'
              data-content-animation-controller-selector=":root .js-residences-content-animation-controller"
              data-content-animation-fixed-height="false"
              data-content-animation-plugins="controller events height counter"
              data-plugin="contentAnimation"
            >
              <div className="l-residences__caption-text content-animation col col--md-12">
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    aria-hidden={project.hidden ? 'true' : 'false'}
                    className={`l-residences__caption__item px-layout pt-layout pb-2 ui-background ui-dark${
                      project.hidden ? ' is-hidden' : ''
                    }`}
                    data-content-animation-item={project.number}
                  >
                    <div className="l-residences__caption__top">
                      <p className="l-residences__caption__type h2 leading-trim">
                        {project.title}
                      </p>
                      <p className="l-residences__caption__description text-color-small text-small leading-trim">
                        {project.category}
                      </p>
                      <p className="text-small gp-mobile-project-description">
                        {project.description}
                      </p>
                      <StoryRollingLink href={project.href} label={cardCtaLabel} />
                    </div>
                    <div className="row row--nowrap mt-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
