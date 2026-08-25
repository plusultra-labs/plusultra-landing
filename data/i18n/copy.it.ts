import type { SiteCopy } from "./types";

// Italian. Written to sound like it was drafted in Italian, not translated:
// same claims and same order as the English, different sentences.
export const copyIt: SiteCopy = {
  orgDescription:
    "Plusultra Labs è uno studio di prodotti AI. Costruiamo e gestiamo prodotti AI nostri, e portiamo lo stesso team senior sul lavoro per i clienti: sviluppo di prodotti AI, integrazione AI e piattaforme su misura.",
  orgShort:
    "Studio di prodotti AI. Costruiamo i nostri prodotti AI, poi costruiamo il tuo.",

  nav: {
    services: "Servizi",
    work: "Progetti",
    about: "Studio",
    contact: "Contatti",
    homeAria: "Plusultra Labs, home",
    menuAria: "Apri il menu",
    languageAria: "Cambia lingua",
  },

  common: {
    bookCall: "Prenota una call",
    bookScopingCall: "Prenota una prima call",
    explore: "Scopri",
    seeSelectedWork: "Guarda i progetti",
    seeFullList: "Vedi la lista completa",
    readFullService: "Leggi il servizio completo",
    visit: "vai al sito",
    repliesWithin: "Rispondiamo entro un giorno lavorativo",
    repliesWithinTz: "Rispondiamo entro un giorno lavorativo · fuso di Singapore",
    basedIn: "Sede",
    location: "Singapore · GMT+8",
    breadcrumbHome: "Home",
  },

  booking: {
    kicker: "Prenota una call",
    pickHeading: "Scegli quando.",
    pickLead: "{duration} minuti con Alberto, su Google Meet. La prima call la fa sempre lui.",
    timezoneNote: "Orari nel fuso {tz}",
    loading: "Carico gli orari liberi",
    loadError: "Il calendario non si è caricato.",
    retry: "Riprova",
    fallbackLink: "Apri la pagina di prenotazione",
    noSlots: "Niente di libero nei prossimi {days} giorni. Scrivici e troviamo un orario.",
    slotCount: "{n} liberi",
    detailsHeading: "Dicci di cosa si tratta.",
    detailsLead: "La nota finisce dritta nell'invito in calendario, così la call parte dalla domanda vera.",
    change: "Cambia",
    nameLabel: "Nome",
    emailLabel: "Email",
    noteLabel: "Cosa vuoi costruire?",
    notePlaceholder: "Due righe sul problema, un link se esiste già qualcosa, per chi è, e se c'è una scadenza vera.",
    optional: "Facoltativo",
    submit: "Conferma la call",
    submitting: "Prenoto",
    submitError: "La prenotazione non è andata a buon fine.",
    doneHeading: "È fatta.",
    doneLead: "L'invito sta arrivando a {email}. Rispondi lì se cambia qualcosa.",
    joinLink: "Link per entrare",
    done: "Chiudi",
    close: "Chiudi",
  },

  home: {
    kicker: "Studio di prodotti AI · Singapore",
    heroLines: ["Costruiamo i nostri", "prodotti AI. Poi", "costruiamo il"],
    heroEmphasis: "tuo.",
    lead: "Plusultra Labs è uno studio di prodotti AI. Tutto quello che consigliamo lo usiamo già noi, ogni giorno: i nostri prodotti, i nostri strumenti AI, i nostri sistemi.",
    stats: [
      { label: "Prodotti in produzione", value: "35" },
      { label: "Prima versione usabile", value: "3–6 settimane" },
      { label: "Il team", value: "12 persone" },
    ],
    proofs: [
      {
        value: "35",
        label: "prodotti digitali progettati, costruiti e oggi in funzione, nostri e dei clienti",
      },
      {
        value: "1,5M+",
        label: "offerte travel abbinate e ordinate su TourScanner, dove il nostro founder lavora su AI e prodotto",
      },
      {
        value: "100%",
        label: "del codice e dell'infrastruttura consegnati su account che restano tuoi",
      },
      {
        value: "24/7",
        label: "i nostri assistenti AI mandano avanti le operazioni dello studio, quindi sappiamo che regge",
      },
    ],
    servicesKicker: "01 — Cosa facciamo",
    servicesHeading: "Tre modi di lavorare insieme.",
    servicesIntro:
      "Nessun account manager di mezzo e nessun passaggio ai junior: le persone della prima call sono le stesse che scrivono il codice. Perimetro e prezzo sono fissati per iscritto prima che si cominci.",
    buildKicker: "02 — Cosa costruiamo",
    buildHeading: "Quattro tipi di progetto, non quattro progetti.",
    buildIntro:
      "Trentacinque prodotti rilasciati e oggi in funzione. Qui sotto sono raggruppati per tipo di progetto e non per cliente, perché la domanda utile è se abbiamo già risolto un problema della stessa forma del tuo, non se il tuo settore compare nell'elenco.",
    buildNote: "Solo esempi · una parte del lavoro per i clienti è coperta da NDA",
    showcaseHeading: "Qualcuno che possiamo mostrare, numeri inclusi.",
    showcaseLabel: "Prodotti nostri",
    processKicker: "03 — Come si svolge un progetto",
    processHeading: "Un processo scritto, con delle date sopra.",
    process: [
      {
        when: "SETTIMANA 0",
        title: "Prima call",
        body: "Una call con gli ingegneri che lo costruirebbero. Esci con una risposta scritta su fattibilità, fascia di budget e tempi, che poi ci scegli o no.",
      },
      {
        when: "SETTIMANA 1",
        title: "Proposta a prezzo fisso",
        body: "Perimetro, architettura, prezzo e date di consegna in un solo documento, concordati prima di scrivere codice. Nessuna sorpresa a ore.",
      },
      {
        when: "SETTIMANA 2 — 12",
        title: "Rilasci ogni settimana",
        body: "Un ambiente online dalla prima settimana e qualcosa da cliccare ogni settimana, con dentro i tuoi dati veri fin da subito.",
      },
      {
        when: "IN CORSO",
        title: "Lo gestiamo noi o passa a te",
        body: "Lo teniamo in piedi noi, oppure consegniamo codice e infrastruttura documentati. In ogni caso gli account sono tuoi dal primo commit.",
      },
    ],
    ctaHeading: "Hai un prodotto da costruire, o un sistema che ha bisogno di AI",
    ctaEmphasis: "dentro?",
    ctaBody:
      "Mandaci un paragrafo sul problema. Ricevi un perimetro scritto e una risposta onesta: siamo lo studio giusto oppure no.",
    meta: {
      title: "Plusultra Labs - Studio di prodotti AI",
      description:
        "Plusultra Labs è uno studio di prodotti AI. Costruiamo i nostri prodotti AI e portiamo lo stesso team di ingegneri sul tuo. Sviluppo di prodotti AI, integrazione AI, piattaforme su misura.",
      ogTitle: "Plusultra Labs - Studio di prodotti AI",
      ogDescription:
        "Costruiamo i nostri prodotti AI. Poi costruiamo il tuo. Sviluppo di prodotti AI, integrazione AI, piattaforme su misura.",
    },
  },

  services: {
    kicker: "Servizi",
    heading: "Tre modi di lavorare insieme.",
    lead: "Qualunque sia la forma del progetto, il team è lo stesso che costruisce e manda avanti i nostri prodotti. Qui sotto trovi cosa consegniamo, più o meno quanto costa e quanto tempo serve.",
    includedLabel: "Sempre incluso",
    included: [
      "Perimetro scritto e fissato prima di partire",
      "Chi è in call è chi sta nel repository",
      "Una release a settimana, da cliccare e provare",
      "Codice e infrastruttura su account tuoi",
    ],
    boundariesKicker: "Confini",
    boundariesHeading: "Cosa non prendiamo.",
    boundariesBody:
      "Dirlo in pubblico fa risparmiare una call a tutti. Ed è anche il modo più rapido per capire in cosa siamo bravi.",
    declined: [
      {
        title: "Sviluppatori a ore",
        body: "Consegniamo risultati con un perimetro fisso, non persone su un timesheet.",
      },
      {
        title: "Discovery che finisce in un documento",
        body: "Ogni fase che vendiamo produce software funzionante, oppure un no onesto.",
      },
      {
        title: "Funzioni AI senza un compito misurabile",
        body: "Se lo risolve un motore di regole te lo diciamo, e il modello lo lasciamo fuori.",
      },
      {
        title: "Marketing, SEO e contenuti",
        body: "Costruiamo prodotto e piattaforme. La crescita è compito tuo, o di qualcun altro.",
      },
      {
        title: "Prezzo fisso su perimetro mobile",
        body: "Le modifiche di perimetro si riquotano prima di essere costruite, mai dopo.",
      },
    ],
    ctaHeading: "Non sai quale ti serve? Te lo dice la prima call.",
    meta: {
      title: "Servizi - Plusultra Labs",
      description:
        "Sviluppo di prodotti AI, integrazione dell'AI nei sistemi aziendali e piattaforme su misura, dal team che ha costruito BuzzWatch, ItaSign, IntelligoAI e più di dieci SaaS in produzione.",
    },
  },

  servicePage: {
    breadcrumb: "Servizi",
    atAGlance: "In sintesi",
    pointsKicker: "01 — Cosa ottieni da noi",
    pointsHeading: "Le parti che fanno la differenza.",
    pipelineKicker: "02 — Come si svolge un progetto",
    pipelineHeading: "Un processo scritto, con delle date sopra.",
    deliverablesKicker: "03 — Cosa consegniamo",
    deliverablesHeading: "Cosa ti resta in mano.",
    deliverablesIntro:
      "Non un elenco di categorie. Le cose concrete che esistono alla fine, e che restano tue.",
    boundariesKicker: "Confini",
    boundariesHeading: "Cosa non facciamo.",
    boundariesBody: "Dirlo ad alta voce fa risparmiare una call a tutti.",
    pricingKicker: "04 — Modelli di ingaggio",
    pricingHeading: "Prezzi pubblicati, prima ancora che tu li chieda.",
    pricingNote:
      "Ogni progetto viene quotato sul perimetro reale; queste fasce servono a darti l'ordine di grandezza prima ancora della prima call.",
    faqKicker: "05 — Domande",
    faqHeading: "Le domande che ci fanno.",
    relatedKicker: "06 — Progetti selezionati",
    relatedHeading: "Una selezione di progetti di questo servizio.",
    relatedNote:
      "Una selezione, non la lista completa. Una parte del lavoro per i clienti è coperta da NDA e qui non compare.",
    otherServices: "Gli altri due modi di lavorare insieme",
    howToName: "Come si svolge un progetto di {service}",
  },

  work: {
    kicker: "Progetti selezionati",
    heading: "Trentacinque rilasciati. Questi sono quelli che possiamo nominare.",
    lead: "I nostri prodotti, il lavoro fatto per i clienti e i prodotti su cui lavoriamo dall'interno di aziende di altri, dal 2014 a oggi. Tutto quello che trovi qui è stato rilasciato ed è (o è stato) usato da persone vere. Una parte di quello che costruiamo è coperta da NDA e non compare, quindi leggilo come un campione di ogni tipo di progetto, non come un catalogo.",
    kindsLabel: "Tipi di progetto",
    sectorsLabel: "Settori",
    sectors: "Travel · Sanità · Legale · Immobiliare · Marketing · Finanza",
    countLabel: "Qui elencati / rilasciati",
    moreWork: "Altri progetti",
    ctaHeading: "Il prossimo su questa pagina può essere il tuo.",
    meta: {
      title: "Progetti - Plusultra Labs",
      description:
        "I progetti di Plusultra Labs: BuzzWatch, IntelligoAI, ItaSign, Artupia e piattaforme per clienti nella sanità, nel travel, nell'immobiliare e nella finanza.",
    },
  },

  about: {
    kicker: "Lo studio",
    heading: "Uno studio di prodotto, gestito come un prodotto.",
    lead: "Plusultra Labs nasce dall'aver gestito un'azienda, non dal vendere servizi. Il founder ha costruito e guidato la sua per sette anni, e gli anni dopo li ha passati a costruire prodotti per altri. Lo studio è questo, con un team dietro: i nostri prodotti, e i prodotti degli altri trattati esattamente allo stesso modo.",
    clientsLabel: "Clienti in",
    clientsValue: "Europa e Asia",
    teamLabel: "Il team",
    peopleUnit: "persone",
    storyKicker: "01 — Da dove è partita",
    storyHeading: "Ho cominciato costruendo la cosa, non vendendo il servizio.",
    story: [
      "A quindici anni ho tirato su il mio primo progetto per conto mio; Artupia è stata la prima azienda vera. L'ho fondata nel 2014, mentre ero ancora a scuola, e l'ho guidata come founder e CEO per sette anni: un marketplace dove chiunque poteva commissionare un'opera a un artista vero — descrivi quello che vuoi, gli artisti propongono, tu segui il pezzo dallo schizzo alla consegna. È cresciuta oltre i 100.000 utenti e le 20 persone, e ha raccolto fino a 3 milioni di euro. Nel 2021 il Covid ha portato via il mercato dell'arte su cui stava in piedi. Costruirla è anche quello che mi ha reso uno sviluppatore: full-stack da autodidatta, perché il prodotto lo richiedeva.",
      "Quando il Covid ha chiuso Artupia potevo aprire un'altra azienda mia. Ho fatto apposta il contrario: sono andato a lavorare dentro i prodotti di altri. Un'app di quick-commerce, una startup di assistenti AI e, dal 2023, TourScanner — un metamotore per il travel fondato da altri nel 2018, che non ho costruito io e non è mio. Lì lavoro su AI e prodotto, su un milione e mezzo di offerte e 5.000 destinazioni. È lì che mi è diventato chiaro: la parte che amo davvero è costruire il prodotto, non possederlo.",
      "Da lì è arrivato il resto del portafoglio, ogni prodotto nato perché al mercato mancava qualcosa di evidente. ItaSign, perché firmare un documento con valore legale in Europa non dovrebbe richiedere un abbonamento enterprise. IntelligoAI, perché gli studi medici italiani dovevano scegliere tra l'agenda di carta e un contratto annuale. BuzzWatch, perché i clienti hanno iniziato a chiedere agli assistenti cosa comprare e nessuno riusciva a vedere cosa rispondevano. InsightFlow, perché le agenzie vivono dentro i fogli di calcolo.",
      "Il lavoro per i clienti è venuto dopo, e solo perché continuavano a chiedermi chi avesse costruito queste cose. Così lo studio funziona come funzionano i prodotti: un team piccolo e senior, un ambiente online dalla prima settimana e qualcosa da cliccare ogni venerdì. Le nostre operazioni interne girano su assistenti AI che abbiamo costruito noi, ed è anche il motivo per cui so cosa promettere e cosa no.",
      "Il discorso finisce qui. Non sono un titolare di agenzia che ha imparato l'AI per chiudere contratti. Sono partito come founder, ho continuato a costruire quando la mia azienda è finita, e quasi tutto quello che costruisco oggi è di qualcun altro. Mi sta bene così: la parte del prodotto mi piace più della parte della proprietà, e lo studio esiste perché adesso c'è un team intero a farlo per il tuo.",
    ],
    storyPullQuote: "Tutto quello che vendiamo, lo usiamo già noi.",
    founderRole: "Founder · Prodotto",
    founderAlt: "Alberto, founder di Plusultra Labs",
    principlesKicker: "02 — Come lavoriamo",
    principlesHeading: "Tre cose che decidono tutto il resto.",
    principles: [
      {
        title: "Piccoli e senior",
        body: "Un team ristretto più una rete di specialisti di fiducia, con l'AI a moltiplicare ogni passaggio. Parli sempre con chi sta facendo il lavoro.",
      },
      {
        title: "AI-first sul serio",
        body: "Le nostre operazioni girano su assistenti AI che abbiamo costruito noi: ogni giorno smistano il lavoro e filtrano i messaggi al posto nostro. Vendiamo quello che usiamo.",
      },
      {
        title: "Rilasciato batte perfetto",
        body: "Qualcosa da cliccare ogni settimana, online dal primo giorno. Il software diventa reale quando le persone lo usano, non quando fa una bella demo.",
      },
    ],
    teamKicker: "03 — Il team",
    teamHeading: "Le persone che lo costruirebbero.",
    teamIntro:
      "{n} persone tra prodotto, design, sviluppo e delivery, più una rete di specialisti che coinvolgiamo quando un progetto lo richiede.",
    ctaHeading: "Vuoi vedere come affronteremmo il tuo problema?",
    personDescription:
      "Founder di Plusultra Labs. Ha fondato Artupia nel 2014 e l'ha guidata come CEO per sette anni, portandola oltre i 100.000 utenti e le 20 persone con fino a 3 milioni di euro raccolti. Oggi costruisce prodotti per altre aziende e gestisce un portafoglio che comprende BuzzWatch, ItaSign, IntelligoAI e InsightFlow, e lavora su AI e prodotto in TourScanner.",
    meta: {
      title: "Lo studio - Plusultra Labs",
      description:
        "Plusultra Labs è uno studio di prodotti AI con sede a Singapore: un team senior tra prodotto, design e sviluppo che costruisce prodotti propri e porta gli stessi standard sul lavoro per i clienti.",
    },
  },

  contact: {
    kicker: "Contatti",
    heading: "Parla con chi scrive il",
    headingEmphasis: "codice.",
    lead: "Mezz'ora di call è il modo più rapido per capire se siamo il team giusto per quello che devi costruire. Non serve una presentazione, e in ogni caso esci con una risposta scritta.",
    speakingWith: "Parlerai con",
    founderNote: "Founder. La prima call la faccio sempre io.",
    prepKicker: "Prima della call",
    prepHeading: "Cosa rende utile la prima call.",
    prep: [
      {
        title: "Due righe sul problema",
        body: "Cosa vuoi costruire, o quale sistema ha bisogno di AI dentro. Vanno benissimo parole semplici, non serve un capitolato.",
      },
      {
        title: "Un link, se esiste già qualcosa",
        body: "Se c'è un prodotto, un sito o una versione a metà, un link vale più di mille parole.",
      },
      {
        title: "Per chi è",
        body: "Chi lo usa, chi lo paga e cosa fa oggi al posto suo.",
      },
      {
        title: "I vincoli veri",
        body: "Una scadenza, un tetto di budget, un ente regolatore, un sistema con cui dobbiamo integrarci. Meglio dirlo subito che scoprirlo tardi.",
      },
    ],
    meta: {
      title: "Contatti - Plusultra Labs",
      description:
        "Prenota una call con Plusultra Labs per parlare del tuo prodotto AI, dell'integrazione dell'AI nei tuoi sistemi o di una piattaforma su misura.",
    },
  },

  footer: {
    blurb:
      "Uno studio di prodotti AI con sede a Singapore. Costruiamo software nostro, e portiamo lo stesso team sul tuo.",
    studio: "Studio",
    aboutStudio: "Lo studio",
    contact: "Contatti",
    workingWithUs: "Lavorare con noi",
    promises: [
      "Perimetro fisso prima di partire",
      "Una release a settimana da cliccare",
      "Codice su account tuoi",
    ],
    tagline: "Costruiamo i nostri prodotti AI. Poi costruiamo il tuo.",
  },

  llms: {
    intro: "Sede a Singapore, clienti in Europa e in Asia.",
    contact: "Contatti:",
    whatWeDo: "Cosa facciamo",
    typicalEngagement: "Progetto tipico: {duration}, a partire da {price}.",
    howItRuns: "Come si svolge un progetto",
    whatWeDont: "Cosa non facciamo",
    kindsOfBuild: "Tipi di progetto",
    kindsIntro:
      "Abbiamo rilasciato 35 prodotti. L'elenco qui sotto è raggruppato per tipo di progetto, perché la domanda utile è se abbiamo già risolto un problema della stessa forma. Una parte del lavoro per i clienti è coperta da NDA e non compare.",
    examples: "Esempi:",
    ownProducts: "Prodotti che abbiamo costruito e che gestiamo",
    clientWork: "Una selezione di lavori per clienti",
    roles: "Prodotti fondati da altri su cui lavoriamo",
    questions: "Domande frequenti",
    pages: "Pagine",
    otherLanguages: "Questo sito in altre lingue",
  },

  team: {
    alberto: "Founder · Prodotto",
    weilin: "Responsabile Engineering",
    marta: "Product Designer Senior",
    ravi: "AI Engineer",
    giulia: "Sviluppo full-stack",
    junkai: "Sviluppo full-stack",
    elena: "Product Designer",
    tommaso: "Project Manager",
    sofia: "Project Manager",
    andres: "Brand Designer",
    priya: "Data Engineer",
    luca: "QA e Operations",
  },

  categories: {
    saas: {
      title: "Prodotti SaaS",
      blurb:
        "Prodotti multi-tenant con account, fatturazione, permessi e una roadmap che continua a muoversi dopo il lancio. La maggior parte dei nostri li possediamo e li gestiamo noi.",
      forWho: "Hai un'idea di prodotto, o una v1 che deve diventare un'azienda.",
    },
    "internal-tools": {
      title: "Strumenti interni e piattaforme operative",
      blurb:
        "Il sistema su cui gira davvero un'azienda: ordini, anagrafiche, pianificazione, approvazioni, reportistica. Di solito prende il posto di un foglio di calcolo che non riesce più a mantenere nessuno.",
      forWho: "Le tue operazioni vivono nei fogli di calcolo e nella testa di una persona.",
    },
    "ai-systems": {
      title: "AI dentro i sistemi che hai già",
      blurb:
        "Uno strato accanto al software che usi ogni giorno: lettura dei documenti, smistamento, ricerca sulla conoscenza interna, report che si scrivono da soli.",
      forWho: "Il software funziona, ma il team passa ore su cose che farebbe un modello.",
    },
    consumer: {
      title: "App consumer e mobile",
      blurb:
        "Prodotti usati dal pubblico e non dai dipendenti: interfacce pensate prima per il telefono, flussi di registrazione e i problemi di scala che arrivano con entrambi.",
      forWho: "Vendi a un pubblico consumer, e la prima impressione decide tutto.",
    },
  },

  pricing: {
    "ai-product-development": [
      {
        price: "~ 15.000 €",
        title: "Validare",
        body: "Una prima versione funzionante del prodotto in 3-6 settimane: l'esperienza centrale, utenti veri, feedback veri. Abbastanza per capire se l'idea merita il resto.",
      },
      {
        price: "~ 40.000 €",
        title: "Lanciare",
        body: "Il prodotto completo: design curato, pagamenti, area di amministrazione, funzioni AI dove si guadagnano il posto. Pronto per clienti paganti.",
      },
      {
        price: "80.000 €+",
        title: "Scalare",
        body: "Prodotto su più mercati con una roadmap: funzioni nuove ogni settimana, infrastruttura che cresce con te, il nostro team come il tuo team di prodotto.",
      },
    ],
    "ai-integration": [
      {
        price: "~ 8.000 €",
        title: "Pilota",
        body: "Un processo automatizzato da capo a fondo sui tuoi dati veri, con un risultato misurabile. Se non si ripaga, lo scopri in fretta.",
      },
      {
        price: "~ 25.000 €",
        title: "Estensione",
        body: "AI sui processi centrali: documenti, comunicazione con i clienti, conoscenza interna. Il tuo team formato, i costi sotto controllo.",
      },
      {
        price: "da 2.000 €/mese",
        title: "Gestione",
        body: "Lo teniamo in funzione e lo miglioriamo: monitoraggio, controllo dei costi, aggiornamento dei modelli e nuove automazioni man mano che si dimostrano valide.",
      },
    ],
    "custom-platforms": [
      {
        price: "~ 5.000 €",
        title: "Sito o portale",
        body: "Un sito professionale o un piccolo portale interno, con un'area di amministrazione per gestire i contenuti da soli.",
      },
      {
        price: "~ 15.000 €",
        title: "Piattaforma completa",
        body: "Una piattaforma completa con account utente, integrazioni con gli strumenti che usi già e un back office vero.",
      },
      {
        price: "35.000 €+",
        title: "Spina dorsale dell'azienda",
        body: "Il sistema su cui gira l'azienda: più applicazioni, automazioni, reportistica, gestito e fatto evolvere da noi nel tempo.",
      },
    ],
  },
};
