# Complete React homepage update

## Mobile

- The process story keeps its three panels, with rising crops/entrances as they
  enter. The opening photo holds behind the incoming founder panel.
- The service gallery is a React component with exactly three slides. A native
  horizontal swipe track updates one selected index for both tabs and caption.
  The separate Pool Care+ slide is removed. Captions use a short whole-block fade
  instead of the old character animation.
- Designed for Stillness uses one viewport instead of its unused sticky tail.
- Built for Quality has an explicit reversible native-scroll timeline: heading
  fades, video and prose rise into view, the background wipes, then video/prose
  move upward. Its two extra viewports are active animation distance.
- The Quality gallery, expert and app panels receive scroll-linked entrances.
- The project introduction includes the desktop paragraph. It holds while the
  actual slider rises over it, with no empty intermediate runway.
- Rolling project-button labels have a fixed line height and underline offset.

## Desktop

- The process reading column holds its final readable position rather than
  travelling off the top during an empty wait. Its section is shortened from
  700vh to 600vh so Stillness enters earlier.
- Stillness mounts its desktop water renderer under the preloader. Its code,
  texture and shader initialization no longer wait until 180px from visibility.
  A photograph remains visible until the GPU scene is ready. Unsupported GPUs
  and reduced-motion mode retain the photographic fallback.
- Built for Quality renders its photograph directly, with no WebGL plugin or
  canvas in that section. Its existing desktop masks are retained.
- The pool-cost introduction's snap point moves from 80% to 100%, so its top
  completely covers the preceding project before scrolling settles. Hidden
  responsive branches no longer contribute snap points.

## Folder and implementation

- Homepage scenes use actual Next.js/React TSX components. No filesystem-loaded
  HTML fragments or HTML-string project templating remain.
- All active routes, five projects, shared components, local assets, package
  lockfile, configuration and the scroll handover guide are included.
- The previous saved ZIP was truncated. This release is rebuilt with a file
  checksum manifest and verified as a complete archive.
- No deployment or GitHub push is performed by this folder update.
