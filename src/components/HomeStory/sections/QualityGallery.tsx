'use client';
import { useRef, useState } from 'react';
const photos = [
  { image:'/camberwell3.webp', caption:'Our commitment to quality, durability, clear communication, and a seamless process ensures your pool is built to last and exceeds expectations.' },
  { image:'/sliderimage1.webp', caption:'Expert craftsmanship and attention to detail bring your vision to life, delivering seamless pool solutions from concept to completion.' },
  { image:'/camberwell.webp', caption:'At Grand Pools, we create custom swimming pools that balance style, function, and quality. Each pool is designed to complement its outdoor setting while adding lasting value and elegance to your home or business.' },
];
export default function QualityGallery() {
  const track = useRef<HTMLUListElement>(null);
  const [active,setActive] = useState(0);
  return <section className="gp-quality-gallery is-hidden--lg-up ui-dark ui-background" aria-label="Pool craftsmanship gallery">
    <div className="gp-quality-captions px-layout" aria-live="polite" aria-atomic="true">
      {photos.map((photo,index)=><p key={photo.image} aria-hidden={index !== active} style={{visibility:index===active?'visible':'hidden'}}>{photo.caption}</p>)}
    </div>
    <div className="mx-layout">
      <ul ref={track} className="gp-quality-photo-track" onScroll={event=>{const el=event.currentTarget;setActive(Math.max(0,Math.min(photos.length-1,Math.round(el.scrollLeft/Math.max(1,el.clientWidth)))));}}>
        {photos.map(photo=><li key={photo.image}><img src={photo.image} alt="Grand Pools completed swimming pool" width={640} height={760} loading="lazy" decoding="async" /></li>)}
      </ul>
      <div className="gp-quality-photo-tabs" aria-label="Choose a pool photograph">
        {photos.map((photo,index)=><button key={photo.image} type="button" aria-label={`View pool photograph ${index+1}`} aria-pressed={active===index} onClick={()=>track.current?.scrollTo({left:index*track.current.clientWidth,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})} />)}
      </div>
    </div>
  </section>;
}
