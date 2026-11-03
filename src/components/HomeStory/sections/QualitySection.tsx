import type { CSSProperties } from "react";
import QualityGallery from "./QualityGallery";
import { motionData } from "../motion-attributes";

/** Existing scene geometry and data attributes are the animation API. */
export default function QualitySection() {
  return <>
    <div className="l-nature sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--md-down" data-mouse-animation-multiplier={motionData({"unit": "%", "value": -5})} data-mouse-animation-target-selector=".l-place-webgl__spiral picture" data-mouse-animation-use-css-variable="false" data-plugin="reveal mouseAnimation" id="nature">
      <div className="l-place-anchor" id="place" />
      <div className="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-scroll-target="#nature">
        <div className="l-nature-bg" data-scroll-snap-point={motionData([{"viewport": 0, "element": 100}])}>
          <div className="l-nature-bg-item background" data-parallax--220-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})} data-parallax--320-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax">
            <div className="background background--cover">
              <img className="img-cover gp-quality-static-bg" src="/camberwell3.webp" alt="" decoding="async" />
            </div>
            <div className="col col--md-12 l-nature-bg-caption pt-6:md pt-4:xxxl pl-layout" data-parallax--0-0={motionData({"opacity": "1", "transform": "translateY(20%)"})} data-parallax--100-0={motionData({"opacity": "1", "transform": "translateY(0%)"})} data-parallax--150-0={motionData({"opacity": "0", "transform": "translateY(-20%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax">
              <p className="gp-eyebrow">
                {"Designed for You"}
              </p>
              <h2 className="g1 leading-trim gp-quality-title" data-gp-entrance="title">
                {"Built for Quality"}
              </h2>
              <div className="mt-1" />
              <div className="l-nature-bg-caption__text mr-0 ml-auto col col--md-4 mt-3">
                <p className="text-t1 leading-trim" data-gp-entrance="text">
                  {"We turn ambitious architectural visions into enduring aquatic retreats, tailored specifically to how you live."}
                </p>
              </div>
            </div>
            <div className="l-nature-bg-gradient flicker-fix" />
          </div>
          <div className="l-nature-bg-item background gp-quality-secondary-bg">
            <picture className="is-invisible--js is-hidden--no-js img-full" data-plugin="appear" draggable="false">
              <source data-srcset="/hero-murray.webp" height="450" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/hero-murray.webp" width="720" />
              <source data-srcset="/hero-murray.webp" height="450" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/hero-murray.webp" width="720" />
              <source data-srcset="/hero-murray.webp" height="450" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/hero-murray.webp" width="720" />
              <img alt="" data-src="/hero-murray.webp" draggable="false" height="450" src="/hero-murray.webp" width="720" />
            </picture>
          </div>
        </div>
        <div className="l-nature__caption" data-scroll-snap-point={motionData([{"viewport": 0, "element": 220}, {"viewport": 0, "element": 320}])}>
          <div className="l-nature__caption__inner row">
            <div className="col col--md-6 ui-dark ui-background px-1 py-1 px-layout:md" data-parallax-pattern="natureCaptionMoveUp" data-plugin="parallax">
              <div className="l-nature__caption__text gp-quality-prose">
                <p>
                  {"At Grand Pools, we focus on every detail to deliver exceptional results, combining innovative design, modern technologies, premium materials, and proven construction techniques."}
                </p>
                <p>
                  {"Our commitment to quality, durability, clear communication, and a seamless process ensures your pool is built to last and exceeds expectations."}
                </p>
              </div>
            </div>
            <div className="col col--md-3 col--xxxl-2 offset--md-2 offset--xxxl-3 pb-3:md" data-parallax--120-0={motionData({"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "transform": "translateY(0%)"})} data-parallax--220-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "transform": "translateY(0%)"})} data-parallax--320-0={motionData({"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "transform": "translateY(-150%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax">
              <div className="vimeo-background">
                <div className="background background--cover">
                  <picture className="is-invisible--js is-hidden--no-js img-cover" data-plugin="appear" draggable="false">
                    <source data-srcset="/pool-poster.webp" height="360" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/pool-poster.webp" width="360" />
                    <source data-srcset="/pool-poster.webp" height="360" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/pool-poster.webp" width="360" />
                    <source data-srcset="/pool-poster.webp" height="360" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/pool-poster.webp" width="360" />
                    <img alt="" data-src="/pool-poster.webp" draggable="false" height="360" src="/pool-poster.webp" width="360" />
                  </picture>
                </div>
                <div className="background--cover background">
                  <video aria-label="Grand Pools pool water" loop muted playsInline poster="/pool-poster.webp" preload="metadata">
                    <source src="/videos/Grand-Pools-Hero-Video.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-nature__slider row" data-scroll-snap-point={motionData([{"viewport": 0, "element": 420}])}>
          <div className="col col--md-6 ui-background" data-parallax--320-0={motionData({"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"})} data-parallax--421-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})} data-parallax--520-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax">
            <div className="l-nature__slider__images offset--md-1 pl-1 pb-3" data-content-animation-animations={motionData({"changeShow": {"name": "imageClipIn", "duration": "slow"}})} data-content-animation-controller-selector=":root .js-nature-controller-selector" data-content-animation-plugins="controller height" data-plugin="contentAnimation">
              <div className="content-animation">
                <div aria-hidden="false" className="" data-content-animation-item="1">
                  <picture className="is-invisible--js is-hidden--no-js img-full parallax-image-move" data-plugin="appear" draggable="false">
                    <source data-srcset="/camberwell3.webp" height="854" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/camberwell3.webp" width="640" />
                    <source data-srcset="/camberwell3.webp" height="854" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/camberwell3.webp" width="640" />
                    <source data-srcset="/camberwell3.webp" height="854" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/camberwell3.webp" width="640" />
                    <img alt="" data-src="/camberwell3.webp" draggable="false" height="854" src="/camberwell3.webp" width="640" />
                  </picture>
                </div>
                <div aria-hidden="true" className="is-hidden" data-content-animation-item="2">
                  <picture className="is-invisible--js is-hidden--no-js img-full parallax-image-move" data-plugin="appear" draggable="false">
                    <source data-srcset="/sliderimage1.webp" height="854" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/sliderimage1.webp" width="640" />
                    <source data-srcset="/sliderimage1.webp" height="854" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/sliderimage1.webp" width="640" />
                    <source data-srcset="/sliderimage1.webp" height="854" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/sliderimage1.webp" width="640" />
                    <img alt="" data-src="/sliderimage1.webp" draggable="false" height="854" src="/sliderimage1.webp" width="640" />
                  </picture>
                </div>
                <div aria-hidden="true" className="is-hidden" data-content-animation-item="3">
                  <picture className="is-invisible--js is-hidden--no-js img-full parallax-image-move" data-plugin="appear" draggable="false">
                    <source data-srcset="/camberwell.webp" height="854" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/camberwell.webp" width="640" />
                    <source data-srcset="/camberwell.webp" height="854" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/camberwell.webp" width="640" />
                    <source data-srcset="/camberwell.webp" height="854" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/camberwell.webp" width="640" />
                    <img alt="" data-src="/camberwell.webp" draggable="false" height="854" src="/camberwell.webp" width="640" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--md-6" data-parallax--320-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})} data-parallax--420-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})} data-parallax--520-0={motionData({"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})} data-parallax-clamp="true" data-parallax-enable-mq="md-up" data-parallax-measure-selector=".sticky" data-plugin="parallax">
            <div className="l-nature__slider-caption offset--md-2 js-nature-controller-selector" data-content-animation-animations={motionData({"changeShow": {"name": "text"}, "changeHide": {"name": "fadeOut", "duration": "fast"}})} data-content-animation-fixed-height="false" data-content-animation-plugins="controller events height counter" data-plugin="contentAnimation">
              <div className="content-animation mb-0.5">
                <div aria-hidden="false" className="" data-content-animation-item="1">
                  <p className="text-t1 leading-trim">
                    {"Our commitment to quality, durability, clear communication, and a seamless process ensures your pool is built to last and exceeds expectations."}
                  </p>
                </div>
                <div aria-hidden="true" className="is-hidden" data-content-animation-item="2">
                  <p className="text-t1 leading-trim">
                    {"Expert craftsmanship and attention to detail bring your vision to life, delivering seamless pool solutions from concept to completion."}
                  </p>
                </div>
                <div aria-hidden="true" className="is-hidden" data-content-animation-item="3">
                  <p className="text-t1 leading-trim">
                    {"At Grand Pools, we create custom swimming pools that balance style, function, and quality. Each pool is designed to complement its outdoor setting while adding lasting value and elegance to your home or business."}
                  </p>
                </div>
              </div>
              <div className="group group--small">
                <a className="btn btn--outline btn--sm btn--square js-content-animation-prev" role="button" tabIndex={0}>
                  <span className="btn__content">
                    <span className="btn__icon">
                      <svg aria-hidden="true" className="icon icon-arrow-left" height="16" style={{"--icon-width": "17", "--icon-height": "16"} as CSSProperties} viewBox="0 0 17 16" width="17">
                        <use href="/home-motion/icons.svg#arrow-left" xlinkHref="/home-motion/icons.svg#arrow-left" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a className="btn btn--outline btn--sm btn--square js-content-animation-next" role="button" tabIndex={0}>
                  <span className="btn__content">
                    <span className="btn__icon">
                      <svg aria-hidden="true" className="icon icon-arrow-right" height="16" style={{"--icon-width": "17", "--icon-height": "16"} as CSSProperties} viewBox="0 0 17 16" width="17">
                        <use href="/home-motion/icons.svg#arrow-right" xlinkHref="/home-motion/icons.svg#arrow-right" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="gp-mobile-quality is-hidden--lg-up ui-dark ui-background" id="nature-mobile">
      <div className="gp-mobile-quality-view">
        <div className="gp-mobile-quality-secondary"><img src="/hero-murray.webp" alt="" decoding="async" /></div>
        <div className="gp-mobile-quality-main">
          <img src="/camberwell3.webp" alt="" decoding="async" data-mobile-quality-image="" />
          <div className="gp-quality-mobile-heading px-layout">
            <p className="gp-eyebrow">Designed for You</p>
            <h2 className="gp-quality-title">Built for Quality</h2>
            <p>We turn ambitious architectural visions into enduring aquatic retreats, tailored specifically to how you live.</p>
          </div>
        </div>
        <div className="gp-mobile-quality-details">
        <div className="gp-mobile-quality-video">
          <video aria-label="Grand Pools pool water" loop muted playsInline poster="/pool-poster.webp" preload="metadata">
            <source src="/videos/Grand-Pools-Hero-Video.webm" type="video/webm" />
          </video>
        </div>
        <div className="gp-mobile-quality-prose px-layout">
          <p>At Grand Pools, we focus on every detail to deliver exceptional results, combining innovative design, modern technologies, premium materials, and proven construction techniques.</p>
          <p>Our commitment to quality, durability, clear communication, and a seamless process ensures your pool is built to last and exceeds expectations.</p>
        </div>
        </div>
      </div>
    </section>
    <QualityGallery />
  </>;
}
