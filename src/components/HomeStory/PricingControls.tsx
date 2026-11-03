'use client';
import { useId, useState } from 'react';
import RollingText from '@/src/components/RollingText';
import { POOL_COST_BANDS } from './home-content';

/** The sketch and three original GP price bands replace the reference photo selector. */
export default function PricingControls({active: selected,onChange}:{active?:number;onChange?:(index:number)=>void}) {
  const [local,setLocal]=useState(0);
  const active=selected??local;
  const setActive=(index:number)=>onChange?onChange(index):setLocal(index);
  const id = useId().replace(/:/g, '');
  const band = POOL_COST_BANDS[active];
  const poolWidth = 140 + band.length * 12;
  const poolHeight = 65 + band.width * 15;
  const left = (480 - poolWidth) / 2, top = (340 - poolHeight) / 2;
  return <div className="gp-pricing-controls">
    <div className="gp-price-sketch" aria-live="polite">
      <div className="gp-plan-topline"><span>Grand Pools / Design Study</span><span>0{active+1} / 03</span></div>
      <span className="gp-sketch-label">{band.label} Pool</span>
      <span className="gp-plan-subtitle">Indicative Pool Layout</span>
      <svg key={active} viewBox="0 0 480 400" role="img" aria-label={`${band.length} by ${band.width} metre pool${band.spa ? ' with a spa' : ''}`} className="gp-price-plan">
        <defs><pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 10 10 0" stroke="currentColor" strokeWidth="0.4" opacity="0.25"/></pattern></defs>
        <rect x={left - 20} y={top - 20} width={poolWidth + 40} height={poolHeight + 40} rx="3" fill="none" stroke="currentColor" opacity=".35"/>
        <rect x={left} y={top} width={poolWidth} height={poolHeight} rx={band.spa ? 2 : 10} fill={`url(#${id})`} stroke="currentColor" strokeWidth="1.5" />
        {band.spa && <rect x={left + poolWidth - 65} y={top + 10} width="55" height="50" fill="none" stroke="currentColor" />}
        <path d={`M${left} ${top+poolHeight+44}h${poolWidth}m${-poolWidth} -5v10m${poolWidth} -10v10`} fill="none" stroke="currentColor"/>
        <text x="240" y={top+poolHeight+68} textAnchor="middle" fill="currentColor">{band.length} m</text>
        <text x="240" y="370" textAnchor="middle" fill="currentColor">{band.length} × {band.width} m{band.spa ? ' + spa' : ''}</text>
      </svg>
      <div className="gp-plan-spec"><span>{band.length} × {band.width} m</span><p>{band.spec}</p><span>{band.spa?"Pool + Spa":"Concrete Pool"}</span></div>
    </div>
    <div className="gp-price-selection"><p className="gp-eyebrow gp-budget-label">Your Pool, Your Possibilities</p>
      <div role="group" aria-label="Pool price bands" className="gp-price-bands">
        {POOL_COST_BANDS.map((item, index) => <button key={item.label} type="button" className="group btn-underline font-body" aria-pressed={index === active} onClick={() => setActive(index)}><RollingText>{item.label}</RollingText></button>)}
      </div>
      <div aria-live="polite" className="gp-price-detail"><span className="gp-budget-caption">Indicative Investment</span><h3>{band.range}</h3><p>{band.description}</p></div>
      <div className="gp-cost-factors"><h3>What changes the number</h3><p>Water volume and size<br/>Finish and tile system<br/>Site access and logistics<br/>Pool type and structure<br/>Landscaping and decking<br/>Plant and automation packages</p></div>
    </div>
  </div>;
}
