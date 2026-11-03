import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderSection, renderHomeScenes, loadSource } from './lib/render-home.mjs';

const projects = loadSource('src/components/HomeStory/scene-data.ts').HOME_PROJECTS;
const decode = text => text.replaceAll('&quot;', '"').replaceAll('&amp;', '&').replaceAll('&#x27;', "'");

test('the homepage renders React components without filesystem HTML templates or injection', () => {
  const page = fs.readFileSync('src/app/page.tsx', 'utf8');
  assert.match(page, /opening={<HomeOpening\s*\/>}/);
  assert.match(page, /collection={<HomeCollection\s*\/>}/);
  assert.doesNotMatch(page, /dangerouslySetInnerHTML|readFileSync|story-markup/);
  assert.equal(fs.existsSync('src/content/home-story'), false);
  assert.equal(fs.existsSync('src/components/HomeStory/story-markup.ts'), false);
});

test('the hero keeps its masks and photographs with responsive browser-discovered images', () => {
  const hero = renderSection('HeroSection');
  assert.equal((hero.match(/class="l-gallery__item__mask-list__item gallery-animation-item"/g) || []).length, 6);
  assert.equal((hero.match(/js-gallery-item"/g) || []).length, 19);
  assert.match(hero, /fetchPriority="high"/i);
  assert.equal((hero.match(/<img\b/g) || []).length, 25);
  assert.doesNotMatch(hero, /data-plugin="appear"|data-src=|is-invisible--js/);
  const media = loadSource('src/components/HomeStory/hero-media.ts').HERO_MEDIA;
  for (const item of Object.values(media)) {
    assert.ok(hero.includes(item.src));
    assert.ok(item.variants[0].bytes < item.originalBytes);
    for (const variant of item.variants) assert.ok(fs.existsSync(`public${variant.src}`));
  }
  assert.match(hero, /aria-label="See Our Projects"/);
});

test('each real project keeps a desktop card, mobile card, image and matching number', () => {
  const html = renderSection('ProjectsSection');
  assert.equal((html.match(/class="gp-project-thumb /g) || []).length, projects.length);
  for (const project of projects) {
    assert.ok(html.includes(`href="${project.href}"`));
    assert.equal((html.match(new RegExp(`data-content-animation-item="${project.number}"`, 'g')) || []).length, 1);
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
    assert.equal(images.filter(tag => tag.includes(`alt="${project.title} swimming pool by Grand Pools"`) && tag.includes(`src="${project.image}"`)).length, 2);
  }
  const frames = [...html.matchAll(/data-parallax--\d+-0="([^"]+)"/g)];
  assert.ok(frames.length >= projects.length * 3);
  for (const [, value] of frames) assert.doesNotThrow(() => JSON.parse(decode(value)));
});

test('mobile process has exactly three service slides before Harmony with one React caption', () => {
  const process = renderSection('ProcessSection');
  assert.doesNotMatch(process, /From Site Appraisal to Handover/);
  assert.match(process, /id="process-services-mobile"/);
  assert.equal((process.match(/class="gp-services-slide"/g) || []).length, 3);
  assert.equal((process.match(/aria-controls="gp-service-caption"/g) || []).length, 3);
  assert.doesNotMatch(process, />Pool Care\+</);
  assert.match(process, /id="gp-service-caption" aria-live="polite"/);
  const all = renderHomeScenes();
  assert.ok(all.indexOf('id="process-services-mobile"') < all.indexOf('id="wellness-mobile"'));
  assert.match(all, /id="nature-mobile"/);
  assert.match(all, /data-parallax-pattern="natureCaptionMoveUp"/);
});

test('mobile and desktop pricing slots remain React mount points with preserved sticky targets', () => {
  const html = renderSection('PricingSection');
  assert.equal((html.match(/data-gp-pricing-slot=""/g) || []).length, 2);
  assert.match(html, /data-scroll="" data-scroll-sticky="" data-scroll-target="#interiors"/);
  assert.match(html, /id="pool-cost-mobile"/);
});

test('Quality renders a photographic background without the retired GPU mount', () => {
  const html = renderSection('QualitySection');
  assert.doesNotMatch(html, /webglNature|js-nature-canvas|<canvas/);
  assert.match(html, /gp-quality-static-bg/);
  assert.match(html, /gp-mobile-quality-view/);
  assert.match(html, /gp-mobile-quality-video/);
  assert.match(html, /gp-mobile-quality-prose/);
});

test('the mobile project introduction includes the same explanatory paragraph as desktop', () => {
  const html = renderSection('ProjectsSection');
  const copy = 'At Grand Pools, we create custom swimming pools that balance style, function, and quality.';
  assert.equal(html.split(copy).length - 1, 2);
  assert.match(html, /gp-mobile-project-story/);
});

test('pricing rests only after the entire photo introduction is uncovered', () => {
  const html = decode(renderSection('PricingSection'));
  const stop = html.match(/class="l-interiors__intro" data-scroll-snap-point="(\[.*?\])"/);
  assert.ok(stop, 'the cost photo intro must declare its resting point');
  assert.deepEqual(JSON.parse(stop[1]), [{ viewport: 0, element: 100 }]);
});
