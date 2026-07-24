// Single source of truth for per-route SEO metadata.
// Consumed by the build-time prerender (scripts/prerender.mjs, via entry-server)
// AND by the client <SeoManager> (updates the head on SPA navigation).
// No JSX here so it stays importable everywhere.

import { OFFERS, TOOLKIT_ITEMS } from './constants';

export const SITE = 'https://section9.studio';
export const OG_IMAGE = `${SITE}/android-chrome-512x512.png`;
export const SITE_NAME = 'Section9';
export const LOCALE = 'fr_FR';

export interface RouteSeo {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogImage: string;
  noindex: boolean;
  jsonLd: object[];
}

const DEFAULT_DESCRIPTION =
  "S9 (Section9) est un studio de design global spécialisé en meta-design : environnements, méthodes, rituels et outils IA qui rendent vos équipes autonomes dans leur capacité à innover.";

// Draft / experimental routes — kept reachable but never indexed.
export const NOINDEX_PATHS = [
  '/home-old',
  '/v2',
  '/unique-offer',
  '/unique-offer-v2',
  '/sections-to-keep',
];

interface StaticMeta {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
}

const STATIC_PAGES: Record<string, StaticMeta> = {
  '/': {
    title: "Section9 — Studio de design qui installe un système d'innovation autonome",
    description:
      "S9 conçoit les environnements physiques et digitaux, les rituels collaboratifs et les outils IA sur mesure qui libèrent vos équipes des tâches répétitives et automatisent l'innovation au cœur de votre culture d'entreprise.",
    ogType: 'website',
  },
  '/about': {
    title: 'À propos & Manifeste — Section9',
    description:
      "Section9 est un studio de design systémique qui aide les organisations à bâtir leurs propres infrastructures de création. Découvrez notre manifeste et notre équipe.",
  },
  '/toolkit': {
    title: 'Toolkit méthodologique de meta-design — Section9',
    description:
      "Explorez les outils et ressources que S9 utilise pour structurer les cadres de la création. Un toolkit meta-design en accès libre.",
  },
  '/events': {
    title: 'Événements & Échanges — Section9',
    description:
      "Masterclasses, ateliers et rencontres meta-design de la communauté Section9 à Paris. Restez à l'écoute des prochains rendez-vous.",
  },
};

const TEAM = [
  { name: 'Fabrice Liut', jobTitle: 'Designer Organisationnel, Facilitateur' },
  { name: 'Saniya Al Saadi', jobTitle: 'Designer de Services, Design Fiction' },
  { name: 'Johann Milani', jobTitle: "Directeur Artistique, Designer d'Expérience" },
  { name: 'Yanis Cherfaoui', jobTitle: 'Responsable Innovation, Meta Designer' },
];

function organizationJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'S9',
    url: SITE,
    logo: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    email: 'meet.section9@gmail.com',
    founder: TEAM.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.jobTitle })),
  };
}

function websiteJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'S9',
    url: SITE,
    inLanguage: 'fr-FR',
  };
}

function serviceJsonLd(offerId: string): object | null {
  const offer = OFFERS.find((o) => o.id === offerId);
  if (!offer) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: offer.title,
    description: offer.shortDescription,
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE },
    areaServed: 'FR',
    url: `${SITE}/offer/${offer.id}`,
  };
}

// Keep meta descriptions within a sane length for SERP snippets.
function clamp(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  // strip trailing slash except for root
  const p = pathname.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

export function getSeo(pathname: string): RouteSeo {
  const path = normalizePath(pathname);
  const canonical = `${SITE}${path === '/' ? '' : path}`;

  // Draft / experimental routes → noindex
  if (NOINDEX_PATHS.includes(path)) {
    return {
      title: 'Section9',
      description: DEFAULT_DESCRIPTION,
      canonical,
      ogType: 'website',
      ogImage: OG_IMAGE,
      noindex: true,
      jsonLd: [organizationJsonLd()],
    };
  }

  // Static pages
  const staticMeta = STATIC_PAGES[path];
  if (staticMeta) {
    const jsonLd: object[] = [organizationJsonLd()];
    if (path === '/') jsonLd.push(websiteJsonLd());
    return {
      title: staticMeta.title,
      description: clamp(staticMeta.description),
      canonical,
      ogType: staticMeta.ogType ?? 'website',
      ogImage: OG_IMAGE,
      noindex: false,
      jsonLd,
    };
  }

  // Dynamic: /offer/:id
  const offerMatch = path.match(/^\/offer\/([^/]+)$/);
  if (offerMatch) {
    const offer = OFFERS.find((o) => o.id === offerMatch[1]);
    if (offer) {
      const service = serviceJsonLd(offer.id);
      return {
        title: `${offer.title} — Section9`,
        description: clamp(offer.shortDescription),
        canonical,
        ogType: 'article',
        ogImage: OG_IMAGE,
        noindex: false,
        jsonLd: service ? [organizationJsonLd(), service] : [organizationJsonLd()],
      };
    }
  }

  // Dynamic: /toolkit/:id
  const toolMatch = path.match(/^\/toolkit\/([^/]+)$/);
  if (toolMatch) {
    const tool = TOOLKIT_ITEMS.find((t) => t.id === toolMatch[1]);
    if (tool) {
      return {
        title: `${tool.title} — Toolkit meta-design — Section9`,
        description: clamp(tool.objective),
        canonical,
        ogType: 'article',
        ogImage: OG_IMAGE,
        noindex: false,
        jsonLd: [organizationJsonLd()],
      };
    }
  }

  // Unknown path → noindex fallback (also used by 404.html)
  return {
    title: 'Section9 — Global Design Studio',
    description: DEFAULT_DESCRIPTION,
    canonical,
    ogType: 'website',
    ogImage: OG_IMAGE,
    noindex: true,
    jsonLd: [organizationJsonLd()],
  };
}

// Routes listed in sitemap.xml (indexable only).
export const CANONICAL_ROUTES: string[] = [
  '/',
  '/about',
  '/toolkit',
  '/events',
  ...OFFERS.map((o) => `/offer/${o.id}`),
  ...TOOLKIT_ITEMS.map((t) => `/toolkit/${t.id}`),
];

// Every route to prerender (indexable + noindex drafts).
export const ALL_ROUTES: string[] = [...CANONICAL_ROUTES, ...NOINDEX_PATHS];

// /llms.txt — a concise, AI-agent-friendly summary of the studio and its pages.
export function buildLlmsTxt(): string {
  const lines: string[] = [];
  lines.push('# Section9 (S9) — Global Design Studio');
  lines.push('');
  lines.push(`> ${DEFAULT_DESCRIPTION}`);
  lines.push('');
  lines.push(
    "Section9 est un studio de design global spécialisé en **meta-design** : concevoir le cadre avant le projet. Nous installons des systèmes d'innovation autonomes — environnements physiques et digitaux, rituels collaboratifs, méthodes et outils IA — qui rendent les équipes autonomes et cohérentes dans la durée."
  );
  lines.push('');
  lines.push('## Équipe');
  for (const m of TEAM) lines.push(`- ${m.name} — ${m.jobTitle}`);
  lines.push('');
  lines.push('## Pages clés');
  lines.push(`- [Accueil](${SITE}/) : le système d'innovation S9 (La Libération / La Création)`);
  lines.push(`- [À propos & Manifeste](${SITE}/about) : positionnement, manifeste et équipe`);
  lines.push(`- [Toolkit meta-design](${SITE}/toolkit) : outils et ressources méthodologiques`);
  lines.push(`- [Événements](${SITE}/events) : masterclasses et rencontres de la communauté`);
  lines.push('');
  lines.push('## Offres');
  for (const o of OFFERS) {
    lines.push(`- [${o.title}](${SITE}/offer/${o.id}) : ${o.shortDescription}`);
  }
  lines.push('');
  lines.push('## Contact');
  lines.push('- Email : meet.section9@gmail.com');
  lines.push('');
  return lines.join('\n');
}

/* -------------------------------------------------------------------------- */
/* HTML head generation (used by the Node prerender script, string output).   */
/* -------------------------------------------------------------------------- */

function escAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escJsonLd(json: string): string {
  // Prevent a stray </script> or HTML from breaking out of the tag.
  return json.replace(/</g, '\\u003c');
}

// Returns the <head> tags to inject in place of <!--app-head--> (title excluded:
// the prerender replaces the existing <title> separately so dev keeps a fallback).
export function renderMetaTags(seo: RouteSeo): string {
  const tags: string[] = [];
  tags.push(`<meta name="description" content="${escAttr(seo.description)}" />`);
  if (seo.noindex) tags.push(`<meta name="robots" content="noindex, follow" />`);
  tags.push(`<link rel="canonical" href="${escAttr(seo.canonical)}" />`);

  // Open Graph
  tags.push(`<meta property="og:type" content="${seo.ogType}" />`);
  tags.push(`<meta property="og:site_name" content="${escAttr(SITE_NAME)}" />`);
  tags.push(`<meta property="og:locale" content="${LOCALE}" />`);
  tags.push(`<meta property="og:title" content="${escAttr(seo.title)}" />`);
  tags.push(`<meta property="og:description" content="${escAttr(seo.description)}" />`);
  tags.push(`<meta property="og:url" content="${escAttr(seo.canonical)}" />`);
  tags.push(`<meta property="og:image" content="${escAttr(seo.ogImage)}" />`);

  // Twitter
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${escAttr(seo.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escAttr(seo.description)}" />`);
  tags.push(`<meta name="twitter:image" content="${escAttr(seo.ogImage)}" />`);

  // JSON-LD (data-seo-jsonld lets <SeoManager> swap these on SPA navigation)
  for (const block of seo.jsonLd) {
    tags.push(
      `<script type="application/ld+json" data-seo-jsonld>${escJsonLd(JSON.stringify(block))}</script>`
    );
  }

  return tags.join('\n    ');
}
