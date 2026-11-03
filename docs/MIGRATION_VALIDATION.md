# Release validation

The first HTML-to-React conversion was checked against the old rendered scenes:
572 opening elements and 375 collection elements matched after normalizing only
formatting and equivalent serialized attributes. The present release retains
that conversion and then applies the requested motion fixes in RELEASE_NOTES.md.
It deliberately changes those specified timelines and the mobile service gallery.

## Checks

- Clean dependency installation using the included package-lock.json: passed.
- TypeScript check: passed.
- Homepage asset and component connections: passed; 23 local media paths, all
  five real projects and retained shader dependencies checked.
- Motion/component suite: 31 tests passed.
- Production build: passed; all 21 static/prerendered routes generated.

The full source is installed/tested independently of the earlier working folder.
The ZIP excludes node_modules and generated build caches. Those are recreated by
npm ci and npm run build, and are not missing source files.

## Browser evidence

At 393 × 852:

- Stillness height is 852px, removing its former 1704px container/tail.
- Project introduction height is 852px, removing its former 2556px runway.
  Its slider starts at the intro's bottom (within subpixel rounding), and its
  explanatory paragraph is present.
- The service gallery has three images and three controls. Selecting Structural
  Precision moves its 353px track by one item and displays its matching caption.
- Quality's heading, video and prose transforms/clips change through the held
  timeline as scroll progress advances; the sequence also responds in reverse.

At 1363 × 852:

- The process's final reading checkpoint keeps the column bottom on screen.
- The cost introduction's corrected stop places the image top at 0px. The
  section's 852px reveal crop is fully above the viewport at that stop.
- The Quality scene contains its static image and has no WebGL canvas/plugin.

The cloud browser cannot create a WebGL context. Early initialization and static
fallback behavior can be checked here, but actual water rendering and physical
mobile touch feel still require a GPU-enabled browser/device.

## Archive verification

PROJECT_FILES.sha256 lists the release source/configuration/assets with their
SHA-256 checksums. Before delivery, the ZIP is CRC-tested, extracted, and its
contents compared against that manifest. The saved downloadable copy is checked
again because the previous download was truncated.
