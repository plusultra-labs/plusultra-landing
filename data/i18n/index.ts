// One place that knows which language gets which words, plus the merge helpers
// that put structural data (slugs, images, URLs) back together with it.

import { SERVICE_SLUGS, pagePath, type Locale, type ServiceSlug } from "../routes";
import { allWork, type WorkItem } from "../site";
import type { ServiceContent } from "../services";
import { workCategories, type WorkCategory } from "../categories";
import type { CategoryText, PricingTier, ServiceTexts, SiteCopy, WorkTexts } from "./types";

import { copyEn } from "./copy.en";
import { copyIt } from "./copy.it";
import { copyEs } from "./copy.es";
import { copyFr } from "./copy.fr";
import { servicesEn } from "./services.en";
import { servicesIt } from "./services.it";
import { servicesEs } from "./services.es";
import { servicesFr } from "./services.fr";
import { workEn } from "./work.en";
import { workIt } from "./work.it";
import { workEs } from "./work.es";
import { workFr } from "./work.fr";

export const COPY: Record<Locale, SiteCopy> = {
  en: copyEn,
  it: copyIt,
  es: copyEs,
  fr: copyFr,
};

const SERVICE_TEXTS: Record<Locale, ServiceTexts> = {
  en: servicesEn,
  it: servicesIt,
  es: servicesEs,
  fr: servicesFr,
};

const WORK_TEXTS: Record<Locale, WorkTexts> = {
  en: workEn,
  it: workIt,
  es: workEs,
  fr: workFr,
};

/** The three services, worded for this language and pointing at its URLs. */
export function localisedServices(locale: Locale): ServiceContent[] {
  const texts = SERVICE_TEXTS[locale];
  return SERVICE_SLUGS.map((slug) => ({
    slug,
    to: pagePath(locale, slug),
    ...texts[slug],
  }));
}

export function localisedService(locale: Locale, slug: ServiceSlug): ServiceContent {
  return { slug, to: pagePath(locale, slug), ...SERVICE_TEXTS[locale][slug] };
}

/** Case studies: images, URLs, and the service they belong to stay shared. */
export function localisedWork(locale: Locale): WorkItem[] {
  const texts = WORK_TEXTS[locale];
  return allWork.map((w) => ({ ...w, ...(texts[w.slug] ?? {}) }));
}

export type LocalisedCategory = WorkCategory & CategoryText;

export function localisedCategories(locale: Locale): LocalisedCategory[] {
  const texts = COPY[locale].categories;
  return workCategories.map((c) => ({ ...c, ...texts[c.slug] }));
}

export function localisedPricing(locale: Locale, slug: ServiceSlug): PricingTier[] {
  return COPY[locale].pricing[slug];
}

export type { SiteCopy };
