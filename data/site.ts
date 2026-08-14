// Shared site content. Case-study images are placeholders until real
// product screenshots are captured (see docs/site-copy/00-sitemap.md).

export interface WorkItem {
  slug: string;
  name: string;
  tagline: string;
  image: string;
}

export const featuredWork: WorkItem[] = [
  {
    slug: "buzzwatch",
    name: "BuzzWatch",
    tagline: "AI visibility SaaS, zero to enterprise partnership",
    image: "https://picsum.photos/seed/plusultra-buzzwatch/1100/860", // TODO real screenshot
  },
  {
    slug: "tourscanner",
    name: "TourScanner",
    tagline: "Travel search, built and scaled internationally",
    image: "https://picsum.photos/seed/plusultra-tourscanner/620/380", // TODO real screenshot
  },
  {
    slug: "intelligoai",
    name: "IntelligoAI",
    tagline: "Clinic management, GDPR-first",
    image: "https://picsum.photos/seed/plusultra-intelligo/620/380", // TODO real screenshot
  },
];

export const allWork: WorkItem[] = [
  ...featuredWork,
  {
    slug: "itasign",
    name: "ItaSign",
    tagline: "eIDAS-compliant e-signature platform",
    image: "https://picsum.photos/seed/plusultra-itasign/620/380", // TODO real screenshot
  },
  {
    slug: "insightflow",
    name: "InsightFlow",
    tagline: "Cross-channel reporting for agencies",
    image: "https://picsum.photos/seed/plusultra-insightflow/620/380", // TODO real screenshot
  },
  {
    slug: "ts-sites",
    name: "TS-Sites",
    tagline: "Multi-site CMS generating SEO-ready minisites",
    image: "https://picsum.photos/seed/plusultra-tssites/620/380", // TODO real screenshot
  },
  {
    slug: "real-estate",
    name: "Luxury real estate platform",
    tagline: "Listings + custom CMS for Dubai, Milan, Monaco",
    image: "https://picsum.photos/seed/plusultra-realestate/620/380", // TODO real screenshot
  },
  {
    slug: "patrimo",
    name: "Patrimo",
    tagline: "CRM for financial advisors",
    image: "https://picsum.photos/seed/plusultra-patrimo/620/380", // TODO real screenshot
  },
];

export interface Product {
  name: string;
  url?: string;
  line: string;
}

export const products: Product[] = [
  { name: "BuzzWatch", url: "https://buzzwatch.ai", line: "AI visibility platform: measure and grow how AI assistants talk about a brand" },
  { name: "InsightFlow", line: "Cross-channel SEO + paid reporting for agencies" },
  { name: "ItaSign", line: "eIDAS-compliant e-signature for Italian businesses" },
  { name: "IntelligoAI", line: "Practice management for medical clinics" },
  { name: "Patrimo", line: "CRM for financial advisors" },
];
