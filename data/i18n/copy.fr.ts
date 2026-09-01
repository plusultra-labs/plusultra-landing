import type { SiteCopy } from "./types";

// French. Vouvoiement, as expected in French B2B. Punctuation carries the
// French non-breaking space, so the text is typographically correct.
export const copyFr: SiteCopy = {
  orgDescription:
    "Plusultra Labs est un studio de produit IA. Nous construisons et exploitons nos propres produits IA, et nous amenons la même équipe senior sur les projets clients : développement de produit IA, intégration de l'IA et plateformes sur mesure.",
  orgShort:
    "Studio de produit IA. Nous livrons nos produits IA, puis nous livrons le vôtre.",

  nav: {
    services: "Services",
    work: "Projets",
    about: "Studio",
    contact: "Contact",
    homeAria: "Plusultra Labs, accueil",
    menuAria: "Ouvrir le menu",
    languageAria: "Changer de langue",
    themeToDark: "Passer au thème sombre",
    themeToLight: "Passer au thème clair",
    themeLight: "Clair",
    themeDark: "Sombre",
  },

  common: {
    bookCall: "Réserver un appel",
    bookScopingCall: "Réserver un premier appel",
    explore: "Découvrir",
    seeSelectedWork: "Voir les projets",
    seeFullList: "Voir la liste complète",
    readFullService: "Lire le service en détail",
    visit: "voir le site",
    repliesWithin: "Réponse sous un jour ouvré",
    repliesWithinTz: "Réponse sous un jour ouvré · heure de Singapour",
    basedIn: "Basés à",
    location: "Singapour · GMT+8",
    breadcrumbHome: "Accueil",
  },

  booking: {
    kicker: "Réserver un appel",
    pickHeading: "Choisissez le moment.",
    pickLead: "{duration} minutes avec Alberto, sur Google Meet. Le premier appel, c'est toujours lui.",
    timezoneNote: "Heures en {tz}",
    loading: "Chargement des créneaux",
    loadError: "Le calendrier ne s'est pas chargé.",
    retry: "Réessayer",
    fallbackLink: "Ouvrir la page de réservation",
    noSlots: "Rien de libre dans les {days} prochains jours. Écrivez-nous, on trouvera un créneau.",
    slotCount: "{n} libres",
    detailsHeading: "Dites-nous de quoi il s'agit.",
    detailsLead: "Votre note part directement dans l'invitation, l'appel commence donc par la vraie question.",
    change: "Changer",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    noteLabel: "Que voulez-vous construire ?",
    notePlaceholder: "Quelques lignes sur le problème, un lien si quelque chose existe déjà, pour qui c'est, et s'il y a une vraie échéance.",
    optional: "Facultatif",
    submit: "Confirmer l'appel",
    submitting: "Réservation",
    submitError: "La réservation n'est pas passée.",
    doneHeading: "C'est réservé.",
    doneLead: "L'invitation part vers {email}. Répondez-y si quelque chose change.",
    joinLink: "Lien pour rejoindre",
    done: "Terminé",
    close: "Fermer",
  },

  home: {
    kicker: "Studio de produit IA · Singapour",
    heroLines: ["Nous livrons nos", "produits IA. Ensuite,", "nous livrons le"],
    heroEmphasis: "vôtre.",
    lead: "Plusultra Labs est un studio de produit IA. Tout ce que nous recommandons, nous l'utilisons déjà nous-mêmes au quotidien : nos produits, nos outils IA, nos systèmes.",
    stats: [
      { label: "Produits en production", value: "35" },
      { label: "Première version utilisable", value: "3–6 semaines" },
      { label: "L'équipe", value: "12 personnes" },
    ],
    proofs: [
      {
        value: "35",
        label: "produits numériques conçus, construits et en service aujourd'hui, pour nous et pour nos clients",
      },
      {
        value: "1,5M+",
        label: "offres de voyage rapprochées et classées sur TourScanner, où notre fondateur travaille sur l'IA et le produit",
      },
      {
        value: "100 %",
        label: "du code et de l'infrastructure livrés sur des comptes qui vous appartiennent",
      },
      {
        value: "24/7",
        label: "nos propres assistants IA font tourner les opérations du studio, donc nous savons que ça tient",
      },
    ],
    servicesKicker: "01 — Ce que nous faisons",
    servicesHeading: "Trois façons de travailler ensemble.",
    servicesIntro:
      "Pas de couche commerciale et pas de passage de relais à des juniors : les personnes du premier appel sont celles qui écrivent le code. Périmètre et prix sont fixés par écrit avant que quoi que ce soit ne commence.",
    buildKicker: "02 — Ce que nous construisons",
    buildHeading: "Quatre types de projet, pas quatre projets.",
    buildIntro:
      "Trente-cinq produits livrés et en service aujourd'hui. Ce qui suit est regroupé par type de projet plutôt que par client, parce que la vraie question est de savoir si nous avons déjà résolu un problème de la même forme que le vôtre, pas si votre secteur figure dans la liste.",
    buildNote: "Exemples seulement · une partie de nos projets clients est sous NDA",
    showcaseHeading: "Quelques-uns que nous pouvons montrer, chiffres à l'appui.",
    showcaseLabel: "Produits maison",
    processKicker: "03 — Comment se déroule un projet",
    processHeading: "Un processus écrit, avec des dates dessus.",
    process: [
      {
        when: "SEMAINE 0",
        title: "Premier appel",
        body: "Un appel avec les ingénieurs qui le construiraient. Vous repartez avec une réponse écrite sur l'adéquation, la fourchette de budget et le calendrier, que vous nous choisissiez ou non.",
      },
      {
        when: "SEMAINE 1",
        title: "Proposition à prix ferme",
        body: "Périmètre, architecture, prix et dates de livraison dans un seul document, validés avant la moindre ligne de code. Aucune surprise facturée à l'heure.",
      },
      {
        when: "SEMAINE 2 — 12",
        title: "Livraisons chaque semaine",
        body: "Un environnement en ligne dès la première semaine et quelque chose à cliquer chaque semaine, avec vos vraies données dedans très tôt.",
      },
      {
        when: "EN CONTINU",
        title: "Nous l'exploitons ou vous le reprenez",
        body: "Nous le maintenons, ou nous vous remettons code et infrastructure documentés. Dans les deux cas, les comptes sont les vôtres dès le premier commit.",
      },
    ],
    ctaHeading: "Un produit à construire, ou un système qui a besoin d'IA",
    ctaEmphasis: "à l'intérieur ?",
    ctaBody:
      "Envoyez-nous un paragraphe sur le problème. Vous recevez un périmètre écrit et une réponse honnête : nous sommes le bon studio, ou nous ne le sommes pas.",
    meta: {
      title: "Plusultra Labs - Studio de produit IA",
      description:
        "Plusultra Labs est un studio de produit IA. Nous livrons nos propres produits IA, puis nous amenons la même équipe d'ingénieurs sur le vôtre. Développement de produit IA, intégration de l'IA, plateformes sur mesure.",
      ogTitle: "Plusultra Labs - Studio de produit IA",
      ogDescription:
        "Nous livrons nos produits IA. Ensuite, nous livrons le vôtre. Développement de produit IA, intégration de l'IA, plateformes sur mesure.",
    },
  },

  services: {
    kicker: "Services",
    heading: "Trois façons de travailler ensemble.",
    lead: "Quelle que soit la forme du projet, l'équipe est celle qui construit et exploite nos propres produits. Vous trouverez ci-dessous ce que nous livrons, ce que cela coûte à peu près, et le temps que cela prend.",
    includedLabel: "Toujours inclus",
    included: [
      "Périmètre écrit et figé avant de commencer",
      "Les personnes de l'appel sont celles du dépôt de code",
      "Une livraison par semaine, à cliquer et à tester",
      "Code et infrastructure sur vos propres comptes",
    ],
    boundariesKicker: "Limites",
    boundariesHeading: "Ce que nous refusons.",
    boundariesBody:
      "Le dire en public fait gagner un appel à tout le monde. C'est aussi la façon la plus rapide de vous dire ce que nous faisons bien.",
    declined: [
      {
        title: "Régie et développeurs à l'heure",
        body: "Nous livrons des résultats sur un périmètre ferme, pas des développeurs sur une feuille de temps.",
      },
      {
        title: "Un cadrage qui finit en document",
        body: "Chaque phase que nous vendons produit du logiciel qui fonctionne, ou un non honnête.",
      },
      {
        title: "Des fonctions IA sans travail mesurable",
        body: "Si un moteur de règles suffit, nous vous le disons et nous laissons le modèle de côté.",
      },
      {
        title: "Marketing, SEO et contenus",
        body: "Nous construisons du produit et des plateformes. La croissance est de votre côté, ou de celui d'un autre.",
      },
      {
        title: "Prix ferme sur périmètre flou",
        body: "Les changements de périmètre sont rechiffrés avant d'être construits, jamais après.",
      },
    ],
    ctaHeading: "Vous ne savez pas lequel correspond ? Le premier appel vous le dira.",
    meta: {
      title: "Services - Plusultra Labs",
      description:
        "Développement de produit IA, intégration de l'IA dans vos systèmes et plateformes sur mesure, par l'équipe derrière BuzzWatch, ItaSign, IntelligoAI et plus de dix SaaS en production.",
    },
  },

  servicePage: {
    breadcrumb: "Services",
    atAGlance: "En bref",
    pointsKicker: "01 — Ce que vous obtenez",
    pointsHeading: "Les éléments qui font la différence.",
    pipelineKicker: "02 — Comment se déroule un projet",
    pipelineHeading: "Un processus écrit, avec des dates dessus.",
    deliverablesKicker: "03 — Livrables",
    deliverablesHeading: "Ce qui vous reste en main.",
    deliverablesIntro:
      "Pas une liste de catégories. Les choses concrètes qui existent à la fin, et qui restent les vôtres.",
    boundariesKicker: "Limites",
    boundariesHeading: "Ce que nous ne faisons pas.",
    boundariesBody: "Le dire à voix haute fait gagner un appel à tout le monde.",
    pricingKicker: "04 — Formats de collaboration",
    pricingHeading: "Des prix publiés, avant même que vous demandiez.",
    pricingNote:
      "Chaque projet est chiffré sur son périmètre réel ; ces fourchettes donnent l'ordre de grandeur pour que vous sachiez où vous en êtes avant le premier appel.",
    faqKicker: "05 — Questions",
    faqHeading: "Les questions qu'on nous pose.",
    relatedKicker: "06 — Projets choisis",
    relatedHeading: "Une sélection de projets sur ce service.",
    relatedNote:
      "Une sélection, pas la liste complète. Une partie de nos projets clients est sous NDA et n'apparaît pas ici.",
    otherServices: "Les deux autres façons de travailler ensemble",
    howToName: "Comment se déroule un projet de {service}",
  },

  work: {
    kicker: "Projets choisis",
    heading: "Trente-cinq livrés. Voici ceux que nous pouvons nommer.",
    lead: "Nos propres produits, le travail réalisé pour des clients, et les produits sur lesquels nous travaillons depuis l'intérieur de l'entreprise d'un autre, de 2014 à aujourd'hui. Tout ce qui figure ici a été livré et est (ou a été) utilisé par de vraies personnes. Une partie de ce que nous construisons est sous NDA et n'apparaît pas, alors lisez cette page comme un échantillon de chaque type de projet plutôt que comme un catalogue.",
    kindsLabel: "Types de projet",
    sectorsLabel: "Secteurs",
    sectors: "Voyage · Santé · Juridique · Immobilier · Marketing · Finance",
    countLabel: "Cités ici / livrés",
    moreWork: "Autres projets",
    ctaHeading: "Le prochain sur cette page pourrait être le vôtre.",
    meta: {
      title: "Projets - Plusultra Labs",
      description:
        "Les projets de Plusultra Labs : BuzzWatch, IntelligoAI, ItaSign, Artupia et des plateformes clients dans la santé, le voyage, l'immobilier et la finance.",
    },
  },

  about: {
    kicker: "Le studio",
    heading: "Un studio de produit, mené comme un produit.",
    lead: "Plusultra Labs vient d'avoir dirigé une entreprise, pas d'avoir vendu des services. Notre fondateur a construit et dirigé la sienne pendant sept ans, puis a passé les années suivantes à construire les produits des autres. Le studio, c'est cela, avec une équipe derrière : nos propres produits, et ceux des autres traités exactement de la même façon.",
    clientsLabel: "Clients en",
    clientsValue: "Europe et en Asie",
    teamLabel: "L'équipe",
    peopleUnit: "personnes",
    storyKicker: "01 — D'où vient tout ça",
    storyHeading: "J'ai commencé en construisant la chose, pas en vendant le service.",
    story: [
      "J'ai lancé mon premier projet seul à quinze ans ; Artupia a été la première vraie entreprise. Je l'ai fondée en 2014, alors que j'étais encore au lycée, et je l'ai dirigée comme fondateur et CEO pendant sept ans : une place de marché où n'importe qui pouvait commander une œuvre à un vrai artiste — vous décrivez ce que vous voulez, les artistes proposent, vous suivez la pièce de l'esquisse à la livraison. Elle a dépassé les 100 000 utilisateurs et les 20 personnes, et levé jusqu'à 3 millions d'euros. En 2021, le Covid a emporté le marché de l'art sur lequel elle reposait. La construire est aussi ce qui a fait de moi un développeur : full-stack en autodidacte, parce que le produit l'exigeait.",
      "Quand le Covid a fermé Artupia, j'aurais pu monter une autre société à moi. J'ai fait exprès l'inverse : je suis allé travailler à l'intérieur des produits des autres. Une application de quick-commerce, une startup d'assistants IA, et depuis 2023 TourScanner — un métamoteur voyage fondé par d'autres en 2018, que je n'ai pas construit et qui ne m'appartient pas. J'y travaille sur l'IA et le produit, sur un million et demi d'offres et 5 000 destinations. C'est là que ça m'est apparu clairement : ce que j'aime vraiment, c'est construire le produit, pas le posséder.",
      "De là est venu le reste du portefeuille, chaque produit né parce qu'il manquait au marché quelque chose d'évident. ItaSign, parce que signer un document avec valeur légale en Europe ne devrait pas exiger un abonnement entreprise. IntelligoAI, parce que les cabinets médicaux italiens devaient choisir entre l'agenda papier et un contrat annuel. BuzzWatch, parce que les clients se sont mis à demander aux assistants quoi acheter et que personne ne voyait ce que ces assistants répondaient. InsightFlow, parce que les agences vivent dans des tableurs.",
      "Les projets clients sont arrivés après, et seulement parce que les gens n'arrêtaient pas de demander qui avait construit tout ça. Le studio fonctionne donc comme les produits : une petite équipe senior, un environnement en ligne dès la première semaine et quelque chose à cliquer chaque vendredi. Nos opérations internes tournent sur des assistants IA que nous avons construits, et c'est aussi comme ça que je sais quoi promettre et quoi ne pas promettre.",
      "C'est tout l'argumentaire. Je ne suis pas un patron d'agence qui a appris l'IA pour signer des contrats. J'ai commencé comme fondateur, j'ai continué à construire quand ma société s'est arrêtée, et presque tout ce que je construis aujourd'hui appartient à quelqu'un d'autre. Ça me va : j'aime la partie produit plus que la partie propriété, et le studio existe pour qu'une équipe entière le fasse pour le vôtre.",
    ],
    storyPullQuote: "Tout ce que nous vendons, nous l'utilisons déjà nous-mêmes.",
    founderRole: "Fondateur · Produit",
    founderAlt: "Alberto, fondateur de Plusultra Labs",
    principlesKicker: "02 — Comment nous travaillons",
    principlesHeading: "Trois choses qui décident de tout le reste.",
    principles: [
      {
        title: "Petits et seniors",
        body: "Une équipe resserrée plus un réseau de spécialistes de confiance, avec l'IA en levier à chaque étape. Vous parlez toujours aux personnes qui font le travail.",
      },
      {
        title: "AI-first pour de vrai",
        body: "Nos opérations tournent sur des assistants IA que nous avons construits : chaque jour, ils répartissent le travail et trient les messages à notre place. Nous vendons ce que nous utilisons.",
      },
      {
        title: "Livré vaut mieux que parfait",
        body: "Quelque chose à cliquer chaque semaine, en ligne dès le départ. Un logiciel devient réel quand des gens l'utilisent, pas quand il fait une belle démo.",
      },
    ],
    teamKicker: "03 — L'équipe",
    teamHeading: "Les personnes qui le construiraient.",
    teamIntro:
      "{n} personnes en produit, design, ingénierie et delivery, plus un réseau élargi de spécialistes que nous mobilisons quand un projet le demande.",
    ctaHeading: "Envie de voir comment nous aborderions votre problème ?",
    personDescription:
      "Fondateur de Plusultra Labs. A fondé Artupia en 2014 et l'a dirigée comme CEO pendant sept ans, jusqu'à dépasser les 100 000 utilisateurs et les 20 personnes avec jusqu'à 3 millions d'euros levés. Construit aujourd'hui les produits d'autres entreprises et exploite un portefeuille comprenant BuzzWatch, ItaSign, IntelligoAI et InsightFlow, et travaille sur l'IA et le produit chez TourScanner.",
    meta: {
      title: "Le studio - Plusultra Labs",
      description:
        "Plusultra Labs est un studio de produit IA basé à Singapour : une équipe senior en produit, design et ingénierie qui construit ses propres produits et applique les mêmes exigences aux projets clients.",
    },
  },

  contact: {
    kicker: "Contact",
    heading: "Parlez à ceux qui écrivent le",
    headingEmphasis: "code.",
    lead: "Une demi-heure d'appel est le moyen le plus rapide de savoir si nous sommes la bonne équipe pour ce que vous voulez construire. Pas besoin de présentation, et dans tous les cas vous repartez avec une réponse écrite.",
    speakingWith: "Vous parlerez avec",
    founderNote: "Fondateur. Le premier appel, je le prends moi-même, à chaque fois.",
    prepKicker: "Avant l'appel",
    prepHeading: "Ce qui rend le premier appel utile.",
    prep: [
      {
        title: "Quelques lignes sur le problème",
        body: "Ce que vous voulez construire, ou quel système a besoin d'IA à l'intérieur. Des mots simples suffisent, un cahier des charges n'est pas nécessaire.",
      },
      {
        title: "Un lien, si quelque chose existe déjà",
        body: "S'il y a un produit, un site ou une version à moitié faite, un lien vaut mille mots.",
      },
      {
        title: "Pour qui c'est",
        body: "Qui l'utilise, qui le paie, et ce que ces personnes font aujourd'hui à la place.",
      },
      {
        title: "Les vraies contraintes",
        body: "Une échéance, un plafond de budget, un régulateur, un système avec lequel il faut s'intégrer. Mieux vaut le dire tôt que le découvrir tard.",
      },
    ],
    meta: {
      title: "Contact - Plusultra Labs",
      description:
        "Réservez un appel avec Plusultra Labs pour parler de votre produit IA, de l'intégration de l'IA dans vos systèmes ou d'une plateforme sur mesure.",
    },
  },

  footer: {
    blurb:
      "Un studio de produit IA basé à Singapour. Nous construisons nos propres logiciels, et nous amenons la même équipe sur les vôtres.",
    studio: "Studio",
    aboutStudio: "Le studio",
    contact: "Contact",
    workingWithUs: "Travailler avec nous",
    promises: [
      "Périmètre ferme avant de commencer",
      "Une livraison par semaine à cliquer",
      "Code sur vos propres comptes",
    ],
    tagline: "Nous livrons nos produits IA. Ensuite, nous livrons le vôtre.",
  },

  llms: {
    intro: "Basés à Singapour, avec des clients en Europe et en Asie.",
    contact: "Contact :",
    whatWeDo: "Ce que nous faisons",
    typicalEngagement: "Projet type : {duration}, à partir de {price}.",
    howItRuns: "Comment se déroule un projet",
    whatWeDont: "Ce que nous ne faisons pas",
    kindsOfBuild: "Types de projet",
    kindsIntro:
      "Nous avons livré 35 produits. La liste ci-dessous est regroupée par type de projet, parce que la vraie question est de savoir si nous avons déjà résolu un problème de cette forme. Une partie de nos projets clients est sous NDA et n'y figure pas.",
    examples: "Exemples :",
    ownProducts: "Produits que nous avons construits et que nous exploitons",
    clientWork: "Une sélection de projets clients",
    roles: "Produits fondés par d'autres sur lesquels nous travaillons",
    questions: "Questions fréquentes",
    pages: "Pages",
    otherLanguages: "Ce site dans d'autres langues",
  },

  team: {
    alberto: "Fondateur · Produit",
    weilin: "Responsable ingénierie",
    marta: "Product Designer senior",
    ravi: "AI Engineer",
    giulia: "Développement full-stack",
    junkai: "Développement full-stack",
    elena: "Product Designer",
    tommaso: "Chef de projet",
    sofia: "Chef de projet",
    andres: "Brand Designer",
    priya: "Data Engineer",
    luca: "QA et opérations",
  },

  categories: {
    saas: {
      title: "Produits SaaS",
      blurb:
        "Des produits multi-locataires avec comptes, facturation, droits et une feuille de route qui continue d'avancer après le lancement. La plupart des nôtres nous appartiennent et nous les exploitons.",
      forWho: "Vous avez une idée de produit, ou une v1 qui doit devenir une entreprise.",
    },
    "internal-tools": {
      title: "Outils internes et plateformes d'exploitation",
      blurb:
        "Le système sur lequel une entreprise tourne vraiment : commandes, fiches, planification, validations, reporting. Il remplace en général un tableur que plus personne n'arrive à maintenir.",
      forWho: "Vos opérations vivent dans des tableurs et dans la tête d'une seule personne.",
    },
    "ai-systems": {
      title: "L'IA dans les systèmes que vous avez déjà",
      blurb:
        "Une couche posée à côté du logiciel que vous utilisez déjà : lecture de documents, tri, recherche sur les connaissances internes, reporting qui s'écrit tout seul.",
      forWho: "Votre logiciel fonctionne, mais votre équipe passe des heures sur ce qu'un modèle ferait.",
    },
    consumer: {
      title: "Applications grand public et mobiles",
      blurb:
        "Des produits utilisés par le public plutôt que par des salariés : interfaces pensées d'abord pour le téléphone, parcours d'inscription, et les problèmes d'échelle qui viennent avec les deux.",
      forWho: "Vous vous adressez au grand public, et la première impression décide de tout.",
    },
  },

  pricing: {
    "ai-product-development": [
      {
        price: "~ 15 000 €",
        title: "Valider",
        body: "Une première version fonctionnelle de votre produit en 3 à 6 semaines : l'expérience centrale, de vrais utilisateurs, de vrais retours. De quoi savoir si l'idée mérite la suite.",
      },
      {
        price: "~ 40 000 €",
        title: "Lancer",
        body: "Le produit complet : design soigné, paiements, espace d'administration, fonctions IA là où elles méritent leur place. Prêt pour des clients payants.",
      },
      {
        price: "80 000 €+",
        title: "Passer à l'échelle",
        body: "Un produit sur plusieurs marchés avec une feuille de route : de nouvelles fonctions chaque semaine, une infrastructure qui grandit avec vous, notre équipe comme votre équipe produit.",
      },
    ],
    "ai-integration": [
      {
        price: "~ 8 000 €",
        title: "Pilote",
        body: "Un processus automatisé de bout en bout sur vos vraies données, avec un résultat mesurable. S'il ne se rembourse pas, vous le saurez vite.",
      },
      {
        price: "~ 25 000 €",
        title: "Déploiement",
        body: "L'IA sur vos processus centraux : documents, communication client, connaissances internes. Votre équipe formée, les coûts sous contrôle.",
      },
      {
        price: "à partir de 2 000 €/mois",
        title: "Exploitation",
        body: "Nous le maintenons et l'améliorons : supervision, suivi des coûts, montées de version des modèles, et de nouvelles automatisations à mesure qu'elles font leurs preuves.",
      },
    ],
    "custom-platforms": [
      {
        price: "~ 5 000 €",
        title: "Site ou portail",
        body: "Un site professionnel ou un petit portail interne, avec un espace d'administration pour gérer le contenu vous-même.",
      },
      {
        price: "~ 15 000 €",
        title: "Plateforme complète",
        body: "Une plateforme complète avec comptes utilisateurs, intégrations avec les outils que vous utilisez déjà, et un vrai back-office.",
      },
      {
        price: "35 000 €+",
        title: "Colonne vertébrale de l'entreprise",
        body: "Le système sur lequel votre entreprise tourne : plusieurs applications, des automatisations, du reporting, exploités et faits évoluer par nous dans la durée.",
      },
    ],
  },
};
