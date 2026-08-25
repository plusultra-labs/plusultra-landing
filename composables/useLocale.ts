import {
  DEFAULT_LOCALE,
  LOCALES,
  PREFIXED_LOCALES,
  matchPath,
  pagePath,
  type Locale,
  type PageKey,
} from "~/data/routes";
import { COPY, type SiteCopy } from "~/data/i18n";

/**
 * The active language, read from the :locale route param. English pages have
 * no param, so anything unrecognised falls back to English rather than 404-ing
 * here — the catch-all route's validate() is what rejects a bad prefix.
 */
export function useLocale() {
  const route = useRoute();
  return computed<Locale>(() => {
    const param = route.params.locale as string | undefined;
    return param && (LOCALES as readonly string[]).includes(param)
      ? (param as Locale)
      : DEFAULT_LOCALE;
  });
}

/** Page chrome and shared copy for the active language. */
export function useCopy() {
  const locale = useLocale();
  return computed<SiteCopy>(() => COPY[locale.value]);
}

/** Build an internal link that stays in the current language. */
export function useLocalePath() {
  const locale = useLocale();
  return (key: PageKey, hash = "") => `${pagePath(locale.value, key)}${hash}`;
}

/** Which page we are on, in language-independent terms. */
export function useCurrentPage() {
  const route = useRoute();
  return computed(() => matchPath(route.path));
}

/** The same page in every other language, for hreflang and the switcher. */
export function useAlternates() {
  const current = useCurrentPage();
  return computed(() =>
    LOCALES.map((locale) => ({
      locale,
      path: current.value ? pagePath(locale, current.value.key) : pagePath(locale, "home"),
    })),
  );
}

export { DEFAULT_LOCALE, LOCALES, PREFIXED_LOCALES };
export type { Locale, PageKey };

/** Tiny placeholder filler, for the couple of strings that carry a count. */
export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
