import { services } from "../services";
import type { ServiceTexts } from "./types";

// English service copy already lives in data/services.ts; this just strips the
// routing fields so it matches the shape the other languages provide.
export const servicesEn = Object.fromEntries(
  services.map(({ slug: _slug, to: _to, ...text }) => [_slug, text]),
) as ServiceTexts;
