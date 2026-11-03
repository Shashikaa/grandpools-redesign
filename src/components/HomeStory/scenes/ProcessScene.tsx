import { PROCESS_CONTENT } from '../home-content';
import { MQ_XL, MQ_LG, MQ_MD, MQ_SM } from './StoryPrimitives';

export function ProcessScene() {
  const {
    eyebrow,
    titleLines,
    primaryBackgroundImage,
    secondaryImages,
    founderParagraph,
    bottomEngineeringCopy,
    workspaceFeatureImage,
    workspacePillars,
    mobileFeatureImage,
    mobileSteps,
  } = PROCESS_CONTENT;

  return (
    <>
      <div
        className="sticky sticky--full-height sticky--under-previous sticky--under-next l-intro ui-background is-hidden--md-down"
        data-plugin="reveal"
        data-themed-class="ui-dark"
        id="about"
      >
        <div
          className="sticky__layer sticky__layer--sticky sticky--full-height"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#about"
          data-scroll-snap-point='[{"viewport":0,"element":440}]'
        >
          <div
            className="l-intro__opening gp-process-opening"
            data-plugin="parallax"
            data-parallax-measure-selector="#about"
            data-parallax-clamp="true"
            data-parallax--100-0='{"opacity":"1","transform":"translateY(0%)"}'
            data-parallax--150-0='{"opacity":"0","transform":"translateY(-30%)"}'
          >
            <div className="gp-section-heading">
              <p className="gp-eyebrow">{eyebrow}</p>
              <h2>
                {titleLines[0]}
                <br />
                {titleLines[1]}
              </h2>
            </div>
          </div>
          <div className="l-intro__gradient flicker-fix" />

          <div
            className="l-intro__image l-intro__image--first"
            data-parallax--130-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
            data-parallax--200-0='{"clip-path": "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"}'
            data-parallax-clamp="true"
            data-parallax-enable-mq="md-up"
            data-parallax-measure-selector=".sticky"
            data-plugin="parallax"
          >
            <div
              data-parallax--450-0='{"transform": "translateY(-40%)"}'
              data-parallax-0-0='{"transform": "translateY(0%)"}'
              data-parallax-clamp="true"
              data-parallax-enable-mq="md-up"
              data-parallax-measure-selector=".sticky"
              data-plugin="parallax"
            >
              <div className="l-intro__image--first__background">
                <img
                  alt=""
                  className="is-invisible--js is-hidden--no-js"
                  data-plugin="appear"
                  data-src={primaryBackgroundImage}
                  draggable={false}
                  height={2725}
                  src={primaryBackgroundImage}
                  width={3600}
                />
              </div>
            </div>
          </div>

          <div
            className="l-intro__image l-intro__image--second col col--md-6 mr-0 ml-auto"
            data-parallax--200-0='{"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}'
            data-parallax--230-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
            data-parallax-clamp="true"
            data-parallax-enable-mq="md-up"
            data-parallax-measure-selector=".sticky"
            data-plugin="parallax"
            data-scroll-snap-point='[   { "viewport": 0, "element": 230 }]'
          >
            <picture
              className="is-invisible--js is-hidden--no-js img-full parallax-image-move"
              data-plugin="appear"
              draggable={false}
            >
              <source
                data-srcset={secondaryImages[0]}
                height={900}
                media={MQ_LG}
                srcSet={secondaryImages[0]}
                width={720}
              />
              <source
                data-srcset={secondaryImages[0]}
                height={900}
                media={MQ_MD}
                srcSet={secondaryImages[0]}
                width={720}
              />
              <source
                data-srcset={secondaryImages[0]}
                height={900}
                media={MQ_SM}
                srcSet={secondaryImages[0]}
                width={720}
              />
              <img
                alt=""
                data-parallax--200-0='{"transform": "scale(1.2)"}'
                data-parallax--400-0='{"transform": "scale(1.0)"}'
                data-parallax-clamp="true"
                data-plugin="parallax"
                data-src={secondaryImages[0]}
                draggable={false}
                height={900}
                src={secondaryImages[0]}
                width={720}
              />
            </picture>
          </div>
          <div className="dim dim--top" />

          <div
            className="l-intro__image l-intro__image--second col col--md-6 mr-0 ml-auto"
            data-parallax--230-0='{"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}'
            data-parallax--330-0='{"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}'
            data-parallax-clamp="true"
            data-parallax-enable-mq="md-up"
            data-parallax-measure-selector=".sticky"
            data-plugin="parallax"
            data-scroll-snap-point='[   { "viewport": 0, "element": 330 }]'
          >
            <picture
              className="is-invisible--js is-hidden--no-js img-full parallax-image-move"
              data-plugin="appear"
              draggable={false}
            >
              <source
                data-srcset={secondaryImages[1]}
                height={900}
                media={MQ_LG}
                srcSet={secondaryImages[1]}
                width={720}
              />
              <source
                data-srcset={secondaryImages[1]}
                height={900}
                media={MQ_MD}
                srcSet={secondaryImages[1]}
                width={720}
              />
              <source
                data-srcset={secondaryImages[1]}
                height={900}
                media={MQ_SM}
                srcSet={secondaryImages[1]}
                width={720}
              />
              <img
                alt=""
                data-parallax--300-0='{"transform": "scale(1.2)"}'
                data-parallax--700-0='{"transform": "scale(1.0)"}'
                data-parallax-clamp="true"
                data-plugin="parallax"
                data-src={secondaryImages[1]}
                draggable={false}
                height={900}
                src={secondaryImages[1]}
                width={720}
              />
            </picture>
          </div>
          <div className="dim dim--top" />

          <div
            className="s2-scroll-content gp-process-workspace hidden lg:flex absolute left-4 md:left-8 lg:left-16 top-0 flex-col w-full max-w-[30%] z-30 pointer-events-none pt-[12vh] pb-16 transform-gpu gp-process-column"
            data-plugin="parallax"
            data-parallax-measure-selector="#about"
            data-parallax-enable-mq="md-up"
            data-parallax-clamp="true"
            style={{ willChange: 'transform,opacity', backfaceVisibility: 'hidden' }}
            data-parallax-pattern="gpProcessWorkspace"
          >
            <p className="select-text pointer-events-auto text-[#F4EEDF] font-body text-base leading-relaxed !text-left max-w-[320px]">
              {founderParagraph}
            </p>
            <div className="select-text pointer-events-auto text-[#F4EEDF] font-body text-base leading-relaxed !text-left max-w-[260px] !self-end !mt-[100px]">
              <h3 className="font-semibold text-lg mb-1 text-[#F4EEDF]">
                {workspacePillars[0].title}
              </h3>
              <p className="text-sm text-[#F4EEDF]/90">{workspacePillars[0].description}</p>
            </div>
            <div className="w-full aspect-[4/3] max-w-[340px] overflow-hidden !mt-[70px] transform-gpu pointer-events-none rounded-sm">
              <img
                src={workspaceFeatureImage.src}
                alt={workspaceFeatureImage.alt}
                loading="eager"
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover"
                style={{ transform: 'translate3d(0,0,0)' }}
              />
            </div>
            <div className="select-text pointer-events-auto text-[#F4EEDF] font-body text-sm leading-relaxed !text-left max-w-[290px] !mt-[80px]">
              <h3 className="font-semibold text-base mb-1 text-[#F4EEDF]">
                {workspacePillars[1].title}
              </h3>
              <p className="text-xs md:text-sm text-[#F4EEDF]/90">
                {workspacePillars[1].description}
              </p>
            </div>
            <div className="select-text pointer-events-auto text-[#F4EEDF] font-body text-sm leading-relaxed !text-left max-w-[260px] !self-end !mt-[70px]">
              <h3 className="font-semibold text-base mb-1 text-[#F4EEDF]">
                {workspacePillars[2].title}
              </h3>
              <p className="text-xs md:text-sm text-[#F4EEDF]/90">
                {workspacePillars[2].description}
              </p>
            </div>
          </div>

          <p
            className="gp-process-bottom-copy"
            data-plugin="parallax"
            data-parallax-measure-selector="#about"
            data-parallax-clamp="true"
            data-parallax--100-0='{"opacity":"1","transform":"translateY(0px)"}'
            data-parallax--165-0='{"opacity":"0","transform":"translateY(-40px)"}'
          >
            {bottomEngineeringCopy}
          </p>
        </div>
        <div className="l-intro__anchor" id="l-intro" />
      </div>

      <div className="l-intro is-hidden--lg-up sticky sticky--full-height" id="about-mobile">
        <div
          className="sticky__layer sticky__layer--sticky sticky--full-height"
          data-scroll=""
          data-scroll-sticky=""
          data-scroll-target="#about-mobile"
        >
          <div className="l-intro__image l-intro__image--first" id="l-intro-mobile">
            <div className="l-intro__image--first__background">
              <img
                alt=""
                className="is-invisible--js is-hidden--no-js"
                data-plugin="appear"
                data-src={primaryBackgroundImage}
                draggable={false}
                height={1280}
                src={primaryBackgroundImage}
                width={720}
              />
            </div>
          </div>
          <div className="l-intro__opening pt-2.5">
            <div className="col col--xs-3 mb-1 pl-layout">
              <p className="h1 leading-trim text-color-primary">
                {titleLines[0]}
                <br />
                {titleLines[1]}
              </p>
            </div>
            <div className="col col--xs-2 pl-layout">
              <p className="l-intro__opening-subtitle text-c1 leading-trim text-color-primary">
                {eyebrow}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="l-intro__content gp-process-mobile-content is-hidden--lg-up pb-2.5 pt-2 ui-dark ui-background">
        <div className="l-intro__content-text gp-process-founder px-layout">
          <p className="gp-process-copy">{founderParagraph}</p>
        </div>
        <div className="l-intro__content-image ml-layout col col--xs-3 mr-0 ml-auto px-layout">
          <picture
            className="is-invisible--js is-hidden--no-js img-full"
            data-plugin="appear"
            draggable={false}
          >
            <source
              data-srcset={mobileFeatureImage}
              height={576}
              media={MQ_LG}
              srcSet={mobileFeatureImage}
              width={480}
            />
            <source
              data-srcset={mobileFeatureImage}
              height={576}
              media={MQ_MD}
              srcSet={mobileFeatureImage}
              width={480}
            />
            <source
              data-srcset={mobileFeatureImage}
              height={576}
              media={MQ_SM}
              srcSet={mobileFeatureImage}
              width={480}
            />
            <img
              alt=""
              data-src={mobileFeatureImage}
              decoding="async"
              draggable={false}
              fetchPriority="low"
              height={576}
              src={mobileFeatureImage}
              width={480}
            />
          </picture>
        </div>
        <div className="l-intro__content-text gp-process-engineering px-layout">
          <p className="gp-process-copy">{bottomEngineeringCopy}</p>
        </div>
        <div className="mx-layout p-relative mt-2" data-plugin="mobileScrollable">
          <ul className="mobile-scrollable col mx-auto">
            {secondaryImages.map((imgSrc, index) => (
              <li key={index} className="mobile-scrollable__item carousel__list__item--gradient">
                <img
                  alt=""
                  className="img-cover is-invisible--js is-hidden--no-js"
                  data-plugin="appear"
                  data-src={imgSrc}
                  draggable={false}
                  height={760}
                  src={imgSrc}
                  width={640}
                />
              </li>
            ))}
          </ul>
          <div className="l-intro__thumb carousel__thumb group group--nowrap px-layout">
            {secondaryImages.map((_, index) => (
              <a
                key={index}
                className={`col col--xs-2 carousel__thumb_item js-mobile-scrollable-thumbnail${
                  index === 0 ? ' is-active' : ''
                }`}
                role="button"
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="l-wellness__slider-container gp-process-services is-hidden--lg-up ui-dark ui-background"
        id="process-steps-mobile"
      >
        <div className="l-wellness__slider row pt-3">
          <div className="l-wellness__slider-gradient">
            <div />
            <div />
            <div />
          </div>
          <div
            className="l-wellness__slider__images p-relative mx-layout js-wellness-content-animation-controller"
            data-plugin="mobileScrollable"
          >
            <ul className="mobile-scrollable col col--md-auto mx-auto">
              {mobileSteps.map((step, index) => (
                <li
                  key={index}
                  className="mobile-scrollable__item carousel__list__item--gradient-large"
                >
                  <picture
                    className="is-invisible--js is-hidden--no-js img-cover"
                    data-plugin="appear"
                    draggable={false}
                  >
                    <source data-src={step.image} height={900} media={MQ_XL} width={720} />
                    <source data-src={step.image} height={900} media={MQ_LG} width={720} />
                    <img
                      alt=""
                      data-src={step.image}
                      decoding="async"
                      draggable={false}
                      height={900}
                      src={step.image}
                      width={720}
                    />
                  </picture>
                </li>
              ))}
            </ul>
            <div className="carousel__thumb group group--nowrap px-layout">
              {mobileSteps.map((step, index) => (
                <a
                  key={step.tabLabel}
                  className={`col col--xs-2 text-c1 carousel__thumb__item js-mobile-scrollable-thumbnail leading-trim${
                    index === 0 ? ' is-active' : ''
                  }`}
                  role="button"
                >
                  <span>{step.tabLabel}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="l-wellness__slider__caption col col--xs-4 col--md-12 ui-dark">
            <div
              data-content-animation-animations='{
          "changeShow": {"name": "fadeIn"},
          "changeHide": {"name": "fadeOut", "duration": "fast"}
        }'
              data-content-animation-controller-selector=":root .js-wellness-content-animation-controller"
              data-plugin="contentAnimation"
            >
              <div className="l-wellness__slider__caption-text content-animation col col--md-6">
                {mobileSteps.map((step, index) => (
                  <div
                    key={step.title}
                    aria-hidden={index === 0 ? 'false' : 'true'}
                    className={index === 0 ? '' : 'is-hidden'}
                    data-content-animation-item={index + 1}
                  >
                    <div className="mb-1">
                      <p className="h3 leading-trim">{step.title}</p>
                    </div>
                    <p className="text-t1 leading-trim">{step.description}</p>
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
