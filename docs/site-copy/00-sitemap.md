# Plusultra Labs — site architecture (v1 draft)

Positioning: **AI product studio + agency.** We build our own AI products and put the same team on client problems. Builders, not consultants. No marketing services.

## Sitemap

```
/                                Home
/services/                       Services index (short, links to the three)
  /services/ai-product-development    Build an AI product: MVP → scale
  /services/ai-integration            AI integration engineering for mid-market
  /services/custom-platforms          Custom platforms & SaaS
/work/                           Case study index
  /work/<slug>                   One page per case study
/products/                       Our own products (BuzzWatch, InsightFlow, ItaSign, IntelligoAI, Patrimo)
/about/                          Company story + how we work (AI-native process, Vera)
/blog/                           Articles (Nuxt Content), EN + IT
/contact/                        Fillout embed + email
/it/...                          Italian mirror of all commercial pages (hreflang paired)
```

## Case studies

Name now (ours/public): BuzzWatch, TourScanner, InsightFlow, ItaSign, IntelligoAI, TS-Sites, Vera ("running a company on AI agents" — doubles as flagship blog content).

Ask permission first: GA Agency, Alma Medical, Ferrari Marmi, Colzani & Partners, Lookalike, Collezione Casa. Anonymized fallback if declined.

Skeleton per case study: context → problem → what we built (stack, timeline) → outcome (number where possible).

## SEO content engine (product/tech only — no marketing topics)

1. **AI agents in production** (EN) — first-hand Vera/orchestration write-ups. Flagship, citation magnet.
2. **AI integration engineering, Italian mid-market** (IT) — LLM selection, GDPR/EU architecture, costs, build vs buy. Lead generator.
3. **Shipping SaaS: costs, timelines, stack** (EN+IT) — real numbers from our own products. BOFU layer.
4. Vertical pillars (one each, later): medical clinic software (IntelligoAI), eIDAS e-signature (ItaSign), health-data apps, travel tech.

## Technical

Nuxt 3 (this repo) + @nuxt/content (blog/case studies in git) + @nuxtjs/i18n (EN default, IT localized).
Full prerender on Cloudflare Pages. Organization/Service/Article schema, hreflang, sitemap.xml.
Keep dark starfield identity, extended into a proper multi-page design system.
