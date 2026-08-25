// llms.txt (llmstxt.org): a plain-markdown map of the site for assistants that
// fetch it instead of parsing rendered HTML. Generated from the same data the
// pages render, so the two cannot drift apart. One per language, because an
// assistant answering in Italian should find the Italian wording.
import { categoryExamples } from "~/data/categories";
import { COPY, localisedCategories, localisedServices, localisedWork } from "~/data/i18n";
import { LOCALES, LOCALE_LABELS, PAGE_KEYS, pagePath, type Locale } from "~/data/routes";
import { SITE_URL, org } from "~/data/org";

const fill = (template: string, vars: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);

export function buildLlmsTxt(locale: Locale): string {
  const c = COPY[locale];
  const services = localisedServices(locale);
  const work = localisedWork(locale);
  const categories = localisedCategories(locale);
  const url = (key: Parameters<typeof pagePath>[1]) => `${SITE_URL}${pagePath(locale, key)}`;

  return `# ${org.name}

> ${c.orgDescription}

${c.llms.intro}
${c.llms.contact} ${org.email}

## ${c.llms.whatWeDo}

${services
  .map((s) => {
    const duration = s.specs[0]?.value ?? "";
    const price = s.specs[s.specs.length - 1]?.value ?? "";
    return `- [${s.cardTitle}](${SITE_URL}${s.to}): ${s.cardBody} ${fill(
      c.llms.typicalEngagement,
      { duration, price },
    )}`;
  })
  .join("\n")}

## ${c.llms.howItRuns}

${services[0].pipeline.stages
  .map((st, i) => `${i + 1}. ${st.title} (${st.duration}, ${st.basis}): ${st.body}`)
  .join("\n")}

## ${c.llms.whatWeDont}

${services
  .flatMap((s) => s.notDoing)
  .filter((v, i, a) => a.indexOf(v) === i)
  .map((n) => `- ${n}`)
  .join("\n")}

## ${c.llms.kindsOfBuild}

${c.llms.kindsIntro}

${categories
  .map(
    (cat) =>
      `### ${cat.title}\n\n${cat.blurb} ${cat.forWho}\n\n${c.llms.examples} ${categoryExamples(cat, work)
        .map((w) => w.name)
        .join(", ")}.`,
  )
  .join("\n\n")}

## ${c.llms.ownProducts}

${work
  .filter((w) => w.kind === "own")
  .map((w) => `- ${w.name} (${w.period}): ${w.tagline}.${w.url ? ` ${w.url}` : ""}`)
  .join("\n")}

## ${c.llms.clientWork}

${work
  .filter((w) => w.kind === "client")
  .map((w) => `- ${w.name}: ${w.tagline}.`)
  .join("\n")}

## ${c.llms.roles}

${work
  .filter((w) => w.kind === "role")
  .map((w) => `- ${w.name} (${w.period}): ${w.tagline}.${w.url ? ` ${w.url}` : ""}`)
  .join("\n")}

## ${c.llms.questions}

${services.flatMap((s) => s.faq.map((f) => `### ${f.q}\n\n${f.a}`)).join("\n\n")}

## ${c.llms.pages}

${PAGE_KEYS.map((key) => {
  const label =
    key === "home"
      ? org.name
      : key === "services"
        ? c.nav.services
        : key === "work"
          ? c.nav.work
          : key === "about"
            ? c.nav.about
            : key === "contact"
              ? c.nav.contact
              : services.find((s) => s.slug === key)?.cardTitle;
  return `- [${label}](${url(key)})`;
}).join("\n")}

## ${c.llms.otherLanguages}

${LOCALES.filter((l) => l !== locale)
  .map(
    (l) =>
      `- ${LOCALE_LABELS[l]}: ${SITE_URL}${pagePath(l, "home")} (llms.txt: ${SITE_URL}${
        l === "en" ? "" : `/${l}`
      }/llms.txt)`,
  )
  .join("\n")}
`;
}
