import { HARMONY_CONTENT } from '../home-content';
import { MQ_XL, MQ_LG, MQ_SM } from './StoryPrimitives';

export function HarmonyScene() {
  const {
    eyebrow,
    title,
    mobileTitleLines,
    paragraph,
    personOverlayImage,
    brandGradientSvg,
    mobileBackgroundImage,
  } = HARMONY_CONTENT;

  return (
    <>
      <div
        className="l-wellness sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--md-down"
        data-plugin="reveal"
        id="wellness"
      >
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#wellness"
        >
          <div
            className="l-wellness__webgl ui-background ui-dark"
            data-scroll-snap-point='[   { "viewport": 0, "element": 100 }]'
          >
            <div className="l-wellness__webgl-inner">
              <div data-gp-wave-slot="" className="gp-wave-slot">
                <img
                  className="gp-harmony-person"
                  src={personOverlayImage}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="background background--bottom background--cover">
                <picture
                  className="is-invisible--js is-hidden--no-js img-cover"
                  data-plugin="appear"
                  draggable={false}
                >
                  <source
                    data-srcset={brandGradientSvg}
                    height={450}
                    media={MQ_XL}
                    srcSet={brandGradientSvg}
                    width={720}
                  />
                  <source
                    data-srcset={brandGradientSvg}
                    height={450}
                    media={MQ_LG}
                    srcSet={brandGradientSvg}
                    width={720}
                  />
                  <source
                    data-srcset={brandGradientSvg}
                    height={450}
                    media={MQ_SM}
                    srcSet={brandGradientSvg}
                    width={720}
                  />
                  <img
                    alt=""
                    data-src={brandGradientSvg}
                    draggable={false}
                    height={450}
                    src={brandGradientSvg}
                    width={720}
                  />
                </picture>
              </div>
            </div>
            <div className="l-wellness__webgl-caption gp-harmony-caption">
              <div className="gp-harmony-copy">
                <p className="gp-eyebrow">{eyebrow}</p>
                <h2 className="gp-harmony-title">{title}</h2>
                <p className="gp-harmony-paragraph">{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="l-wellness sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--lg-up ui-dark ui-background"
        id="wellness-mobile"
      >
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#wellness-mobile"
        >
          <div className="l-wellness__webgl ui-background ui-dark">
            <div className="l-wellness__webgl-inner">
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
                    data-src={mobileBackgroundImage}
                    decoding="async"
                    draggable={false}
                    height={450}
                    src={mobileBackgroundImage}
                    width={720}
                  />
                </picture>
              </div>
            </div>
            <div className="l-wellness__webgl-caption px-layout pt-3">
              <p className="col col--md-6 text-t1 leading-trim">{paragraph}</p>
              <div className="col l-wellness__webgl-title text-right">
                <p className="g1 leading-trim gp-harmony-title">
                  {mobileTitleLines[0]}
                  <br />
                  {mobileTitleLines[1]}
                </p>
                <p className="text-c1 leading-trim mt-1">{eyebrow}</p>
              </div>
            </div>
            <div className="l-wellness__webgl-gradient background background--cover">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
