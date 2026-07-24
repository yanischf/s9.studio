import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

// Rendered per route by scripts/prerender.mjs.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

// Re-export SEO data so the Node prerender script only ever imports compiled JS
// (never the TSX modules directly).
export {
  getSeo,
  renderMetaTags,
  buildLlmsTxt,
  ALL_ROUTES,
  CANONICAL_ROUTES,
  SITE,
} from './seo';
