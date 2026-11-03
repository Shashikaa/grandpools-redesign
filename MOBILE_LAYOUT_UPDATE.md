# Homepage mobile layout fixes

This is the complete project folder, based on the latest merged Springs-style homepage.

- Mobile hero: restored the gradient over the pool collage.
- Mobile eyebrows: retained title case and tightened their heading spacing.
- Mobile Process: removed “From Site Appraisal to Handover” and the repeated service list; retained the founder paragraph, engineering paragraph, single image and swipe images.
- Moved the four-service swipe gallery immediately after Process, before Designed for Stillness. Its image/caption controller remains synchronized.
- Built for Quality uses camberwell3.webp on mobile, desktop WebGL and the static desktop fallback. Both masked secondary backgrounds use the sharper hero-murray.webp photograph.
- Added space after the quality gallery before Meet the Expert.
- The app mockup reserves its image dimensions. The app section grows with its content, and Projects begins after its full height.
- The desktop project introduction reveals earlier. Mobile project images are shorter and the name strip shows three names at a time; all five projects remain selectable, with the active name following the selected photo and caption.
- The full pricing study slides above its introductory photo. Its diagram and all controls keep their natural height; the price/factor headings have readable contrast on the light panel.
- Ready to Dive In follows the complete pricing study. The CTA and footer then slide above the invitation.

The existing mobile sticky zooms, Nature masks, swipe galleries, shared header,
menu, forms, footer, and bottom progress indicator are retained. Other route
layouts were not redesigned. App image dimensions are also available to other
routes using that shared component.

## Run

Use Node.js 20.9 or newer:

    npm ci
    npm run dev

Production:

    npm run build
    npm start

## Verification

Production build, TypeScript, homepage local-media check, 17 motion tests and
6 homepage checkpoint tests passed. Browser checks used 393 × 852 and
768 × 1024 frames, covering the repaired section order, app sizing, three-name
navigation, synchronized project caption, pricing band changes and ending
geometry. Desktop fallback photography was checked; the project intro reveal
starts earlier in its entrance and uses a shorter reveal duration.

The cloud browser cannot create WebGL contexts, so GPU appearance and physical
phone touch momentum still need a device check. No contact form was submitted.
The archive excludes dependencies, build caches, Git metadata and old backup ZIPs.
