import {
  ALL_ROUTES,
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  isServiceKey,
  pagePath,
} from "~/data/routes";
import { SITE_URL } from "~/data/org";

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default defineEventHandler((event) => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${ALL_ROUTES.map(({ key, path }) => {
  const alternates = [
    ...LOCALES.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${LOCALE_TAGS[l]}" href="${abs(pagePath(l, key))}" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pagePath(DEFAULT_LOCALE, key))}" />`,
  ].join("\n");
  const priority = key === "home" ? "1.0" : isServiceKey(key) ? "0.9" : "0.8";
  return `  <url>
    <loc>${abs(path)}</loc>
${alternates}
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("\n")}
</urlset>
`;
  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return body;
});
