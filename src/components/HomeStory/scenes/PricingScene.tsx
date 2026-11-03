import { PRICING_INTRO_CONTENT } from '../home-content';

export function PricingScene() {
  const { titleLines, subtitle, description, backgroundImage, desktopAlt, mobileAlt } =
    PRICING_INTRO_CONTENT;

  return (
    <>
      <div
        className="l-interiors sticky sticky--full-height sticky--under-previous is-hidden--md-down"
        data-plugin="reveal"
        id="interiors"
      >
        <div
          className="sticky__layer sticky__layer--sticky"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#interiors"
        >
          <div className="l-interiors__intro" data-scroll-snap-point='[{"viewport":0,"element":80}]'>
            <div className="background background--cover">
              <img className="img-cover" src={backgroundImage} alt={desktopAlt} />
              <div className="gp-pricing-shade" />
            </div>
            <div
              className="px-layout l-interiors__intro-caption"
              data-plugin="parallax"
              data-parallax-measure-selector="#interiors"
              data-parallax-clamp="true"
              data-parallax--150-0='{"opacity":"1","transform":"translateY(0px)"}'
              data-parallax--195-0='{"opacity":"0","transform":"translateY(-50px)"}'
            >
              <h2 className="text-right g1 leading-trim gp-pricing-title" data-gp-entrance="title">
                {titleLines[0]}
                <br />
                {titleLines[1]}
              </h2>
              <p className="text-c1 text-right">{subtitle}</p>
            </div>
            <div
              className="gp-pricing-intro-copy px-layout"
              data-plugin="parallax"
              data-parallax-measure-selector="#interiors"
              data-parallax-clamp="true"
              data-parallax--0-0='{"opacity":"0","transform":"translateY(45px)"}'
              data-parallax--50-0='{"opacity":"1","transform":"translateY(0px)"}'
            >
              <p>{description}</p>
            </div>
          </div>
          <div
            className="l-interiors__slider row ui-light gp-cost-stage"
            data-plugin="parallax"
            data-parallax-measure-selector="#interiors"
            data-parallax-clamp="true"
            data-parallax--120-0='{"clip-path":"inset(100% 0 0 0)"}'
            data-parallax--210-0='{"clip-path":"inset(0% 0 0 0)"}'
            data-scroll-snap-point='[{"viewport":0,"element":220}]'
          >
            <div className="gp-pricing-mount" data-gp-pricing-slot="" />
          </div>
        </div>
      </div>

      <div className="gp-mobile-cost-story is-hidden--lg-up">
        <div className="l-interiors__intro sticky sticky--full-height" id="interiors-2">
          <div
            className="sticky__layer sticky__layer--sticky sticky--full-height"
            data-scroll=""
            data-scroll-sticky=""
            data-scroll-target="#interiors-2"
          >
            <div className="l-interiors__anchor" id="interiors-mobile" />
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
                  alt={mobileAlt}
                  src={backgroundImage}
                  data-src={backgroundImage}
                  height={640}
                  width={360}
                />
              </picture>
              <div className="gp-pricing-shade" />
            </div>
            <div className="px-layout l-interiors__intro-caption pb-4">
              <div className="mt-0.3">
                <h2 className="text-right g1">
                  {titleLines[0]}
                  <br />
                  {titleLines[1]}
                </h2>
              </div>
              <p className="mt-1 text-c1 text-right">{subtitle}</p>
              <div className="l-interiors__intro__text">
                <p className="text-t1">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <section className="gp-cost-mobile ui-dark" id="pool-cost-mobile">
          <div data-gp-pricing-slot="" />
        </section>
      </div>
    </>
  );
}
