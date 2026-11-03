import MobileProjects from "./MobileProjects";
import { HOME_PROJECTS } from "../scene-data";
import { ProjectSlide, ProjectCard, ProjectMobileImage, ProjectMobileCard, ProjectThumbnail } from "./ProjectItems";
import { motionData } from "../motion-attributes";

/** Existing scene geometry and data attributes are the animation API. */
export default function ProjectsSection() {
  return <>
    <div className="l-residences sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--md-down" data-plugin="reveal" data-project-count={HOME_PROJECTS.length} id="l-residences-sticky-1" style={{ height: `${(HOME_PROJECTS.length + 3) * 100}vh` }}>
      <div className="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-snap-point={motionData([{"viewport": 0, "element": 0}, {"viewport": 0, "element": 200}, {"viewport": 0, "element": 300}, {"viewport": 0, "element": 400}, {"viewport": 0, "element": 500}, {"viewport": 0, "element": 600}])} data-scroll-sticky="" data-scroll-target="#l-residences-sticky-1">
        <div className="l-residences__slide l-residences__webgl">
          <div className="background background--cover background--bottom">
            <picture className="is-invisible--js is-hidden--no-js img-cover parallax-image-move" data-plugin="appear" draggable="false">
              <source data-srcset="/hero-murray.webp" height="451" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/hero-murray.webp" width="720" />
              <source data-srcset="/hero-murray.webp" height="451" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/hero-murray.webp" width="720" />
              <img alt="" data-parallax--200-0={motionData({"transform": "scale(1.0)"})} data-parallax-0-0={motionData({"transform": "scale(1.2)"})} data-parallax-clamp="true" data-plugin="parallax" data-src="/hero-murray.webp" draggable="false" height="451" src="/hero-murray.webp" width="720" />
            </picture>
          </div>
          <div className="l-residences__webgl-caption gp-projects-intro-copy">
            <div>
              <p className="gp-eyebrow">
                {"Custom Pools, Crafted for Melbourne"}
              </p>
              <h2>
                {"Our Projects"}
              </h2>
              <p className="gp-projects-intro-description">
                {"At Grand Pools, we create custom swimming pools that balance style, function, and quality. Each pool is designed to complement its outdoor setting while adding lasting value and elegance to your home or business."}
              </p>
            </div>
          </div>
        </div>
        {HOME_PROJECTS.map(project => <ProjectSlide key={project.slug} project={project} />)}
      </div>
      <div className="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-scroll-target="#l-residences-sticky-1">
        <div className="l-residences__caption col col--md-3 offset--md-9">
          <div className="l-residences__caption__line">
            <div className="l-residences__caption__line-progress js-residences-progress-line" />
          </div>
          <div className="l-residences__caption__content-animation js-residences-content" data-content-animation-animations={motionData({"changeShow": {"name": "fadeIn"}, "changeHide": {"name": "fadeOut"}})} data-content-animation-plugins="controller events" data-content-aninmation-fixed-height="true" data-plugin="contentAnimation">
            <div className="content-animation">
              {HOME_PROJECTS.map(project => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </div>
      </div>
      <div data-themed-class="ui-dark" id="residences" />
    </div>
    <div className="gp-mobile-project-story is-hidden--lg-up">
    <div className="l-residences__webgl-container sticky sticky--full-height gp-mobile-rise ui-dark ui-background" id="l-residences-sticky-2">
      <div className="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-scroll-target="#l-residences-sticky-2">
        <div className="l-residences__webgl pt-3">
          <div className="background background--cover" data-mobile-background="">
            <picture className="is-invisible--js is-hidden--no-js img-cover" data-plugin="appear" draggable="false">
              <img alt="" data-src="/hero-murray.webp" draggable="false" height="1280" src="/hero-murray.webp" width="720" />
            </picture>
          </div>
          <div className="l-residences__webgl-caption px-layout">
            <div className="col">
              <p className="g1 leading-trim">
                {"Our Projects"}
              </p>
              <p className="gp-mobile-project-intro-description">At Grand Pools, we create custom swimming pools that balance style, function, and quality. Each pool is designed to complement its outdoor setting while adding lasting value and elegance to your home or business.</p>
              <div className="col col--xs-2 mt-1">
                <p className="text-c1 leading-trim">
                  {"Custom Pools, Crafted for Melbourne"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="residences-mobile" />
      <div className="l-residences__theme" data-themed-class="ui-dark" />
    </div>
    <MobileProjects />
    </div>
  </>;
}
