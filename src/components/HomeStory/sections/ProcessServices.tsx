'use client';

import { useRef, useState, type UIEvent } from 'react';

const services = [
  { title: 'Tailor-Made Designs', image: '/menu-about.webp', description: 'Shaped around your site’s contours, natural light, and architecture.' },
  { title: 'Structural Precision', image: '/sliderimage1.webp', description: 'In-house concrete pouring, custom coping, and premium tile finishes.' },
  { title: 'Seamless Handover', image: '/sliderimage2.webp', description: 'Including Pool Care+ setup, equipment guides, and warranty registration.' },
];

/** One native swipe track owns both the selected picture and its caption. */
export default function ProcessServices() {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const select = (index: number) => {
    const element = track.current;
    if (!element) return;
    element.scrollTo({ left: element.clientWidth * index, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const update = (event: UIEvent<HTMLUListElement>) => {
    const element = event.currentTarget;
    const index = Math.max(0, Math.min(services.length - 1, Math.round(element.scrollLeft / Math.max(1, element.clientWidth))));
    setActive(index);
  };
  return <section className="gp-process-services gp-mobile-rise is-hidden--lg-up ui-dark ui-background" id="process-services-mobile" aria-label="Our pool building process">
    <div className="gp-services-gallery mx-layout">
      <ul ref={track} className="gp-services-track" onScroll={update} aria-label="Swipe through our services">
        {services.map(service => <li className="gp-services-slide" key={service.title}>
          <img src={service.image} alt={service.title} width={720} height={900} decoding="async" loading="lazy" />
        </li>)}
      </ul>
      <div className="gp-services-tabs" aria-label="Choose a service">
        {services.map((service, index) => <button key={service.title} type="button" onClick={() => select(index)} aria-pressed={index === active} aria-controls="gp-service-caption">{service.title}</button>)}
      </div>
    </div>
    <div className="gp-services-caption px-layout" id="gp-service-caption" aria-live="polite" aria-atomic="true">
      <div key={active} className="gp-service-copy">
        <h3>{services[active].title}</h3>
        <p>{services[active].description}</p>
      </div>
    </div>
  </section>;
}
