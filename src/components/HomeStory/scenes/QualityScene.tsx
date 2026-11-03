import type { CSSProperties } from 'react';
import { QUALITY_CONTENT } from '../home-content';
import { MQ_XL, MQ_LG, MQ_SM } from './StoryPrimitives';

export function QualityScene() {
  const {
    eyebrow,
    title,
    subtitle,
    secondaryBackgroundImage,
    mobilePrimaryBackgroundImage,
    proseParagraphs,
    video,
    slides,
  } = QUALITY_CONTENT;

  return (
    <>
      <div
        className="l-nature sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--md-down"
        data-mouse-animation-multiplier='{ "unit": "%", "value": -5}'
        data-mouse-animation-target-selector=".l-place-webgl__spiral picture"
        data-mouse-animation-use-css-variable="false"
        data-plugin="reveal mouseAnimation"
        id="nature"
      >
        <div className="l-place-anchor" id="place" />
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#nature"
        >
          <div className="l-nature-bg" data-scroll-snap-point='[   { "viewport": 0, "element": 100 }]'>
            <div
              className="l-nature-bg-item background"
              data-parallax--220-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
              data-parallax--320-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-up"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div className="background background--cover">
                <div data-parallax-pattern="webglNature" data-plugin="webglNature parallax">
                  <canvas className="js-nature-canvas is-active" />
                  <div className="l-wellness__webgl-circle">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div
                className="col col--md-12 l-nature-bg-caption pt-6:md pt-4:xxxl pl-layout"
                data-parallax--0-0='{"opacity": "1", "transform": "translateY(20%)"}'
                data-parallax--100-0='{"opacity": "1", "transform": "translateY(0%)"}'
                data-parallax--150-0='{"opacity": "0", "transform": "translateY(-20%)"}'
                data-parallax-clamp="true"
                data-parallax-enable-mq="md-up"
                data-parallax-measure-selector=".sticky"
                data-plugin="parallax"
              >
                <p className="gp-eyebrow">{eyebrow}</p>
                <h2 className="g1 leading-trim gp-quality-title" data-gp-entrance="title">
                  {title}
                </h2>
                <div className="mt-1" />
                <div className="l-nature-bg-caption__text mr-0 ml-auto col col--md-4 mt-3">
                  <p className="text-t1 leading-trim" data-gp-entrance="text">
                    {subtitle}
                  </p>
                </div>
              </div>
              <div className="l-nature-bg-gradient flicker-fix" />
            </div>

            <div className="l-nature-bg-item background gp-quality-secondary-bg">
              <picture
                className="is-invisible--js is-hidden--no-js img-full"
                data-plugin="appear"
                draggable={false}
              >
                <source
                  data-srcset={secondaryBackgroundImage}
                  height={450}
                  media={MQ_XL}
                  srcSet={secondaryBackgroundImage}
                  width={720}
                />
                <source
                  data-srcset={secondaryBackgroundImage}
                  height={450}
                  media={MQ_LG}
                  srcSet={secondaryBackgroundImage}
                  width={720}
                />
                <source
                  data-srcset={secondaryBackgroundImage}
                  height={450}
                  media={MQ_SM}
                  srcSet={secondaryBackgroundImage}
                  width={720}
                />
                <img
                  alt=""
                  data-src={secondaryBackgroundImage}
                  draggable={false}
                  height={450}
                  src={secondaryBackgroundImage}
                  width={720}
                />
              </picture>
            </div>
          </div>

          <div
            className="l-nature__caption"
            data-scroll-snap-point='[    { "viewport": 0, "element": 220 },    { "viewport": 0, "element": 320 }]'
          >
            <div className="l-nature__caption__inner row">
              <div
                className="col col--md-6 ui-dark ui-background px-1 py-1 px-layout:md"
                data-parallax-pattern="natureCaptionMoveUp"
                data-plugin="parallax"
              >
                <div className="l-nature__caption_text gp-quality-prose">
                  {proseParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div
                className="col col--md-3 col--xxxl-2 offset--md-2 offset--xxxl-3 pb-3:md"
                data-parallax--120-0='{"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "transform": "translateY(0%)"}'
                data-parallax--220-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "transform": "translateY(0%)"}'
                data-parallax--320-0='{"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "transform": "translateY(-150%)"}'
                data-parallax-clamp="true"
                data-parallax-enable-mq="md-up"
                data-parallax-measure-selector=".sticky"
                data-plugin="parallax"
              >
                <div className="vimeo-background">
                  <div className="background background--cover">
                    <picture
                      className="is-invisible--js is-hidden--no-js img-cover"
                      data-plugin="appear"
                      draggable={false}
                    >
                      <source
                        data-srcset={video.poster}
                        height={360}
                        media={MQ_XL}
                        srcSet={video.poster}
                        width={360}
                      />
                      <source
                        data-srcset={video.poster}
                        height={360}
                        media={MQ_LG}
                        srcSet={video.poster}
                        width={360}
                      />
                      <source
                        data-srcset={video.poster}
                        height={360}
                        media={MQ_SM}
                        srcSet={video.poster}
                        width={360}
                      />
                      <img
                        alt=""
                        data-src={video.poster}
                        draggable={false}
                        height={360}
                        src={video.poster}
                        width={360}
                      />
                    </picture>
                  </div>
                  <div className="background--cover background">
                    <video
                      aria-label={video.ariaLabel}
                      loop
                      muted
                      playsInline
                      poster={video.poster}
                      preload="metadata"
                    >
                      <source src={video.src} type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="l-nature__slider row"
            data-scroll-snap-point='[    { "viewport": 0, "element": 420 }]'
          >
            <div
              className="col col--md-6 ui-background"
              data-parallax--320-0='{"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}'
              data-parallax--421-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
              data-parallax--520-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-up"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div
                className="l-nature__slider__images offset--md-1 pl-1 pb-3"
                data-content-animation-animations='{
            "changeShow": { "name": "imageClipIn", "duration": "slow" }
          }'
                data-content-animation-controller-selector=":root .js-nature-controller-selector"
                data-content-animation-plugins="controller height"
                data-plugin="contentAnimation"
              >
                <div className="content-animation">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      aria-hidden={index === 0 ? 'false' : 'true'}
                      className={index === 0 ? '' : 'is-hidden'}
                      data-content-animation-item={index + 1}
                    >
                      <picture
                        className="is-invisible--js is-hidden--no-js img-full parallax-image-move"
                        data-plugin="appear"
                        draggable={false}
                      >
                        <source
                          data-srcset={slide.image}
                          height={854}
                          media={MQ_XL}
                          srcSet={slide.image}
                          width={640}
                        />
                        <source
                          data-srcset={slide.image}
                          height={854}
                          media={MQ_LG}
                          srcSet={slide.image}
                          width={640}
                        />
                        <source
                          data-srcset={slide.image}
                          height={854}
                          media={MQ_SM}
                          srcSet={slide.image}
                          width={640}
                        />
                        <img
                          alt=""
                          data-src={slide.image}
                          draggable={false}
                          height={854}
                          src={slide.image}
                          width={640}
                        />
                      </picture>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="col col--md-6"
              data-parallax--320-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}'
              data-parallax--420-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
              data-parallax--520-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-up"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div
                className="l-nature__slider-caption offset--md-2 js-nature-controller-selector"
                data-content-animation-animations='{
            "changeShow": {"name": "text"},
            "changeHide": {"name": "fadeOut", "duration": "fast"}
          }'
                data-content-animation-fixed-height="false"
                data-content-animation-plugins="controller events height counter"
                data-plugin="contentAnimation"
              >
                <div className="content-animation mb-0.5">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      aria-hidden={index === 0 ? 'false' : 'true'}
                      className={index === 0 ? '' : 'is-hidden'}
                      data-content-animation-item={index + 1}
                    >
                      <p className="text-t1 leading-trim">{slide.caption}</p>
                    </div>
                  ))}
                </div>
                <div className="group group--small">
                  <a
                    className="btn btn--outline btn--sm btn--square js-content-animation-prev"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="btn__content">
                      <span className="btn__icon">
                        <svg
                          aria-hidden="true"
                          className="icon icon-arrow-left"
                          height={16}
                          style={{ '--icon-width': 17, '--icon-height': 16 } as CSSProperties}
                          viewBox="0 0 17 16"
                          width={17}
                        >
                          <use
                            href="/home-motion/icons.svg#arrow-left"
                            xlinkHref="/home-motion/icons.svg#arrow-left"
                          />
                        </svg>
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn btn--outline btn--sm btn--square js-content-animation-next"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="btn__content">
                      <span className="btn__icon">
                        <svg
                          aria-hidden="true"
                          className="icon icon-arrow-right"
                          height={16}
                          style={{ '--icon-width': 17, '--icon-height': 16 } as CSSProperties}
                          viewBox="0 0 17 16"
                          width={17}
                        >
                          <use
                            href="/home-motion/icons.svg#arrow-right"
                            xlinkHref="/home-motion/icons.svg#arrow-right"
                          />
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

      <div
        className="l-nature sticky sticky--full-height sticky--under-previous is-hidden--lg-up ui-dark ui-background"
        id="nature-mobile"
      >
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#nature-mobile"
        >
          <div className="l-nature-bg">
            <div
              className="l-nature-bg-item--webgl l-nature-bg-item"
              data-parallax--220-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
              data-parallax--320-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-down"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div
                className="background background--cover"
                data-parallax--370-0='{"transform": "scale(1.0)"}'
                data-parallax-0-0='{"transform": "scale(1.2)"}'
                data-parallax-clamp="true"
                data-parallax-enable-mq="md-down"
                data-parallax-measure-selector=".sticky"
                data-plugin="parallax"
              >
                <picture
                  className="is-invisible--js is-hidden--no-js img-full"
                  data-plugin="appear"
                  draggable={false}
                >
                  <img
                    alt=""
                    data-src={mobilePrimaryBackgroundImage}
                    decoding="async"
                    draggable={false}
                    height={640}
                    src={mobilePrimaryBackgroundImage}
                    width={360}
                  />
                </picture>
              </div>
            </div>
            <div
              className="col col--xs-4 l-nature-bg-caption px-layout pb-4"
              data-parallax--100-0='{"opacity": "1", "transform": "translateY(0vh)"}'
              data-parallax--150-0='{"opacity": "0", "transform": "translateY(-50vh)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-down"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div className="gp-mobile-heading">
                <h2 className="g1 leading-trim text-right gp-quality-title">{title}</h2>
                <p className="gp-eyebrow">{eyebrow}</p>
              </div>
              <div className="mt-1" />
              <div className="l-nature-bg-caption__text col col--md-6 mt-3">
                <p className="text-t1 leading-trim">{subtitle}</p>
              </div>
            </div>
            <div
              className="l-nature-bg-gradient"
              data-parallax--150-0='{"transform": "translateY(0vh)"}'
              data-parallax--320-0='{"transform": "translateY(-68vh)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-down"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            />
          </div>
          <div
            className="l-nature-bg-item background"
            data-parallax--220-0='{"transform": "scale(1.2)"}'
            data-parallax--420-0='{"transform": "scale(1.0)"}'
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
                data-src={secondaryBackgroundImage}
                decoding="async"
                draggable={false}
                height={640}
                src={secondaryBackgroundImage}
                width={360}
              />
            </picture>
          </div>
        </div>

        <div className="l-nature__caption">
          <div className="l-nature__caption_inner col col--xs-4 row pl-layout">
            <div
              className="col col--xs-2 mr-layout ml-auto mb-4"
              data-parallax--100-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "transform": "translateY(100vh)"}'
              data-parallax--220-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "transform": "translateY(0vh)"}'
              data-parallax--270-0='{"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "transform": "translateY(-30vh)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-down"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div className="vimeo-background background background--cover">
                <video
                  aria-label={video.ariaLabel}
                  loop
                  muted
                  playsInline
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.src} type="video/webm" />
                </video>
              </div>
            </div>
            <div
              className="l-nature__caption__text col col--xs-4 ui-dark ui-background px-1 py-1 gp-quality-prose"
              data-plugin="parallax"
              data-parallax-pattern="natureCaptionMoveUp"
            >
              {proseParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="l-place-mobile gp-quality-gallery pt-3 is-hidden--lg-up">
        <div
          className="l-nature__slider__images col js-nature-content-animation-controller"
          data-plugin="mobileScrollable"
        >
          <div className="col col--xs-4 col--md-6 ui-dark mb-2 px-layout">
            <div
              data-content-animation-animations='{
            "changeShow": {"name": "fadeIn"},
            "changeHide": {"name": "fadeOut"}
          }'
              data-content-animation-controller-selector=":root .js-nature-content-animation-controller"
              data-content-animation-fixed-height="true"
              data-content-animation-plugins="controller events height counter"
              data-plugin="contentAnimation"
            >
              <div className="content-animation">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    aria-hidden={index === 0 ? 'false' : 'true'}
                    className={index === 0 ? '' : 'is-hidden'}
                    data-content-animation-item={index + 1}
                  >
                    <p className="text-t1 leading-trim">{slide.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-layout p-relative">
            <ul className="mobile-scrollable col col--md-auto mx-auto">
              {slides.map((slide, index) => (
                <li key={index} className="mobile-scrollable__item">
                  <img
                    alt={slide.alt}
                    className="img-cover is-invisible--js is-hidden--no-js"
                    data-plugin="appear"
                    data-src={slide.image}
                    src={slide.image}
                    draggable={false}
                    height={760}
                    width={640}
                  />
                </li>
              ))}
            </ul>
            <div className="carousel__thumb group group--nowrap px-layout">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`col col--xs-2 text-c1 carousel__thumb__item js-mobile-scrollable-thumbnail${
                    index === 0 ? ' is-active' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
