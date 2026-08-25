import { SITE_URL, org } from "~/data/org";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  matchPath,
  pagePath,
} from "~/data/routes";
import { COPY } from "~/data/i18n";

// Canonical URL, hreflang alternates, and the html lang attribute for the
// current route. Applied once in the default layout so every page gets them
// without repeating itself.
export function useCanonical() {
  const route = useRoute();
  const locale = useLocale();

  const url = computed(() => {
    const path = route.path === "/" ? "" : route.path.replace(/\/$/, "");
    return `${SITE_URL}${path}`;
  });

  // Same page, every language. Falls back to the home pages on a route we
  // cannot classify, which is better than emitting a broken alternate.
  const alternates = computed(() => {
    const match = matchPath(route.path);
    const key = match?.key ?? "home";
    return LOCALES.map((l) => ({
      hreflang: LOCALE_TAGS[l],
      href: `${SITE_URL}${pagePath(l, key) === "/" ? "" : pagePath(l, key)}`,
    }));
  });

  useHead({
    htmlAttrs: { lang: () => LOCALE_TAGS[locale.value] },
    link: () => [
      { rel: "canonical", href: url.value },
      ...alternates.value.map((a) => ({
        rel: "alternate",
        hreflang: a.hreflang,
        href: a.href,
      })),
      {
        rel: "alternate",
        hreflang: "x-default",
        href: alternates.value.find((a) => a.hreflang === LOCALE_TAGS[DEFAULT_LOCALE])!.href,
      },
    ],
    meta: [{ property: "og:url", content: url }],
  });

  return url;
}

// Organization + WebSite graph, emitted site-wide in the active language.
export function useOrganisationSchema() {
  const locale = useLocale();

  const json = computed(() => {
    const copy = COPY[locale.value];
    return JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: org.name,
          url: org.url,
          logo: org.logo,
          image: org.image,
          email: org.email,
          description: copy.orgDescription,
          foundingLocation: {
            "@type": "Place",
            name: org.foundingLocation,
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "SG",
            addressLocality: org.foundingLocation,
          },
          areaServed: org.areaServed.map((a) => ({ "@type": "Place", name: a })),
          knowsAbout: [...org.knowsAbout],
          sameAs: [...org.sameAs],
          founder: {
            "@type": "Person",
            "@id": `${SITE_URL}/about#alberto`,
            name: org.founder.name,
            jobTitle: copy.about.founderRole,
            image: org.founder.image,
            worksFor: { "@id": `${SITE_URL}/#organization` },
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: org.email,
            availableLanguage: ["English", "Italian", "Spanish", "French"],
          },
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: org.url,
          name: org.name,
          description: copy.orgDescription,
          publisher: { "@id": `${SITE_URL}/#organization` },
          inLanguage: LOCALES.map((l) => LOCALE_TAGS[l]),
        },
      ],
    });
  });

  useHead({
    script: [{ type: "application/ld+json", innerHTML: json }],
  });
}
