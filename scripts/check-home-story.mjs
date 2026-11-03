import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const directory='src/content/home-story';
const fragments=fs.readdirSync(directory).filter(file=>file.endsWith('.html')).map(file=>fs.readFileSync(path.join(directory,file),'utf8'));
const text=fragments.join('\n');
const failures=[];
for(const forbidden of [/springs\.estate/i,/kinescope/i,/Quadro Room/i,/UNIQ Development/i,/Nature Park/i,/\/assets\/images\//,/\/media\/cache\//]) {
  if(forbidden.test(text))failures.push(`Reference business content or media remains: ${forbidden}`);
}
const paths=new Set([...text.matchAll(/(?:data-)?(?:src|srcset)="(\/[^"{]+)"/g)].map(match=>decodeURIComponent(match[1].split('?')[0])));
for(const url of paths)if(!fs.existsSync(path.join('public',url)))failures.push(`Missing homepage asset: ${url}`);
const js=ts.transpileModule(fs.readFileSync('src/app/projects/[slug]/data.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const source={};new Function('exports',js)(source);
for(const [slug,project] of Object.entries(source.GRAND_POOLS_DATA)){
  if(!project.title||!project.description||!project.images[0])failures.push(`Incomplete project: ${slug}`);
  if(!fs.existsSync(path.join('public',project.images[0])))failures.push(`Missing project hero: ${slug}`);
}
for(const file of fs.readdirSync('public/home-motion/js').filter(file=>file.startsWith('webgl-'))){
  const shader=fs.readFileSync(`public/home-motion/js/${file}`,'utf8');
  if(shader.includes('/assets/'))failures.push(`Reference texture remains in ${file}`);
  for(const match of shader.matchAll(/"(\/(?:home-motion|videos)\/[^"?#]+)"/g)){
    if(!fs.existsSync(path.join('public',match[1])))failures.push(`Missing texture: ${match[1]}`);
  }
}
for(const id of ['about-mobile','wellness-mobile','nature-mobile','l-residences-sticky-2','interiors-2']){
  if(!text.includes(`id="${id}"`)||!text.includes(`data-scroll-target="#${id}"`))failures.push(`Disconnected mobile sticky scene: ${id}`);
}
const nature=fs.readFileSync(path.join(directory,'03-quality.html'),'utf8').split('id="nature-mobile"')[1];
if(!nature?.includes('data-parallax-pattern="natureCaptionMoveUp"'))failures.push('Mobile Nature text mask is disconnected');
const projects=fs.readFileSync(path.join(directory,'04-projects.html'),'utf8');
if(!projects.includes('data-content-animation-controller-selector=":root .js-residences-content-animation-controller"'))failures.push('Mobile project swipe/caption synchronization is disconnected');
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Verified ${paths.size} local homepage media paths, ${Object.keys(source.GRAND_POOLS_DATA).length} real projects, and both GP WebGL texture sets.`);
