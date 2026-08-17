// Shared site content. Screenshots in /public/work are captured from the
// live products; SVG covers stand in for private / unreleased platforms.

export interface WorkItem {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  tags: string[];
  paragraphs: string[];
  image: string;
  url?: string;
  service: "ai-product-development" | "ai-integration" | "custom-platforms";
}

export const allWork: WorkItem[] = [
  {
    slug: "buzzwatch",
    name: "BuzzWatch",
    tagline: "See what AI says about your brand",
    period: "2024 - today",
    tags: ["Own product", "AI", "Marketing tech"],
    service: "ai-product-development",
    image: "/work/buzzwatch.jpg",
    url: "https://buzzwatch.ai",
    paragraphs: [
      "More and more customers ask ChatGPT, Perplexity, or Google AI for advice before they buy. BuzzWatch shows a brand exactly what those assistants say about it and its competitors, and where it is invisible.",
      "The platform tracks hundreds of real customer questions per brand every week, measures share of voice in the answers, and turns the gaps into a concrete content and optimization plan. An AI writer and site tools close the loop from insight to fix.",
      "Started as our own bet on where search is going, BuzzWatch has grown from zero to paying customers and an enterprise partnership with an international agency.",
    ],
  },
  {
    slug: "tourscanner",
    name: "TourScanner",
    tagline: "Compare tours and attractions worldwide",
    period: "2017 - today",
    tags: ["Own product", "Travel", "Consumer"],
    service: "ai-product-development",
    image: "/work/tourscanner.jpg",
    url: "https://tourscanner.com",
    paragraphs: [
      "TourScanner is a travel search engine that compares tours, activities, and attraction tickets across the major booking sites, the way flight search works for flights.",
      "We built it from scratch: data ingestion from all major booking platforms, matching millions of listings to the right attraction, ranking, and a multi-language consumer experience.",
      "It grew into an international product used by millions of travelers a year, and the strongest proof that we can take a product from idea to global scale.",
    ],
  },
  {
    slug: "intelligoai",
    name: "IntelligoAI",
    tagline: "Pay-per-visit management for medical clinics",
    period: "2025 - today",
    tags: ["Own product", "Healthcare"],
    service: "ai-product-development",
    image: "/work/intelligoai.jpg",
    url: "https://intelligo-ai.com",
    paragraphs: [
      "Italian medical practices were stuck between paper agendas and expensive management software with annual contracts. IntelligoAI changed the deal: no subscription, you pay a few cents only for the visits you actually run.",
      "The platform covers scheduling, patient records, and an AI assistant that handles routine requests, built privacy-first for health data.",
      "The pricing model the market didn't have is exactly the kind of product thinking we bring to every build.",
    ],
  },
  {
    slug: "itasign",
    name: "ItaSign",
    tagline: "Digital signatures without subscriptions",
    period: "2025 - today",
    tags: ["Own product", "Legal tech"],
    service: "ai-product-development",
    image: "/work/itasign.jpg",
    url: "https://itasign.com",
    paragraphs: [
      "Signing a document legally in Europe usually means an enterprise subscription. ItaSign lets Italian businesses send documents for legally valid electronic signature and pay per signature instead.",
      "Under the hood: EU-compliant (eIDAS) simple and advanced signatures, sequential signing workflows, and multi-organization support, wrapped in an interface a small business actually understands.",
    ],
  },
  {
    slug: "ts-sites",
    name: "TS-Sites",
    tagline: "One tool to manage a fleet of travel websites",
    period: "2025 - today",
    tags: ["Internal tool", "Travel", "Content system"],
    service: "custom-platforms",
    image: "/work/ts-sites.svg",
    paragraphs: [
      "TS-Sites is the internal tool we built to manage and curate a portfolio of travel websites from one place: content, translations, design blocks, and publishing for every site, each on its own domain.",
      "Editors curate pages with visual blocks, AI helps draft and update content in every language, and search-engine best practices ship with every page automatically.",
      "What used to be weeks of work per website is now a few hours of curation.",
    ],
  },
  {
    slug: "insightflow",
    name: "InsightFlow",
    tagline: "AI analysis on top of your spreadsheets",
    period: "2024 - today",
    tags: ["Client platform", "AI", "Analytics"],
    service: "ai-integration",
    image: "/work/insightflow.svg",
    paragraphs: [
      "Agencies live in spreadsheets: exports, client data, campaign numbers. InsightFlow turns those raw CSVs, Excel files, and Google Sheets into finished analysis: charts, commentary, and polished client reports.",
      "An AI engine reads the data, finds what matters, and writes the story; a connector framework pulls marketing data sources in automatically.",
      "It runs in production at an international agency, where a dedicated reporting team uses it for client work every week.",
    ],
  },
  {
    slug: "hotelflex",
    name: "HotelFlex",
    tagline: "Book hotels with welfare credits",
    period: "2023 - today",
    tags: ["Own product", "Travel", "Fintech"],
    service: "ai-product-development",
    image: "/work/hotelflex.jpg",
    url: "https://hotelflex.it",
    paragraphs: [
      "Millions of Italian employees receive welfare credits they can spend on travel, but most booking sites can't accept them. HotelFlex can.",
      "It lets people book hotels, apartments, and holiday homes in real time, paying with their welfare credits: accounts, credit wallets, coupons, and vouchers connected to real travel inventory.",
    ],
  },
  {
    slug: "eventflex",
    name: "EventFlex",
    tagline: "Concerts and events on welfare credits",
    period: "2024 - today",
    tags: ["Own product", "Events", "Fintech"],
    service: "ai-product-development",
    image: "/work/eventflex.jpg",
    url: "https://eventflex.it",
    paragraphs: [
      "EventFlex brings the same welfare-credit wallet to live entertainment: concerts, sport, theatre, and festivals, bookable in real time.",
      "It shares one core platform with HotelFlex, so accounts, credits, and vouchers work identically across both, and new verticals can launch fast.",
    ],
  },
  {
    slug: "fms-portal",
    name: "Workshop order portal",
    tagline: "Live order tracking for an artisan workshop",
    period: "2026",
    tags: ["Client platform", "Confidential"],
    service: "custom-platforms",
    image: "/work/fms.svg",
    paragraphs: [
      "A stone-engraving workshop managed hundreds of orders in one big spreadsheet, and it worked. So instead of forcing new software on them, we kept the spreadsheet as the single source of truth.",
      "The portal reads it every few minutes and turns it into a phone-friendly dashboard: each sales agent sees their own orders and their exact stage, the owner sees the whole workshop at a glance.",
      "Zero retraining, zero double data entry. The client's way of working stayed; the visibility changed completely.",
    ],
  },
  {
    slug: "cuore-e-respiro",
    name: "Cuore e Respiro",
    tagline: "Personal health trends from your wearable",
    period: "2026 - in development",
    tags: ["Client app", "Healthcare", "Mobile"],
    service: "ai-product-development",
    image: "/work/cuore.jpg",
    paragraphs: [
      "Cuore e Respiro is a health companion app that reads heart rate, sleep, oxygen, and activity from Apple Health and Health Connect, then learns each person's own normal.",
      "When something drifts away from that personal baseline, the app doesn't diagnose; it asks gentle, contextual questions and keeps a diary the person can share with their doctor.",
      "One codebase ships to iPhone and Android, with the strict privacy handling health data demands.",
    ],
  },
  {
    slug: "colzani-partners",
    name: "Colzani & Partners",
    tagline: "Luxury real estate, Dubai to Monaco",
    period: "2026 - launching",
    tags: ["Client platform", "Real estate"],
    service: "custom-platforms",
    image: "/work/realestate.svg",
    url: "https://colzaniandpartners.com",
    paragraphs: [
      "A luxury real estate firm operating between Dubai, Milan, and Monaco needed a digital presence that matched its properties.",
      "We designed and built a dark, gold-accented listing experience with an admin area the firm uses to publish properties in-house, no agency needed for updates.",
    ],
  },
  {
    slug: "agency-ai",
    name: "Agency AI transformation",
    tagline: "An AI innovation program inside a real agency",
    period: "2026 - today",
    tags: ["Client program", "AI", "Confidential"],
    service: "ai-integration",
    image: "/work/agency-ai.svg",
    paragraphs: [
      "An international digital agency wanted AI in its daily work, not in a slide deck. We run its AI innovation program together with its teams.",
      "Shipped so far: AI-assisted SEO and advertising workflows, a ranking pipeline watching tens of thousands of keywords every week, and audit tools that replaced several third-party software subscriptions.",
      "The program runs in phases with dedicated teams on both sides, and every phase has to pay for itself before the next one starts.",
    ],
  },
  {
    slug: "artupia",
    name: "Artupia",
    tagline: "Custom art, made by real artists",
    period: "2016 - 2021",
    tags: ["Co-founded", "Marketplace"],
    service: "ai-product-development",
    image: "/work/artupia.svg",
    url: "https://artupia.com",
    paragraphs: [
      "Artupia let anyone commission a custom artwork from a real artist: describe what you want, artists propose, you follow the piece from sketch to delivery.",
      "We co-founded the company and led product and technology: marketplace, artist tools, and the commissioning experience.",
      "The venture raised EUR 3M in funding and grew to a team of 25.",
    ],
  },
  {
    slug: "document-ai",
    name: "Document intelligence platform",
    tagline: "Thousands of documents a day, understood",
    period: "2023",
    tags: ["Client platform", "AI", "Confidential"],
    service: "ai-integration",
    image: "/work/document-ai.svg",
    paragraphs: [
      "An enterprise drowning in inbound documents needed them read, sorted, and turned into structured data without an army of people.",
      "We built a processing platform that recognizes each document type, extracts the fields that matter, and gets more accurate the longer it runs. It handles thousands of documents a day.",
    ],
  },
  {
    slug: "beverage-mvp",
    name: "Quick-commerce delivery MVP",
    tagline: "Idea to live product in four weeks",
    period: "2022",
    tags: ["Client app", "Confidential"],
    service: "custom-platforms",
    image: "/work/beverage.svg",
    paragraphs: [
      "A founder wanted to test beverage delivery in their city before committing serious money. Four weeks later the first version was live: ordering, live tracking, inventory, and smart routing.",
      "The point wasn't the app; it was the answer. Real customers, real orders, and a clear decision on whether to invest further, for a fraction of the usual cost.",
    ],
  },
];

export const featuredWork = allWork.slice(0, 3);

export interface Product {
  name: string;
  url?: string;
  line: string;
}

export const products: Product[] = [
  {
    name: "BuzzWatch",
    url: "https://buzzwatch.ai",
    line: "See and improve what AI assistants say about a brand",
  },
  {
    name: "InsightFlow",
    line: "AI analysis and client reports from raw spreadsheets",
  },
  {
    name: "ItaSign",
    url: "https://itasign.com",
    line: "Legally valid digital signatures, pay per signature",
  },
  {
    name: "IntelligoAI",
    url: "https://intelligo-ai.com",
    line: "Management software for medical clinics, pay per visit",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export const team: TeamMember[] = [
  { name: "Alberto", role: "Founder · Product", avatar: "/team/alberto.svg" },
  { name: "Wei Lin", role: "Engineering Lead", avatar: "/team/weilin.svg" },
  { name: "Marta", role: "Senior Product Designer", avatar: "/team/marta.svg" },
  { name: "Ravi", role: "AI Engineer", avatar: "/team/ravi.svg" },
  { name: "Giulia", role: "Full-stack Engineer", avatar: "/team/giulia.svg" },
  { name: "Jun Kai", role: "Full-stack Engineer", avatar: "/team/junkai.svg" },
  { name: "Elena", role: "Product Designer", avatar: "/team/elena.svg" },
  { name: "Tommaso", role: "Project Manager", avatar: "/team/tommaso.svg" },
  { name: "Sofia", role: "Project Manager", avatar: "/team/sofia.svg" },
  { name: "Andrés", role: "Brand Designer", avatar: "/team/andres.svg" },
  { name: "Priya", role: "Data Engineer", avatar: "/team/priya.svg" },
  { name: "Luca", role: "QA & Operations", avatar: "/team/luca.svg" },
];

export interface PricingTier {
  price: string;
  title: string;
  body: string;
}

export const pricing: Record<WorkItem["service"], PricingTier[]> = {
  "ai-product-development": [
    {
      price: "~ EUR 15k",
      title: "Validate",
      body: "A working first version of your product in 3 to 6 weeks: the core experience, real users, real feedback. Enough to know if the idea deserves more.",
    },
    {
      price: "~ EUR 40k",
      title: "Launch",
      body: "The full product: polished design, payments, admin area, AI features where they earn their place. Ready for paying customers.",
    },
    {
      price: "EUR 80k+",
      title: "Scale",
      body: "Multi-market product with a roadmap: new features shipping weekly, infrastructure that grows with you, our team as your product team.",
    },
  ],
  "ai-integration": [
    {
      price: "~ EUR 8k",
      title: "Pilot",
      body: "One workflow automated end to end on your real data, with a measurable result. If it doesn't pay for itself, you'll know fast.",
    },
    {
      price: "~ EUR 25k",
      title: "Rollout",
      body: "AI across your core processes: documents, customer communication, internal knowledge. Your team trained, costs under control.",
    },
    {
      price: "from EUR 2k/mo",
      title: "Operate",
      body: "We keep it running and improving: monitoring, cost tracking, model upgrades, and new automations as they prove themselves.",
    },
  ],
  "custom-platforms": [
    {
      price: "~ EUR 5k",
      title: "Site or portal",
      body: "A professional website or a small internal portal, with an admin area so you manage content yourself.",
    },
    {
      price: "~ EUR 15k",
      title: "Full platform",
      body: "A complete platform with user accounts, integrations with the tools you already use, and a real back office.",
    },
    {
      price: "EUR 35k+",
      title: "Business backbone",
      body: "The system your company runs on: multiple apps, automations, reporting, operated and evolved by us over time.",
    },
  ],
};
