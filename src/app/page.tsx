import type { Metadata } from "next";
import HomeStoryFrame from "@/src/components/HomeStory/HomeStoryFrame";
import HomeOpening from "@/src/components/HomeStory/HomeOpening";
import HomeCollection from "@/src/components/HomeStory/HomeCollection";
import { HERO_MEDIA, HERO_TILE_SIZES } from "@/src/components/HomeStory/hero-media";
import "@/src/components/HomeStory/home-story.css";

export const metadata: Metadata = {
  title: {
    absolute: "Grand Pools",
  },

  description:
    "Grand Pools designs and builds custom swimming pools across Melbourne, combining thoughtful design, quality construction and lasting functionality.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Grand Pools",
    description:
      "Discover custom swimming pools designed and built for beautiful Melbourne homes.",
    url: "/",
    siteName: "Grand Pools",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Pools custom swimming pool in Melbourne",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grand Pools",
    description:
      "Discover custom swimming pools designed and built for beautiful Melbourne homes.",
    images: ["/og-image.jpg"],
  },
};

/** Server Components render the scene markup; the client frame owns motion. */
export default function HomePage() {
  return <>
    {(['/hero-home.webp', '/pool-courtyard-bg.webp', '/camberwell3.webp', '/sliderimage1.webp'] as const).map(src => <link key={src} rel="preload" as="image" href={HERO_MEDIA[src].src} imageSrcSet={HERO_MEDIA[src].srcSet} imageSizes={HERO_TILE_SIZES} />)}
    <link rel="stylesheet" href="/home-motion/global.css" />
    <link rel="stylesheet" href="/home-motion/landing.css" />
    <HomeStoryFrame opening={<HomeOpening />} collection={<HomeCollection />} />
  </>;
}
