'use client';
import {useEffect,useRef,useState, type ReactNode} from 'react';
import Link from 'next/link';
import RollingText from '@/src/components/RollingText';
import CTA from '@/src/components/SectionCTA';
import Footer from '@/src/components/Footer';
import {GRAND_POOLS_DATA} from '@/src/app/projects/[slug]/data';
import PricingControls from './PricingControls';
import PageProgress from './PageProgress';
const quality=['At Grand Pools, we focus on every detail to deliver exceptional results, combining innovative design, modern technologies, premium materials, and proven construction techniques.','Our commitment to quality, durability, clear communication, and a seamless process ensures your pool is built to last and exceeds expectations.'];
const engineering='From structural engineering to final wet-testing, we construct custom concrete pools engineered for Melbourne properties.';
const budget='These bands help you check a budget. They aren’t a quote. Send us your yard size and we’ll confirm a number within a day.';
const invitation='Unwind in a space designed around your lifestyle. From morning laps in clear, sunlit waters to quiet evenings by the poolside, every detail is crafted to offer an effortless escape at home. Take your time, set your own rhythm, and enjoy resort-quality living in your own backyard.';
function Photo({src,alt}:{src:string;alt:string}){return <figure className="gp-mobile-visual" data-mobile-reveal><img src={src} alt={alt} loading="lazy"/></figure>}
function Heading({eye,children}:{eye:string;children:ReactNode}){return <><p className="gp-mobile-eyebrow">{eye}</p><h2>{children}</h2></>}
function PoolLink({href,children}:{href:string;children:string}){return <Link className="group btn-underline font-body" href={href}><RollingText>{children}</RollingText></Link>}
export default function MobileHome({ready}:{ready:boolean}) {
  const root=useRef<HTMLDivElement>(null);
  const [band,setBand]=useState(0);
  useEffect(()=>{
    if(!ready||!root.current)return;
    const host=root.current,reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
    host.classList.add('gp-mobile-motion-ready');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    host.querySelectorAll('[data-mobile-reveal]').forEach(el=>reduced?el.classList.add('is-visible'):observer.observe(el));
    let queued=false;
    const update=()=>{
      queued=false;
      if(!reduced)host.querySelectorAll<HTMLElement>('.gp-mobile-visual').forEach(el=>{
        const box=el.getBoundingClientRect();
        if(box.bottom>0&&box.top<innerHeight)el.style.setProperty('--mobile-shift',`${(box.top/innerHeight-.5)*-16}px`);
      });
      window.dispatchEvent(new CustomEvent('grandpools:scroll',{detail:{y:window.scrollY}}));
    };
    const scroll=()=>{if(!queued){queued=true;requestAnimationFrame(update)}};
    update();window.addEventListener('scroll',scroll,{passive:true});
    return()=>{observer.disconnect();window.removeEventListener('scroll',scroll)};
  },[ready]);
  return <div ref={root} className="gp-mobile-home">
    <section className="gp-mobile-hero" aria-label="Grand Pools"><img className="gp-mobile-cover" src="/hero-murray.webp" alt="Completed Grand Pools concrete swimming pool" fetchPriority="high"/><div className="gp-mobile-shade"/><div className="gp-mobile-hero-copy"><p>Grounded in 25 years of master craftsmanship, we build bespoke swimming pools designed to seamlessly integrate with your home’s architecture and landscape.</p><h1>Custom Concrete Pools,<br/>Built for Melbourne</h1><PoolLink href="/projects">See Our Projects</PoolLink></div></section>
    <section className="gp-mobile-section gp-mobile-process" id="mobile-process">
      <div data-mobile-reveal><Heading eye="Bayside & Mornington Peninsula">One Pool<br/>at a Time</Heading><p>{engineering}</p></div>
      <Photo src="/reayhero.webp" alt="Completed indoor Grand Pools project"/>
      <div className="gp-mobile-process-story" data-mobile-reveal><p>Founder Lachlan Deleeuw brings over 25 years of structural construction experience to custom Bayside builds, managing every project from site appraisal to handover.</p><div><h3>Tailor-Made Designs</h3><p>Shaped around your site's contours, natural light, and architecture.</p></div></div>
      <Photo src="/p6.avif" alt="Architectural concrete pool detail in Toorak residence"/>
      <div className="gp-mobile-process-story" data-mobile-reveal><div><h3>Structural Precision</h3><p>In-house concrete pouring, custom coping, and premium tile finishes.</p></div><div><h3>Seamless Handover</h3><p>Including Pool Care+ setup, equipment guides, and warranty registration.</p></div></div>
    </section>
    <section className="gp-mobile-harmony"><img className="gp-mobile-cover" src="/ForestMob.webp" alt="Natural landscape surrounding a tranquil pool" loading="lazy"/><div className="gp-mobile-shade"/><div data-mobile-reveal><Heading eye="Natural Harmony">Designed for Stillness</Heading><p>Designed to disappear into the landscape, not announce itself. The result isn't a pool. It's a quiet room you walk outside to find.</p></div></section>
    <section className="gp-mobile-section gp-mobile-quality"><div data-mobile-reveal><Heading eye="Designed for You">Built for Quality</Heading><p>We turn ambitious architectural visions into enduring aquatic retreats, tailored specifically to how you live.</p></div><Photo src="/secninebg.webp" alt="Grand Pools swimming pool at dusk"/><div className="gp-mobile-quality-card" data-mobile-reveal>{quality.map(p=><p key={p}>{p}</p>)}</div><Photo src="/camberwell3.webp" alt="Completed pool and landscaping in Camberwell"/></section>
    <section className="gp-mobile-section gp-mobile-expert"><div data-mobile-reveal><Heading eye="Meet the Experts">Lachlan Deleeuw</Heading></div><Photo src="/meetexpert.webp" alt="Lachlan Deleeuw, founder of Grand Pools"/><div data-mobile-reveal><p className="gp-mobile-eyebrow">Founder – Grand Pools</p><p>Grand Pools founder Lachlan Deleeuw brings expert craftsmanship and tailored creativity to luxury pool builds, transforming backyards across Melbourne and the Bayside Region.</p><h3>Our Partners</h3><div className="gp-mobile-partners">{['Socure','Cedar','Airtable','Culture Amp'].map((name,index)=><img key={name} src={`/partners/logo${index+1}.svg`} alt={name} loading="lazy"/>)}</div></div></section>
    <section className="gp-mobile-section gp-mobile-app"><div data-mobile-reveal><Heading eye="Grand Pools+">Follow Your Pool Journey</Heading></div><img className="gp-mobile-phone" src="/app.png" alt="Pool Care+ mobile app" loading="lazy"/><div data-mobile-reveal><p>Once your pool is completed, Grand Pools' Pool Care+ will show you how to use and look after your pools, as well as contain your equipment and warranty register. All in one place.</p><a href="#" className="group btn-underline font-body"><RollingText>DOWNLOAD</RollingText></a></div></section>
    <section className="gp-mobile-section gp-mobile-projects"><div data-mobile-reveal><Heading eye="Custom Pools, Crafted for Melbourne">Our Projects</Heading><p>At Grand Pools, we create custom swimming pools that balance style, function, and quality. Each pool is designed to complement its outdoor setting while adding lasting value and elegance to your home or business.</p></div>
      {Object.entries(GRAND_POOLS_DATA).map(([slug,project],index)=><article key={slug} className="gp-mobile-project"><Photo src={project.images[0].startsWith('/')?project.images[0]:`/${project.images[0]}`} alt={`${project.title} swimming pool by Grand Pools`}/><div data-mobile-reveal><span className="gp-mobile-project-number">0{index+1} / 05</span><h3>{project.title}</h3><p className="gp-mobile-eyebrow">{project.category}</p><p>{project.description}</p><PoolLink href={`/projects/${slug}`}>Explore Project</PoolLink></div></article>)}
    </section>
    <section className="gp-mobile-cost-intro"><img className="gp-mobile-cover" src="/service3.webp" alt="Completed Grand Pools courtyard pool" loading="lazy"/><div className="gp-mobile-shade"/><div data-mobile-reveal><Heading eye="A Clear Starting Point">What a<br/>pool costs</Heading><p>{budget}</p></div></section>
    <section className="gp-story gp-mobile-cost"><PricingControls active={band} onChange={setBand}/></section>
    <section className="gp-mobile-invitation"><img className="gp-mobile-cover" src="/secninebg.webp" alt="Poolside retreat at dusk" loading="lazy"/><div className="gp-mobile-shade"/><div data-mobile-reveal><h2>Ready to Dive In?</h2><p>{invitation}</p></div></section>
    <div className="gp-mobile-closing"><CTA/><Footer/></div><PageProgress ready={ready}/>
  </div>;
}
