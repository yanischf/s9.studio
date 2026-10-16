// Single source of truth for per-route SEO metadata.
// Consumed by the build-time prerender (scripts/prerender.mjs, via entry-server)
// AND by the client <SeoManager> (updates the head on SPA navigation).
// No JSX here so it stays importable everywhere.

import { OFFERS, TOOLKIT_ITEMS } from './constants';

export const SITE = 'https://section9.studio';
export const OG_IMAGE = `${SITE}/og-image.png`;
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
  "Section9 (s9) est un studio de méta-design à Paris : nous concevons les conditions de la co-création, outils, rituels et environnements, pour permettre aux collectifs, lieux comme organisations, d'imaginer, de décider et de créer ensemble.";

// Archived pages — kept reachable but never indexed.
export const NOINDEX_PATHS = [
  '/archive/home',
  '/archive/home-meta',
  '/archive/home-old',
  '/archive/v2',
  '/archive/unique-offer',
  '/archive/unique-offer-v2',
  '/archive/sections-to-keep',
];

interface StaticMeta {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
}

const STATIC_PAGES: Record<string, StaticMeta> = {
  '/': {
    title: 'Section9 : Studio de design global',
    description:
      "Section9 conçoit les conditions qui rendent la création possible, à l'échelle d'une organisation, d'un lieu, d'un territoire ou d'une communauté. C'est le champ du méta-design : concevoir les conditions plutôt que les solutions.",
    ogType: 'website',
  },
  '/lieux': {
    title: 'le Dispositif : faire communauté dans votre lieu | s9',
    description:
      "Trois offres pour les lieux qui veulent faire communauté autour de leur mission : événements de co-création, accompagnement (outils, rituels, environnements), ouverture au quartier. Co-construit, toujours.",
  },
  '/organisations': {
    title: 'Organisations & équipes : installer la création collective autonome | s9',
    description:
      "Nous installons dans vos murs les conditions d'une création collective autonome, pour que vos équipes n'attendent plus la validation pour avancer. La Libération, puis La Création.",
  },
  '/projets': {
    title: 'Projets | Section9',
    description:
      "Les projets initiés par le studio Section9 pour tester ses idées en grandeur réelle : Libre Cours, The Soci3ty.",
  },
  '/about': {
    title: 'À propos | Section9',
    description:
      "Section9 est un studio de méta-design qui aide les lieux et les organisations à bâtir leurs propres infrastructures de création. Découvrez notre positionnement et notre équipe.",
  },
  '/toolkit': {
    title: 'Toolkit méthodologique de méta-design | Section9',
    description:
      "Explorez les outils et ressources que s9 utilise pour structurer les cadres de la co-création. Un toolkit méta-design en accès libre.",
  },
  '/events': {
    title: 'Événements & Échanges | Section9',
    description:
      "Une série d'événements de création collective à Paris : une soirée, un lieu, une question ouverte ensemble, et une décision réelle à la fin.",
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

function lieuxServiceJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'le Dispositif : faire communauté dans votre lieu',
    serviceType: 'Facilitation de co-création et de vie de communauté',
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE },
    areaServed: 'Paris & Île-de-France',
    url: `${SITE}/lieux`,
    description:
      "Accompagner les lieux, collectifs et quartiers à faire communauté autour de leur mission : outils, rituels et environnements.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Les trois offres',
      itemListElement: [
        { '@type': 'Offer', name: 'Essayer', description: 'Une soirée, une journée, un week-end de création collective, sans engagement.' },
        { '@type': 'Offer', name: 'Faire communauté', description: 'Accompagnement pour construire une communauté durable : outils, rituels, environnements.' },
        { '@type': 'Offer', name: "S'ouvrir au quartier", description: 'Devenir un point de rencontre pour les habitants, pas à pas.' },
      ],
    },
  };
}

function organisationsServiceJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Accompagnement des organisations & des équipes',
    serviceType: 'Design des conditions de la création collective',
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE },
    areaServed: 'FR',
    url: `${SITE}/organisations`,
    description:
      "Installer les conditions d'une création collective autonome : La Libération (temps et espace mental), puis La Création (environnements, rituels, projets).",
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

  // Archived routes → noindex
  if (NOINDEX_PATHS.includes(path) || path.startsWith('/archive/')) {
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
    if (path === '/lieux') jsonLd.push(lieuxServiceJsonLd());
    if (path === '/organisations') jsonLd.push(organisationsServiceJsonLd());
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
      // Ancien discours B2B — conservé accessible mais retiré de l'index.
      return {
        title: `${offer.title} | Section9`,
        description: clamp(offer.shortDescription),
        canonical,
        ogType: 'article',
        ogImage: OG_IMAGE,
        noindex: true,
        jsonLd: [organizationJsonLd()],
      };
    }
  }

  // Dynamic: /toolkit/:id
  const toolMatch = path.match(/^\/toolkit\/([^/]+)$/);
  if (toolMatch) {
    const tool = TOOLKIT_ITEMS.find((t) => t.id === toolMatch[1]);
    if (tool) {
      return {
        title: `${tool.title} | Toolkit meta-design | Section9`,
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
    title: 'Section9 : Global Design Studio',
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
  '/lieux',
  '/organisations',
  '/projets',
  '/about',
  '/toolkit',
  '/events',
  ...TOOLKIT_ITEMS.map((t) => `/toolkit/${t.id}`),
];

// Every route to prerender: canonical + noindex archives + the (noindex) legacy offers.
export const ALL_ROUTES: string[] = [
  ...CANONICAL_ROUTES,
  ...NOINDEX_PATHS,
  ...OFFERS.map((o) => `/offer/${o.id}`),
];

// /llms.txt — a concise, AI-agent-friendly summary of the studio and its pages.
export function buildLlmsTxt(): string {
  const lines: string[] = [];
  lines.push('# Section9 (s9) : studio de méta-design · Paris');
  lines.push('');
  lines.push(`> ${DEFAULT_DESCRIPTION}`);
  lines.push('');
  lines.push(
    "s9 est un studio de méta-design : nous concevons les conditions dans lesquelles les collectifs peuvent concevoir. Notre métier, c'est le design du design : installer chez vous la capacité de créer (outils, rituels, environnements), puis nous retirer. Rien n'arrive plaqué : tout se co-construit, dans votre identité, à votre rythme, autour de votre mission."
  );
  lines.push('');
  lines.push('## Deux terrains');
  lines.push(
    `- [Lieux, collectifs & quartiers : le Dispositif](${SITE}/lieux) : faire communauté autour de la mission d'un lieu, et s'ouvrir au quartier. Trois offres : Essayer, Faire communauté, S'ouvrir au quartier.`
  );
  lines.push(
    `- [Organisations & équipes](${SITE}/organisations) : installer les conditions d'une création collective autonome (La Libération, puis La Création).`
  );
  lines.push('');
  lines.push('## Pages clés');
  lines.push(`- [Accueil](${SITE}/) : la démarche méta-design`);
  lines.push(
    `- [Événements](${SITE}/events) : une série d'événements de création collective à Paris : une soirée, un lieu, une décision réelle à la fin`
  );
  lines.push(`- [À propos](${SITE}/about) : positionnement et équipe`);
  lines.push(`- [Toolkit](${SITE}/toolkit) : outils et ressources méthodologiques`);
  lines.push('');
  lines.push('## Équipe');
  for (const m of TEAM) lines.push(`- ${m.name}, ${m.jobTitle}`);
  lines.push('');
  lines.push('## Contact');
  lines.push('- Email : meet.section9@gmail.com');
  lines.push('- Paris & Île-de-France');
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
  tags.push(`<meta property="og:image:width" content="1200" />`);
  tags.push(`<meta property="og:image:height" content="630" />`);
  tags.push(`<meta property="og:image:alt" content="Section9" />`);

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
