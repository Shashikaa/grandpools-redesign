# Grandpools homepage — Full Next.js TSX Conversion

Complete Next.js homepage refactor replacing `src/content/home-story/*.html` and `story-markup.ts` (`dangerouslySetInnerHTML`) with modular Next.js React/TSX components and typed content data, while preserving 100% of scroll animations, WebGL masks, GSAP SplitText entrances, and desktop/mobile layouts.

## How to Use with Your Repository

1. Extract this folder directly into your `grandpools-redesign` project root (so `public/` images, videos, fonts, and other routes remain in place).
2. Run the cleanup helper to remove the old `.html` files and `story-markup.ts`:
   ```sh
   node apply-nextjs-home.mjs
   ```
3. Verify and start the dev server:
   ```sh
   npm run check:home
   npm run dev
   ```

## Modular Next.js Architecture

- `src/app/page.tsx` — Server-renders `<OpeningStory />` and `<CollectionStory />` directly inside `<HomeStoryFrame />` without `dangerouslySetInnerHTML`.
- `src/components/HomeStory/home-content.ts` — Strongly-typed content store for all homepage copy, headings, eyebrows, images, videos, process pillars, quality slides, and pricing bands.
- `src/components/HomeStory/scenes/HeroScene.tsx` — Replaces `00-hero.html`.
- `src/components/HomeStory/scenes/ProcessScene.tsx` — Replaces `01-process.html`.
- `src/components/HomeStory/scenes/HarmonyScene.tsx` — Replaces `02-harmony.html`.
- `src/components/HomeStory/scenes/QualityScene.tsx` — Replaces `03-quality.html`.
- `src/components/HomeStory/scenes/ProjectsScene.tsx` — Replaces `04-projects.html`, `project-slide.html`, `project-card.html`, `project-mobile-image.html`, and `project-mobile-card.html`.
- `src/components/HomeStory/scenes/PricingScene.tsx` — Replaces `05-pricing.html`.
- `src/components/HomeStory/scenes/StoryPrimitives.tsx` — Shared `<StoryRollingLink />` and media query constants.
- `src/components/HomeStory/HomeStorySections.tsx` — Combines the modular scenes into `<OpeningStory />` and `<CollectionStory />`.
