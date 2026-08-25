import { allWork } from "../site";
import type { WorkTexts } from "./types";

// English case-study copy already lives in data/site.ts; this exposes only the
// text fields, which is what the other languages override.
export const workEn = Object.fromEntries(
  allWork.map((w) => [
    w.slug,
    {
      name: w.name,
      tagline: w.tagline,
      period: w.period,
      tags: w.tags,
      paragraphs: w.paragraphs,
    },
  ]),
) as WorkTexts;
