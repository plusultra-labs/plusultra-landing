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
    tagline: "Cross-channel reporting for agency teams",
    description:
      "Marketing intelligence platform used by agency teams to unify SEO and paid performance reporting across clients. In production with a dedicated reporting team at an international agency.",
    image: "/work/insightflow.svg",
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
    slug: "patrimo",
    name: "Patrimo",
    tagline: "CRM built for financial advisors",
    description:
      "Relationship and portfolio CRM designed around how independent financial advisors actually work: clients, mandates, and follow-ups in one place.",
    image: "/work/patrimo.svg",
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
  {
    name: "Patrimo",
    line: "CRM for financial advisors",
  },
];
