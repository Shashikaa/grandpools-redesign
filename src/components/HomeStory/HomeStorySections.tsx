import {
  HeroScene,
  ProcessScene,
  HarmonyScene,
  QualityScene,
  ProjectsScene,
  PricingScene,
  StoryRollingLink,
} from './scenes';

export {
  HeroScene,
  ProcessScene,
  HarmonyScene,
  QualityScene,
  ProjectsScene,
  PricingScene,
  StoryRollingLink,
};

/**
 * Combined Opening Story (`HeroScene`, `ProcessScene`, `HarmonyScene`, `QualityScene`).
 */
export function OpeningStory() {
  return (
    <div
      className="gp-story js-scroll-parent-ignore gp-opening-story ui-dark"
      suppressHydrationWarning
    >
      <HeroScene />
      <ProcessScene />
      <HarmonyScene />
      <QualityScene />
    </div>
  );
}

/**
 * Combined Collection Story (`ProjectsScene`, `PricingScene`).
 */
export function CollectionStory() {
  return (
    <div
      className="gp-story js-scroll-parent-ignore gp-collection-story ui-dark"
      suppressHydrationWarning
    >
      <ProjectsScene />
      <PricingScene />
    </div>
  );
}
