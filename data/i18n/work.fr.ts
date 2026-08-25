import type { WorkTexts } from "./types";

export const workFr: WorkTexts = {
  buzzwatch: {
    name: "BuzzWatch",
    tagline: "Voyez ce que l'IA dit de votre marque",
    period: "2024 - aujourd'hui",
    tags: ["Produit maison", "IA", "Marketing tech"],
    paragraphs: [
      "De plus en plus de clients demandent conseil à ChatGPT, Perplexity ou Google AI avant d'acheter. BuzzWatch montre à une marque exactement ce que ces assistants disent d'elle et de ses concurrents, et là où elle est invisible.",
      "La plateforme suit chaque semaine des centaines de vraies questions de clients par marque, mesure la part de voix dans les réponses et transforme les manques en un plan concret de contenu et d'optimisation. Un rédacteur IA et des outils sur le site bouclent la boucle, de l'analyse à la correction.",
      "Né comme notre pari sur l'avenir de la recherche, BuzzWatch est passé de zéro à des clients payants et à un partenariat entreprise avec une agence internationale.",
    ],
  },
  tourscanner: {
    name: "TourScanner",
    tagline: "IA et produit à l'intérieur d'un métamoteur voyage",
    period: "2023 - aujourd'hui",
    tags: ["Rôle produit", "Voyage", "Grand public"],
    paragraphs: [
      "TourScanner est un métamoteur voyage qui compare visites, activités et billets d'attractions sur plus de trente sites de réservation, comme les comparateurs le font pour les vols. Il a été fondé en 2018 par d'autres personnes, et nous ne l'avons pas construit.",
      "Alberto l'a rejoint en 2023 et y travaille sur l'IA et le produit : plus d'un million et demi d'offres sur 5 000 destinations, rattachées à la bonne attraction, classées et tenues à jour à une échelle où chaque appel de modèle doit justifier son coût.",
      "C'est l'exemple le plus clair du travail que ce studio fait la plupart du temps. Quelqu'un d'autre a fondé l'entreprise ; notre rôle est d'améliorer le produit de l'intérieur.",
    ],
  },
  intelligoai: {
    name: "IntelligoAI",
    tagline: "Gestion à la consultation pour les cabinets médicaux",
    period: "2025 - aujourd'hui",
    tags: ["Produit maison", "Santé"],
    paragraphs: [
      "Les cabinets médicaux italiens étaient coincés entre l'agenda papier et des logiciels de gestion coûteux à contrat annuel. IntelligoAI a changé la règle : pas d'abonnement, vous payez quelques centimes uniquement pour les consultations réellement effectuées.",
      "La plateforme couvre la prise de rendez-vous, les dossiers patients et un assistant IA qui traite les demandes courantes, conçue avec la confidentialité en premier parce qu'il s'agit de données de santé.",
      "Le modèle tarifaire qui manquait au marché est exactement le type de réflexion produit que nous apportons à chaque projet.",
    ],
  },
  itasign: {
    name: "ItaSign",
    tagline: "La signature électronique sans abonnement",
    period: "2025 - aujourd'hui",
    tags: ["Produit maison", "Legal tech"],
    paragraphs: [
      "Signer un document avec valeur légale en Europe suppose en général un abonnement entreprise. ItaSign permet aux entreprises italiennes d'envoyer des documents en signature électronique juridiquement valable et de payer à la signature.",
      "Sous le capot : signatures simples et avancées conformes au règlement eIDAS, parcours de signature séquentiels et gestion multi-organisation, le tout dans une interface qu'une petite entreprise comprend vraiment.",
    ],
  },
  "travel-platform-engine": {
    name: "Moteur de plateformes voyage",
    tagline: "Piloter un portefeuille de plateformes voyage à grande échelle",
    period: "2025 - aujourd'hui",
    tags: ["Outil interne", "Voyage", "Multi-site"],
    paragraphs: [
      "Gérer un site voyage est facile ; en gérer un portefeuille est un problème d'exploitation. Nous avons construit un moteur qui pilote des dizaines de plateformes voyage depuis une seule salle de contrôle : chaque site sur son domaine, avec son design, son contenu et son audience, tous animés par un même système.",
      "Sous le capot, une architecture de publication multi-locataire : des pages construites par blocs avec des versions de contenu par langue, une couche IA qui rédige, traduit et rafraîchit les pages dans toutes les langues, le déploiement automatique de chaque site sur sa propre infrastructure edge, et toute la plomberie pour les moteurs de recherche (sitemaps, données structurées, balises canoniques et de langue) générée correctement pour chaque domaine sans que personne n'y touche.",
      "Les éditeurs sélectionnent au lieu de construire : ils choisissent des blocs, valident les brouillons de l'IA, publient. Les données de performance remontent site par site depuis Search Console, si bien que le portefeuille se pilote avec des chiffres et non au jugé. Lancer une nouvelle plateforme complète, en plusieurs langues, prend des heures au lieu de semaines.",
    ],
  },
  insightflow: {
    name: "InsightFlow",
    tagline: "L'analyse par IA posée sur vos tableurs",
    period: "2024 - aujourd'hui",
    tags: ["Plateforme client", "IA", "Analytique"],
    paragraphs: [
      "Les agences vivent dans les tableurs : exports, données clients, chiffres de campagne. InsightFlow transforme ces CSV bruts, ces fichiers Excel et ces Google Sheets en analyses finies : graphiques, commentaires et rapports clients présentables.",
      "Un moteur IA lit les données, trouve ce qui compte et écrit le récit ; un cadre de connecteurs fait entrer automatiquement les sources de données marketing.",
      "Il tourne en production dans une agence internationale, où une équipe dédiée au reporting l'utilise chaque semaine pour ses clients.",
    ],
  },
  hotelflex: {
    name: "HotelFlex",
    tagline: "Réserver un hôtel avec ses crédits d'avantages salariés",
    period: "2023 - aujourd'hui",
    tags: ["Produit maison", "Voyage", "Fintech"],
    paragraphs: [
      "Des millions de salariés italiens reçoivent des crédits d'avantages sociaux utilisables en voyage, mais presque aucun site de réservation ne les accepte. HotelFlex, si.",
      "Il permet de réserver hôtels, appartements et maisons de vacances en temps réel en payant avec ces crédits : comptes, portefeuilles de crédits, coupons et bons reliés à un vrai stock de voyages.",
    ],
  },
  eventflex: {
    name: "EventFlex",
    tagline: "Concerts et événements avec ses crédits d'avantages salariés",
    period: "2024 - aujourd'hui",
    tags: ["Produit maison", "Événementiel", "Fintech"],
    paragraphs: [
      "EventFlex apporte le même portefeuille de crédits au spectacle vivant : concerts, sport, théâtre et festivals, réservables en temps réel.",
      "Il partage une plateforme centrale avec HotelFlex, si bien que comptes, crédits et bons fonctionnent à l'identique sur les deux, et qu'une nouvelle verticale se lance vite.",
    ],
  },
  "fms-portal": {
    name: "Portail de commandes d'atelier",
    tagline: "Suivi des commandes en direct pour un atelier artisanal",
    period: "2026",
    tags: ["Plateforme client", "Confidentiel"],
    paragraphs: [
      "Un atelier de gravure sur pierre gérait des centaines de commandes dans un seul grand tableur, et ça marchait. Plutôt que de leur imposer un nouveau logiciel, nous avons gardé le tableur comme source unique de vérité.",
      "Le portail le relit toutes les quelques minutes et le transforme en tableau de bord adapté au téléphone : chaque commercial voit ses commandes et leur étape exacte, le patron voit tout l'atelier d'un coup d'œil.",
      "Zéro reformation, zéro double saisie. La façon de travailler du client n'a pas bougé ; la visibilité, elle, a complètement changé.",
    ],
  },
  "cuore-e-respiro": {
    name: "Cuore e Respiro",
    tagline: "Vos tendances de santé lues depuis votre montre connectée",
    period: "2026 - en développement",
    tags: ["Application client", "Santé", "Mobile"],
    paragraphs: [
      "Cuore e Respiro est une application compagnon de santé qui lit rythme cardiaque, sommeil, oxygénation et activité depuis Apple Health et Health Connect, puis apprend la normale propre à chaque personne.",
      "Quand quelque chose s'écarte de cette ligne de base personnelle, l'application ne pose pas de diagnostic : elle pose des questions douces et contextuelles et tient un journal que la personne peut montrer à son médecin.",
      "Une seule base de code sort sur iPhone et Android, avec la rigueur de confidentialité qu'imposent les données de santé.",
    ],
  },
  "colzani-partners": {
    name: "Colzani & Partners",
    tagline: "Immobilier de luxe, de Dubaï à Monaco",
    period: "2026 - en lancement",
    tags: ["Plateforme client", "Immobilier"],
    paragraphs: [
      "Un cabinet de conseil en immobilier de luxe opérant entre Dubaï, Milan et Monaco avait besoin d'une présence numérique à la hauteur de ses biens.",
      "Nous avons conçu et construit une expérience chaleureuse et éditoriale : photographie pleine page, typographie à empattements raffinée, et des fiches de bien pour chacun des trois marchés.",
      "Un espace d'administration permet au cabinet de publier et de mettre à jour ses biens en interne, sans passer par une agence pour les changements du quotidien.",
    ],
  },
  "agency-ai": {
    name: "Transformation IA d'une agence",
    tagline: "Un programme d'innovation IA à l'intérieur d'une vraie agence",
    period: "2026 - aujourd'hui",
    tags: ["Programme client", "IA", "Confidentiel"],
    paragraphs: [
      "Une agence digitale internationale voulait de l'IA dans son travail quotidien, pas dans une présentation. Nous menons son programme d'innovation IA avec ses équipes.",
      "Livré à ce jour : des flux SEO et publicitaires assistés par IA, une chaîne de suivi de positions qui surveille des dizaines de milliers de mots-clés chaque semaine, et des outils d'audit qui ont remplacé plusieurs abonnements logiciels tiers.",
      "Le programme avance par phases, avec des équipes dédiées des deux côtés, et chaque phase doit se rembourser avant que la suivante ne démarre.",
    ],
  },
  artupia: {
    name: "Artupia",
    tagline: "De l'art sur commande, par de vrais artistes",
    period: "2014 - 2021",
    tags: ["Fondée", "Place de marché"],
    paragraphs: [
      "Artupia permettait à quiconque de commander une œuvre sur mesure à un vrai artiste : vous décrivez ce que vous voulez, les artistes proposent, vous suivez la pièce de l'esquisse à la livraison.",
      "Alberto l'a fondée et dirigée comme CEO pendant sept ans, produit et technologie en main sur le web, iOS et le backend : la place de marché, les outils pour les artistes et tout le parcours de commande.",
      "Elle a dépassé les 100 000 utilisateurs et les 20 personnes, et levé jusqu'à 3 millions d'euros, avant que le Covid ne ferme le marché de l'art dont elle dépendait.",
    ],
  },
  "document-ai": {
    name: "Plateforme de lecture documentaire",
    tagline: "Des milliers de documents par jour, compris",
    period: "2023",
    tags: ["Plateforme client", "IA", "Confidentiel"],
    paragraphs: [
      "Une entreprise submergée par les documents entrants avait besoin de les lire, de les trier et de les transformer en données structurées sans y mettre une armée de personnes.",
      "Nous avons construit une plateforme qui reconnaît le type de chaque document, extrait les champs qui comptent et gagne en précision au fil du temps. Elle encaisse des milliers de documents par jour.",
    ],
  },
  "beverage-mvp": {
    name: "MVP de livraison quick-commerce",
    tagline: "De l'idée au produit en ligne en quatre semaines",
    period: "2022",
    tags: ["Application client", "Confidentiel"],
    paragraphs: [
      "Un fondateur voulait tester la livraison de boissons dans sa ville avant d'y engager de l'argent sérieux. Quatre semaines plus tard, la première version était en ligne : commande, suivi en direct, stock et attribution intelligente des tournées.",
      "L'important n'était pas l'application ; c'était la réponse. De vrais clients, de vraies commandes et une décision claire sur la suite à investir, pour une fraction du coût habituel.",
    ],
  },
};
