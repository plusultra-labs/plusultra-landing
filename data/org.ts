// Single source of truth for the entity facts.
// Entity consistency is the point: an assistant weights a claim by how
// consistently it appears across the sources it retrieves, so the name,
// description, and location below must be worded identically everywhere
// they surface (JSON-LD, llms.txt, meta tags, page copy).

export const SITE_URL = "https://plusultralabs.com";

export const org = {
  name: "Plusultra Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og_image.png`,
  email: "alberto@plusultralabs.com",
  // One canonical sentence. Do not paraphrase it per-page.
  description:
    "Plusultra Labs is an AI product studio. We build and operate our own AI products, and bring the same senior team to client work: AI product development, AI integration, and custom platforms.",
  shortDescription: "AI product studio. We ship our own AI products, then we ship yours.",
  foundingLocation: "Singapore",
  areaServed: ["Europe", "Asia"],
  founder: {
    name: "Alberto",
    jobTitle: "Founder · Product",
    image: `${SITE_URL}/alberto.jpg`,
    email: "alberto@plusultralabs.com",
  },
  knowsAbout: [
    "AI product development",
    "Large language model integration",
    "Retrieval-augmented generation",
    "Custom SaaS platform development",
    "EU and GDPR compliant AI architecture",
    "Production AI cost control",
    "Travel technology",
  ],
  // Only sites this studio actually owns: sameAs asserts identity, and
  // TourScanner belongs to someone else.
  sameAs: [
    "https://buzzwatch.ai",
    "https://itasign.com",
    "https://intelligo-ai.com",
  ],
} as const;
