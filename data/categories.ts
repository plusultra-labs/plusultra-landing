// Kinds of work, not a portfolio list.
// The site elsewhere claims 35 products shipped; allWork names 15. That gap is
// deliberate and stated in the copy: these are examples of each kind of build,
// not the complete set. Keep `examples` to three per category so a category
// reads as a sample rather than an inventory.
//
// The wording (title, blurb, forWho) lives in the per-locale copy files,
// keyed by the slug below.

import type { WorkItem } from "./site";

export interface WorkCategory {
  slug: string;
  examples: string[];
}

export const workCategories: WorkCategory[] = [
  { slug: "saas", examples: ["buzzwatch", "itasign", "intelligoai"] },
  {
    slug: "internal-tools",
    examples: ["travel-platform-engine", "fms-portal", "colzani-partners"],
  },
  { slug: "ai-systems", examples: ["insightflow", "document-ai", "agency-ai"] },
  { slug: "consumer", examples: ["hotelflex", "cuore-e-respiro", "beverage-mvp"] },
];

/** Resolve a category's example slugs against a (possibly localised) work list. */
export function categoryExamples(category: WorkCategory, work: WorkItem[]): WorkItem[] {
  return category.examples
    .map((slug) => work.find((w) => w.slug === slug))
    .filter((w): w is WorkItem => Boolean(w));
}
