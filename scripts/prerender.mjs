// Build-time pre-rendering (SSG) — zero runtime dependency.
// Runs after `vite build` (client → dist/) and `vite build --ssr` (server → dist-ssr/).
// Renders each route to static HTML, injects the per-route <head>, and writes
// dist/<route>/index.html, plus 404.html, sitemap.xml and llms.txt.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const ssrEntry = resolve(root, 'dist-ssr', 'entry-server.js');

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

const ROOT_MARKER = '<div id="root"></div>';
const HEAD_MARKER = '<!--app-head-->';

if (!template.includes(ROOT_MARKER)) {
  throw new Error(`prerender: "${ROOT_MARKER}" not found in dist/index.html`);
}
if (!template.includes(HEAD_MARKER)) {
  throw new Error(`prerender: "${HEAD_MARKER}" not found in dist/index.html (Vite stripped the comment?)`);
}

const { render, getSeo, renderMetaTags, buildLlmsTxt, ALL_ROUTES, CANONICAL_ROUTES, SITE } =
  await import(pathToFileURL(ssrEntry).href);

function escTitle(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function applyHead(html, seo) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escTitle(seo.title)}</title>`)
    .replace(HEAD_MARKER, renderMetaTags(seo));
}

function outPathFor(route) {
  if (route === '/') return resolve(distDir, 'index.html');
  return resolve(distDir, '.' + route, 'index.html');
}

let count = 0;
for (const route of ALL_ROUTES) {
  const seo = getSeo(route);
  const body = render(route);
  const html = applyHead(template, seo).replace(ROOT_MARKER, `<div id="root">${body}</div>`);
  const outPath = outPathFor(route);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  count++;
  console.log(`  ✓ ${route}${seo.noindex ? '  (noindex)' : ''}`);
}

// 404.html — SPA fallback: empty #root (client-renders via createRoot), noindex head.
const seo404 = getSeo('/__not_found__');
writeFileSync(resolve(distDir, '404.html'), applyHead(template, seo404), 'utf-8');

// sitemap.xml — canonical (indexable) routes only.
const today = new Date().toISOString().slice(0, 10);
const urlEntries = CANONICAL_ROUTES.map((r) => {
  const loc = `${SITE}${r === '/' ? '/' : r}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
}).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap, 'utf-8');

// llms.txt
writeFileSync(resolve(distDir, 'llms.txt'), buildLlmsTxt(), 'utf-8');

console.log(`\n✓ Prerendered ${count} routes + 404.html`);
console.log(`✓ sitemap.xml (${CANONICAL_ROUTES.length} URLs) + llms.txt`);
