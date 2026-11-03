import HeroSection from './sections/HeroSection';
import ProcessSection from './sections/ProcessSection';
import HarmonySection from './sections/HarmonySection';
import QualitySection from './sections/QualitySection';

/** Server-rendered scene components. No filesystem templates or HTML injection. */
export default function HomeOpening() {
  return <div className="gp-story js-scroll-parent-ignore gp-opening-story ui-dark">
    <div className="gp-process-harmony-sequence">
      <HeroSection />
      <ProcessSection />
      <HarmonySection />
    </div>
    <QualitySection />
  </div>;
}
