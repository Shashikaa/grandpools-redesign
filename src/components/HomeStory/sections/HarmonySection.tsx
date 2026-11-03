import { motionData } from "../motion-attributes";

/** Existing scene geometry and data attributes are the animation API. */
export default function HarmonySection() {
  return <>
    <div className="l-wellness sticky sticky--full-height sticky--under-previous sticky--under-next is-hidden--md-down" data-plugin="reveal" id="wellness">
      <div className="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-scroll-target="#wellness">
        <div className="l-wellness__webgl ui-background ui-dark" data-scroll-snap-point={motionData([{"viewport": 0, "element": 100}])}>
          <div className="l-wellness__webgl-inner">
            <div data-gp-wave-slot="" className="gp-wave-slot">
              <img className="gp-harmony-person" src="/person.png" alt="" aria-hidden="true" />
            </div>
            <div className="background background--bottom background--cover">
              <picture className="is-invisible--js is-hidden--no-js img-cover" data-plugin="appear" draggable="false">
                <source data-srcset="/home-motion/brand-gradient.svg" height="450" media="(min-width: 1920px) and (min-height: 700px)" srcSet="/home-motion/brand-gradient.svg" width="720" />
                <source data-srcset="/home-motion/brand-gradient.svg" height="450" media="(min-width: 1440px) and (min-height: 700px)" srcSet="/home-motion/brand-gradient.svg" width="720" />
                <source data-srcset="/home-motion/brand-gradient.svg" height="450" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" srcSet="/home-motion/brand-gradient.svg" width="720" />
                <img alt="" data-src="/home-motion/brand-gradient.svg" draggable="false" height="450" src="/home-motion/brand-gradient.svg" width="720" />
              </picture>
            </div>
          </div>
          <div className="l-wellness__webgl-caption gp-harmony-caption">
            <div className="gp-harmony-copy">
              <p className="gp-eyebrow">
                {"Natural Harmony"}
              </p>
              <h2 className="gp-harmony-title">
                {"Designed for Stillness"}
              </h2>
              <p className="gp-harmony-paragraph">
                {"Designed to disappear into the landscape, not announce itself. The result isn't a pool. It's a quiet room you walk outside to find."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="l-wellness sticky sticky--full-height gp-mobile-rise is-hidden--lg-up ui-dark ui-background" id="wellness-mobile">
      <div className="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-scroll-target="#wellness-mobile">
        <div className="l-wellness__webgl ui-background ui-dark">
          <div className="l-wellness__webgl-inner">
            <div className="background background--cover" data-mobile-background="">
              <picture className="is-invisible--js is-hidden--no-js img-cover" data-plugin="appear" draggable="false">
                <img alt="" data-src="/ForestMob.webp" decoding="async" draggable="false" height="450" src="/ForestMob.webp" width="720" />
              </picture>
            </div>
          </div>
          <div className="l-wellness__webgl-caption px-layout pt-3">
            <p className="col col--md-6 text-t1 leading-trim">
              {"Designed to disappear into the landscape, not announce itself. The result isn’t a pool. It’s a quiet room you walk outside to find."}
            </p>
            <div className="col l-wellness__webgl-title text-right">
              <p className="g1 leading-trim gp-harmony-title">
                {"Designed for"}
                <br />
                {"Stillness"}
              </p>
              <p className="text-c1 leading-trim mt-1">
                {"Natural Harmony"}
              </p>
            </div>
          </div>
          <div className="l-wellness__webgl-gradient background background--cover">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  </>;
}
