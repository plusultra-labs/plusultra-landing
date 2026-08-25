import type { ServiceTexts } from "./types";

export const servicesFr: ServiceTexts = {
  "ai-product-development": {
    cardTitle: "Développement de produit IA",
    cardBody:
      "De l'idée au produit fini. Nous concevons, construisons et exploitons des produits numériques exactement comme les nôtres : première version en ligne en quelques semaines, faite pour durer.",
    title: "Développement de produit IA, par des gens qui livrent les leurs",
    lead: "La plupart des agences construisent leur premier produit IA avec le budget du client. Le nôtre est déjà construit : BuzzWatch, InsightFlow, ItaSign et IntelligoAI sont des SaaS vivants que nous avons conçus, livrés et que nous exploitons. Votre produit hérite des schémas qui ont survécu à la production.",
    specs: [
      { label: "Durée habituelle", value: "6–12 semaines" },
      { label: "Première version utilisable", value: "3–6 semaines" },
      { label: "À partir de", value: "~ 15 000 €" },
    ],
    narrative: {
      heading: "Ce que vous achetez vraiment quand vous confiez la construction d'un produit",
      paragraphs: [
        "La version standard se déroule ainsi. Une agence vous chiffre une phase de cadrage, produit un cahier des charges et sous-traite la construction. Six mois plus tard, vous possédez un code que personne du premier appel n'a lu, sur une infrastructure que personne ne veut maintenir, avec une fonction IA qui coûte plus par utilisateur que ce que l'utilisateur paie.",
        "Nous avons pris l'autre chemin. Avant de vendre du développement de produit IA, nous avons construit les nôtres. BuzzWatch suit ce que les assistants IA disent d'une marque, a des clients payants et un partenariat entreprise avec une agence internationale. ItaSign, IntelligoAI et InsightFlow sont en ligne, payés et exploités par nous.",
        "Cela change ce que vous recevez. L'architecture que nous proposons est celle que nous exploitons. Les coûts d'API que nous chiffrons sont ceux que nous payons chaque mois. Les modes de panne que nous anticipons sont ceux qui nous ont déjà réveillés la nuit. Vous achetez les schémas qui ont survécu au contact d'utilisateurs réels, pas ceux qui rendaient bien dans une proposition.",
      ],
      pullQuote: "Tout ce que nous recommandons, nous le faisons déjà tourner en production.",
    },
    points: [
      {
        title: "Design et architecture à partir du modèle économique",
        body: "Le cadrage part de qui paie, pour quoi, et de ce à quoi doit ressembler l'économie unitaire. Le stack se décide seulement après. Nous vous dirons quelles fonctions couper, et lesquelles ne survivront pas à leur propre facture d'API.",
      },
      {
        title: "Première version en ligne en quelques semaines",
        body: "Un incrément livrable en production sous 3 à 6 semaines, puis une livraison par semaine. Vous suivez l'avancement sur un vrai environnement avec de vraies données, pas dans une présentation. Si l'idée est fausse, vous le découvrez tant que la corriger coûte encore peu.",
      },
      {
        title: "Une IA pensée pour le coût et la latence",
        body: "Routage entre modèles, cache, traitement par lots, replis et plafonds de dépense écrits dans le code. Nous utilisons les mêmes fournisseurs pour nos produits et nous connaissons la différence entre une démo qui impressionne et une fonction qui reste rentable à mille utilisateurs.",
      },
      {
        title: "Un design qui n'a pas l'air généré",
        body: "Interface et marque travaillées par des designers, pas une bibliothèque de composants laissée par défaut. Votre produit doit avoir l'air fait exprès, parce qu'un prospect décide ce qu'il en pense en quatre secondes environ.",
      },
      {
        title: "Construit pour être transmis",
        body: "Documenté, testé, stack standard, vos comptes. Que nous l'exploitions pendant des années ou que vous le repreniez en interne le trimestre prochain, le code, les données et l'infrastructure sont à vous dès le premier commit.",
      },
      {
        title: "Ce que nous livrons, nous l'exploitons",
        body: "Hébergement, supervision, gestion des incidents et une feuille de route qui continue d'avancer après le lancement. La version d'un produit qui compte est la douzième, pas la première.",
      },
    ],
    pipeline: {
      intro:
        "Chaque projet passe par les mêmes quatre phases. Chacune se termine par quelque chose de tangible et une décision à prendre : continuer, changer de direction, ou arrêter.",
      stages: [
        {
          title: "Cadrage",
          duration: "1 semaine",
          basis: "Gratuit",
          body: "Un appel, puis une réponse écrite courte. Problème, utilisateurs, modèle économique, et si nous sommes les bonnes personnes.",
          outputs: [
            "Problème, utilisateurs et modèle économique posés sur la table",
            "Une réponse honnête : adéquation ou pas",
            "Fourchette de budget et calendrier réaliste",
          ],
        },
        {
          title: "Plan d'exécution",
          duration: "1 à 2 semaines",
          basis: "Prix ferme",
          body: "Le plan qui transforme la construction en engagement plutôt qu'en estimation. Périmètre, stack, modèle de coûts et dates, validés avant le code.",
          outputs: [
            "Périmètre et liste de fonctions figés",
            "Décision d'architecture et de stack",
            "Modèle de coût IA par utilisateur",
            "Prix ferme et dates de livraison",
          ],
        },
        {
          title: "Construction",
          duration: "3 à 12 semaines",
          basis: "Ferme par phase",
          body: "En production dès la première semaine, puis une livraison par semaine. Rien n'est montré en démo qui ne soit aussi en ligne.",
          outputs: [
            "Environnement en ligne dès la première semaine",
            "Démo et livraison chaque semaine",
            "Espace d'administration et vraies données très tôt",
            "Design system et marque appliqués",
          ],
        },
        {
          title: "Lancement et exploitation",
          duration: "En continu",
          basis: "Mensuel",
          body: "Nous le gardons en marche et le faisons avancer, ou nous vous le transmettons proprement quand vous le souhaitez.",
          outputs: [
            "Hébergement, supervision et sauvegardes",
            "Suivi des coûts et de la consommation",
            "Feuille de route et livraisons hebdomadaires",
            "Transmission propre sur demande",
          ],
        },
      ],
      footnote:
        "Vous pouvez vous arrêter après n'importe quelle phase et garder tout ce qui a été construit jusque-là, sur vos propres comptes.",
    },
    deliverables: [
      {
        group: "Produit",
        items: [
          "Design d'interface et application de la marque",
          "Application web responsive, de niveau production",
          "Back-office pour votre équipe",
          "Paiements, abonnements et facturation là où c'est pertinent",
          "Multilingue quand votre marché l'exige",
        ],
      },
      {
        group: "Couche IA",
        items: [
          "Choix des modèles et routage entre fournisseurs",
          "Recherche sur vos propres contenus et données",
          "Jeu d'évaluation, pour mesurer la qualité au lieu de la supposer",
          "Plafonds de dépense, mesure de la consommation et limites par client",
          "Replis pour les moments où un fournisseur se dégrade",
        ],
      },
      {
        group: "Fondations",
        items: [
          "Vos propres comptes cloud, base de données et dépôt de code",
          "CI/CD avec environnements de préproduction et de production",
          "Supervision, suivi des erreurs et alertes",
          "Analytique produit dès le jour du lancement",
          "Documentation et notes de transmission",
        ],
      },
    ],
    notDoing: [
      "Des phases de cadrage qui aboutissent à un document plutôt qu'à du logiciel.",
      "De la régie. Nous livrons des résultats, pas des développeurs à l'heure.",
      "Marketing, SEO ou contenus. Nous construisons du produit, nous ne sommes pas une agence de publicité.",
      "Des fonctions IA qui n'existent que pour que la présentation puisse dire IA. Si un moteur de règles suffit, nous vous le dirons.",
      "L'enfermement. Aucune plateforme propriétaire, aucun compte à notre nom, aucun frais de sortie.",
    ],
    faq: [
      {
        q: "En combien de temps peut-on être en ligne, réalistement ?",
        a: "Une première version utilisable en 3 à 6 semaines pour la plupart des produits, à condition que les décisions reviennent en deux ou trois jours. Le plan d'exécution existe précisément pour transformer ce calendrier en engagement plutôt qu'en estimation.",
      },
      {
        q: "Qui écrit réellement le code ?",
        a: "Les personnes présentes à vos appels. Nous sommes une petite équipe senior et nous ne sous-traitons pas la construction. Vous connaîtrez par leur nom toutes les personnes qui travaillent sur votre produit.",
      },
      {
        q: "Que devient la facture IA quand nous grandissons ?",
        a: "Nous la modélisons par utilisateur avant de construire et nous la mesurons ensuite, avec des plafonds inscrits dans le code. La plupart des produits que nous exploitons coûtent quelques centimes par utilisateur actif et par mois, et nous vous montrons le calcul sur vos chiffres pendant le plan d'exécution.",
      },
      {
        q: "Pourrons-nous reprendre le produit en interne plus tard ?",
        a: "Oui, et c'est prévu pour. Stack standard, vos comptes, tout documenté. La transmission est un processus planifié de deux semaines, pas une négociation.",
      },
      {
        q: "Et si nous avons déjà un produit à moitié construit ?",
        a: "C'est fréquent. Nous commençons par un audit de l'existant et nous vous disons honnêtement s'il s'agit d'une base ou d'un coût irrécupérable. Nous avons repris les deux cas.",
      },
      {
        q: "Signez-vous des NDA et travaillez-vous avec notre service juridique ?",
        a: "Oui. C'est la norme chez nous, et nous avons l'habitude de passer les revues européennes de protection des données.",
      },
    ],
    cta: "Une idée de produit qui mérite d'être vraiment construite ?",
    meta: {
      title: "Développement de produit IA - Plusultra Labs",
      description:
        "Nous concevons, construisons et exploitons des produits IA de bout en bout, comme nos propres SaaS. Première version en quelques semaines, niveau production dès le premier jour.",
    },
  },

  "ai-integration": {
    cardTitle: "Intégration de l'IA",
    cardBody:
      "De l'IA dans les outils que votre entreprise utilise déjà. Conforme sur la confidentialité, avec des coûts prévisibles, et les gens à qui vous parlez sont ceux qui la construisent.",
    title: "L'IA dans vos systèmes. Construite, pas conseillée.",
    lead: "Les grands cabinets vous vendent une feuille de route. Nous vous vendons un système qui fonctionne. Nous intégrons les modèles de langage dans les logiciels que votre entreprise utilise déjà, avec une architecture conforme au cadre européen et des coûts prévisibles, parce que nous exploitons la même infrastructure IA chaque jour pour nos produits.",
    specs: [
      { label: "Durée habituelle", value: "4–8 semaines" },
      { label: "Pilote", value: "3–5 semaines, prix ferme" },
      { label: "À partir de", value: "~ 8 000 €" },
    ],
    narrative: {
      heading: "Là où l'IA rapporte vraiment dans une entreprise qui tourne déjà",
      paragraphs: [
        "L'autre discours, vous l'avez déjà entendu. Un grand cabinet mène un cadrage, produit une évaluation de maturité et une feuille de route, et repart. La feuille de route n'est pas fausse. Elle n'est simplement pas du logiciel, et lundi matin rien ne fonctionne autrement dans votre entreprise.",
        "Le travail qui compte, dans une entreprise de taille intermédiaire, est bien plus étroit et bien plus concret. Des documents qui arrivent en PDF et qu'on ressaisit à la main dans l'ERP. Des e-mails clients que quelqu'un trie à la main trois heures par jour. Des connaissances posées sur un disque partagé que personne n'arrive à chercher. Des devis assemblés au copier-coller. Ce sont ces flux où une couche IA bien construite retire de vraies heures, et ce ne sont presque jamais ceux de la présentation.",
        "Nous partons donc de vos systèmes tels qu'ils sont : le CRM que vous ne remplacerez pas, l'ERP qui contient quinze ans d'histoire, la boîte mail par laquelle tout passe. Nous plaçons la couche IA à côté, sur une infrastructure européenne, avec une piste d'audit et un plafond de coût. Puis nous le prouvons sur un seul flux avant que quiconque signe pour un déploiement.",
      ],
      pullQuote: "Un pilote qui se rembourse, ou une réponse honnête qu'il ne le fera pas.",
    },
    points: [
      {
        title: "C'est nous qui écrivons le code",
        body: "Les personnes de l'appel sont celles du dépôt. Pas de passage à une équipe de delivery que vous n'avez jamais rencontrée, pas de sous-traitance lointaine, pas de gestionnaire de compte qui relaie vos questions à quelqu'un d'autre.",
      },
      {
        title: "De vrais modèles de coût",
        body: "Dépense d'API, hébergement et maintenance modélisés avant votre engagement et mesurés ensuite, plafonds inscrits dans le code. Personne ne reçoit une facture surprise parce qu'une boucle a tourné toute la nuit.",
      },
      {
        title: "Europe et RGPD par l'architecture",
        body: "Localisation des données, choix des modèles, conservation et piste d'audit décidés au départ plutôt que rustinés pour l'auditeur. Les traitements sensibles peuvent rester dans l'UE, ou sur vos propres serveurs là où la loi l'impose.",
      },
      {
        title: "Ça se branche sur ce que vous avez déjà",
        body: "Systèmes commerciaux, d'exploitation et financiers, boîtes mail, partages de fichiers, bases de données. Nous nous intégrons via les interfaces que vos éditeurs exposent réellement, et nous vous disons clairement quand un système n'en a aucune.",
      },
      {
        title: "Mesuré, pas supposé",
        body: "Chaque pilote est livré avec le chiffre qu'il doit faire bouger : heures gagnées, délai de réponse, taux d'erreur, coût par document. Si le chiffre ne bouge pas, nous le disons et vous arrêtez.",
      },
      {
        title: "Éprouvé dans notre propre production",
        body: "Traitement documentaire, tri des demandes clients, connaissances internes, flux avec agents. Nos opérations tournent sur des assistants IA tous les jours, donc chaque schéma que nous proposons a déjà survécu à notre propre usage.",
      },
    ],
    pipeline: {
      intro:
        "Quatre phases, chacune avec une décision à la fin. Le pilote est volontairement petit et à prix ferme, parce que son rôle est de découvrir à moindre coût si la suite en vaut la peine.",
      stages: [
        {
          title: "Audit des systèmes",
          duration: "1 à 2 semaines",
          basis: "Prix ferme",
          body: "Nous cartographions comment le travail et les données circulent réellement dans l'entreprise, puis nous classons les candidats par valeur plutôt que par nouveauté.",
          outputs: [
            "Carte de vos systèmes et du chemin réel des données",
            "Les flux candidats, classés",
            "Modèle de coûts et d'économies par candidat",
            "La liste honnête de ce qui ne relève pas de l'IA",
          ],
        },
        {
          title: "Pilote",
          duration: "3 à 5 semaines",
          basis: "Prix ferme",
          body: "Un flux, de bout en bout, sur vos vraies données. Assez petit pour tenir dans le budget d'un service, assez réel pour prouver le dossier.",
          outputs: [
            "Un flux en ligne sur vos vraies données",
            "Le chiffre visé mesuré avant et après",
            "Hébergé dans l'UE, tracé, coût plafonné",
            "Un feu vert ou un arrêt que vous pouvez défendre en interne",
          ],
        },
        {
          title: "Déploiement",
          duration: "6 à 12 semaines",
          basis: "Ferme par phase",
          body: "Nous étendons ce que le pilote a prouvé aux processus voisins, et nous abandonnons ce qu'il a invalidé.",
          outputs: [
            "Le schéma prouvé étendu aux autres processus",
            "Intégrations dans les systèmes de référence",
            "Votre équipe formée au nouveau flux",
            "Tout ce que le pilote a invalidé, abandonné",
          ],
        },
        {
          title: "Exploitation",
          duration: "En continu",
          basis: "Mensuel",
          body: "Les modèles changent tous les quelques mois. Nous maintenons qualité, coût et disponibilité au niveau du jour de la signature.",
          outputs: [
            "Supervision et contrôle de la qualité des sorties",
            "Suivi des coûts par flux",
            "Montées de version des modèles quand les fournisseurs bougent",
            "De nouvelles automatisations dès qu'elles font leurs preuves",
          ],
        },
      ],
      footnote:
        "Vous pouvez vous arrêter après n'importe quelle phase et garder tout ce qui a été construit jusque-là, sur vos propres comptes.",
    },
    deliverables: [
      {
        group: "Intégration",
        items: [
          "Connecteurs vers votre CRM, votre ERP, votre messagerie et vos fichiers",
          "Ingestion de documents : PDF, scans, tableurs, pièces jointes",
          "Recherche sur les connaissances internes, droits d'accès respectés",
          "Écriture en retour dans les systèmes de référence, pas seulement un tableau de bord de plus",
          "Exécutions planifiées et déclenchées par événement, pas du copier-coller manuel",
        ],
      },
      {
        group: "Ingénierie IA",
        items: [
          "Choix des modèles et routage entre fournisseurs disponibles en Europe",
          "Jeux d'évaluation, pour que la qualité soit un chiffre et non une opinion",
          "Relecture humaine dans le flux là où l'enjeu l'exige",
          "Garde-fous, replis et plafonds de dépense stricts",
          "Modèles ouverts sur votre propre infrastructure quand les données ne peuvent pas sortir",
        ],
      },
      {
        group: "Conformité et exploitation",
        items: [
          "Décisions de localisation et de conservation des données, documentées",
          "Piste d'audit complète de ce que le système a vu et fait",
          "Contrôle d'accès aligné sur vos rôles existants",
          "Supervision, alertes et une personne identifiée à appeler",
          "Contrat de sous-traitance et documentation des fournisseurs",
        ],
      },
    ],
    notDoing: [
      "Évaluations de maturité, scores de préparation et feuilles de route qui ne sont pas du logiciel.",
      "Arracher des systèmes qui fonctionnent. Nous nous intégrons à votre ERP, nous ne le remplaçons pas.",
      "Un chatbot sur le site comme premier projet. C'est rarement là que se trouve l'argent.",
      "Entraîner vos données dans un modèle public. Vos données restent les vôtres.",
      "Des forfaits flous. Chaque phase a un périmètre, un prix et un chiffre à faire bouger.",
    ],
    faq: [
      {
        q: "Devons-nous transférer nos données aux États-Unis ?",
        a: "Non. Nous choisissons des fournisseurs avec localisation des données dans l'UE et, pour les traitements les plus sensibles, nous faisons tourner des modèles ouverts sur une infrastructure européenne ou sur vos propres serveurs. Ce choix se fait explicitement pendant l'audit, avec les arbitrages écrits noir sur blanc.",
      },
      {
        q: "Combien coûte l'IA à faire tourner ?",
        a: "Pour la plupart des flux d'une entreprise intermédiaire, de quelques dizaines à quelques centaines d'euros par mois d'API, très en dessous du travail remplacé. Nous le modélisons par document ou par requête avant votre engagement, et nous le mesurons en direct ensuite.",
      },
      {
        q: "Et si le pilote échoue ?",
        a: "Alors vous avez payé un petit prix ferme pour le découvrir en cinq semaines au lieu de vous engager sur un déploiement. C'est exactement le rôle de cette phase. Il nous est déjà arrivé de dire à un client d'arrêter.",
      },
      {
        q: "Notre équipe informatique est petite. Que doit-elle faire ?",
        a: "Nous donner les accès et répondre aux questions sur les systèmes. L'ingénierie, c'est nous. Au déploiement, nous formons les personnes qui l'utiliseront et nous documentons ce qu'il faut à votre équipe pour le maintenir.",
      },
      {
        q: "Est-ce que cela va remplacer des personnes ?",
        a: "D'après notre expérience, cela retire la partie du travail dont personne ne voulait : ressaisir, trier, chercher. Nous concevons avec une relecture humaine partout où l'enjeu est réel, et nous vous disons clairement quand un flux est vraiment automatisable de bout en bout.",
      },
      {
        q: "Pouvez-vous travailler avec notre éditeur logiciel actuel ?",
        a: "Oui, et c'est souvent obligatoire. Nous avons l'habitude de contourner les limites de l'API d'un éditeur, et d'être ceux qui lisent sa documentation pour de bon.",
      },
    ],
    cta: "Envie de voir où l'IA rapporte vraiment dans vos systèmes ?",
    meta: {
      title: "Intégration de l'IA pour les entreprises intermédiaires - Plusultra Labs",
      description:
        "Nous mettons l'IA dans vos systèmes existants : choix des modèles, architecture conforme au RGPD hébergée en Europe, maîtrise des coûts, supervision en production. Des ingénieurs, pas des slides.",
    },
  },

  "custom-platforms": {
    cardTitle: "Plateformes sur mesure",
    cardBody:
      "Portails, systèmes de gestion, outils internes, places de marché. Des plateformes solides livrées en quelques semaines et suivies une fois en ligne.",
    title: "Des plateformes sur mesure livrées en semaines et qui tiennent des années",
    lead: "Portails clients, CRM, systèmes de réservation, places de marché, outils internes. Nous les construisons comme nos propres produits : petite équipe senior, stack moderne, production dès la première semaine. Et nous restons pour les exploiter.",
    specs: [
      { label: "Durée habituelle", value: "3–8 semaines" },
      { label: "Après le lancement", value: "Exploitation mensuelle" },
      { label: "À partir de", value: "~ 5 000 €" },
    ],
    narrative: {
      heading: "L'écart entre ce que fait votre logiciel et ce que fait votre entreprise",
      paragraphs: [
        "La plupart des entreprises comblent cet écart avec des tableurs, un disque partagé et une personne qui sait comment tout s'emboîte. Ça marche jusqu'à ce que ça ne marche plus : jusqu'aux vacances de cette personne, jusqu'à la limite du tableur, jusqu'au jour où un client demande une chose que l'outil ne sait tout simplement pas montrer.",
        "Le logiciel sur mesure était la réponse coûteuse à cet écart. Il ne l'est plus. Un stack moderne standardisé, plus une équipe qui utilise vraiment l'IA sur son propre travail, cela veut dire qu'une vraie plateforme avec comptes, droits, intégrations et back-office se livre en quelques semaines, à un prix qui rivalise avec une année de licences par utilisateur.",
        "Nous le savons parce que nous le faisons pour nous. Notre moteur de plateformes voyage pilote des dizaines de sites distincts depuis une seule salle de contrôle, chacun sur son domaine et dans ses langues. Nos opérations internes tournent sur des outils que nous avons construits. Même architecture, même équipe, pointées sur ce que votre entreprise doit cesser de faire à la main.",
      ],
      pullQuote: "Un vrai back-office, pour que vous cessiez de nous appeler à chaque changement.",
    },
    points: [
      {
        title: "Des semaines, honnêtement",
        body: "Un périmètre courant se livre en 3 à 6 semaines parce que le stack est standardisé et que nous utilisons largement l'IA sur notre propre travail. Pas parce que nous coupons des angles que vous paierez plus tard.",
      },
      {
        title: "Un vrai back-office",
        body: "Chaque plateforme reçoit un espace d'administration construit pour votre équipe, pas un explorateur de base de données. Vous ajoutez des utilisateurs, modifiez le contenu, ajustez les réglages et sortez des rapports sans nous ouvrir de ticket.",
      },
      {
        title: "Elle parle à vos autres outils",
        body: "Comptabilité, paiements, agendas, messageries, le CRM. Une plateforme qui ne s'intègre pas devient simplement un endroit de plus où quelqu'un ressaisit les mêmes informations.",
      },
      {
        title: "Prête pour l'IA d'origine",
        body: "La même architecture que nos produits IA. Le jour où vous voudrez de la lecture de documents, de la rédaction ou de la recherche sur vos données, cela arrivera comme une fonction et non comme une refonte.",
      },
      {
        title: "Pensée pour ceux qui y passent leurs journées",
        body: "Des interfaces dessinées autour du travail réel et testées avec l'équipe qui y vivra huit heures par jour. L'adoption est un problème de design bien avant d'être un problème de formation.",
      },
      {
        title: "Nous l'exploitons",
        body: "Hébergement, sauvegardes, supervision, mises à jour de sécurité et petites évolutions sur une seule ligne mensuelle prévisible. Le code, les données et les comptes d'infrastructure restent les vôtres tout du long.",
      },
    ],
    pipeline: {
      intro:
        "Les mêmes quatre phases que pour tout ce que nous construisons. Prix ferme validé avant la moindre ligne de code, démos chaque semaine pendant, et un cadre d'exploitation clair après.",
      stages: [
        {
          title: "Cadrage",
          duration: "1 semaine",
          basis: "Gratuit",
          body: "Ce que la plateforme doit faire, qui y vit, et ce qu'elle remplace. Y compris si un outil du commerce vous servirait mieux.",
          outputs: [
            "Ce que la plateforme doit faire, et pour qui",
            "Ce qu'elle remplace et ce à quoi elle doit se connecter",
            "Une réponse honnête : adéquation ou pas",
            "Fourchette de budget et calendrier",
          ],
        },
        {
          title: "Plan d'exécution",
          duration: "1 semaine",
          basis: "Prix ferme",
          body: "Écran par écran, intégration par intégration, chiffré et daté avant de commencer à construire.",
          outputs: [
            "Périmètre écran par écran",
            "Modèle de données et liste des intégrations",
            "Prix ferme et date de livraison",
            "Direction de design validée",
          ],
        },
        {
          title: "Construction",
          duration: "3 à 8 semaines",
          basis: "Prix ferme",
          body: "Vos vraies données entrent tôt et votre équipe les voit chaque semaine, de sorte que les surprises tombent en semaine deux et non à la livraison.",
          outputs: [
            "Démo hebdomadaire sur un environnement en ligne",
            "Vos vraies données chargées très tôt",
            "Espace d'administration dès la première semaine",
            "Recette avec votre vraie équipe",
          ],
        },
        {
          title: "Lancement et exploitation",
          duration: "En continu",
          basis: "Mensuel",
          body: "Migration, formation, puis une ligne mensuelle prévisible qui couvre tout ce qui la maintient en bonne santé.",
          outputs: [
            "Migration et accompagnement à la mise en service",
            "Formation des utilisateurs et des administrateurs",
            "Hébergement, sauvegardes, supervision, mises à jour",
            "Petites évolutions chaque mois",
          ],
        },
      ],
      footnote:
        "Vous pouvez vous arrêter après n'importe quelle phase et garder tout ce qui a été construit jusque-là, sur vos propres comptes.",
    },
    deliverables: [
      {
        group: "Plateforme",
        items: [
          "Application web, utilisable sur téléphone et sur ordinateur",
          "Comptes utilisateurs, rôles et droits",
          "Back-office pour votre équipe",
          "Rapports et exports que votre service financier peut vraiment utiliser",
          "Multilingue là où vous en avez besoin",
        ],
      },
      {
        group: "Intégrations",
        items: [
          "Paiements et facturation",
          "Messagerie et agenda",
          "Comptabilité et ERP",
          "Import depuis les tableurs que vous remplacez",
          "Une API que vos autres outils peuvent consommer",
        ],
      },
      {
        group: "Fondations",
        items: [
          "Vos propres comptes cloud et dépôt de code",
          "Environnements de préproduction et de production",
          "Sauvegardes automatiques avec restaurations testées",
          "Supervision, suivi des erreurs et alertes",
          "Documentation pour les administrateurs et les développeurs",
        ],
      },
    ],
    notDoing: [
      "La licence par utilisateur. Elle est à vous, et ajouter des utilisateurs ne change pas le prix.",
      "Reconstruire quelque chose qui fonctionne déjà. Nous vous dirons quand la réponse est un outil du commerce.",
      "Remettre un code sans documentation en vous souhaitant bonne chance.",
      "Des prestations de marketing ou de SEO par-dessus. Nous construisons la plateforme, la croissance est de votre côté ou de celui d'un autre.",
      "Des demandes de changement chiffrées après coup. Les mouvements de périmètre sont rechiffrés avant d'être construits.",
    ],
    faq: [
      {
        q: "Le sur-mesure revient-il vraiment moins cher qu'un abonnement SaaS ?",
        a: "Souvent, au-delà d'une certaine taille d'équipe. Vingt licences sur un outil de milieu de gamme, cela fait facilement 15 000 € par an, pour toujours, sur la feuille de route de quelqu'un d'autre. Une plateforme construite pour votre processus, c'est une construction unique plus une ligne d'exploitation prévisible, et elle fait exactement ce que vous faites.",
      },
      {
        q: "Et si nos besoins changent pendant la construction ?",
        a: "C'est attendu et prévu. Les démos hebdomadaires existent pour que les changements apparaissent en semaine deux plutôt qu'à la livraison. Les petits changements sont absorbés. Tout ce qui déplace le périmètre de façon significative est rechiffré avant d'être construit, jamais après.",
      },
      {
        q: "À qui appartient le code ?",
        a: "À vous, dès le premier commit, dans votre propre dépôt. Même chose pour les comptes cloud, le domaine et la base de données.",
      },
      {
        q: "Que se passe-t-il si nous arrêtons de travailler avec vous ?",
        a: "La plateforme continue de tourner. Tout se trouve sur vos comptes, sur un stack standard, et nous le documentons pour celui qui reprendra. Nous préférons être gardés parce que ça marche plutôt que parce que partir est compliqué.",
      },
      {
        q: "Pouvez-vous reprendre une plateforme construite par quelqu'un d'autre ?",
        a: "Oui, si le code est récupérable. Nous commençons par un audit et un verdict écrit : étendre, refactoriser ou refaire. Nous avons fait les trois.",
      },
      {
        q: "Prenez-vous en charge le RGPD et la sécurité ?",
        a: "Oui. Hébergement dans l'UE, contrôle d'accès, chiffrement, une procédure de sauvegarde et de restauration testée, et un contrat de sous-traitance. Pour les clients régulés, nous passons leur revue de sécurité avec eux.",
      },
    ],
    cta: "Besoin d'une plateforme sur laquelle votre entreprise puisse vraiment tourner ?",
    meta: {
      title: "Plateformes sur mesure et développement SaaS - Plusultra Labs",
      description:
        "Des plateformes sur mesure de niveau production : portails, CRM, places de marché, outils internes. Livrées en quelques semaines sur un stack moderne par une équipe qui en exploite plus de dix.",
    },
  },
};
