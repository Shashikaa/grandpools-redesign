# How the Grand Pools homepage works

## The simple explanation

The page is a series of scenes. A picture can stay in the viewport while text,
video or a new image moves over it. A mask is simply a moving window: it reveals
or hides the picture without moving the whole picture. Scroll distance controls
how far those changes have progressed, so scrolling upward reverses them.

The sections are authored in Next.js React components. React still produces HTML
for the browser; the difference is that you edit reusable TSX components rather
than loading HTML files and replacing strings. Server Components output the
section markup, while Client Components handle controls and animation startup.

## Files to edit

All section paths below are inside src/components/HomeStory/sections/.

| Part | File |
| --- | --- |
| Page metadata and main composition | src/app/page.tsx |
| Hero, Process, Stillness and Quality | src/components/HomeStory/HomeOpening.tsx |
| Projects and Pricing | src/components/HomeStory/HomeCollection.tsx |
| Overall order, runtime startup, pricing state and portals | src/components/HomeStory/HomeStoryFrame.tsx |
| Hero collage and heading | HeroSection.tsx |
| Desktop process and mobile founder panels | ProcessSection.tsx |
| Three mobile service slides and captions | ProcessServices.tsx |
| Designed for Stillness | HarmonySection.tsx |
| Built for Quality and its gallery | QualitySection.tsx |
| Meet the Expert | ExpertsSection.tsx |
| Pool Care app panel | src/components/Appsection.tsx |
| Project introduction and responsive galleries | ProjectsSection.tsx |
| Reusable project photos/cards/navigation items | ProjectItems.tsx |
| Pricing image introduction and control outlets | PricingSection.tsx |
| Interactive price bands and pool diagram | src/components/HomeStory/PricingControls.tsx |
| Ready to Dive In | InvitationSection.tsx and ../InvitationScene.tsx |
| Final enquiry and footer | src/components/SectionCTA.tsx and Footer.tsx |

The actual project records remain in src/app/projects/[slug]/data.ts.
scene-data.ts derives the homepage records from those projects. The hero collage
uses its ordered image array, including intentional repeated pictures.

## One owner for scrolling

The homepage bypasses the site's global Lenis controller. Do not add another
page-wide smoother, wheel observer or CSS vertical page snapping.

On desktop, the retained engine owns a smoothed virtual scroll position. It
translates the content to that position. window.scrollY alone is therefore not
its reading position. runtime.ts exposes window.__gpHomeScroller with scroll,
scrollTo(), start(), stop() and resize(). Header/menu logic, progress and GSAP
panels all use this adapter. Its ScrollTrigger proxy reads the same position.

On mobile/tablet, the browser owns touch scrolling. The adapter reads the native
position. Local ScrollTrigger timelines observe that position; they do not
intercept the gesture or add another scroller. The retained horizontal project
and photo galleries keep their existing swipe controllers.

Other routes retain their existing controllers. Leaving the homepage uses a full
document navigation so its document-level imperative runtime cannot leak input
handlers or a transformed root into another route.

## Desktop timeline markers

The desktop engine reads classes and data attributes from the React output.
Do not remove l-*, js-* or gp-* hooks merely because they are not Tailwind classes.

| Hook | Meaning |
| --- | --- |
| data-plugin="parallax" | Register a scroll-linked animation |
| data-parallax-measure-selector | Choose which scene supplies the measured position |
| data-parallax--…-0 | A keyframe at an engine checkpoint |
| data-parallax-clamp | Keep endpoint values outside the active interval |
| data-parallax-enable-mq | Enable only in the intended responsive mode |
| data-parallax-pattern | Use a named timeline from the motion configuration |
| data-scroll-sticky / data-scroll-target | Hold a layer inside its scene |
| data-scroll-snap-point | An authored resting position |
| data-plugin="mobileScrollable" | A retained native horizontal gallery |
| data-content-animation-controller-selector | Connect a gallery and its caption |

motionData() only serializes an object into the JSON attribute the engine expects.
The keyframe notation is an engine measurement convention, not milliseconds.

Conceptually, an interval works like this:

    progress = clamp((scroll - start) / (end - start), 0, 1)
    currentValue = startValue + progress × (endValue - startValue)

Opacity fades; translate moves; scale zooms; clip-path changes the visible window.
The engine measures actual start/end positions from its markers and layout.

The desktop process pattern is in motion-config.js. The public copy in
public/home-motion/js/ is loaded by runtime.ts; keep it synchronized with the
readable source copy. The final reading position is now held until handoff,
instead of moving the last lines off screen during an empty wait.

## Mobile scene logic

mobile-scenes.ts installs a scoped GSAP matchMedia context at widths up to 1024px.
It cleans up its own triggers/styles when that media mode is left. It uses CSS
sticky where a scene must hold; it creates no ScrollTrigger pin spacers.

- Process: the opening image holds behind the incoming founder panel. Panel crops,
  the founder text, engineering text and image rise into view while scrolling.
- Service gallery: ProcessServices owns one active React index. Swiping its native
  scroll-snap track or choosing a tab selects the same image/caption. Exactly three
  slides exist. A short whole-block caption transition replaces character motion.
- Stillness: one viewport, with an entering background zoom and caption rise.
  There is no extra blank reading hold after it.
- Quality: a three-viewport container holds one viewport of artwork. The remaining
  two viewports drive the inner story: title fades → video/prose rise → first
  background wipes → video/prose move up → the following gallery enters.
- Gallery, Expert and App: rising crops, background movement and copy/phone reveals
  continue the section entrances without preventing natural touch scrolling.
- Projects: its introduction contains the desktop paragraph. It stays sticky inside
  a wrapper shared with the actual slider. The slider immediately rises over it;
  no unused multi-screen runway sits between them.

Height in an animated scene is deliberate only when something changes over that
distance. Adding height to fix a clipped panel can instead create dead scrolling.
Use actual content height for the app, service caption and pricing study.

Reduced-motion users keep readable static content. The Quality scene collapses
into ordinary content flow rather than reserving an unused animation runway.

## Snapping and the progress line

Desktop input still reaches the retained engine. After a 250ms pause, runtime.ts
collects visible authored checkpoints and scroll-model.ts chooses a destination.
Tiny corrections stay direct, a normal gesture settles the next beat, and a long
gesture settles near the requested destination. Reverse input uses the same
ordered points backward. The old compiled selector is disabled to avoid competing
snap decisions. Native mobile touch does not use this desktop snap selector.

The pool-cost photo has a one-viewport outer reveal crop. Its resting point must
therefore be 100% of its intro viewport, not 80%, or a strip of the preceding
section remains visible at the stop. The pricing controls have their own later
checkpoint after their full mask opens.

PageProgress reads the same active scroll position and total scrollable distance,
including the footer. It is only an indicator, not another scroll controller.

## WebGL and image fallbacks

Stillness's desktop water scene mounts under the preloader in eager mode. Its
module, image texture and shader initialize before the reader reaches Stillness.
A static photograph stays underneath until its canvas has rendered. The graphics
support probe runs once; unsupported devices and reduced motion keep the photo.

Built for Quality uses its full-resolution photograph directly. That section has
no WebGL plugin or canvas. Its desktop masks animate the image normally.

## React state and layout measurements

HomeStoryFrame owns the selected price band and portals PricingControls into the
responsive outlets. The invitation underlay receives the same selection. Height
changes notify the shared adapter so later scenes are measured again.

The project gallery's retained controller synchronizes its image and caption.
project-navigation.ts keeps a window of three names around the active project;
all five existing projects remain available.

Opening menus/modals or showing the preloader stops the adapter. Closing them
starts the same adapter. Do not start a second controller to resume scrolling.

## Styling and safe handover

Tailwind is installed and used for the GP component layout/typography utilities.
The specialized home-story.css and public/home-motion/*.css remain because their
grid, masks, responsive rules and measured geometry are part of the design.
Converting markup to React does not require replacing those rules with new values.

Change text in its section file. Change projects in the project data file. Change
pricing records in home-content.ts. Check phone portrait, tablet portrait and
desktop after geometry changes, including forward/reverse scroll, service/project
swipes, menu locks and the entire pricing-to-footer sequence.

Run npm run typecheck, npm run check:home, npm run test:motion and npm run build.
Read RELEASE_NOTES.md for this update and MIGRATION_VALIDATION.md for checks.

A briefing to give another developer:

> This is a full Next.js/React project with TSX homepage scenes. Desktop uses the
> retained virtual scroller and data-keyframe masks; mobile uses native scrolling
> with scoped GSAP scene timelines. Keep one scroll owner, preserve the DOM hooks
> and distinguish active animation runway from unwanted blank space. Use the
> shared adapter for desktop position. Service slides are React-controlled, while
> project galleries retain their existing synchronized swipe controller.
