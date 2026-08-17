// Faceless silhouette avatars, implemented from the "Team Avatars" design
// (variant 2a: warm silhouette parts kit), remapped to the site palette.
// Each avatar is a stack of absolutely positioned layers inside a 96x96
// circular field. Units are px within that 96x96 box.

export interface AvatarLayer {
  l?: number;
  t?: number;
  b?: number;
  w: number;
  h: number;
  br?: string; // border-radius
  bg?: string;
  bd?: string; // border
  rot?: number;
}

export interface AvatarSpec {
  field: string;
  layers: AvatarLayer[];
}

// palette
const BLUE = "#2743e0";
const BLUE_MID = "#5b72ea";
const BLUE_SOFT = "#98a6ff";
const FIELD_BLUE = "#b9c4f6";
const FIELD_GREY = "#e4e5df";
const FIELD_SAND = "#e6ddc4";
const INK = "#141513";
const GREY = "#5c5e59";
const HAIR_DARK = "#1c1d1a";
const HAIR_SOFT = "#262723";
const SKIN_1 = "#f2e3d3";
const SKIN_2 = "#d9ae8b";
const SKIN_3 = "#a2765a";

const shoulders = (bg: string): AvatarLayer => ({ l: 8, b: -14, w: 80, h: 44, br: "999px 999px 0 0", bg });
const neck = (bg: string, t = 52): AvatarLayer => ({ l: 42, t, w: 12, h: 16, bg });
const head = (bg: string): AvatarLayer => ({ l: 30, t: 20, w: 36, h: 40, br: "999px 999px 800px 800px", bg });
const headSm = (bg: string): AvatarLayer => ({ l: 31, t: 22, w: 34, h: 38, br: "999px 999px 800px 800px", bg });
const glasses = (l1 = 30, l2 = 52): AvatarLayer[] => [
  { l: l1, t: 34, w: 14, h: 14, br: "999px", bd: `2px solid ${INK}` },
  { l: l2, t: 34, w: 14, h: 14, br: "999px", bd: `2px solid ${INK}` },
  { l: l1 + 14, t: 40, w: l2 - l1 - 14, h: 2, bg: INK },
];

export const avatars: Record<string, AvatarSpec> = {
  // 1 · round hair + earring + collar
  marta: {
    field: FIELD_BLUE,
    layers: [
      shoulders(BLUE),
      neck(SKIN_2),
      { l: 22, t: 12, w: 52, h: 50, br: "999px", bg: HAIR_SOFT },
      head(SKIN_2),
      { l: 26, t: 40, w: 7, h: 7, br: "999px", bg: BLUE },
      { l: 20, b: 26, w: 56, h: 10, br: "999px", bg: BLUE_MID },
    ],
  },
  // 2 · side part, dark-blond hair
  alberto: {
    field: FIELD_GREY,
    layers: [
      shoulders(HAIR_SOFT),
      { l: 34, b: 22, w: 28, h: 16, br: "0 0 999px 999px", bg: SKIN_1 },
      neck(SKIN_1, 50),
      { l: 29, t: 14, w: 38, h: 26, br: "999px 999px 0 0", bg: "#a67c48" },
      head(SKIN_1),
      { l: 29, t: 15, w: 38, h: 12, br: "999px 999px 40% 40%", bg: "#a67c48" },
    ],
  },
  // 3 · fringe + headphones
  junkai: {
    field: FIELD_SAND,
    layers: [
      shoulders(INK),
      neck(SKIN_2),
      { l: 26, t: 14, w: 44, h: 50, br: "999px 999px 6px 6px", bg: HAIR_DARK },
      headSm(SKIN_2),
      { l: 30, t: 14, w: 36, h: 14, br: "999px 999px 30% 30%", bg: HAIR_DARK },
      { l: 24, t: 16, w: 48, h: 24, br: "999px 999px 0 0", bd: `4px solid ${BLUE}` },
      { l: 20, t: 34, w: 12, h: 18, br: "6px", bg: BLUE },
      { l: 64, t: 34, w: 12, h: 18, br: "6px", bg: BLUE },
    ],
  },
  // 4 · headscarf
  priya: {
    field: BLUE,
    layers: [
      shoulders(BLUE_SOFT),
      { l: 22, t: 14, w: 52, h: 62, br: "999px 999px 30% 30%", bg: BLUE_SOFT },
      headSm(SKIN_3),
      { l: 28, t: 16, w: 40, h: 12, br: "999px 999px 30% 30%", bg: BLUE_SOFT },
      { l: 25, b: 20, w: 46, h: 8, br: "999px", bg: FIELD_BLUE },
    ],
  },
  // 5 · curls + turtleneck
  tommaso: {
    field: BLUE_MID,
    layers: [
      shoulders(FIELD_GREY),
      neck(SKIN_1),
      head(SKIN_1),
      { l: 30, t: 44, w: 36, h: 22, br: "0 0 999px 999px", bg: GREY },
      { l: 32, t: 42, w: 32, h: 10, bg: SKIN_1 },
      { l: 24, t: 10, w: 20, h: 20, br: "999px", bg: GREY },
      { l: 38, t: 6, w: 22, h: 22, br: "999px", bg: GREY },
      { l: 54, t: 12, w: 18, h: 18, br: "999px", bg: GREY },
    ],
  },
  // 6 · long hair + glasses
  sofia: {
    field: FIELD_GREY,
    layers: [
      shoulders(BLUE_MID),
      neck(SKIN_3),
      { l: 24, t: 14, w: 48, h: 58, br: "999px 999px 40% 40%", bg: HAIR_SOFT },
      headSm(SKIN_3),
      { l: 30, t: 16, w: 36, h: 14, br: "999px 999px 20% 20%", bg: HAIR_SOFT },
      ...glasses(31, 51),
    ],
  },
  // 7 · flat top + beard + v-neck
  weilin: {
    field: INK,
    layers: [
      shoulders(FIELD_BLUE),
      { l: 36, b: 20, w: 24, h: 20, bg: FIELD_BLUE, rot: 45 },
      neck(SKIN_3),
      head(SKIN_3),
      { l: 30, t: 42, w: 36, h: 24, br: "0 0 999px 999px", bg: HAIR_DARK },
      { l: 33, t: 40, w: 30, h: 8, bg: SKIN_3 },
      { l: 29, t: 15, w: 38, h: 14, br: "999px 999px 0 0", bg: HAIR_DARK },
    ],
  },
  // 8 · bun + earrings
  giulia: {
    field: FIELD_BLUE,
    layers: [
      shoulders(INK),
      neck(SKIN_1),
      { l: 36, t: 2, w: 24, h: 22, br: "999px", bg: GREY },
      { l: 27, t: 14, w: 42, h: 30, br: "999px 999px 0 0", bg: GREY },
      head(SKIN_1),
      { l: 28, t: 16, w: 40, h: 12, br: "999px 999px 30% 30%", bg: GREY },
      { l: 25, t: 40, w: 6, h: 6, br: "999px", bg: BLUE },
      { l: 65, t: 40, w: 6, h: 6, br: "999px", bg: BLUE },
    ],
  },
  // 9 · round hair + glasses (remix)
  ravi: {
    field: FIELD_SAND,
    layers: [
      shoulders(BLUE),
      neck(SKIN_3),
      { l: 22, t: 12, w: 52, h: 50, br: "999px", bg: HAIR_DARK },
      head(SKIN_3),
      ...glasses(),
    ],
  },
  // 10 · buzz cut + earring (remix)
  andres: {
    field: BLUE_MID,
    layers: [
      shoulders(FIELD_GREY),
      neck(SKIN_2),
      head(SKIN_2),
      { l: 29, t: 15, w: 38, h: 13, br: "999px 999px 40% 40%", bg: HAIR_SOFT },
      { l: 26, t: 40, w: 7, h: 7, br: "999px", bg: BLUE },
    ],
  },
  // 11 · headscarf, inverted colors (remix)
  elena: {
    field: FIELD_GREY,
    layers: [
      shoulders(INK),
      { l: 22, t: 14, w: 52, h: 62, br: "999px 999px 30% 30%", bg: BLUE },
      headSm(SKIN_2),
      { l: 28, t: 16, w: 40, h: 12, br: "999px 999px 30% 30%", bg: BLUE },
      { l: 25, b: 20, w: 46, h: 8, br: "999px", bg: BLUE_SOFT },
    ],
  },
  // 12 · long warm hair (remix)
  luca: {
    field: FIELD_SAND,
    layers: [
      shoulders(GREY),
      neck(SKIN_1),
      { l: 24, t: 14, w: 48, h: 58, br: "999px 999px 40% 40%", bg: "#6b4a2e" },
      headSm(SKIN_1),
      { l: 30, t: 16, w: 36, h: 14, br: "999px 999px 20% 20%", bg: "#6b4a2e" },
    ],
  },
};
