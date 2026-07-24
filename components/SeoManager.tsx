import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, SITE_NAME, LOCALE } from '../seo';

// Keeps <head> in sync during client-side (SPA) navigation, reusing the exact
// same data the prerender injected. On first hydration the values already match
// the prerendered head, so this is idempotent (no visual change).

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(attr: 'name' | 'property', key: string): void {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
}

function upsertCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SeoManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    if (seo.noindex) upsertMeta('name', 'robots', 'noindex, follow');
    else removeMeta('name', 'robots');
    upsertCanonical(seo.canonical);

    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', LOCALE);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:image', seo.ogImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', seo.ogImage);

    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove());
    for (const block of seo.jsonLd) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-seo-jsonld', '');
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
};

export default SeoManager;
