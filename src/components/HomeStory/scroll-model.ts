/** Select one authored animation beat after an input gesture, in either direction. */
export function chooseCheckpoint(start:number, target:number, stops:number[], viewport:number):number|null {
  const direction=Math.sign(target-start);
  if(!direction || Math.abs(target-start)<28) return null;
  const candidate=direction>0 ? stops.find(p=>p>start+8) : [...stops].reverse().find(p=>p<start-8);
  if(candidate===undefined) return null;
  const gap=Math.abs(candidate-start);
  const threshold=Math.min(48,Math.max(28,gap*.025));
  if(Math.abs(target-start)<threshold) return null;
  // Normal gestures finish the next beat. A deliberate fast scroll that has
  // already crossed it settles near the user's destination instead of rewinding.
  if(direction*(target-candidate)>viewport*.65) {
    return stops.reduce((best,p)=>Math.abs(p-target)<Math.abs(best-target)?p:best,candidate);
  }
  return candidate;
}
export function orderedCheckpoints(points:number[], maximum:number):number[] {
  return [...new Set(points.filter(Number.isFinite).map(p=>Math.round(Math.max(0,Math.min(maximum,p)))) )].sort((a,b)=>a-b);
}
