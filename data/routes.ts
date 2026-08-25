// Localised route table. Deliberately dependency-free: nuxt.config.ts imports
// it to build the prerender list, so it must not pull in anything that needs
// the Nuxt runtime.
//
// English lives at the root; every other language sits under its own prefix
// with translated slugs, because /it/servizi/integrazione-ai is worth more to
// an Italian reader (and to an Italian search) than /it/services/ai-integration.

export const LOCALES = ["en", "it", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Locales that carry a URL prefix. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  es: "Español",
  fr: "Français",
};

/** BCP 47 tags for hreflang / html lang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  it: "it",
  es: "es",
  fr: "fr",
};

export const SERVICE_SLUGS = [
  "ai-product-development",
  "ai-integration",
  "custom-platforms",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type PageKey = "home" | "services" | "work" | "about" | "contact" | ServiceSlug;

export const PAGE_KEYS: PageKey[] = [
  "home",
  "services",
  "work",
  "about",
  "contact",
  ...SERVICE_SLUGS,
];

interface Segments {
  services: string;
  work: string;
  about: string;
  contact: string;
  service: Record<ServiceSlug, string>;
}

const SEGMENTS: Record<Locale, Segments> = {
  en: {
    services: "services",
    work: "work",
    about: "about",
    contact: "contact",
    service: {
      "ai-product-development": "ai-product-development",
      "ai-integration": "ai-integration",
      "custom-platforms": "custom-platforms",
    },
  },
  it: {
    services: "servizi",
    work: "progetti",
    about: "studio",
    contact: "contatti",
    service: {
      "ai-product-development": "sviluppo-prodotti-ai",
      "ai-integration": "integrazione-ai",
      "custom-platforms": "piattaforme-su-misura",
    },
  },
  es: {
    services: "servicios",
    work: "proyectos",
    about: "estudio",
    contact: "contacto",
    service: {
      "ai-product-development": "desarrollo-de-producto-ia",
      "ai-integration": "integracion-de-ia",
      "custom-platforms": "plataformas-a-medida",
    },
  },
  fr: {
    services: "services",
    work: "projets",
    about: "studio",
    contact: "contact",
    service: {
      "ai-product-development": "developpement-produit-ia",
      "ai-integration": "integration-ia",
      "custom-platforms": "plateformes-sur-mesure",
    },
  },
};

/** "" for English, "/it" for the rest. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export function isServiceKey(key: PageKey): key is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(key);
}

/** The path a page lives at in a given language. */
export function pagePath(locale: Locale, key: PageKey): string {
  const seg = SEGMENTS[locale];
  const prefix = localePrefix(locale);
  if (key === "home") return prefix || "/";
  if (isServiceKey(key)) return `${prefix}/${seg.services}/${seg.service[key]}`;
  return `${prefix}/${seg[key]}`;
}

/** Reverse of pagePath, for the localised catch-all route. */
export function resolveSegments(locale: Locale, segments: string[]): PageKey | null {
  const seg = SEGMENTS[locale];
  if (segments.length === 0) return "home";
  if (segments.length === 1) {
    const [first] = segments;
    if (first === seg.services) return "services";
    if (first === seg.work) return "work";
    if (first === seg.about) return "about";
    if (first === seg.contact) return "contact";
    return null;
  }
  if (segments.length === 2 && segments[0] === seg.services) {
    const hit = SERVICE_SLUGS.find((s) => seg.service[s] === segments[1]);
    return hit ?? null;
  }
  return null;
}

/** Which language and page a path belongs to. Used for hreflang + switcher. */
export function matchPath(path: string): { locale: Locale; key: PageKey } | null {
  const parts = path.split("/").filter(Boolean);
  const maybeLocale = parts[0] as Locale | undefined;
  const locale =
    maybeLocale && (PREFIXED_LOCALES as readonly string[]).includes(maybeLocale)
      ? maybeLocale
      : DEFAULT_LOCALE;
  const rest = locale === DEFAULT_LOCALE ? parts : parts.slice(1);
  const key = resolveSegments(locale, rest);
  return key ? { locale, key } : null;
}

/** Every route the site publishes, for the prerender list and the sitemap. */
export const ALL_ROUTES: { locale: Locale; key: PageKey; path: string }[] = LOCALES.flatMap(
  (locale) => PAGE_KEYS.map((key) => ({ locale, key, path: pagePath(locale, key) })),
);
