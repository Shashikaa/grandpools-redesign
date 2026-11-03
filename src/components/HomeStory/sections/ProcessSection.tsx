import type { CSSProperties } from "react";
import ProcessServices from "./ProcessServices";
import { motionData } from "../motion-attributes";

/** Existing scene geometry and data attributes are the animation API. */
export default function ProcessSection() {
  return <>
    <div className="sticky sticky--full-height sticky--under-previous sticky--under-next l-intro ui-background is-hidden--md-down" data-plugin="reveal" data-themed-class="ui-dark" id="about">
      <div className="sticky__layer sticky__layer--sticky sticky--full-height" data-scroll="" data-scroll-sticky="" data-scroll-target="#about" data-scroll-snap-point={motionData([{"viewport": 0, "element": 360}])}>
        <div className="l-intro__opening gp-process-opening" data-plugin="parallax" data-parallax-measure-selector="#about" data-parallax-clamp="true" data-parallax--100-0={motionData({"opacity": "1", "transform": "translateY(0%)"})} data-parallax--150-0={motionData({"opacity": "0", "transform": "translateY(-30%)"})}>
          <div className="gp-section-heading">
            <p className="gp-eyebrow">
              {"Bayside & Mornington Peninsula"}
            </p>
            <h2>
              {"One Pool"}
              <br />
              {"at a Time"}
            </h2>
          </div>
        </div>
        <div className="l-intro__gradient flicker-fix" />
        <div className="l-intro__image l-intro__image--first" data-parallax--130-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})} data-parallax--200-0={motionData({"clip-path": "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax" data-scroll-snap-point={motionData([{"viewport": 0, "element": 91}])}>
          <div data-parallax--450-0={motionData({"transform": "translateY(-40%)"})} data-parallax-0-0={motionData({"transform": "translateY(0%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax">
            <div className="l-intro__image--first__background">
              <img alt="" className="is-invisible--js is-hidden--no-js" data-plugin="appear" data-src="/toorak3.webp" draggable="false" height="2725" src="/toorak3.webp" width="3600" />
            </div>
          </div>
        </div>
        <div className="l-intro__image l-intro__image--second col col--md-6 mr-0 ml-auto" data-parallax--200-0={motionData({"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"})} data-parallax--230-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax" data-scroll-snap-point={motionData([{"viewport": 0, "element": 230}])}>
          <picture className="is-invisible--js is-hidden--no-js img-full parallax-image-move" data-plugin="appear" draggable="false">
            <source data-srcset="/hero-murray.webp" height="900" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/hero-murray.webp" width="720" />
            <source data-srcset="/hero-murray.webp" height="900" media="(min-width: 1200px) and (min-height: 500px)" srcSet="/hero-murray.webp" width="720" />
            <source data-srcset="/hero-murray.webp" height="900" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/hero-murray.webp" width="720" />
            <img alt="" data-parallax--200-0={motionData({"transform": "scale(1.2)"})} data-parallax--400-0={motionData({"transform": "scale(1.0)"})} data-parallax-clamp="true" data-plugin="parallax" data-src="/hero-murray.webp" draggable="false" height="900" src="/hero-murray.webp" width="720" />
          </picture>
        </div>
        <div className="dim dim--top" />
        <div className="l-intro__image l-intro__image--second col col--md-6 mr-0 ml-auto" data-parallax--230-0={motionData({"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"})} data-parallax--330-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax" data-scroll-snap-point={motionData([{"viewport": 0, "element": 330}])}>
          <picture className="is-invisible--js is-hidden--no-js img-full parallax-image-move" data-plugin="appear" draggable="false">
            <source data-srcset="/camberwell3.webp" height="900" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/camberwell3.webp" width="720" />
            <source data-srcset="/camberwell3.webp" height="900" media="(min-width: 1200px) and (min-height: 500px)" srcSet="/camberwell3.webp" width="720" />
            <source data-srcset="/camberwell3.webp" height="900" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/camberwell3.webp" width="720" />
            <img alt="" data-parallax--300-0={motionData({"transform": "scale(1.2)"})} data-parallax--700-0={motionData({"transform": "scale(1.0)"})} data-parallax-clamp="true" data-plugin="parallax" data-src="/camberwell3.webp" draggable="false" height="900" src="/camberwell3.webp" width="720" />
          </picture>
        </div>
        <div className="dim dim--top" />
        <div className="s2-scroll-content gp-process-workspace hidden lg:flex absolute left-4 md:left-8 lg:left-16 top-0 flex-col w-full max-w-[30%] z-30 pointer-events-none pt-[12vh] pb-16 transform-gpu gp-process-column" data-plugin="parallax" data-parallax-measure-selector="#about" data-parallax-enable-mq="md-up" data-parallax-clamp="true" style={{"willChange": "transform,opacity", "backfaceVisibility": "hidden"} as CSSProperties} data-parallax-pattern="gpProcessWorkspace">
          <p className="select-text pointer-events-auto text-[#F4EEDF] font-body text-base leading-relaxed !text-left max-w-[320px]">
            {"Founder Lachlan Deleeuw brings over 25 years of structural construction experience to custom Bayside builds, managing every project from site appraisal to handover."}
          </p>
          <div className="select-text pointer-events-auto text-[#F4EEDF] font-body text-base leading-relaxed !text-left max-w-[260px] !self-end !mt-[100px]">
            <h3 className="font-semibold text-lg mb-1 text-[#F4EEDF]">
              {"Tailor-Made Designs"}
            </h3>
            <p className="text-sm text-[#F4EEDF]/90">
              {"Shaped around your site's contours, natural light, and architecture."}
            </p>
          </div>
          <div className="w-full aspect-[4/3] max-w-[340px] overflow-hidden !mt-[70px] transform-gpu pointer-events-none rounded-sm">
            <img src="/p6.avif" alt="Architectural concrete pool detail in Toorak residence" loading="eager" decoding="async" draggable="false" className="w-full h-full object-cover" style={{"transform": "translate3d(0,0,0)"} as CSSProperties} />
          </div>
          <div className="select-text pointer-events-auto text-[#F4EEDF] font-body text-sm leading-relaxed !text-left max-w-[290px] !mt-[80px]">
            <h3 className="font-semibold text-base mb-1 text-[#F4EEDF]">
              {"Structural Precision"}
            </h3>
            <p className="text-xs md:text-sm text-[#F4EEDF]/90">
              {"In-house concrete pouring, custom coping, and premium tile finishes."}
            </p>
          </div>
          <div className="select-text pointer-events-auto text-[#F4EEDF] font-body text-sm leading-relaxed !text-left max-w-[260px] !self-end !mt-[70px]">
            <h3 className="font-semibold text-base mb-1 text-[#F4EEDF]">
              {"Seamless Handover"}
            </h3>
            <p className="text-xs md:text-sm text-[#F4EEDF]/90">
              {"Including Pool Care+ setup, equipment guides, and warranty registration."}
            </p>
          </div>
        </div>
        <p className="gp-process-bottom-copy" data-plugin="parallax" data-parallax-measure-selector="#about" data-parallax-clamp="true" data-parallax--100-0={motionData({"opacity": "1", "transform": "translateY(0px)"})} data-parallax--165-0={motionData({"opacity": "0", "transform": "translateY(-40px)"})}>
          {"From structural engineering to final wet-testing, we construct custom concrete pools engineered for Melbourne properties."}
        </p>
      </div>
      <div className="l-intro__anchor" id="l-intro" />
    </div>
    <div className="gp-mobile-process-story is-hidden--lg-up">
    <div className="gp-process-mobile-view">
    <div className="l-intro sticky sticky--full-height gp-mobile-rise" id="about-mobile">
      <div className="sticky__layer sticky__layer--sticky sticky--full-height" data-scroll="" data-scroll-sticky="" data-scroll-target="#about-mobile">
        <div className="l-intro__image l-intro__image--first" id="l-intro-mobile">
          <div className="l-intro__image--first__background">
            <img alt="" className="is-invisible--js is-hidden--no-js" data-plugin="appear" data-src="/toorak3.webp" draggable="false" height="1280" src="/toorak3.webp" width="720" />
          </div>
        </div>
        <div className="l-intro__opening pt-2.5">
          <div className="col col--xs-3 pl-layout">
            <p className="h1 leading-trim text-color-primary">
              {"One Pool"}
              <br />
              {"at a Time"}
            </p>
          </div>
          <div className="col col--xs-2 pl-layout">
            <p className="l-intro__opening-subtitle text-c1 leading-trim text-color-primary">
              {"Bayside & Mornington Peninsula"}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="l-intro__content gp-process-mobile-content gp-mobile-rise pb-2.5 pt-2 ui-dark ui-background">
      <div className="l-intro__content-text gp-process-founder px-layout">
        <p className="gp-process-copy">
          {"Founder Lachlan Deleeuw brings over 25 years of structural construction experience to custom Bayside builds, managing every project from site appraisal to handover."}
        </p>
      </div>
      <div className="l-intro__content-image ml-layout col col--xs-3 mr-0 ml-auto px-layout">
        <picture className="is-invisible--js is-hidden--no-js img-full" data-plugin="appear" draggable="false">
          <source data-srcset="/menu-about.webp" height="576" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/menu-about.webp" width="480" />
          <source data-srcset="/menu-about.webp" height="576" media="(min-width: 1200px) and (min-height: 500px)" srcSet="/menu-about.webp" width="480" />
          <source data-srcset="/menu-about.webp" height="576" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/menu-about.webp" width="480" />
          <img alt="" data-src="/menu-about.webp" draggable="false" height="576" src="/menu-about.webp" width="480" />
        </picture>
      </div>
      <div className="l-intro__content-text gp-process-engineering px-layout">
        <p className="gp-process-copy">
          {"From structural engineering to final wet-testing, we construct custom concrete pools engineered for Melbourne properties."}
        </p>
      </div>
      <div className="mx-layout p-relative mt-2" data-plugin="mobileScrollable">
        <ul className="mobile-scrollable col mx-auto">
          <li className="mobile-scrollable__item carousel__list__item--gradient">
            <img alt="" className="img-cover is-invisible--js is-hidden--no-js" data-plugin="appear" data-src="/hero-murray.webp" draggable="false" height="760" src="/hero-murray.webp" width="640" />
          </li>
          <li className="mobile-scrollable__item carousel__list__item--gradient">
            <img alt="" className="img-cover is-invisible--js is-hidden--no-js" data-plugin="appear" data-src="/camberwell3.webp" draggable="false" height="760" src="/camberwell3.webp" width="640" />
          </li>
        </ul>
        <div className="l-intro__thumb carousel__thumb group group--nowrap px-layout">
          <a className="col col--xs-2 carousel__thumb__item js-mobile-scrollable-thumbnail is-active" role="button" />
          <a className="col col--xs-2 carousel__thumb__item js-mobile-scrollable-thumbnail" role="button" />
        </div>
      </div>
    </div>
    <ProcessServices />
    </div>
    </div>
  </>;
}
