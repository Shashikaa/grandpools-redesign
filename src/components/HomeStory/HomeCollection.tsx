import ProjectsSection from './sections/ProjectsSection';
import PricingSection from './sections/PricingSection';

export default function HomeCollection() {
  return <div className="gp-story js-scroll-parent-ignore gp-collection-story ui-dark">
    <ProjectsSection />
    <PricingSection />
  </div>;
}
