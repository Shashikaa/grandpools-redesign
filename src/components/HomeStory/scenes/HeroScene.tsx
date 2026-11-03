import type { CSSProperties } from 'react';
import { HERO_CONTENT } from '../home-content';
import { MQ_XL, MQ_LG, MQ_SM, StoryRollingLink } from './StoryPrimitives';

export function HeroScene() {
  const {
    splitMaskImage,
    introParagraph,
    titleLines,
    cta,
    nextSectionDesktopHref,
    nextSectionMobileHref,
    nextSectionAriaLabel,
    galleryItems,
  } = HERO_CONTENT;

  return (
    <div
      className="l-gallery-container ui-dark ui-background sticky sticky--full-height sticky--under-next"
      data-plugin="reveal"
      data-reveal-enable-mq="null"
      id="l-gallery-sticky"
    >
      <div
        className="sticky__layer sticky__layer--sticky"
        data-reveal="gallery"
        data-scroll=""
        data-scroll-sticky=""
        data-scroll-target="#l-gallery-sticky"
      >
        <div className="l-gallery__split row background background--cover">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="col col--xs-4 col--md-6">
              <div className="l-gallery__item__mask-list">
                {[0, 1, 2].map((maskIndex) => (
                  <div
                    key={maskIndex}
                    className="l-gallery__item__mask-list__item gallery-animation-item"
                  >
                    <picture className="" draggable={false}>
                      <source height={900} media={MQ_XL} srcSet={splitMaskImage} width={720} />
                      <source height={900} media={MQ_LG} srcSet={splitMaskImage} width={720} />
                      <source height={900} media={MQ_SM} srcSet={splitMaskImage} width={720} />
                      <img
                        alt=""
                        draggable={false}
                        fetchPriority="high"
                        height={900}
                        src={splitMaskImage}
                        width={720}
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="l-gallery"
        data-plugin="gallery"
        data-scroll-snap-point='[   { "viewport": 0, "element": 0 }]'
      >
        <div className="l-gallery__content js-gallery-container">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="l-gallery__item col col--xs-2 col--md-6 col--lg-3 js-gallery-item"
            >
              <div className="is-hidden-sm-down">
                <picture
                  className="is-invisible--js is-hidden--no-js img-full"
                  data-plugin="appear"
                  draggable={false}
                >
                  <source
                    data-srcset={item.desktopSrc}
                    height={480}
                    media={MQ_XL}
                    srcSet={item.desktopSrc}
                    width={360}
                  />
                  <source
                    data-srcset={item.desktopSrc}
                    height={480}
                    media={MQ_LG}
                    srcSet={item.desktopSrc}
                    width={360}
                  />
                  <source
                    data-srcset={item.desktopSrc}
                    height={480}
                    media={MQ_SM}
                    srcSet={item.desktopSrc}
                    width={360}
                  />
                  <img
                    alt={item.alt ?? ''}
                    data-src={item.desktopSrc}
                    decoding="async"
                    draggable={false}
                    fetchPriority="low"
                    height={480}
                    src={item.desktopSrc}
                    width={360}
                  />
                </picture>
              </div>
              <div className="is-hidden-md-up">
                <picture
                  className="is-invisible--js is-hidden--no-js img-full"
                  data-plugin="appear"
                  draggable={false}
                >
                  <img
                    alt={item.alt ?? ''}
                    data-src={item.mobileSrc}
                    decoding="async"
                    draggable={false}
                    fetchPriority="low"
                    height={480}
                    src={item.mobileSrc}
                    width={360}
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>

        <div className="l-gallery__caption gp-static-hero-copy pr-layout">
          <div className="col col--xs-3 col--md-3 col--xxxl-2 offset--md-2 pl-layout pl-0:md pt-7:md">
            <p aria-level={1} className="text-t1 leading-trim" role="heading">
              {introParagraph}
            </p>
          </div>
          <div className="l-gallery__title col col--md-6 text-right">
            <h1 className="h0 leading-trim gp-hero-title">
              {titleLines[0]}
              <br />
              {titleLines[1]}
            </h1>
            <StoryRollingLink href={cta.href} label={cta.label} />
          </div>
          <a
            aria-label={nextSectionAriaLabel}
            className="btn l-gallery-next btn--outline btn--square btn--sm is-hidden--md-down"
            href={nextSectionDesktopHref}
          >
            <span className="btn__content">
              <span className="btn__icon">
                <svg
                  aria-hidden="true"
                  className="icon icon-arrow-down"
                  height={16}
                  style={{ '--icon-width': 14, '--icon-height': 16 } as CSSProperties}
                  viewBox="0 0 14 16"
                  width={14}
                >
                  <use
                    href="/home-motion/icons.svg#arrow-down"
                    xlinkHref="/home-motion/icons.svg#arrow-down"
                  />
                </svg>
              </span>
            </span>
          </a>
          <a
            className="btn l-gallery-next btn--outline btn--square btn--sm is-hidden--lg-up"
            href={nextSectionMobileHref}
          >
            <span className="btn__content">
              <span className="btn__icon">
                <svg
                  aria-hidden="true"
                  className="icon icon-arrow-down"
                  height={16}
                  style={{ '--icon-width': 14, '--icon-height': 16 } as CSSProperties}
                  viewBox="0 0 14 16"
                  width={14}
                >
                  <use
                    href="/home-motion/icons.svg#arrow-down"
                    xlinkHref="/home-motion/icons.svg#arrow-down"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>

        <div className="l-gallery__gradient">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
