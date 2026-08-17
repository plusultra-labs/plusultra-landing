// Shared site content. Screenshots in /public/work are captured from the
// live products; SVG cards stand in for private / unreleased platforms.

export interface WorkItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  url?: string;
}

export const allWork: WorkItem[] = [
  {
    slug: "buzzwatch",
    name: "BuzzWatch",
    tagline: "See what AI says about your brand",
    description:
      "AI visibility and marketing platform: tracks how ChatGPT, Perplexity, and Google AI talk about a brand and its competitors, then drives the content and optimization work to improve it. Our flagship product, grown from zero to an enterprise agency partnership.",
    image: "/work/buzzwatch.jpg",
    url: "https://buzzwatch.ai",
  },
  {
    slug: "tourscanner",
    name: "TourScanner",
    tagline: "Compare tours and attractions worldwide",
    description:
      "Travel metasearch engine comparing tours, activities, and attraction tickets across the major booking platforms. Built from scratch and scaled to an international audience of millions of travelers.",
    image: "/work/tourscanner.jpg",
    url: "https://tourscanner.com",
  },
  {
    slug: "intelligoai",
    name: "IntelligoAI",
    tagline: "Pay-per-visit practice management for clinics",
    description:
      "Management platform for Italian medical practices with a pricing model the market didn't have: no subscription, pay only for the visits you actually run. Scheduling, patients, and AI assistance, GDPR-first.",
    image: "/work/intelligoai.jpg",
    url: "https://intelligo-ai.com",
  },
  {
    slug: "itasign",
    name: "ItaSign",
    tagline: "eIDAS e-signature without subscriptions",
    description:
      "Digital signature platform for Italian businesses: eIDAS-compliant simple and advanced signatures, sequential signing workflows, multi-organization support. Pay per signature, no subscription.",
    image: "/work/itasign.jpg",
    url: "https://itasign.com",
  },
  {
    slug: "ts-sites",
    name: "TS-Sites",
    tagline: "One CMS, a fleet of attraction sites",
    description:
      "Block-based multi-site CMS that generates and operates SEO-ready ticket minisites for world attractions, each on its own domain with per-locale content, AI page editing, and Search Console integration.",
    image: "/work/ts-sites.jpg",
    url: "https://royal-alcazar-seville-tickets.com",
  },
  {
    slug: "insightflow",
    name: "InsightFlow",
    tagline: "AI analytics on top of your spreadsheets",
    description:
      "Multi-tenant platform that turns raw CSVs, Excel files, and Google Sheets into AI-driven analysis: formulas, charts, commentary, and exportable client reports, with a pluggable connector framework for marketing data sources. In production at an international agency with a dedicated reporting team.",
    image: "/work/insightflow.svg",
  },
  {
    slug: "hotelflex",
    name: "HotelFlex",
    tagline: "Flexible booking on welfare credits",
    description:
      "Family of booking platforms (hotels, events, experiences) built on one shared core: authentication, welfare-credit wallets, coupons, and vouchers, letting Italian welfare users spend their benefits on real travel inventory.",
    image: "/work/hotelflex.svg",
  },
  {
    slug: "fms-portal",
    name: "Workshop order portal",
    tagline: "Live production tracking for an artisan workshop",
    description:
      "Order-tracking portal for a stone-engraving workshop that refused to give up its spreadsheet, so we didn't ask it to: the workbook stays the source of truth, the portal syncs it every few minutes into a mobile dashboard for each sales agent plus an admin view of every production stage.",
    image: "/work/fms.svg",
  },
  {
    slug: "cuore-e-respiro",
    name: "Cuore e Respiro",
    tagline: "Personal health trends from your wearable",
    description:
      "Health companion app that reads heart rate, sleep, SpO2, and activity from Apple Health and Health Connect, builds each person's own baseline, and flags deviations from it with gentle, non-diagnostic check-ins. Nuxt + Capacitor, one codebase to iOS and Android.",
    image: "/work/cuore.svg",
  },
  {
    slug: "real-estate",
    name: "Colzani & Partners",
    tagline: "Luxury real estate, Dubai to Monaco",
    description:
      "Property platform for a luxury real estate firm operating in Dubai, Milan, and Monaco: dark, gold-accented listing experience with a custom admin for managing properties in-house.",
    image: "/work/realestate.svg",
  },
  {
    slug: "agency-ai",
    name: "Agency AI transformation",
    tagline: "An AI innovation program inside a real agency",
    description:
      "Multi-phase AI adoption program for an international digital agency: SEO and paid workflows automated with AI, a keyword-ranking pipeline tracking tens of thousands of keywords weekly, and audit tooling that replaced multiple third-party subscriptions.",
    image: "/work/agency-ai.svg",
  },
  {
    slug: "medical-assistant",
    name: "Medical group AI assistant",
    tagline: "Automated patient intake and scheduling",
    description:
      "Intelligent appointment and patient-intake system for a network of medical clinics: automated triage of requests, WhatsApp-based conversations, and schedule optimization, integrated with the group's practice management.",
    image: "/work/medical-assistant.svg",
  },
  {
    slug: "art-platform",
    name: "Art industry platform",
    tagline: "Co-founded, funded, and scaled",
    description:
      "Tech platform for the art industry we co-founded and led as product: from concept through EUR 3M in seed funding and a 25-person team.",
    image: "/work/art-platform.svg",
  },
  {
    slug: "document-ai",
    name: "Document intelligence platform",
    tagline: "Thousands of documents a day, understood",
    description:
      "Enterprise document processing with OCR, intelligent categorization, and structured data extraction, handling thousands of documents daily with accuracy that improves as it runs.",
    image: "/work/document-ai.svg",
  },
  {
    slug: "beverage-mvp",
    name: "Quick-commerce delivery MVP",
    tagline: "Concept to live product in four weeks",
    description:
      "Beverage delivery platform with real-time order tracking, inventory, and smart routing, taken from first call to a live MVP with paying customers in one month.",
    image: "/work/beverage.svg",
  },
];

export const featuredWork: WorkItem[] = allWork.slice(0, 3);

export interface Product {
  name: string;
  url?: string;
  line: string;
}

export const products: Product[] = [
  {
    name: "BuzzWatch",
    url: "https://buzzwatch.ai",
    line: "AI visibility platform: measure and grow how AI assistants talk about a brand",
  },
  {
    name: "InsightFlow",
    line: "Cross-channel SEO + paid reporting for agencies",
  },
  {
    name: "ItaSign",
    url: "https://itasign.com",
    line: "eIDAS-compliant e-signature for Italian businesses, pay per signature",
  },
  {
    name: "IntelligoAI",
    url: "https://intelligo-ai.com",
    line: "Practice management for medical clinics, pay per visit",
  },
];
