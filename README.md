# Grand Pools

This is the full standalone source project, not a patch: it includes all pages,
shared components, public images/videos/fonts, motion assets, package lockfile and
configuration. It does not require copying files from an earlier download.

Complete Next.js 16 / React 19 project with Tailwind CSS 4 and the existing
scroll-driven homepage. Homepage sections are now `.tsx` components: no HTML
fragment files, template replacement or filesystem reads in the page renderer.

## Run

Use Node.js 20.9 or newer. Extract into a fresh folder:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production:

```sh
npm run build
npm start
```

See `PROJECT_FILES.sha256` for the complete release file list and checksums.

The first build needs network access for the existing Google font. Dependencies
and build caches are intentionally excluded from the project ZIP.

## Understand and edit the homepage

Read [the homepage handover guide](docs/HOMEPAGE_GUIDE.md). It explains the
section components, desktop and mobile scroll ownership, sticky/mask timelines,
snapping, React controls, styling, content editing and safe maintenance.

The HTML-to-React conversion preserves the scene structure, copy and photographs.
The additional requested motion and spacing repairs are listed in
[release notes](docs/RELEASE_NOTES.md). Tailwind remains in use for the GP components;
the specialized scene styles and retained motion engine remain because their
selectors and measurements are part of the existing animation behavior.

This is a component conversion, not a replacement scroll engine. Other routes
keep their existing components and controllers.

## Validate

```sh
npm run typecheck
npm run check:home
npm run test:motion
npm run build
```

`check:home` renders the real React sections and verifies their local assets and
mobile animation connections. The motion suite includes the homepage checkpoint
and component-contract tests. See [migration validation](docs/MIGRATION_VALIDATION.md)
for the preservation comparison and cleanup details.

All project assets, local fonts, other routes and the existing contact integration
are included. The download does not push to GitHub or deploy the site. Contact
submissions and the existing app-download placeholder were not changed.
