// The contract every language file has to satisfy. TypeScript is the safety
// net here: if a locale forgets a string the build fails rather than the page
// silently falling back to English.
//
// Long-form copy is kept as parallel content per language, not as a
// key/value dictionary. The four files are structurally identical, so reading
// copy.en.ts next to copy.it.ts shows you the pair — but each language is
// written to sound native, not to mirror the English sentence by sentence.

import type { ServiceSlug } from "../routes";
import type { PricingTier, WorkItem } from "../site";

export type { PricingTier };
import type { ServiceContent } from "../services";

/** Everything about a service except where it lives. */
export type ServiceText = Omit<ServiceContent, "slug" | "to">;
export type ServiceTexts = Record<ServiceSlug, ServiceText>;

/** The words of a case study; slug, image, url and service stay in data/site.ts. */
export type WorkText = Pick<WorkItem, "name" | "tagline" | "period" | "tags" | "paragraphs">;
export type WorkTexts = Record<string, WorkText>;

export interface CategoryText {
  title: string;
  blurb: string;
  /** What the buyer recognises themselves in. */
  forWho: string;
}
export type CategoryTexts = Record<string, CategoryText>;

export type PricingTexts = Record<ServiceSlug, PricingTier[]>;

/** Job titles, keyed by the avatar id in data/site.ts. */
export type TeamRoles = Record<string, string>;

export interface Labelled {
  label: string;
  value: string;
}

export interface TitledBody {
  title: string;
  body: string;
}

export interface SiteCopy {
  /** Studio one-liner used in meta tags and JSON-LD, in this language. */
  orgDescription: string;
  orgShort: string;

  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    homeAria: string;
    menuAria: string;
    languageAria: string;
  };

  common: {
    bookCall: string;
    bookScopingCall: string;
    explore: string;
    seeSelectedWork: string;
    seeFullList: string;
    readFullService: string;
    visit: string;
    repliesWithin: string;
    repliesWithinTz: string;
    basedIn: string;
    location: string;
    breadcrumbHome: string;
  };

  /** The in-page cal.com booking dialog. */
  booking: {
    kicker: string;
    pickHeading: string;
    pickLead: string;
    timezoneNote: string;
    loading: string;
    loadError: string;
    retry: string;
    fallbackLink: string;
    noSlots: string;
    slotCount: string;
    detailsHeading: string;
    detailsLead: string;
    change: string;
    nameLabel: string;
    emailLabel: string;
    noteLabel: string;
    notePlaceholder: string;
    optional: string;
    submit: string;
    submitting: string;
    submitError: string;
    doneHeading: string;
    doneLead: string;
    joinLink: string;
    done: string;
    close: string;
  };

  home: {
    kicker: string;
    heroLines: string[];
    heroEmphasis: string;
    lead: string;
    stats: Labelled[];
    proofs: Labelled[];
    servicesKicker: string;
    servicesHeading: string;
    servicesIntro: string;
    buildKicker: string;
    buildHeading: string;
    buildIntro: string;
    buildNote: string;
    showcaseHeading: string;
    showcaseLabel: string;
    processKicker: string;
    processHeading: string;
    process: { when: string; title: string; body: string }[];
    ctaHeading: string;
    ctaEmphasis: string;
    ctaBody: string;
    meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  };

  services: {
    kicker: string;
    heading: string;
    lead: string;
    includedLabel: string;
    included: string[];
    boundariesKicker: string;
    boundariesHeading: string;
    boundariesBody: string;
    declined: TitledBody[];
    ctaHeading: string;
    meta: { title: string; description: string };
  };

  servicePage: {
    breadcrumb: string;
    atAGlance: string;
    pointsKicker: string;
    pointsHeading: string;
    pipelineKicker: string;
    pipelineHeading: string;
    deliverablesKicker: string;
    deliverablesHeading: string;
    deliverablesIntro: string;
    boundariesKicker: string;
    boundariesHeading: string;
    boundariesBody: string;
    pricingKicker: string;
    pricingHeading: string;
    pricingNote: string;
    faqKicker: string;
    faqHeading: string;
    relatedKicker: string;
    relatedHeading: string;
    relatedNote: string;
    otherServices: string;
    howToName: string;
  };

  work: {
    kicker: string;
    heading: string;
    lead: string;
    kindsLabel: string;
    sectorsLabel: string;
    sectors: string;
    countLabel: string;
    moreWork: string;
    ctaHeading: string;
    meta: { title: string; description: string };
  };

  about: {
    kicker: string;
    heading: string;
    lead: string;
    clientsLabel: string;
    clientsValue: string;
    teamLabel: string;
    peopleUnit: string;
    storyKicker: string;
    storyHeading: string;
    story: string[];
    storyPullQuote: string;
    founderRole: string;
    founderAlt: string;
    principlesKicker: string;
    principlesHeading: string;
    principles: TitledBody[];
    teamKicker: string;
    teamHeading: string;
    teamIntro: string;
    ctaHeading: string;
    personDescription: string;
    meta: { title: string; description: string };
  };

  contact: {
    kicker: string;
    heading: string;
    headingEmphasis: string;
    lead: string;
    speakingWith: string;
    founderNote: string;
    prepKicker: string;
    prepHeading: string;
    prep: TitledBody[];
    meta: { title: string; description: string };
  };

  footer: {
    blurb: string;
    studio: string;
    aboutStudio: string;
    contact: string;
    workingWithUs: string;
    promises: string[];
    tagline: string;
  };

  /** Headings for the generated llms.txt, one per language. */
  llms: {
    intro: string;
    contact: string;
    whatWeDo: string;
    typicalEngagement: string;
    howItRuns: string;
    whatWeDont: string;
    kindsOfBuild: string;
    kindsIntro: string;
    examples: string;
    ownProducts: string;
    clientWork: string;
    roles: string;
    questions: string;
    pages: string;
    otherLanguages: string;
  };

  team: TeamRoles;
  categories: CategoryTexts;
  pricing: PricingTexts;
}
