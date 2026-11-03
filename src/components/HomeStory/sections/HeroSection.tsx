import type { CSSProperties } from "react";
import RollingText from '@/src/components/RollingText';
import { HERO_COLLAGE_IMAGES } from '../scene-data';
import { motionData } from '../motion-attributes';
import { HERO_MEDIA, HERO_TILE_SIZES } from '../hero-media';

function HeroSplit() {
  return <div className="l-gallery__split row background background--cover">
    {[0, 1].map(column => <div key={column} className="col col--xs-4 col--md-6">
      <div className="l-gallery__item__mask-list">
        {[0, 1, 2].map(mask => <div key={mask} className="l-gallery__item__mask-list__item gallery-animation-item">
          <picture className="" draggable={false}>
            <img alt="" draggable={false} fetchPriority="high" decoding="async" height="900" src={HERO_MEDIA['/hero-home.webp'].src} srcSet={HERO_MEDIA['/hero-home.webp'].srcSet} sizes="50vw" width="720" />
          </picture>
        </div>)}
      </div>
    </div>)}
  </div>;
}

function CollagePicture({ src }: { src: (typeof HERO_COLLAGE_IMAGES)[number] }) {
  const image = HERO_MEDIA[src];
  // Above-the-fold pictures are browser-discovered and never wait for appear/lazy plugins.
  return <picture className="img-full" draggable={false}>
    <img alt="" loading="eager" decoding="async" draggable={false} height="480" src={image.src} srcSet={image.srcSet} sizes={HERO_TILE_SIZES} width="360" />
  </picture>;
}

function CollageItem({ src }: { src: (typeof HERO_COLLAGE_IMAGES)[number] }) {
  return <div className="l-gallery__item col col--xs-2 col--md-6 col--lg-3 js-gallery-item">
    <CollagePicture src={src} />
  </div>;
}

/** Six entrance masks and the same moving collage, rendered by React. */
export default function HeroSection() {
  return <>
    <div className="l-gallery-container ui-dark ui-background sticky sticky--full-height sticky--under-next" data-plugin="reveal" data-reveal-enable-mq="null" id="l-gallery-sticky">
      <div className="sticky__layer sticky__layer--sticky" data-reveal="gallery" data-scroll="" data-scroll-sticky="" data-scroll-target="#l-gallery-sticky">
        <HeroSplit />
        <div className="l-gallery" data-plugin="gallery" data-scroll-snap-point={motionData([{"viewport": 0, "element": 0}])}>
          <div className="l-gallery__content js-gallery-container">
            {HERO_COLLAGE_IMAGES.map((src, index) => <CollageItem key={index} src={src} />)}
          </div>
          <div className="l-gallery__caption gp-static-hero-copy pr-layout">
            <div className="col col--xs-3 col--md-3 col--xxxl-2 offset--md-2 pl-layout pl-0:md pt-7:md">
              <p aria-level={1} className="text-t1 leading-trim" role="heading">
                {"Grounded in 25 years of master craftsmanship, we build bespoke swimming pools designed to seamlessly integrate with your home’s architecture and landscape."}
              </p>
            </div>
            <div className="l-gallery__title col col--md-6 text-right">
              <h1 className="h0 leading-trim gp-hero-title">
                {"Custom Concrete Pools,"}
                <br />
                {"Built for Melbourne"}
              </h1>
              <a className="group btn-underline font-body gp-original-button !mt-2 lg:!mt-1 " href="/projects">
                <RollingText label="See Our Projects">SEE OUR PROJECTS</RollingText>
              </a>
            </div>
            <a aria-label="Scroll to One Pool at a Time" className="btn l-gallery-next btn--outline btn--square btn--sm is-hidden--md-down" href="#l-intro">
              <span className="btn__content">
                <span className="btn__icon">
                  <svg aria-hidden="true" className="icon icon-arrow-down" height="16" style={{"--icon-width": "14", "--icon-height": "16"} as CSSProperties} viewBox="0 0 14 16" width="14">
                    <use href="/home-motion/icons.svg#arrow-down" xlinkHref="/home-motion/icons.svg#arrow-down" />
                  </svg>
                </span>
              </span>
            </a>
            <a className="btn l-gallery-next btn--outline btn--square btn--sm is-hidden--lg-up" href="#l-intro-mobile">
              <span className="btn__content">
                <span className="btn__icon">
                  <svg aria-hidden="true" className="icon icon-arrow-down" height="16" style={{"--icon-width": "14", "--icon-height": "16"} as CSSProperties} viewBox="0 0 14 16" width="14">
                    <use href="/home-motion/icons.svg#arrow-down" xlinkHref="/home-motion/icons.svg#arrow-down" />
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
    </div>
  </>;
}
