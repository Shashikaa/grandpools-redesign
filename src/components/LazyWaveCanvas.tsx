"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { usePathname } from "next/navigation";
import { prefersReducedMotion } from "@/src/lib/reducedMotion";
import { canUseHomeWebGL } from "./HomeStory/graphics-support";

// The import factory runs only when the desktop-only branch is rendered.
const WaveCanvas = lazy(() => import("./WaveCanvas"));

type LazyWaveCanvasProps = { imageSrc: string; preloaderDone?: boolean; eager?: boolean };

export default function LazyWaveCanvas({ imageSrc, preloaderDone, eager = false }: LazyWaveCanvasProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (pathname !== "/" || (!preloaderDone && !eager) || prefersReducedMotion() || !canUseHomeWebGL()) return;
    const container = containerRef.current;
    if (!container) return;
    const desktopMedia = matchMedia("(min-width:1025px) and (pointer:fine)");
    let observer: IntersectionObserver | undefined;
    const activate = () => {
      if (!desktopMedia.matches) { setShouldRender(false); observer?.disconnect(); return; }
      if (eager) { setShouldRender(true); return; }
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || getComputedStyle(container).visibility === "hidden") return;
        setShouldRender(true);
        observer?.disconnect();
      }, { rootMargin: "180px" });
      observer.observe(container);
    };
    activate();
    desktopMedia.addEventListener("change", activate);
    return () => { observer?.disconnect(); desktopMedia.removeEventListener("change", activate); };
  }, [pathname, preloaderDone, eager]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <img src={imageSrc} alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      {shouldRender && <div className="absolute inset-0">
        <Suspense fallback={null}><WaveCanvas imageSrc={imageSrc} preloaderDone={preloaderDone} /></Suspense>
      </div>}
    </div>
  );
}
