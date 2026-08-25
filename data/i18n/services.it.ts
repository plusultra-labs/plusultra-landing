import type { ServiceTexts } from "./types";

export const servicesIt: ServiceTexts = {
  "ai-product-development": {
    cardTitle: "Sviluppo di prodotti AI",
    cardBody:
      "Dall'idea al prodotto finito. Progettiamo, costruiamo e mandiamo avanti prodotti digitali come facciamo con i nostri: prima versione online in poche settimane, costruita per durare.",
    title: "Sviluppo di prodotti AI, fatto da chi i suoi li ha già costruiti",
    lead: "Molte agenzie costruiscono il loro primo prodotto AI con il budget del cliente. Noi il nostro l'abbiamo già costruito: BuzzWatch, InsightFlow, ItaSign e IntelligoAI sono SaaS vivi, che abbiamo progettato, rilasciato e mandiamo avanti. Il tuo prodotto eredita gli schemi che sono sopravvissuti alla produzione.",
    specs: [
      { label: "Durata tipica", value: "6–12 settimane" },
      { label: "Prima versione usabile", value: "3–6 settimane" },
      { label: "A partire da", value: "~ 15.000 €" },
    ],
    narrative: {
      heading: "Cosa stai comprando davvero quando affidi a qualcuno la costruzione di un prodotto",
      paragraphs: [
        "La versione standard va così. Un'agenzia ti quota una fase di discovery, produce un capitolato e dà la costruzione in subappalto. Sei mesi dopo ti ritrovi un codice che nessuno di quelli della prima call ha mai letto, su un'infrastruttura che nessuno vuole mantenere, con una funzione AI che costa per utente più di quanto l'utente paghi.",
        "Noi abbiamo preso l'altra strada. Prima di vendere sviluppo di prodotti AI abbiamo costruito i nostri. BuzzWatch controlla cosa dicono gli assistenti AI di un marchio, ha clienti paganti e una partnership enterprise con un'agenzia internazionale. ItaSign, IntelligoAI e InsightFlow sono vivi, pagati e gestiti da noi.",
        "Questo cambia quello che ricevi. L'architettura che proponiamo è l'architettura che mandiamo avanti. I costi delle API che ti quotiamo sono costi che paghiamo ogni mese. I modi in cui una cosa si rompe li conosciamo perché ci hanno già svegliato di notte. Stai comprando gli schemi che sono sopravvissuti al contatto con utenti veri, non quelli che facevano bella figura in una proposta.",
      ],
      pullQuote: "Tutto quello che consigliamo, lo teniamo già in produzione noi.",
    },
    points: [
      {
        title: "Design e architettura a partire dal modello di business",
        body: "L'inquadramento parte da chi paga, per cosa e con quali margini. Solo dopo si sceglie lo stack. Ti diremo quali funzioni tagliare e quali non sopravvivranno al conto delle loro API.",
      },
      {
        title: "Prima versione online in poche settimane",
        body: "Un pezzo rilasciabile in produzione entro 3-6 settimane, poi una release a settimana. Segui i progressi su un ambiente vero con dati veri, non dentro una presentazione. Se l'idea è sbagliata, lo scopri quando cambiarla costa ancora poco.",
      },
      {
        title: "AI progettata per costi e latenza",
        body: "Instradamento tra modelli, cache, batch, fallback e tetti di spesa scritti nel codice. Usiamo gli stessi fornitori per i nostri prodotti e sappiamo la differenza tra una demo che stupisce e una funzione che resta profittevole a mille utenti.",
      },
      {
        title: "Un design che non sembra generato",
        body: "Interfaccia e marchio curati da designer, non una libreria di componenti lasciata com'era. Il tuo prodotto deve sembrare fatto apposta, perché chi lo guarda decide cosa pensarne in circa quattro secondi.",
      },
      {
        title: "Costruito per essere passato di mano",
        body: "Documentato, testato, stack standard, account tuoi. Che lo gestiamo noi per anni o che lo porti in casa il trimestre prossimo, codice, dati e infrastruttura sono tuoi dal primo commit.",
      },
      {
        title: "Quello che rilasciamo lo mandiamo avanti noi",
        body: "Hosting, monitoraggio, gestione degli imprevisti e una roadmap che continua dopo il lancio. La versione di un prodotto che conta è la dodicesima, non la prima.",
      },
    ],
    pipeline: {
      intro:
        "Ogni progetto passa dalle stesse quattro fasi. Ognuna finisce con qualcosa in mano e una decisione da prendere: andare avanti, cambiare direzione o fermarsi.",
      stages: [
        {
          title: "Inquadramento",
          duration: "1 settimana",
          basis: "Gratis",
          body: "Una call, poi una risposta breve e scritta. Problema, utenti, modello di business e se siamo le persone giuste.",
          outputs: [
            "Problema, utenti e modello di business sul tavolo",
            "Una risposta onesta: ci siamo o non ci siamo",
            "Fascia di budget e tempi realistici",
          ],
        },
        {
          title: "Progetto esecutivo",
          duration: "1-2 settimane",
          basis: "Prezzo fisso",
          body: "Il piano che trasforma la costruzione da stima a impegno. Perimetro, stack, modello dei costi e date, concordati prima del codice.",
          outputs: [
            "Perimetro e lista delle funzioni fissati",
            "Scelta di architettura e stack",
            "Modello del costo AI per utente",
            "Prezzo fisso e date di consegna",
          ],
        },
        {
          title: "Costruzione",
          duration: "3-12 settimane",
          basis: "Prezzo fisso per fase",
          body: "In produzione dalla prima settimana, poi una release a settimana. Non mostriamo in demo niente che non sia anche online.",
          outputs: [
            "Ambiente online dalla prima settimana",
            "Demo e release ogni settimana",
            "Area di amministrazione e dati veri fin da subito",
            "Design system e marchio applicati",
          ],
        },
        {
          title: "Lancio e gestione",
          duration: "In corso",
          basis: "Mensile",
          body: "Lo teniamo in funzione e lo facciamo avanzare, oppure te lo passiamo pulito quando vuoi.",
          outputs: [
            "Hosting, monitoraggio e backup",
            "Tracciamento di costi e consumi",
            "Roadmap e rilasci settimanali",
            "Passaggio di consegne pulito su richiesta",
          ],
        },
      ],
      footnote:
        "Puoi fermarti dopo qualsiasi fase e tenerti tutto quello che è stato costruito fino a lì, sui tuoi account.",
    },
    deliverables: [
      {
        group: "Prodotto",
        items: [
          "Design dell'interfaccia e applicazione del marchio",
          "Web app responsive, di livello produzione",
          "Back office per il tuo team",
          "Pagamenti, abbonamenti e fatturazione dove servono",
          "Multilingua quando il mercato lo richiede",
        ],
      },
      {
        group: "Strato AI",
        items: [
          "Scelta dei modelli e instradamento tra fornitori",
          "Ricerca sui tuoi contenuti e sui tuoi dati",
          "Set di valutazione, così la qualità si misura invece di darla per scontata",
          "Tetti di spesa, misurazione dei consumi e limiti per cliente",
          "Fallback per quando un fornitore peggiora",
        ],
      },
      {
        group: "Fondamenta",
        items: [
          "Account cloud, database e repository intestati a te",
          "CI/CD con ambienti di staging e produzione",
          "Monitoraggio, tracciamento degli errori e allarmi",
          "Analytics di prodotto dal giorno del lancio",
          "Documentazione e note per il passaggio di consegne",
        ],
      },
    ],
    notDoing: [
      "Fasi di discovery che finiscono in un documento invece che in software.",
      "Somministrazione di personale. Consegniamo risultati, non sviluppatori a ore.",
      "Marketing, SEO o contenuti. Costruiamo prodotto, non siamo un'agenzia pubblicitaria.",
      "Funzioni AI che esistono solo perché la presentazione possa dire AI. Se lo risolve un motore di regole, te lo diciamo.",
      "Lock-in. Nessuna piattaforma proprietaria, nessun account intestato a noi, nessuna penale d'uscita.",
    ],
    faq: [
      {
        q: "In quanto tempo possiamo essere online, realisticamente?",
        a: "Una prima versione usabile in 3-6 settimane per la maggior parte dei prodotti, se le decisioni tornano indietro in un paio di giorni. Il progetto esecutivo serve proprio a trasformare quella tempistica in un impegno invece che in una stima.",
      },
      {
        q: "Chi scrive materialmente il codice?",
        a: "Le persone che trovi in call. Siamo un team piccolo e senior e non diamo la costruzione in subappalto. Conoscerai per nome ognuna delle persone che lavorano al tuo prodotto.",
      },
      {
        q: "Cosa succede al conto dell'AI quando cresciamo?",
        a: "Lo modelliamo per utente prima di costruire e lo misuriamo dopo, con tetti fissati nel codice. La maggior parte dei prodotti che gestiamo costa centesimi per utente attivo al mese, e durante il progetto esecutivo ti mostriamo i conti fatti sui tuoi numeri.",
      },
      {
        q: "Possiamo portare il prodotto in casa più avanti?",
        a: "Sì, ed è progettato per questo. Stack standard, account tuoi, tutto documentato. Il passaggio di consegne è un processo di due settimane già pianificato, non una trattativa.",
      },
      {
        q: "E se abbiamo già un prodotto a metà?",
        a: "Succede spesso. Partiamo da un audit di quello che esiste e ti diciamo onestamente se è una base o un costo affondato. Ci è capitato di raccogliere entrambi i casi.",
      },
      {
        q: "Firmate NDA e lavorate con il nostro ufficio legale?",
        a: "Sì. Per noi è prassi, e siamo abituati a passare per le verifiche europee sulla protezione dei dati.",
      },
    ],
    cta: "Hai un'idea di prodotto che merita di essere costruita davvero?",
    meta: {
      title: "Sviluppo di prodotti AI - Plusultra Labs",
      description:
        "Progettiamo, costruiamo e gestiamo prodotti AI dall'inizio alla fine, come facciamo con i nostri SaaS. Prima versione in poche settimane, livello produzione dal primo giorno.",
    },
  },

  "ai-integration": {
    cardTitle: "Integrazione AI",
    cardBody:
      "AI dentro gli strumenti che la tua azienda già usa. Conforme alla privacy, con costi prevedibili, e chi ti parla è chi la costruisce.",
    title: "AI dentro i tuoi sistemi. Costruita, non consigliata.",
    lead: "Le grandi società di consulenza ti vendono una roadmap. Noi ti vendiamo un sistema che funziona. Integriamo i modelli linguistici nel software che la tua azienda già usa, con architettura conforme alle regole europee e costi prevedibili, perché la stessa infrastruttura AI la mandiamo avanti ogni giorno per i nostri prodotti.",
    specs: [
      { label: "Durata tipica", value: "4–8 settimane" },
      { label: "Pilota", value: "3–5 settimane, prezzo fisso" },
      { label: "A partire da", value: "~ 8.000 €" },
    ],
    narrative: {
      heading: "Dove l'AI ripaga davvero in un'azienda che già funziona",
      paragraphs: [
        "L'altra proposta l'hai già sentita. Una grande società di consulenza fa una discovery, produce una valutazione di maturità e una roadmap, e se ne va. La roadmap non è sbagliata. Semplicemente non è software, e lunedì mattina in azienda non cambia niente.",
        "Il lavoro che vale, in un'azienda di media dimensione, è molto più stretto e molto più concreto. Documenti che arrivano in PDF e vengono ribattuti a mano nel gestionale. Email dei clienti che qualcuno smista a mano per tre ore al giorno. Conoscenza ferma su un disco condiviso che nessuno riesce a cercare. Preventivi montati a copia e incolla. Sono questi i processi dove uno strato AI fatto bene toglie ore vere, e non sono quasi mai quelli sulla slide.",
        "Per questo partiamo dai tuoi sistemi come sono: il CRM che non cambierai, il gestionale con quindici anni di storia dentro, la casella di posta da cui passa tutto. Mettiamo lo strato AI accanto, su infrastruttura europea, con tracciabilità e un tetto di costo. Poi lo dimostriamo su un solo processo, prima che qualcuno firmi per estenderlo.",
      ],
      pullQuote: "Un pilota che si ripaga, oppure una risposta onesta che non lo farà.",
    },
    points: [
      {
        title: "Il codice lo scriviamo noi",
        body: "Chi è in call è chi sta nel repository. Nessun passaggio a un team di delivery che non hai mai visto, nessun subappalto all'estero, nessun account manager che gira le tue domande a qualcun altro.",
      },
      {
        title: "Modelli di costo veri",
        body: "Spesa per le API, hosting e manutenzione stimati prima che tu ti impegni e misurati dopo, con i tetti scritti nel codice. Nessuno riceve una fattura a sorpresa perché un ciclo è girato tutta la notte.",
      },
      {
        title: "Europa e GDPR per architettura",
        body: "Residenza dei dati, scelta dei modelli, conservazione e tracciabilità decisi all'inizio, non aggiunti dopo per l'auditor. I trattamenti sensibili possono restare in Europa, o sui tuoi server dove la legge lo impone.",
      },
      {
        title: "Si collega a quello che già usi",
        body: "Sistemi commerciali, operativi e amministrativi, caselle di posta, cartelle condivise, database. Ci integriamo attraverso le interfacce che i tuoi fornitori espongono davvero, e ti diciamo chiaramente quando un sistema non ne ha.",
      },
      {
        title: "Misurato, non dato per scontato",
        body: "Ogni pilota parte con il numero che deve muovere: ore risparmiate, tempo di risposta, tasso di errore, costo per documento. Se il numero non si muove, te lo diciamo e ti fermi.",
      },
      {
        title: "Provato nella nostra produzione",
        body: "Lettura dei documenti, smistamento delle richieste, conoscenza interna, flussi con agenti. Le nostre operazioni girano su assistenti AI tutti i giorni, quindi ogni schema che proponiamo è già sopravvissuto all'uso che ne facciamo noi.",
      },
    ],
    pipeline: {
      intro:
        "Quattro fasi, ognuna con una decisione alla fine. Il pilota è volutamente piccolo e a prezzo fisso, perché serve proprio a scoprire a poco prezzo se vale la pena fare il resto.",
      stages: [
        {
          title: "Audit dei sistemi",
          duration: "1-2 settimane",
          basis: "Prezzo fisso",
          body: "Mappiamo come si muovono davvero lavoro e dati dentro l'azienda, poi ordiniamo i candidati per valore e non per novità.",
          outputs: [
            "Mappa dei sistemi e di dove passano davvero i dati",
            "I processi candidati, messi in ordine",
            "Modello di costi e risparmi per ogni candidato",
            "L'elenco onesto di dove l'AI non serve",
          ],
        },
        {
          title: "Pilota",
          duration: "3-5 settimane",
          basis: "Prezzo fisso",
          body: "Un processo, da capo a fondo, sui tuoi dati veri. Abbastanza piccolo da stare nel budget di un reparto, abbastanza vero da dimostrare la tesi.",
          outputs: [
            "Un processo online sui tuoi dati veri",
            "Il numero obiettivo misurato prima e dopo",
            "Hosting europeo, tracciabilità completa, costo con tetto",
            "Un via libera o uno stop che puoi difendere internamente",
          ],
        },
        {
          title: "Estensione",
          duration: "6-12 settimane",
          basis: "Prezzo fisso per fase",
          body: "Portiamo quello che il pilota ha dimostrato sui processi accanto, e lasciamo cadere quello che ha smentito.",
          outputs: [
            "Lo schema dimostrato esteso agli altri processi",
            "Integrazioni nei sistemi di riferimento",
            "Il tuo team formato sul nuovo flusso",
            "Tutto quello che il pilota ha smentito, lasciato cadere",
          ],
        },
        {
          title: "Gestione",
          duration: "In corso",
          basis: "Mensile",
          body: "I modelli cambiano ogni pochi mesi. Teniamo qualità, costo e continuità dove erano il giorno in cui hai firmato.",
          outputs: [
            "Monitoraggio e controlli sulla qualità delle risposte",
            "Tracciamento dei costi per processo",
            "Aggiornamento dei modelli quando i fornitori si muovono",
            "Nuove automazioni man mano che si dimostrano valide",
          ],
        },
      ],
      footnote:
        "Puoi fermarti dopo qualsiasi fase e tenerti tutto quello che è stato costruito fino a lì, sui tuoi account.",
    },
    deliverables: [
      {
        group: "Integrazione",
        items: [
          "Connettori verso CRM, gestionale, posta e archivi file",
          "Acquisizione dei documenti: PDF, scansioni, fogli di calcolo, allegati",
          "Ricerca sulla conoscenza interna, con i permessi rispettati",
          "Scrittura di ritorno nei sistemi di riferimento, non solo un'altra dashboard",
          "Esecuzioni pianificate e su evento, non copia e incolla a mano",
        ],
      },
      {
        group: "Ingegneria AI",
        items: [
          "Scelta dei modelli e instradamento tra fornitori disponibili in Europa",
          "Set di valutazione, così la qualità è un numero e non un'opinione",
          "Revisione umana nel flusso dove la posta in gioco lo richiede",
          "Guardrail, fallback e tetti di spesa rigidi",
          "Modelli aperti sulla tua infrastruttura quando i dati non possono uscire",
        ],
      },
      {
        group: "Conformità e gestione",
        items: [
          "Decisioni su residenza e conservazione dei dati, messe per iscritto",
          "Tracciabilità completa di cosa il sistema ha visto e cosa ha fatto",
          "Controllo degli accessi allineato ai ruoli che hai già",
          "Monitoraggio, allarmi e una persona con nome e cognome da chiamare",
          "Accordo sul trattamento dei dati e documentazione dei fornitori",
        ],
      },
    ],
    notDoing: [
      "Valutazioni di maturità, punteggi di prontezza e roadmap che non sono software.",
      "Sostituire sistemi che funzionano. Ci integriamo con il tuo gestionale, non lo buttiamo.",
      "Un chatbot sul sito come primo progetto. Raramente è lì che stanno i soldi.",
      "Addestrare i tuoi dati dentro un modello pubblico. I tuoi dati restano tuoi.",
      "Canoni vaghi. Ogni fase ha un perimetro, un prezzo e un numero che deve muovere.",
    ],
    faq: [
      {
        q: "Dobbiamo per forza spostare i dati negli Stati Uniti?",
        a: "No. Scegliamo fornitori con residenza dei dati in Europa e, per i carichi più delicati, facciamo girare modelli aperti su infrastruttura europea o sui tuoi server. È una scelta esplicita che si fa durante l'audit, con i compromessi messi per iscritto.",
      },
      {
        q: "Quanto costa far girare l'AI?",
        a: "Per la maggior parte dei processi di un'azienda media, da qualche decina a qualche centinaio di euro al mese di API, molto sotto il costo del lavoro che sostituisce. Lo modelliamo per documento o per richiesta prima che tu ti impegni, e lo misuriamo dal vivo dopo.",
      },
      {
        q: "E se il pilota fallisce?",
        a: "Allora hai pagato un prezzo fisso piccolo per scoprirlo in cinque settimane invece di impegnarti su un'estensione. La fase serve esattamente a questo. È già successo che dicessimo a un cliente di fermarsi.",
      },
      {
        q: "Il nostro reparto IT è piccolo. Cosa deve fare?",
        a: "Darci gli accessi e rispondere alle domande sui sistemi. L'ingegneria la facciamo noi. In fase di estensione formiamo le persone che lo useranno e documentiamo quello che serve al tuo team per mantenerlo.",
      },
      {
        q: "Questo sostituirà delle persone?",
        a: "Nella nostra esperienza toglie la parte del lavoro che non voleva nessuno: ribattere, ordinare, cercare. Progettiamo con una persona che rivede il risultato ovunque la posta in gioco sia reale, e ti diciamo chiaramente quando un processo è davvero automatizzabile del tutto.",
      },
      {
        q: "Potete lavorare con il nostro fornitore software attuale?",
        a: "Sì, e spesso è necessario. Siamo abituati a integrarci aggirando i limiti delle API di un fornitore, e a essere quelli che la sua documentazione se la leggono per bene.",
      },
    ],
    cta: "Vuoi vedere dove l'AI ripaga davvero nei tuoi sistemi?",
    meta: {
      title: "Integrazione AI per aziende di media dimensione - Plusultra Labs",
      description:
        "Mettiamo l'AI dentro i sistemi che già usi: scelta dei modelli, architettura conforme al GDPR con residenza europea, controllo dei costi, monitoraggio in produzione. Ingegneri, non slide.",
    },
  },

  "custom-platforms": {
    cardTitle: "Piattaforme su misura",
    cardBody:
      "Portali, gestionali, strumenti interni, marketplace. Piattaforme solide consegnate in poche settimane e seguite una volta online.",
    title: "Piattaforme su misura che escono in settimane e reggono per anni",
    lead: "Portali clienti, CRM, sistemi di prenotazione, marketplace, strumenti interni. Li costruiamo come costruiamo i nostri prodotti: team piccolo e senior, stack moderno, produzione dalla prima settimana. E restiamo a mandarli avanti.",
    specs: [
      { label: "Durata tipica", value: "3–8 settimane" },
      { label: "Dopo il lancio", value: "Gestione mensile" },
      { label: "A partire da", value: "~ 5.000 €" },
    ],
    narrative: {
      heading: "Lo spazio tra quello che fa il tuo software e quello che fa la tua azienda",
      paragraphs: [
        "Quasi tutte le aziende riempiono quello spazio con dei fogli di calcolo, un disco condiviso e una persona che sa come sta insieme tutto quanto. Funziona finché non funziona più: finché quella persona non va in ferie, finché il foglio non arriva al limite, finché un cliente non chiede una cosa che lo strumento proprio non sa mostrare.",
        "Il software su misura era la risposta costosa a quello spazio. Non lo è più. Uno stack moderno e standardizzato, più un team che usa davvero l'AI sul proprio lavoro, vuol dire che una piattaforma vera, con account, permessi, integrazioni e back office, esce in settimane, a un prezzo che compete con un anno di licenze per utente.",
        "Lo sappiamo perché lo facciamo per noi. Il nostro motore per piattaforme travel manda avanti decine di siti separati da una sola cabina di regia, ognuno sul suo dominio e nelle sue lingue. Le nostre operazioni interne girano su strumenti che ci siamo costruiti. Stessa architettura, stesso team, puntati su qualunque cosa la tua azienda debba smettere di fare a mano.",
      ],
      pullQuote: "Un back office vero, così smetti di chiamarci per ogni modifica.",
    },
    points: [
      {
        title: "Settimane, onestamente",
        body: "Un perimetro tipico esce in 3-6 settimane perché lo stack è standardizzato e usiamo molta AI sul nostro lavoro. Non perché tagliamo angoli che poi paghi tu.",
      },
      {
        title: "Un back office vero",
        body: "Ogni piattaforma ha un'area di amministrazione costruita per il tuo team, non un visualizzatore di database. Aggiungi utenti, cambi contenuti, modifichi impostazioni ed estrai report senza aprire un ticket con noi.",
      },
      {
        title: "Parla con gli altri strumenti",
        body: "Contabilità, pagamenti, calendari, posta, il CRM. Una piattaforma che non si integra diventa solo un altro posto dove qualcuno ribatte le stesse informazioni.",
      },
      {
        title: "Pronta per l'AI di serie",
        body: "La stessa architettura dei nostri prodotti AI. Quando vorrai lettura dei documenti, testi generati o ricerca sui tuoi dati, arriverà come una funzione e non come una riscrittura.",
      },
      {
        title: "Costruita per chi ci vive dentro tutti i giorni",
        body: "Interfacce disegnate intorno al lavoro reale e provate con il team che ci passerà otto ore al giorno. L'adozione è un problema di design molto prima che di formazione.",
      },
      {
        title: "La gestiamo noi",
        body: "Hosting, backup, monitoraggio, aggiornamenti di sicurezza e piccole evoluzioni su una sola voce mensile prevedibile. Codice, dati e account dell'infrastruttura restano tuoi per tutto il tempo.",
      },
    ],
    pipeline: {
      intro:
        "Le stesse quattro fasi di tutto quello che costruiamo. Prezzo fisso concordato prima di qualsiasi riga di codice, demo ogni settimana durante, e un accordo di gestione chiaro dopo.",
      stages: [
        {
          title: "Inquadramento",
          duration: "1 settimana",
          basis: "Gratis",
          body: "Cosa deve fare la piattaforma, chi ci vive dentro e cosa va a sostituire. Compreso se uno strumento già pronto ti servirebbe meglio.",
          outputs: [
            "Cosa deve fare la piattaforma, e per chi",
            "Cosa sostituisce e a cosa si deve collegare",
            "Una risposta onesta: ci siamo o non ci siamo",
            "Fascia di budget e tempi",
          ],
        },
        {
          title: "Progetto esecutivo",
          duration: "1 settimana",
          basis: "Prezzo fisso",
          body: "Schermata per schermata, integrazione per integrazione, con prezzo e date prima di cominciare a costruire.",
          outputs: [
            "Perimetro schermata per schermata",
            "Modello dati e lista delle integrazioni",
            "Prezzo fisso e data di consegna",
            "Direzione di design concordata",
          ],
        },
        {
          title: "Costruzione",
          duration: "3-8 settimane",
          basis: "Prezzo fisso",
          body: "I tuoi dati veri entrano presto e il tuo team li vede ogni settimana, così le sorprese arrivano alla seconda settimana invece che alla consegna.",
          outputs: [
            "Demo ogni settimana su un ambiente online",
            "I tuoi dati veri caricati fin da subito",
            "Area di amministrazione dalla prima settimana",
            "Collaudo con il tuo team, quello vero",
          ],
        },
        {
          title: "Lancio e gestione",
          duration: "In corso",
          basis: "Mensile",
          body: "Migrazione, formazione, poi una voce mensile prevedibile che copre tutto quello che la tiene in salute.",
          outputs: [
            "Migrazione e supporto al go-live",
            "Formazione per utenti e amministratori",
            "Hosting, backup, monitoraggio, aggiornamenti",
            "Piccole evoluzioni ogni mese",
          ],
        },
      ],
      footnote:
        "Puoi fermarti dopo qualsiasi fase e tenerti tutto quello che è stato costruito fino a lì, sui tuoi account.",
    },
    deliverables: [
      {
        group: "Piattaforma",
        items: [
          "Applicazione web, usabile da telefono e da computer",
          "Account utente, ruoli e permessi",
          "Back office per il tuo team",
          "Report ed esportazioni che l'amministrazione può usare davvero",
          "Multilingua dove serve",
        ],
      },
      {
        group: "Integrazioni",
        items: [
          "Pagamenti e fatturazione",
          "Posta e calendario",
          "Contabilità e gestionale",
          "Importazione dai fogli di calcolo che stai sostituendo",
          "Un'API che i tuoi altri strumenti possono usare",
        ],
      },
      {
        group: "Fondamenta",
        items: [
          "Account cloud e repository intestati a te",
          "Ambienti di staging e produzione",
          "Backup automatici con ripristini testati",
          "Monitoraggio, tracciamento degli errori e allarmi",
          "Documentazione per amministratori e sviluppatori",
        ],
      },
    ],
    notDoing: [
      "Licenze per utente. È tua, e aggiungere persone non cambia il prezzo.",
      "Ricostruire qualcosa che già funziona. Se la risposta è uno strumento pronto, te lo diciamo.",
      "Consegnare un codice senza documentazione e augurarti buona fortuna.",
      "Servizi di marketing o SEO in aggiunta. Noi costruiamo la piattaforma, la crescita è compito tuo o di qualcun altro.",
      "Richieste di modifica quotate a cose fatte. I cambi di perimetro si riquotano prima di essere costruiti.",
    ],
    faq: [
      {
        q: "Il su misura costa davvero meno di un abbonamento SaaS?",
        a: "Spesso sì, superata una certa dimensione di team. Venti postazioni su uno strumento di fascia media sono facilmente 15.000 € l'anno, per sempre, sulla roadmap di qualcun altro. Una piattaforma costruita sul tuo processo è una spesa una tantum più una voce di gestione prevedibile, e fa esattamente quello che fai tu.",
      },
      {
        q: "E se i requisiti cambiano durante la costruzione?",
        a: "È previsto e messo in conto. Le demo settimanali esistono proprio perché i cambiamenti emergano alla seconda settimana e non alla consegna. Le modifiche piccole vengono assorbite. Tutto quello che sposta il perimetro in modo sostanziale si riquota prima di essere costruito, mai dopo.",
      },
      {
        q: "Di chi è il codice?",
        a: "Tuo, dal primo commit, nel tuo repository. Lo stesso vale per gli account cloud, il dominio e il database.",
      },
      {
        q: "Cosa succede se smettiamo di lavorare con voi?",
        a: "La piattaforma continua a funzionare. Sta tutto sui tuoi account, su uno stack standard, e lo documentiamo per chi subentra. Preferiamo essere tenuti perché funziona, non perché andarsene è complicato.",
      },
      {
        q: "Potete prendere in carico una piattaforma costruita da altri?",
        a: "Sì, se il codice è recuperabile. Partiamo da un audit e da un verdetto scritto: estendere, rifattorizzare o rifare. Ci è capitato di fare tutte e tre le cose.",
      },
      {
        q: "Vi occupate di GDPR e sicurezza?",
        a: "Sì. Hosting europeo, controllo degli accessi, cifratura, una procedura di backup e ripristino testata e un accordo sul trattamento dei dati. Per i clienti regolamentati affrontiamo insieme a loro la verifica di sicurezza.",
      },
    ],
    cta: "Ti serve una piattaforma su cui la tua azienda possa davvero girare?",
    meta: {
      title: "Piattaforme su misura e sviluppo SaaS - Plusultra Labs",
      description:
        "Piattaforme su misura di livello produzione: portali, CRM, marketplace, strumenti interni. Consegnate in settimane su stack moderno, da un team che ne manda avanti più di dieci sue.",
    },
  },
};
