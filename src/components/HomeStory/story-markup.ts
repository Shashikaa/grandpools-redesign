import fs from 'node:fs';
import path from 'node:path';
import { GRAND_POOLS_DATA } from '@/src/app/projects/[slug]/data';

const directory = path.join(process.cwd(), 'src/content/home-story');
const read = (name: string) => fs.readFileSync(path.join(directory, `${name}.html`), 'utf8');
const escape = (text: string) => text.replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]!));
function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{\{([a-z-]+)\}\}/g, (token, name: string) => name in values ? escape(String(values[name])) : token);
}

export function getHomeStoryMarkup() {
  const projects = Object.entries(GRAND_POOLS_DATA).map(([slug, project], index) => ({
    title: project.title, category: project.category, description: project.description,
    image: project.images[0].startsWith('/') ? project.images[0] : `/${project.images[0]}`,
    href: `/projects/${slug}`, number: index + 1,
    hidden: index ? 'true' : 'false', 'hidden-class': index ? 'is-hidden' : '',
    'slide-start': (index + 1) * 100, 'slide-open': (index + 2) * 100, 'slide-settle': (index + 3) * 100,
  }));
  const projectMarkup = read('04-projects')
    .replace('{{project-slides}}', projects.map(project => fill(read('project-slide'), project)).join('\n'))
    .replace('{{project-cards}}', projects.map(project => fill(read('project-card'), project)).join('\n'))
    .replace('{{project-mobile-images}}', projects.map(project => fill(read('project-mobile-image'), project)).join('\n'))
    .replace('{{project-mobile-cards}}', projects.map(project => fill(read('project-mobile-card'), project)).join('\n'))
    .replace('{{project-mobile-thumbs}}', projects.map(project => `<a class="gp-project-thumb js-mobile-scrollable-thumbnail${project.number === 1 ? ' is-active' : ''}" role="button" tabindex="0" aria-label="View ${escape(project.title)}">${escape(project.title)}</a>`).join('\n'))
    .replaceAll('{{project-count}}', String(projects.length))
    .replaceAll('{{projects-height}}', String((projects.length + 3) * 100));
  return {
    opening: ['00-hero', '01-process', '02-harmony', '03-quality'].map(read).join('\n'),
    collection: projectMarkup + '\n' + read('05-pricing'),
    projectCount: projects.length,
  };
}
