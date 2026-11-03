import type { Metadata } from "next";
import HomeStoryFrame from "@/src/components/HomeStory/HomeStoryFrame";
import { getHomeStoryMarkup } from "@/src/components/HomeStory/story-markup";
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

/**
 * Grand Pools content is server-rendered into the retained scene structure.
 * Shared components remain React components outside the opaque motion fragments.
 */
export default function HomePage() {
  const { opening, collection } = getHomeStoryMarkup();
  return <>
    <link rel="stylesheet" href="/home-motion/global.css" />
    <link rel="stylesheet" href="/home-motion/landing.css" />
    <HomeStoryFrame
      opening={<div key="opening" className="gp-story js-scroll-parent-ignore gp-opening-story ui-dark" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: opening }} />}
      collection={<div key="collection" className="gp-story js-scroll-parent-ignore gp-collection-story ui-dark" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: collection }} />}
    />
  </>;
}
