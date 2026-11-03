# Grandpools homepage — Springs layout and motion merge

Complete Next.js project; homepage changes only. Existing GP shared header,
menu, fonts, rolling underline buttons, loaders, contact form and footer remain.

## Run

Use Node.js 20.9 or newer. Extract into a fresh folder:

```sh
npm ci
npm run dev
```

Production: `npm run build`, then `npm start`.

## This update

- Opening collage uses completed GP pool photographs. The process scene uses
  distinct indoor pool photography and completed project images on its right.
- Eyebrows use title case and sit close to their corresponding headings.
  Section Two restores the missing lower-right engineering paragraph and its
  scroll-linked exit. The supplied GP staggered content column is retained with
  tighter heading/paragraph spacing.
- Harmony retains the original GP LazyWaveCanvas/video and middle-right text
  stack. Quality has two complete, body-sized paragraphs in its incoming panel.
  The secondary gallery uses finished pool photos with a dark prose backdrop.
- Projects has a photographic introduction, eyebrow, title and paragraph.
  Desktop cards reserve space for two-line titles and expand to fit the full
  description on hover/focus without internal scrollbars. The progress line
  and original GP text button remain.
- The cost configurator has a photographic drawing-board treatment, fine grid,
  numbered studies and three GP controls. Selection updates the sketch, spa,
  dimensions, range and original descriptions.
- Dive In retains the GP photographs and opposing panels. A synchronized copy
  of the selected cost study fills the transparent space between those panels.
  CTA and footer form one incoming panel after the invitation story completes.
- The bottom progress track is a read-only indicator, with no pointer or
  keyboard seeking.

- Hero copy stays visible without entrances. Other desktop copy reveals at
  its own reading phase. The process column finishes before the next scene,
  and the cost title stays visible through its introduction.
- The quality prose panel restores a taller height and slightly larger text.
- Mobile and tablet use the retained Springs responsive markup and engine.
  Sticky image zooms, the Nature text/photo mask, scroll-linked exits and
  synchronized swipe galleries are restored, with all five real GP projects.
  The separate stacked mobile redesign has been removed.

## Scroll architecture

On desktop, the retained Springs engine still owns input easing and scene masks. Previous
per-input wheel caps and the narrow snap radius have been removed. There is
one gesture-end destination selector, which reads authored animation beats in
layout order, including expert/app and every project. Normal gestures settle
the next beat; tiny corrections remain direct; deliberate long travel settles
near its destination instead of rewinding through scenes. A 250ms input pause
starts settling through the retained engine. No second smooth-scroll library
runs on the homepage. Other routes retain their original controllers.

`src/components/HomeStory/scroll-model.ts` contains the checkpoint policy;
`runtime.ts` measures real layout positions and bridges scrolling to GP scenes.
Scene HTML is in `src/content/home-story/`. Source project data remains in
`src/app/projects/[slug]/data.ts`. Development refresh reloads the document if
opaque scene markup is replaced, avoiding stale animation-plugin bindings.

## Checks and limits

Validation: homepage local-media check, TypeScript, motion-script syntax,
checkpoint regression tests (`node --test scripts/home-snap.test.mjs`) and
production build. Browser checks cover checkpoint settling, read-only progress,
copy placement, card expansion, pricing selection, ending-panel geometry and
390px/768px responsive layouts, mobile Nature masking and project swipe/caption synchronization.

This cloud browser cannot render WebGL. The original GP GPU implementation is
wired in and keeps a photo fallback; GPU appearance needs checking on a browser
with graphics support. Exact subjective scroll feel and mobile touch momentum
also need physical-device verification. This is a GP content adaptation of the
reference, not a certified pixel-identical rendering.

Contact submissions were not sent; the original endpoint is retained. The app
link retains its existing placeholder. No repository push or deployment made.
The ZIP excludes dependencies, build files, Git history and old nested archives.
