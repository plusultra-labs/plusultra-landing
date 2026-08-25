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
  /** own = we built it and it is ours. client = we built it for someone.
   *  role = someone else's company, where we do the product and AI work. */
  kind: "own" | "client" | "role";
}

export const allWork: WorkItem[] = [
  {
    slug: "buzzwatch",
    kind: "own",
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
    kind: "role",
    name: "TourScanner",
    tagline: "AI and product inside a travel metasearch",
    period: "2023 - today",
    tags: ["Product role", "Travel", "Consumer"],
    service: "ai-product-development",
    image: "/work/tourscanner.jpg",
    url: "https://tourscanner.com",
    paragraphs: [
      "TourScanner is a travel metasearch that compares tours, activities, and attraction tickets across more than thirty booking sites, the way flight search works for flights. It was founded in 2018 by other people, and we did not build it.",
      "Alberto joined in 2023 and works there on AI and product: over 1.5 million offers across 5,000 destinations, matched to the right attraction, ranked, and kept current at a scale where every model call has to justify its cost.",
      "It is the clearest example of the work this studio does most of the time. Somebody else founded the company; our job is to make the product better from the inside.",
    ],
  },
  {
    slug: "intelligoai",
    kind: "own",
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
    kind: "own",
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
    slug: "travel-platform-engine",
    kind: "own",
    name: "Travel platform engine",
    tagline: "Managing a portfolio of travel platforms at scale",
    period: "2025 - today",
    tags: ["Internal tool", "Travel", "Multi-site"],
    service: "custom-platforms",
    image: "/work/travel-platform-engine.svg",
    paragraphs: [
      "Running one travel website is easy; running a portfolio of them is an operations problem. We built an engine that manages dozens of travel platforms from a single control room: every site on its own domain, with its own design, content, and audience, all driven by one system.",
      "Under the hood it's a multi-tenant publishing architecture: a block-based page system with per-language content versions, an AI layer that drafts, translates, and refreshes pages across every locale, automated deployment of each site to its own edge infrastructure, and search-engine plumbing (sitemaps, structured data, canonical and language tags) generated correctly for every domain without anyone touching it.",
      "Editors curate rather than build: pick blocks, approve AI drafts, publish. Performance data flows back per site from Search Console, so the portfolio is steered by numbers, not guesses. Launching a complete new platform, in multiple languages, takes hours instead of weeks.",
    ],
  },
  {
    slug: "insightflow",
    kind: "client",
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
    kind: "own",
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
    kind: "own",
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
    kind: "client",
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
    kind: "client",
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
    kind: "client",
    name: "Colzani & Partners",
    tagline: "Luxury real estate, Dubai to Monaco",
    period: "2026 - launching",
    tags: ["Client platform", "Real estate"],
    service: "custom-platforms",
    image: "/work/realestate.jpg",
    url: "https://colzaniandpartners.com",
    paragraphs: [
      "A luxury real estate advisory operating between Dubai, Milan, and Monaco needed a digital presence that matched its properties.",
      "We designed and built a warm, editorial listing experience: full-bleed photography, refined serif typography, and property pages for each of the three markets.",
      "An admin area lets the firm publish and update properties in-house, no agency needed for day-to-day changes.",
    ],
  },
  {
    slug: "agency-ai",
    kind: "client",
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
    kind: "own",
    name: "Artupia",
    tagline: "Custom art, made by real artists",
    period: "2014 - 2021",
    tags: ["Founded", "Marketplace"],
    service: "ai-product-development",
    image: "/work/artupia.svg",
    url: "https://artupia.com",
    paragraphs: [
      "Artupia let anyone commission a custom artwork from a real artist: describe what you want, artists propose, you follow the piece from sketch to delivery.",
      "Alberto founded it and ran it as CEO for seven years, with product and technology in his hands across web, iOS, and backend: the marketplace, the artist tools, and the whole commissioning experience.",
      "It grew past 100,000 users and a team of 20, and raised up to EUR 3M, before Covid closed the art market it depended on.",
    ],
  },
  {
    slug: "document-ai",
    kind: "client",
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
    kind: "client",
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


// Job titles live in the per-locale copy files, keyed by `avatar`.
export interface TeamMember {
  name: string;
  avatar: string;
}

export const team: TeamMember[] = [
  { name: "Alberto", avatar: "alberto" },
  { name: "Wei Lin", avatar: "weilin" },
  { name: "Marta", avatar: "marta" },
  { name: "Ravi", avatar: "ravi" },
  { name: "Giulia", avatar: "giulia" },
  { name: "Jun Kai", avatar: "junkai" },
  { name: "Elena", avatar: "elena" },
  { name: "Tommaso", avatar: "tommaso" },
  { name: "Sofia", avatar: "sofia" },
  { name: "Andrés", avatar: "andres" },
  { name: "Priya", avatar: "priya" },
  { name: "Luca", avatar: "luca" },
];

export interface PricingTier {
  price: string;
  title: string;
  body: string;
}
