// English long-form content for the three service pages. The other languages
// live in data/i18n/services.<locale>.ts and satisfy the same shape; the
// merge back into ServiceContent (with the localised URL) happens in
// data/i18n/index.ts.

import type { WorkItem } from "./site";

export interface ServiceStage {
  title: string;
  duration: string;
  basis: string;
  body: string;
  outputs: string[];
}

export interface ServiceContent {
  slug: WorkItem["service"];
  to: string;
  cardTitle: string;
  cardBody: string;
  title: string;
  lead: string;
  specs: { label: string; value: string }[];
  narrative: { heading: string; paragraphs: string[]; pullQuote: string };
  points: { title: string; body: string }[];
  pipeline: { intro: string; stages: ServiceStage[]; footnote: string };
  deliverables: { group: string; items: string[] }[];
  notDoing: string[];
  faq: { q: string; a: string }[];
  cta: string;
  meta: { title: string; description: string };
}

export const services: ServiceContent[] = [
  {
    slug: "ai-product-development",
    to: "/services/ai-product-development",
    cardTitle: "AI product development",
    cardBody:
      "From idea to finished product. We design, build, and run digital products the same way we build our own: first version live in weeks, built to last.",
    title: "AI product development, by people who ship their own",
    lead: "Most agencies build their first AI product on your budget. We already built ours: BuzzWatch, InsightFlow, ItaSign, and IntelligoAI are live SaaS products we designed, shipped, and operate. Your product gets the patterns that survived production.",
    specs: [
      { label: "Typical duration", value: "6–12 weeks" },
      { label: "First usable release", value: "3–6 weeks" },
      { label: "From", value: "~ EUR 15k" },
    ],
    narrative: {
      heading: "What you are really buying when you hire someone to build a product",
      paragraphs: [
        "The standard version goes like this. An agency quotes a discovery phase, produces a specification, and subcontracts the build. Six months later you own a codebase nobody on the original call has read, running on infrastructure nobody wants to maintain, with an AI feature that costs more per user than the user pays.",
        "We took the other route. Before selling AI product development we built our own. BuzzWatch tracks what AI assistants say about a brand and has paying customers and an enterprise agency partnership. ItaSign, IntelligoAI, and InsightFlow are live, paid for, and operated by us.",
        "That changes what you get. The architecture we propose is architecture we run. The API costs we quote are costs we pay every month. The failure modes we design around are the ones that already woke us up at night. You are buying the patterns that survived contact with real users, not the ones that looked good in a proposal.",
      ],
      pullQuote:
        "Everything we recommend, we already run in production ourselves.",
    },
    points: [
      {
        title: "Design and architecture from the business model",
        body: "Scoping starts with who pays, for what, and what the unit economics have to look like. Only then does the stack get decided. We will tell you which features to cut, and which ones will not survive their own API bill.",
      },
      {
        title: "First version live in weeks",
        body: "A shippable increment in production inside 3 to 6 weeks, then weekly releases. You watch progress on a real environment with real data, not in a slide deck. If the idea is wrong, you find out while it is still cheap to change.",
      },
      {
        title: "AI engineered for cost and latency",
        body: "Model routing, caching, batching, fallbacks, and hard spend caps in the code. We run the same providers for our own products and know the difference between a demo that impresses and a feature that stays profitable at a thousand users.",
      },
      {
        title: "Design that does not look generated",
        body: "Interface and brand work by designers, not a component library left on its defaults. Your product should look like it was made on purpose, because prospects decide what they think of it in about four seconds.",
      },
      {
        title: "Built to be handed over",
        body: "Documented, tested, standard stack, your accounts. Whether we operate it for years or you move it in-house next quarter, you own the code, the data, and the infrastructure from the first commit.",
      },
      {
        title: "We operate what we ship",
        body: "Hosting, monitoring, incident response, and a roadmap that keeps moving after launch. The version of a product that matters is version twelve, not version one.",
      },
    ],
    pipeline: {
      intro:
        "Every engagement runs through the same four stages. Each one ends with something you can hold and a decision you can make: continue, change direction, or stop.",
      stages: [
        {
          title: "Scoping",
          duration: "1 week",
          basis: "Free",
          body: "A call, then a short written answer. Problem, users, business model, and whether we are the right people for it.",
          outputs: [
            "Problem, users, and business model on the table",
            "An honest fit or no-fit answer",
            "Budget range and realistic timeline",
          ],
        },
        {
          title: "Blueprint",
          duration: "1 to 2 weeks",
          basis: "Fixed price",
          body: "The plan that makes the build a commitment instead of an estimate. Scope, stack, cost model, and dates, agreed before code.",
          outputs: [
            "Fixed scope and feature list",
            "Architecture and stack decision",
            "AI cost model per user",
            "Fixed price and delivery dates",
          ],
        },
        {
          title: "Build",
          duration: "3 to 12 weeks",
          basis: "Fixed per phase",
          body: "Production from week one, weekly releases after. Nothing is demoed on a laptop that is not also live.",
          outputs: [
            "Live environment from week one",
            "Weekly demo and release",
            "Admin area and real data early",
            "Design system and brand applied",
          ],
        },
        {
          title: "Launch and operate",
          duration: "Ongoing",
          basis: "Monthly",
          body: "We keep it running and keep it moving, or hand it over cleanly whenever you want.",
          outputs: [
            "Hosting, monitoring, and backups",
            "Cost and usage tracking",
            "Roadmap and weekly shipping",
            "Clean handover on request",
          ],
        },
      ],
      footnote:
        "You can stop after any stage and keep everything built up to that point, in your own accounts.",
    },
    deliverables: [
      {
        group: "Product",
        items: [
          "Interface design and brand application",
          "Web app, responsive, production-grade",
          "Admin back office for your team",
          "Payments, subscriptions, and invoicing where relevant",
          "Multi-language when your market needs it",
        ],
      },
      {
        group: "AI layer",
        items: [
          "Model selection and routing across providers",
          "Retrieval over your own content and data",
          "Evaluation harness, so quality is measured rather than assumed",
          "Spend caps, usage metering, and per-customer limits",
          "Fallbacks for when a provider degrades",
        ],
      },
      {
        group: "Foundations",
        items: [
          "Your own cloud, database, and repository accounts",
          "CI/CD with staging and production environments",
          "Monitoring, error tracking, and alerting",
          "Product analytics from launch day",
          "Documentation and handover notes",
        ],
      },
    ],
    notDoing: [
      "Discovery phases that end in a document instead of software.",
      "Staff augmentation. We deliver outcomes, not developers by the hour.",
      "Marketing, SEO, or content services. We build product, we are not an ad agency.",
      "AI features that exist so the pitch deck can say AI. If a rule engine solves it, we will say so.",
      "Lock-in. No proprietary platform, no accounts in our name, no exit fee.",
    ],
    faq: [
      {
        q: "How fast can we realistically be live?",
        a: "A first usable version in 3 to 6 weeks for most products, assuming decisions come back within a couple of days. The blueprint stage exists precisely to turn that timeline into a commitment rather than an estimate.",
      },
      {
        q: "Who actually writes the code?",
        a: "The people on your calls. We are a small senior team and we do not subcontract the build. You will know each person working on your product by name.",
      },
      {
        q: "What happens to the AI bill as we grow?",
        a: "We model it per user before the build and meter it after, with hard caps in the code. Most products we run cost cents per active user per month, and we show you the arithmetic for yours during the blueprint.",
      },
      {
        q: "Can we take the product in-house later?",
        a: "Yes, and it is designed for that. Standard stack, your accounts, documented. Handover is a scheduled two-week process, not a negotiation.",
      },
      {
        q: "What if we already have a half-built product?",
        a: "Common situation. We start with an audit of what exists and tell you honestly whether it is a foundation or a sunk cost. We have taken over both kinds.",
      },
      {
        q: "Do you sign NDAs and work with our legal team?",
        a: "Yes. Standard practice for us, and we are used to going through EU data protection reviews.",
      },
    ],
    cta: "Have a product idea that deserves a real build?",
    meta: {
      title: "AI Product Development - Plusultra Labs",
      description:
        "We design, build, and operate AI products end to end, the same way we build our own SaaS. MVP in weeks, production-grade from day one.",
    },
  },
  {
    slug: "ai-integration",
    to: "/services/ai-integration",
    cardTitle: "AI integration",
    cardBody:
      "AI inside the tools your company already uses. Privacy-compliant, costs you can predict, and the people you talk to are the people who build it.",
    title: "AI inside your systems. Engineered, not advised.",
    lead: "Big consultancies sell you a roadmap. We sell you a working system. We integrate LLMs into the software your company already runs, with EU-compliant architecture and costs you can predict, because we run the same AI infrastructure for our own products every day.",
    specs: [
      { label: "Typical duration", value: "4–8 weeks" },
      { label: "Pilot", value: "3–5 weeks, fixed price" },
      { label: "From", value: "~ EUR 8k" },
    ],
    narrative: {
      heading: "Where AI actually pays off in a company that already works",
      paragraphs: [
        "You have probably already heard the other pitch. A large consultancy runs a discovery, produces a maturity assessment and a roadmap, and leaves. The roadmap is not wrong. It is just not software, and nothing in your company works differently on Monday morning.",
        "The valuable work in a mid-market company is narrower and far more concrete. Documents that arrive as PDFs and get retyped into an ERP. Customer emails that somebody triages by hand for three hours a day. Knowledge sitting in a shared drive nobody can search. Quotes assembled by copy and paste. These are the workflows where a well-engineered AI layer removes real hours, and they are almost never the ones on the slide.",
        "So we start from your systems as they are: the CRM you are not going to replace, the ERP with fifteen years of history in it, the mailbox everything flows through. We put the AI layer beside them, on EU infrastructure, with an audit trail and a cost ceiling. Then we prove it on one workflow before anybody signs up for a rollout.",
      ],
      pullQuote:
        "A pilot that pays for itself, or an honest answer that it will not.",
    },
    points: [
      {
        title: "We write the code",
        body: "The people on the call are the people in the repository. No handoff to a delivery team you never met, no offshore subcontractor, no account manager relaying your questions to someone else.",
      },
      {
        title: "Real cost models",
        body: "API spend, hosting, and maintenance modeled before you commit and metered after, with caps in the code. Nobody gets a surprise invoice because a loop ran overnight.",
      },
      {
        title: "EU and GDPR by architecture",
        body: "Data residency, model choice, retention, and audit trail designed in at the start rather than patched on for the auditor. Sensitive processing can stay inside the EU, or on your own servers where the law requires it.",
      },
      {
        title: "It connects to what you already run",
        body: "Sales, operations, and finance systems, mailboxes, file shares, databases. We integrate through the interfaces your vendors actually expose, and we tell you plainly when a system has none.",
      },
      {
        title: "Measured, not assumed",
        body: "Every pilot ships with the number it has to move: hours saved, response time, error rate, cost per document. If the number does not move, we say so and you stop.",
      },
      {
        title: "Proven in our own production",
        body: "Document processing, customer triage, internal knowledge, agent workflows. Our own operations run on AI assistants every day, so every pattern we propose has already survived our own use of it.",
      },
    ],
    pipeline: {
      intro:
        "Four stages, each with a decision gate at the end. The pilot is deliberately small and fixed-price, because the point of it is to find out cheaply whether the rest is worth doing.",
      stages: [
        {
          title: "Systems audit",
          duration: "1 to 2 weeks",
          basis: "Fixed price",
          body: "We map how work and data actually move through your company, then rank the candidates by value rather than by novelty.",
          outputs: [
            "Map of your systems and where data really flows",
            "Ranked list of candidate workflows",
            "Cost and savings model per candidate",
            "The honest list of where AI does not fit",
          ],
        },
        {
          title: "Pilot",
          duration: "3 to 5 weeks",
          basis: "Fixed price",
          body: "One workflow, end to end, on your real data. Small enough to fund out of a department budget, real enough to prove the case.",
          outputs: [
            "One workflow live on your real data",
            "The target metric measured before and after",
            "EU-hosted, audit-logged, cost-capped",
            "A go or no-go you can defend internally",
          ],
        },
        {
          title: "Rollout",
          duration: "6 to 12 weeks",
          basis: "Fixed per phase",
          body: "Extend what the pilot proved across the processes next to it, and drop what it disproved.",
          outputs: [
            "The proven pattern extended across processes",
            "Integrations into the systems of record",
            "Your team trained on the new flow",
            "Everything the pilot disproved, dropped",
          ],
        },
        {
          title: "Operate",
          duration: "Ongoing",
          basis: "Monthly",
          body: "Models change every few months. We keep quality, cost, and uptime where they were on the day you signed off.",
          outputs: [
            "Monitoring and output quality checks",
            "Cost tracking per workflow",
            "Model upgrades as providers move",
            "New automations as they prove out",
          ],
        },
      ],
      footnote:
        "You can stop after any stage and keep everything built up to that point, in your own accounts.",
    },
    deliverables: [
      {
        group: "Integration",
        items: [
          "Connectors into your CRM, ERP, mailbox, and file storage",
          "Document ingestion: PDFs, scans, spreadsheets, attachments",
          "Retrieval over internal knowledge, with permissions respected",
          "Write-back into the systems of record, not just a separate dashboard",
          "Scheduled and event-driven runs, not manual copy and paste",
        ],
      },
      {
        group: "AI engineering",
        items: [
          "Model selection and routing across EU-available providers",
          "Evaluation sets, so quality is a number and not an opinion",
          "Human review in the loop where the stakes require it",
          "Guardrails, fallbacks, and hard spend caps",
          "Open models on your own infrastructure when data cannot leave",
        ],
      },
      {
        group: "Compliance and operations",
        items: [
          "Data residency and retention decisions, documented",
          "Full audit trail of what the system saw and did",
          "Access control aligned to your existing roles",
          "Monitoring, alerting, and a named person to call",
          "Data processing agreement and vendor documentation",
        ],
      },
    ],
    notDoing: [
      "Maturity assessments, readiness scores, and roadmaps that are not software.",
      "Ripping out systems that work. We integrate with your ERP, we do not replace it.",
      "A chatbot on the website as a first project. That is rarely where the money is.",
      "Training your data into a public model. Your data stays yours.",
      "Vague retainers. Every phase has a scope, a price, and a number it has to move.",
    ],
    faq: [
      {
        q: "Do we have to move our data to the US?",
        a: "No. We select providers with EU data residency, and for the most sensitive workloads we run open models on European infrastructure or on your own servers. That choice is made explicitly during the audit, with the trade-offs written down.",
      },
      {
        q: "How much does the AI itself cost to run?",
        a: "For most mid-market workflows, tens to a few hundred euros a month in API spend, far below the labor it replaces. We model it per document or per request before you commit, and meter it live afterwards.",
      },
      {
        q: "What if the pilot fails?",
        a: "Then you paid a small fixed price to find that out in five weeks instead of committing to a rollout. That is what the stage is for. We have told clients to stop before.",
      },
      {
        q: "Our IT team is small. What do they have to do?",
        a: "Give us access and answer questions about the systems. We do the engineering. At rollout we train the people who will use it and document what your team needs in order to support it.",
      },
      {
        q: "Will this replace people?",
        a: "In our experience it removes the part of the job nobody wanted: retyping, sorting, searching. We design for a person reviewing the output wherever the stakes are real, and we tell you plainly when a workflow is genuinely fully automatable.",
      },
      {
        q: "Can you work with our existing software vendor?",
        a: "Yes, and often we have to. We are used to integrating around a vendor's API limits, and to being the ones who read their documentation properly.",
      },
    ],
    cta: "Ready to see where AI actually pays off in your systems?",
    meta: {
      title: "AI Integration for Mid-Market Companies - Plusultra Labs",
      description:
        "We put AI inside your existing systems: model selection, EU/GDPR-compliant architecture, cost control, production monitoring. Engineers, not slideware.",
    },
  },
  {
    slug: "custom-platforms",
    to: "/services/custom-platforms",
    cardTitle: "Custom platforms",
    cardBody:
      "Portals, management systems, internal tools, marketplaces. Solid platforms delivered in weeks and looked after once they're live.",
    title: "Custom platforms that ship in weeks and run for years",
    lead: "Client portals, CRMs, booking systems, marketplaces, internal tools. We build them the way we build our own products: small senior team, modern stack, production from week one. And we stay to operate them.",
    specs: [
      { label: "Typical duration", value: "3–8 weeks" },
      { label: "After launch", value: "Operated monthly" },
      { label: "From", value: "~ EUR 5k" },
    ],
    narrative: {
      heading: "The gap between what your software does and what your company does",
      paragraphs: [
        "Most businesses fill that gap with spreadsheets, a shared drive, and one person who knows how it all fits together. It works until it does not: until that person is on holiday, until the spreadsheet hits a limit, until a client asks for something the tool simply cannot show them.",
        "Custom software used to be the expensive answer to that gap. It is not anymore. A standardized modern stack, plus a team that genuinely uses AI on its own work, means a real platform with accounts, permissions, integrations, and a back office ships in weeks, at a price that competes with a year of per-seat licenses.",
        "We know because we run this for ourselves. Our travel platform engine drives dozens of separate sites from a single control room, each on its own domain, in its own languages. Our internal operations run on tools we built. Same architecture, same team, pointed at whatever your business needs to stop doing by hand.",
      ],
      pullQuote:
        "A real back office, so you stop calling us for every change.",
    },
    points: [
      {
        title: "Weeks, honestly",
        body: "Typical scope ships in 3 to 6 weeks because the stack is standardized and we leverage AI heavily on our own work. Not because we cut corners that you pay for later.",
      },
      {
        title: "A real back office",
        body: "Every platform gets an admin area built for your team, not a database viewer. You add users, change content, adjust settings, and pull reports without opening a ticket with us.",
      },
      {
        title: "It talks to your other tools",
        body: "Accounting, payments, calendars, mailboxes, the CRM. A platform that does not integrate just becomes one more place where somebody retypes the same information.",
      },
      {
        title: "AI-ready by default",
        body: "The same architecture our AI products use. When you want document parsing, drafting, or search across your own data, it lands as a feature rather than a rebuild.",
      },
      {
        title: "Built for the people in it daily",
        body: "Interfaces designed around the actual job and tested with the team that will live in them eight hours a day. Adoption is a design problem well before it is a training problem.",
      },
      {
        title: "We operate it",
        body: "Hosting, backups, monitoring, security updates, and small evolutions on one predictable monthly line. You own the code, the data, and the infrastructure accounts throughout.",
      },
    ],
    pipeline: {
      intro:
        "The same four stages as everything else we build. Fixed price agreed before any code, weekly demos during, and a clear operating arrangement after.",
      stages: [
        {
          title: "Scoping",
          duration: "1 week",
          basis: "Free",
          body: "What the platform has to do, who lives in it, and what it replaces. Including whether an off-the-shelf tool would serve you better.",
          outputs: [
            "What the platform must do, and for whom",
            "What it replaces and what it must connect to",
            "An honest fit or no-fit answer",
            "Budget range and timeline",
          ],
        },
        {
          title: "Blueprint",
          duration: "1 week",
          basis: "Fixed price",
          body: "Screen by screen, integration by integration, priced and dated before we start building.",
          outputs: [
            "Screen-by-screen scope",
            "Data model and integration list",
            "Fixed price and delivery date",
            "Design direction agreed",
          ],
        },
        {
          title: "Build",
          duration: "3 to 8 weeks",
          basis: "Fixed price",
          body: "Your real data goes in early and your team sees it weekly, so surprises land in week two instead of at delivery.",
          outputs: [
            "Weekly demo on a live environment",
            "Your real data loaded early",
            "Admin area from the first week",
            "Acceptance testing with your actual team",
          ],
        },
        {
          title: "Launch and operate",
          duration: "Ongoing",
          basis: "Monthly",
          body: "Migration, training, then a predictable monthly line covering everything that keeps it healthy.",
          outputs: [
            "Migration and go-live support",
            "Training for users and administrators",
            "Hosting, backups, monitoring, updates",
            "Small evolutions every month",
          ],
        },
      ],
      footnote:
        "You can stop after any stage and keep everything built up to that point, in your own accounts.",
    },
    deliverables: [
      {
        group: "Platform",
        items: [
          "Web application, responsive on phone and desktop",
          "User accounts, roles, and permissions",
          "Admin back office for your team",
          "Reporting and exports your finance team can actually use",
          "Multi-language where you need it",
        ],
      },
      {
        group: "Integrations",
        items: [
          "Payments and invoicing",
          "Email and calendar",
          "Accounting and ERP systems",
          "Import from the spreadsheets you are replacing",
          "An API for your other tools to consume",
        ],
      },
      {
        group: "Foundations",
        items: [
          "Your own cloud and repository accounts",
          "Staging and production environments",
          "Automated backups with tested restores",
          "Monitoring, error tracking, and alerting",
          "Documentation for administrators and developers",
        ],
      },
    ],
    notDoing: [
      "Per-seat licensing. You own it, and adding users does not change the price.",
      "Rebuilding something that already works. We will tell you when the answer is an off-the-shelf tool.",
      "Handing over a codebase with no documentation and wishing you luck.",
      "Marketing or SEO services on top. We build the platform, growth is your side or someone else's.",
      "Change requests priced after the fact. Scope moves get repriced before they are built.",
    ],
    faq: [
      {
        q: "Is custom really cheaper than a SaaS subscription?",
        a: "Often, past a certain team size. Twenty seats on a mid-tier tool is easily 15k a year, forever, on somebody else's roadmap. A platform built for your process is a one-off build plus a predictable operating line, and it does what you actually do.",
      },
      {
        q: "What if our requirements change during the build?",
        a: "Expected, and planned for. Weekly demos exist so changes surface in week two rather than at delivery. Small changes get absorbed. Anything that moves scope materially is repriced before it is built, never after.",
      },
      {
        q: "Who owns the code?",
        a: "You do, from the first commit, in your own repository. Same for the cloud accounts, the domain, and the database.",
      },
      {
        q: "What happens if we stop working with you?",
        a: "The platform keeps running. Everything sits in your accounts on a standard stack, and we document it for whoever takes over. We would rather be kept because it works than because leaving is difficult.",
      },
      {
        q: "Can you take over a platform someone else built?",
        a: "Yes, if the code is recoverable. We start with an audit and a written verdict: extend, refactor, or rebuild. We have done all three.",
      },
      {
        q: "Do you handle GDPR and security?",
        a: "Yes. EU hosting, access control, encryption, a tested backup and restore procedure, and a data processing agreement. For regulated clients we go through their security review with them.",
      },
    ],
    cta: "Need a platform your business can actually run on?",
    meta: {
      title: "Custom Platforms & SaaS Development - Plusultra Labs",
      description:
        "Production-grade custom platforms: portals, CRMs, marketplaces, internal tools. Delivered in weeks on a modern stack by a team that operates 10+ of its own.",
    },
  },
];
