import type { SiteCopy } from "./types";

// English is the source language: this file holds the wording the other three
// were written against.
export const copyEn: SiteCopy = {
  orgDescription:
    "Plusultra Labs is an AI product studio. We build and operate our own AI products, and bring the same senior team to client work: AI product development, AI integration, and custom platforms.",
  orgShort: "AI product studio. We ship our own AI products, then we ship yours.",

  nav: {
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    homeAria: "Plusultra Labs home",
    menuAria: "Toggle menu",
    languageAria: "Change language",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    themeLight: "Light",
    themeDark: "Dark",
  },

  common: {
    bookCall: "Book a call",
    bookScopingCall: "Book a scoping call",
    explore: "Explore",
    seeSelectedWork: "See selected work",
    seeFullList: "See the full list",
    readFullService: "Read the full service",
    visit: "visit",
    repliesWithin: "Replies within one business day",
    repliesWithinTz: "Replies within one business day · Singapore time",
    basedIn: "Based in",
    location: "Singapore · GMT+8",
    breadcrumbHome: "Home",
  },

  booking: {
    kicker: "Book a call",
    pickHeading: "Pick a time.",
    pickLead: "{duration} minutes with Alberto, on Google Meet. He takes the first call himself.",
    timezoneNote: "Times shown in {tz}",
    loading: "Loading available times",
    loadError: "The calendar did not load.",
    retry: "Try again",
    fallbackLink: "Open the booking page instead",
    noSlots: "Nothing free in the next {days} days. Write to us and we will find a time.",
    slotCount: "{n} free",
    detailsHeading: "Tell us what it is about.",
    detailsLead: "Your note goes straight into the calendar invite, so the call can start at the real question.",
    change: "Change",
    nameLabel: "Name",
    emailLabel: "Email",
    noteLabel: "What do you want to build?",
    notePlaceholder: "A few lines on the problem, a link if something exists already, who it is for, and any hard deadline.",
    optional: "Optional",
    submit: "Confirm the call",
    submitting: "Booking",
    submitError: "The booking did not go through.",
    doneHeading: "You are booked.",
    doneLead: "The invite is on its way to {email}. Reply to it if anything changes.",
    joinLink: "Join link",
    done: "Done",
    close: "Close",
  },

  home: {
    kicker: "AI product studio · Singapore",
    heroLines: ["We ship our own", "AI products. Then", "we ship"],
    heroEmphasis: "yours.",
    lead: "Plusultra Labs is an AI product studio. Everything we recommend, we already use ourselves every day: our own products, our own AI tools, our own systems.",
    stats: [
      { label: "Products in production", value: "35" },
      { label: "First usable release", value: "3–6 weeks" },
      { label: "The team", value: "12 people" },
    ],
    proofs: [
      {
        value: "35",
        label: "digital products designed, built, and running today, for ourselves and for clients",
      },
      {
        value: "1.5M+",
        label: "travel offers matched and ranked on TourScanner, where our founder works on AI and product",
      },
      { value: "100%", label: "of code and infrastructure delivered in repositories you own" },
      {
        value: "24/7",
        label: "our own AI assistants run the company's daily operations, so we know it works",
      },
    ],
    servicesKicker: "01 — What we do",
    servicesHeading: "Three ways we work with companies.",
    servicesIntro:
      "No account layer and no handover to juniors: the people on your first call are the people who write the code. Scope and price are fixed in writing before anything starts.",
    buildKicker: "02 — What we build",
    buildHeading: "Four kinds of build, not four projects.",
    buildIntro:
      "Thirty-five products shipped and running today. What follows is grouped by the kind of build rather than by client, because the useful question is whether we have solved your shape of problem before, not whether we happen to list your industry.",
    buildNote: "Examples only · part of our client work sits under NDA",
    showcaseHeading: "A few we can show, with the numbers attached.",
    showcaseLabel: "Own products",
    processKicker: "03 — How an engagement runs",
    processHeading: "A written process, with dates attached to it.",
    process: [
      {
        when: "WEEK 0",
        title: "Scoping call",
        body: "A call with the engineers who would build it. You leave with a written answer on fit, budget range, and timeline, whether or not you hire us.",
      },
      {
        when: "WEEK 1",
        title: "Fixed proposal",
        body: "Scope, architecture, price, and delivery dates in one document, agreed before any code. No hourly surprises.",
      },
      {
        when: "WEEK 2 — 12",
        title: "Weekly releases",
        body: "A live environment from week one and something you can click every week, with your real data in it early.",
      },
      {
        when: "ONGOING",
        title: "Run it or hand it over",
        body: "We operate it, or hand over documented code and infrastructure. Your accounts from the first commit either way.",
      },
    ],
    ctaHeading: "Have a product to build, or a system that needs AI",
    ctaEmphasis: "inside it?",
    ctaBody:
      "Send a paragraph about the problem. You get a written scope and an honest answer about whether we are the right studio for it.",
    meta: {
      title: "Plusultra Labs - AI Product Studio",
      description:
        "Plusultra Labs is an AI product studio. We ship our own AI products, then bring the same engineering team to yours. AI product development, AI integration, custom SaaS.",
      ogTitle: "Plusultra Labs - AI Product Studio",
      ogDescription:
        "We ship our own AI products. Then we ship yours. AI product development, AI integration, custom platforms.",
    },
  },

  services: {
    kicker: "Services",
    heading: "Three ways we work with companies.",
    lead: "Whatever the shape of the engagement, the team is the same one that builds and operates our own products. What follows is what we deliver, roughly what it costs, and how long it takes.",
    includedLabel: "Always included",
    included: [
      "Fixed written scope before work starts",
      "The people on the call are the people in the repo",
      "Weekly release you can click and test",
      "Code and infrastructure in your accounts",
    ],
    boundariesKicker: "Boundaries",
    boundariesHeading: "What we decline.",
    boundariesBody:
      "Saying this in public saves everyone a call. It is also the fastest way to tell you what we are good at.",
    declined: [
      {
        title: "Staff augmentation by the hour",
        body: "We deliver outcomes with a fixed scope, not developers on a timesheet.",
      },
      {
        title: "Discovery that ends in a document",
        body: "Every phase we sell produces working software or an honest no.",
      },
      {
        title: "AI features with no measurable job",
        body: "If a rule engine solves it, we will tell you and skip the model.",
      },
      {
        title: "Marketing, SEO, and content services",
        body: "We build product and platforms. Growth is your side, or someone else's.",
      },
      {
        title: "Fixed-price work with unfixed scope",
        body: "Scope moves get repriced before they are built, never after.",
      },
    ],
    ctaHeading: "Not sure which one fits? The scoping call will tell you.",
    meta: {
      title: "Services - Plusultra Labs",
      description:
        "AI product development, AI integration engineering, and custom platform development by the team behind BuzzWatch, ItaSign, IntelligoAI, and 10+ production SaaS products.",
    },
  },

  servicePage: {
    breadcrumb: "Services",
    atAGlance: "At a glance",
    pointsKicker: "01 — What you get from us",
    pointsHeading: "The parts that make the difference.",
    pipelineKicker: "02 — How an engagement runs",
    pipelineHeading: "A written process, with dates attached to it.",
    deliverablesKicker: "03 — Deliverables",
    deliverablesHeading: "What you actually get.",
    deliverablesIntro:
      "Not a category list. The concrete things that exist at the end, and that stay yours.",
    boundariesKicker: "Boundaries",
    boundariesHeading: "What we don't do.",
    boundariesBody: "Saying it out loud saves everyone a call.",
    pricingKicker: "04 — Engagement models",
    pricingHeading: "Prices published, before you ask.",
    pricingNote:
      "Every project is quoted on its real scope; these ranges show the order of magnitude so you know where you stand before the first call.",
    faqKicker: "05 — Questions",
    faqHeading: "Questions we get asked.",
    relatedKicker: "06 — Selected work",
    relatedHeading: "Selected projects from this service portfolio.",
    relatedNote:
      "A selection, not the full list. Part of our client work sits under NDA and is not shown here.",
    otherServices: "The other two ways we work",
    howToName: "How a {service} engagement runs",
  },

  work: {
    kicker: "Selected work",
    heading: "Thirty-five shipped. These are the ones we can name.",
    lead: "Our own products, work we did for clients, and products we work on from inside somebody else's company, from 2014 to today. Everything here shipped and is (or was) used by real people. Part of what we build sits under NDA and is not listed, so read this as a sample of each kind of build rather than a catalogue.",
    kindsLabel: "Kinds of build",
    sectorsLabel: "Sectors",
    sectors: "Travel · Healthcare · Legal · Real estate · Marketing · Finance",
    countLabel: "Named here / shipped",
    moreWork: "More work",
    ctaHeading: "The next thing on this page could be yours.",
    meta: {
      title: "Our Work - Plusultra Labs",
      description:
        "Notable projects by Plusultra Labs: BuzzWatch, IntelligoAI, ItaSign, Artupia, and client platforms across healthcare, travel, real estate, and finance.",
    },
  },

  about: {
    kicker: "The studio",
    heading: "A product studio, run like a product.",
    lead: "Plusultra Labs comes out of running a company, not out of selling services. Our founder built and ran his own for seven years, then spent the years after it building products for other people. The studio is that, with a team behind it: our own products, and other companies' products treated exactly the same way.",
    clientsLabel: "Clients across",
    clientsValue: "Europe and Asia",
    teamLabel: "The team",
    peopleUnit: "people",
    storyKicker: "01 — Where this started",
    storyHeading: "I started by building the thing, not by selling the service.",
    story: [
      "I bootstrapped my first project at fifteen; Artupia was the first real company. I started it in 2014, while I was still at school, and ran it as founder and CEO for seven years: a marketplace where anyone could commission a piece from a real artist — describe what you want, artists propose, you follow it from sketch to delivery. It grew past 100,000 users and a team of 20, and raised up to EUR 3M. Covid took the art market out from under it in 2021. Building it is also what made me a developer: I taught myself full-stack because the product needed it.",
      "When Covid closed Artupia I could have started another company of my own. I did the opposite, on purpose: I went and worked inside other people's products instead. A quick-commerce app, an AI assistant startup, and since 2023 TourScanner — a travel metasearch someone else founded in 2018, which I did not build and do not own. I work there on AI and product, across 1.5 million offers and 5,000 destinations. That is where it clicked: the part I actually love is building the product, not owning it.",
      "From there came the rest of the portfolio, each one built because the market was missing something obvious. ItaSign, because signing a document legally in Europe should not require an enterprise subscription. IntelligoAI, because Italian medical practices were stuck choosing between a paper agenda and an annual contract. BuzzWatch, because customers started asking assistants what to buy and nobody could see what those assistants were saying. InsightFlow, because agencies live in spreadsheets.",
      "Client work came after that, and only because people kept asking who built these. So the studio works the way the products do: a small senior team, a live environment from week one, and something you can click every Friday. Our own operations run on AI assistants we built, which is also how I know what to promise and what not to.",
      "That is the whole pitch. I am not an agency owner who learned AI to win deals. I started as a founder, I kept building after my own company ended, and most of what I build now belongs to somebody else. That suits me — I like the product part more than the owning part, and the studio exists so a whole team can do it for yours.",
    ],
    storyPullQuote: "Everything we sell, we already run ourselves.",
    founderRole: "Founder · Product",
    founderAlt: "Alberto, founder of Plusultra Labs",
    principlesKicker: "02 — How we work",
    principlesHeading: "Three things that decide everything else.",
    principles: [
      {
        title: "Small and senior",
        body: "A tight team plus a trusted network of specialists, AI-leveraged at every step. You always talk to the people doing the work.",
      },
      {
        title: "AI-first for real",
        body: "Our own operations run on AI assistants we built: dispatching work and triaging messages for us every day. We sell what we use.",
      },
      {
        title: "Shipped beats perfect",
        body: "Something you can click every week, live from the very start. Software is real when people use it, not when it demos well.",
      },
    ],
    teamKicker: "03 — The team",
    teamHeading: "The people who would build it.",
    teamIntro:
      "{n} people across product, design, engineering, and delivery, plus a wider network of specialists we bring in when a project needs them.",
    ctaHeading: "Want to see how we'd approach your problem?",
    personDescription:
      "Founder of Plusultra Labs. Founded Artupia in 2014 and ran it as CEO for seven years, growing it past 100,000 users and a team of 20 on up to EUR 3M raised. Now builds products for other companies and runs a portfolio including BuzzWatch, ItaSign, IntelligoAI, and InsightFlow, and works on AI and product at TourScanner.",
    meta: {
      title: "About - Plusultra Labs",
      description:
        "Plusultra Labs is a Singapore-based AI product studio: a senior team across product, design, and engineering that builds its own products and brings the same standards to client work.",
    },
  },

  contact: {
    kicker: "Contact",
    heading: "Talk to the people who write the",
    headingEmphasis: "code.",
    lead: "A 30-minute call is the fastest way to find out if we're the right team for your build. No deck required, and you leave with a written answer either way.",
    speakingWith: "You will be speaking with",
    founderNote: "Founder. I take the first call myself, every time.",
    prepKicker: "Before the call",
    prepHeading: "What makes the first call useful.",
    prep: [
      {
        title: "A few lines on the problem",
        body: "What you want to build, or which system needs AI inside it. Plain words are fine, a specification is not required.",
      },
      {
        title: "A link, if it exists already",
        body: "If there is a product, a site, or a half-built version, a link is worth a thousand words.",
      },
      {
        title: "Who it is for",
        body: "Who uses it, who pays for it, and what they do today instead.",
      },
      {
        title: "Any hard constraints",
        body: "A deadline, a budget ceiling, a regulator, a system we have to integrate with. Better said early than discovered late.",
      },
    ],
    meta: {
      title: "Contact - Plusultra Labs",
      description:
        "Book a call with Plusultra Labs to discuss your AI product, AI integration, or custom platform.",
    },
  },

  footer: {
    blurb:
      "An AI product studio in Singapore. We build our own software, and bring the same team to yours.",
    studio: "Studio",
    aboutStudio: "About the studio",
    contact: "Contact",
    workingWithUs: "Working with us",
    promises: [
      "Fixed scope before work starts",
      "Weekly release you can click",
      "Code in your own accounts",
    ],
    tagline: "We ship our own AI products. Then we ship yours.",
  },

  llms: {
    intro: "Based in Singapore, working with clients across Europe and Asia.",
    contact: "Contact:",
    whatWeDo: "What we do",
    typicalEngagement: "Typical engagement: {duration}, from {price}.",
    howItRuns: "How an engagement runs",
    whatWeDont: "What we do not do",
    kindsOfBuild: "Kinds of build",
    kindsIntro:
      "We have shipped 35 products. The list below is grouped by the kind of build, because the useful question is whether we have solved a shape of problem before. Part of our client work sits under NDA and is not listed.",
    examples: "Examples:",
    ownProducts: "Products we built and operate",
    clientWork: "Selected client work",
    roles: "Products founded elsewhere that we work on",
    questions: "Common questions",
    pages: "Pages",
    otherLanguages: "This site in other languages",
  },

  team: {
    alberto: "Founder · Product",
    weilin: "Engineering Lead",
    marta: "Senior Product Designer",
    ravi: "AI Engineer",
    giulia: "Full-stack Engineer",
    junkai: "Full-stack Engineer",
    elena: "Product Designer",
    tommaso: "Project Manager",
    sofia: "Project Manager",
    andres: "Brand Designer",
    priya: "Data Engineer",
    luca: "QA & Operations",
  },

  categories: {
    saas: {
      title: "SaaS products",
      blurb:
        "Multi-tenant products with accounts, billing, permissions, and a roadmap that keeps moving after launch. Most of ours we own and operate.",
      forWho: "You have a product idea, or a v1 that needs to become a business.",
    },
    "internal-tools": {
      title: "Internal tools and operations platforms",
      blurb:
        "The system a company actually runs on: orders, records, scheduling, approvals, reporting. Usually replacing a spreadsheet nobody can maintain.",
      forWho: "Your operations live in spreadsheets and one person's head.",
    },
    "ai-systems": {
      title: "AI inside existing systems",
      blurb:
        "A layer beside the software you already run: document processing, triage, retrieval over internal knowledge, reporting that writes itself.",
      forWho: "Your software works, but your team spends hours on what a model could do.",
    },
    consumer: {
      title: "Consumer and mobile apps",
      blurb:
        "Products used by the public rather than by staff: phone-first interfaces, sign-up flows, and the scale problems that come with both.",
      forWho: "You are shipping to consumers, and the first impression decides everything.",
    },
  },

  pricing: {
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
  },
};
