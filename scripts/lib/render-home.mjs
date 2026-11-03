import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const nativeRequire = createRequire(path.join(root, 'package.json'));
const cache = new Map();

/** Render the actual server scene components for contract/media checks. */
export function loadSource(filename) {
  const absolute = path.resolve(root, filename);
  if (cache.has(absolute)) return cache.get(absolute).exports;
  const module = { exports: {} };
  cache.set(absolute, module);
  const source = fs.readFileSync(absolute, 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } });
  const localRequire = name => {
    if (!name.startsWith('.') && !name.startsWith('@/')) return nativeRequire(name);
    const candidate = name.startsWith('@/') ? path.join(root, name.slice(2)) : path.resolve(path.dirname(absolute), name);
    const resolved = ['', '.tsx', '.ts', '.js', '/index.tsx', '/index.ts'].map(suffix => candidate + suffix).find(file => fs.existsSync(file) && fs.statSync(file).isFile());
    if (!resolved) throw new Error(`Unresolved source import ${name} from ${filename}`);
    return loadSource(resolved);
  };
  new Function('require', 'module', 'exports', outputText)(localRequire, module, module.exports);
  return module.exports;
}

export function renderSection(name) {
  const Component = loadSource(`src/components/HomeStory/sections/${name}.tsx`).default;
  return renderToStaticMarkup(React.createElement(Component));
}
export function renderHomeScenes() {
  return ['HeroSection', 'ProcessSection', 'HarmonySection', 'QualitySection', 'ProjectsSection', 'PricingSection'].map(renderSection).join('\n');
}
