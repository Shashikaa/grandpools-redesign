# Hero loading and desktop gradient

The original 12 unique hero photographs totalled 3,194,080 bytes. Dedicated
responsive WebP copies now live in `public/home-hero/`. The 480px set is
338,534 bytes (89.4% smaller); the 960px set is 1,048,200 bytes (67.2% smaller).
These are asset-set comparisons, not a measured network speed guarantee.
The browser chooses a candidate for the tile width and device pixel ratio.
The split entrance can select a larger version than a gallery tile.

`HeroSection.tsx` renders one picture per collage tile instead of separate
hidden mobile/desktop copies. Native `srcset` and `sizes` are present in server
markup. Eager loading and async decoding start before the animation runtime.
Hero tiles no longer wait for the imperative appear/lazy visibility plugin.
The first four preloads use the same responsive candidates as the images.
The six entrance masks, collage order and motion controllers are preserved.

The mobile linear shade and existing radial hero gradient are enabled on
desktop, with opacity 1 and the caption above the shade.

Regenerate the dedicated images after replacing an original photograph:

```sh
npm ci
npm run optimize:hero
```

The generation script uses Sharp supplied with Next.js and writes both the
responsive assets and `hero-media.ts`. Original images used elsewhere are
retained. Generated images are already included; deployment needs no extra step.

Validation: TypeScript, 52 local media paths, all 31 motion/component checks
and the 21-route production build passed. Desktop browser inspection confirmed
all 25 hero image elements loaded optimized candidates, no appear plugin on
hero tiles, gradient opacity 1 and caption z-index 2.

Mobile browser inspection at 393 × 852 confirmed all 25 image elements loaded
480px candidates and retained the mobile gradient.
