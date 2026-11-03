import fs from 'node:fs';
import path from 'node:path';

const legacyPaths = [
  'src/content/home-story',
  'src/components/HomeStory/story-markup.ts',
];

for (const rel of legacyPaths) {
  const full = path.join(process.cwd(), rel);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log(`Removed legacy HTML dependency: ${rel}`);
  }
}
console.log('Grand Pools homepage is now 100% native Next.js TSX.');
