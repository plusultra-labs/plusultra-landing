import type { SiteCopy } from "./types";

// Spanish. Neutral European Spanish, second person singular, same directness
// as the English original.
export const copyEs: SiteCopy = {
  orgDescription:
    "Plusultra Labs es un estudio de producto de IA. Construimos y operamos nuestros propios productos de IA, y llevamos el mismo equipo senior al trabajo con clientes: desarrollo de producto de IA, integración de IA y plataformas a medida.",
  orgShort:
    "Estudio de producto de IA. Lanzamos nuestros productos de IA y después el tuyo.",

  nav: {
    services: "Servicios",
    work: "Proyectos",
    about: "Estudio",
    contact: "Contacto",
    homeAria: "Plusultra Labs, inicio",
    menuAria: "Abrir el menú",
    languageAria: "Cambiar de idioma",
  },

  common: {
    bookCall: "Reserva una llamada",
    bookScopingCall: "Reserva una primera llamada",
    explore: "Ver más",
    seeSelectedWork: "Ver proyectos",
    seeFullList: "Ver la lista completa",
    readFullService: "Leer el servicio completo",
    visit: "ir al sitio",
    repliesWithin: "Respondemos en un día laborable",
    repliesWithinTz: "Respondemos en un día laborable · hora de Singapur",
    basedIn: "Sede",
    location: "Singapur · GMT+8",
    breadcrumbHome: "Inicio",
  },

  booking: {
    kicker: "Reserva una llamada",
    pickHeading: "Elige cuándo.",
    pickLead: "{duration} minutos con Alberto, por Google Meet. La primera llamada la hace siempre él.",
    timezoneNote: "Horas en {tz}",
    loading: "Cargando las horas libres",
    loadError: "El calendario no ha cargado.",
    retry: "Reintentar",
    fallbackLink: "Abrir la página de reserva",
    noSlots: "No queda nada libre en los próximos {days} días. Escríbenos y buscamos un hueco.",
    slotCount: "{n} libres",
    detailsHeading: "Cuéntanos de qué va.",
    detailsLead: "Tu nota entra directamente en la invitación del calendario, así la llamada empieza por la pregunta de verdad.",
    change: "Cambiar",
    nameLabel: "Nombre",
    emailLabel: "Email",
    noteLabel: "¿Qué quieres construir?",
    notePlaceholder: "Unas líneas sobre el problema, un enlace si ya existe algo, para quién es, y si hay una fecha límite real.",
    optional: "Opcional",
    submit: "Confirmar la llamada",
    submitting: "Reservando",
    submitError: "La reserva no se ha completado.",
    doneHeading: "Reservada.",
    doneLead: "La invitación va camino de {email}. Responde ahí si cambia algo.",
    joinLink: "Enlace para entrar",
    done: "Listo",
    close: "Cerrar",
  },

  home: {
    kicker: "Estudio de producto de IA · Singapur",
    heroLines: ["Lanzamos nuestros", "productos de IA. Luego", "lanzamos el"],
    heroEmphasis: "tuyo.",
    lead: "Plusultra Labs es un estudio de producto de IA. Todo lo que recomendamos ya lo usamos nosotros a diario: nuestros productos, nuestras herramientas de IA, nuestros sistemas.",
    stats: [
      { label: "Productos en producción", value: "35" },
      { label: "Primera versión usable", value: "3–6 semanas" },
      { label: "El equipo", value: "12 personas" },
    ],
    proofs: [
      {
        value: "35",
        label: "productos digitales diseñados, construidos y hoy en marcha, nuestros y de clientes",
      },
      {
        value: "1,5M+",
        label: "ofertas de viaje emparejadas y ordenadas en TourScanner, donde nuestro fundador trabaja en IA y producto",
      },
      {
        value: "100%",
        label: "del código y la infraestructura entregados en cuentas que son tuyas",
      },
      {
        value: "24/7",
        label: "nuestros asistentes de IA llevan las operaciones del estudio, así que sabemos que aguanta",
      },
    ],
    servicesKicker: "01 — Qué hacemos",
    servicesHeading: "Tres formas de trabajar juntos.",
    servicesIntro:
      "Sin capa comercial de por medio y sin traspasos a júniors: las personas de la primera llamada son las que escriben el código. Alcance y precio quedan fijados por escrito antes de empezar.",
    buildKicker: "02 — Qué construimos",
    buildHeading: "Cuatro tipos de proyecto, no cuatro proyectos.",
    buildIntro:
      "Treinta y cinco productos lanzados y hoy en marcha. Lo que sigue está agrupado por tipo de proyecto y no por cliente, porque la pregunta útil es si ya hemos resuelto un problema con la forma del tuyo, no si tu sector aparece en la lista.",
    buildNote: "Solo ejemplos · parte del trabajo con clientes está bajo NDA",
    showcaseHeading: "Unos cuantos que sí podemos enseñar, con los números delante.",
    showcaseLabel: "Productos propios",
    processKicker: "03 — Cómo transcurre un proyecto",
    processHeading: "Un proceso escrito, con fechas encima.",
    process: [
      {
        when: "SEMANA 0",
        title: "Primera llamada",
        body: "Una llamada con los ingenieros que lo construirían. Sales con una respuesta escrita sobre encaje, rango de presupuesto y plazos, nos contrates o no.",
      },
      {
        when: "SEMANA 1",
        title: "Propuesta cerrada",
        body: "Alcance, arquitectura, precio y fechas de entrega en un solo documento, acordados antes de escribir código. Sin sorpresas por horas.",
      },
      {
        when: "SEMANA 2 — 12",
        title: "Entregas cada semana",
        body: "Un entorno en línea desde la primera semana y algo que puedes clicar cada semana, con tus datos reales dentro desde el principio.",
      },
      {
        when: "EN CURSO",
        title: "Lo operamos o te lo entregamos",
        body: "Lo mantenemos nosotros, o entregamos código e infraestructura documentados. En ambos casos las cuentas son tuyas desde el primer commit.",
      },
    ],
    ctaHeading: "¿Tienes un producto que construir, o un sistema que necesita IA",
    ctaEmphasis: "dentro?",
    ctaBody:
      "Mándanos un párrafo sobre el problema. Recibes un alcance escrito y una respuesta honesta: somos el estudio adecuado o no lo somos.",
    meta: {
      title: "Plusultra Labs - Estudio de producto de IA",
      description:
        "Plusultra Labs es un estudio de producto de IA. Lanzamos nuestros propios productos de IA y llevamos el mismo equipo de ingeniería al tuyo. Desarrollo de producto de IA, integración de IA, plataformas a medida.",
      ogTitle: "Plusultra Labs - Estudio de producto de IA",
      ogDescription:
        "Lanzamos nuestros productos de IA. Luego lanzamos el tuyo. Desarrollo de producto de IA, integración de IA, plataformas a medida.",
    },
  },

  services: {
    kicker: "Servicios",
    heading: "Tres formas de trabajar juntos.",
    lead: "Sea cual sea la forma del encargo, el equipo es el mismo que construye y opera nuestros productos. Aquí abajo tienes qué entregamos, cuánto cuesta aproximadamente y cuánto tarda.",
    includedLabel: "Siempre incluido",
    included: [
      "Alcance escrito y cerrado antes de empezar",
      "Quien está en la llamada es quien está en el repositorio",
      "Una entrega semanal que puedes clicar y probar",
      "Código e infraestructura en cuentas tuyas",
    ],
    boundariesKicker: "Límites",
    boundariesHeading: "Lo que no aceptamos.",
    boundariesBody:
      "Decirlo en público nos ahorra una llamada a todos. Y es la forma más rápida de contarte en qué somos buenos.",
    declined: [
      {
        title: "Desarrolladores por horas",
        body: "Entregamos resultados con un alcance cerrado, no personas en una hoja de horas.",
      },
      {
        title: "Discovery que acaba en un documento",
        body: "Cada fase que vendemos produce software que funciona, o un no honesto.",
      },
      {
        title: "Funciones de IA sin un trabajo medible",
        body: "Si lo resuelve un motor de reglas, te lo decimos y dejamos el modelo fuera.",
      },
      {
        title: "Marketing, SEO y contenidos",
        body: "Construimos producto y plataformas. El crecimiento es cosa tuya, o de otro.",
      },
      {
        title: "Precio cerrado con alcance abierto",
        body: "Los cambios de alcance se recotizan antes de construirlos, nunca después.",
      },
    ],
    ctaHeading: "¿No sabes cuál encaja? Te lo dirá la primera llamada.",
    meta: {
      title: "Servicios - Plusultra Labs",
      description:
        "Desarrollo de producto de IA, integración de IA en sistemas existentes y plataformas a medida, del equipo que construyó BuzzWatch, ItaSign, IntelligoAI y más de diez SaaS en producción.",
    },
  },

  servicePage: {
    breadcrumb: "Servicios",
    atAGlance: "En resumen",
    pointsKicker: "01 — Qué obtienes de nosotros",
    pointsHeading: "Las partes que marcan la diferencia.",
    pipelineKicker: "02 — Cómo transcurre un proyecto",
    pipelineHeading: "Un proceso escrito, con fechas encima.",
    deliverablesKicker: "03 — Entregables",
    deliverablesHeading: "Qué te queda en la mano.",
    deliverablesIntro:
      "No es una lista de categorías. Son las cosas concretas que existen al final, y que siguen siendo tuyas.",
    boundariesKicker: "Límites",
    boundariesHeading: "Lo que no hacemos.",
    boundariesBody: "Decirlo en voz alta nos ahorra una llamada a todos.",
    pricingKicker: "04 — Modelos de colaboración",
    pricingHeading: "Precios publicados, antes de que preguntes.",
    pricingNote:
      "Cada proyecto se cotiza sobre su alcance real; estos rangos te dan el orden de magnitud para que sepas dónde estás antes de la primera llamada.",
    faqKicker: "05 — Preguntas",
    faqHeading: "Las preguntas que nos hacen.",
    relatedKicker: "06 — Proyectos seleccionados",
    relatedHeading: "Una selección de proyectos de este servicio.",
    relatedNote:
      "Una selección, no la lista completa. Parte del trabajo con clientes está bajo NDA y no aparece aquí.",
    otherServices: "Las otras dos formas de trabajar juntos",
    howToName: "Cómo transcurre un proyecto de {service}",
  },

  work: {
    kicker: "Proyectos seleccionados",
    heading: "Treinta y cinco lanzados. Estos son los que podemos nombrar.",
    lead: "Nuestros productos, el trabajo hecho para clientes y los productos en los que trabajamos desde dentro de la empresa de otro, de 2014 a hoy. Todo lo que hay aquí se lanzó y lo usan (o lo usaron) personas reales. Parte de lo que construimos está bajo NDA y no aparece, así que léelo como una muestra de cada tipo de proyecto y no como un catálogo.",
    kindsLabel: "Tipos de proyecto",
    sectorsLabel: "Sectores",
    sectors: "Viajes · Salud · Legal · Inmobiliario · Marketing · Finanzas",
    countLabel: "Aquí listados / lanzados",
    moreWork: "Más proyectos",
    ctaHeading: "El siguiente de esta página puede ser el tuyo.",
    meta: {
      title: "Proyectos - Plusultra Labs",
      description:
        "Proyectos de Plusultra Labs: BuzzWatch, IntelligoAI, ItaSign, Artupia y plataformas para clientes en salud, viajes, inmobiliario y finanzas.",
    },
  },

  about: {
    kicker: "El estudio",
    heading: "Un estudio de producto, llevado como un producto.",
    lead: "Plusultra Labs sale de haber llevado una empresa, no de vender servicios. Nuestro fundador construyó y dirigió la suya durante siete años, y los años siguientes los pasó construyendo productos para otros. El estudio es eso, con un equipo detrás: nuestros productos, y los productos de los demás tratados exactamente igual.",
    clientsLabel: "Clientes en",
    clientsValue: "Europa y Asia",
    teamLabel: "El equipo",
    peopleUnit: "personas",
    storyKicker: "01 — Dónde empezó esto",
    storyHeading: "Empecé construyendo la cosa, no vendiendo el servicio.",
    story: [
      "Monté mi primer proyecto por mi cuenta a los quince; Artupia fue la primera empresa de verdad. La fundé en 2014, cuando todavía estaba en el instituto, y la dirigí como fundador y CEO durante siete años: un marketplace donde cualquiera podía encargar una obra a un artista real — describes lo que quieres, los artistas proponen, y sigues la pieza del boceto a la entrega. Superó los 100.000 usuarios y las 20 personas, y levantó hasta 3 millones de euros. En 2021 el Covid se llevó por delante el mercado del arte del que dependía. Construirla es también lo que me convirtió en desarrollador: full-stack de forma autodidacta, porque el producto lo pedía.",
      "Cuando el Covid cerró Artupia podría haber montado otra empresa mía. Hice lo contrario a propósito: me metí dentro de los productos de otros. Una app de quick-commerce, una startup de asistentes de IA y, desde 2023, TourScanner — un metabuscador de viajes que fundaron otros en 2018, que yo no construí y no es mío. Allí trabajo en IA y producto, sobre millón y medio de ofertas y 5.000 destinos. Ahí lo vi claro: la parte que de verdad me gusta es construir el producto, no poseerlo.",
      "A partir de ahí llegó el resto de la cartera, cada producto nacido porque al mercado le faltaba algo evidente. ItaSign, porque firmar un documento con validez legal en Europa no debería exigir una suscripción enterprise. IntelligoAI, porque las consultas médicas italianas tenían que elegir entre la agenda de papel y un contrato anual. BuzzWatch, porque los clientes empezaron a preguntarle a los asistentes qué comprar y nadie podía ver qué respondían. InsightFlow, porque las agencias viven dentro de hojas de cálculo.",
      "El trabajo con clientes vino después, y solo porque la gente seguía preguntando quién había construido esto. Así que el estudio funciona como funcionan los productos: un equipo pequeño y senior, un entorno en línea desde la primera semana y algo que puedes clicar cada viernes. Nuestras propias operaciones van sobre asistentes de IA que construimos nosotros, que es también como sé qué prometer y qué no.",
      "Ese es todo el discurso. No soy el dueño de una agencia que aprendió IA para cerrar contratos. Empecé como fundador, seguí construyendo cuando mi empresa se acabó, y casi todo lo que construyo hoy es de otro. Me va bien así: me gusta más la parte del producto que la de la propiedad, y el estudio existe para que ahora haya un equipo entero haciéndolo con el tuyo.",
    ],
    storyPullQuote: "Todo lo que vendemos, ya lo usamos nosotros.",
    founderRole: "Fundador · Producto",
    founderAlt: "Alberto, fundador de Plusultra Labs",
    principlesKicker: "02 — Cómo trabajamos",
    principlesHeading: "Tres cosas que deciden todo lo demás.",
    principles: [
      {
        title: "Pequeños y senior",
        body: "Un equipo reducido más una red de especialistas de confianza, con IA multiplicando cada paso. Siempre hablas con quien está haciendo el trabajo.",
      },
      {
        title: "AI-first de verdad",
        body: "Nuestras operaciones van sobre asistentes de IA que construimos nosotros: cada día reparten el trabajo y filtran los mensajes por nosotros. Vendemos lo que usamos.",
      },
      {
        title: "Lanzado gana a perfecto",
        body: "Algo que puedes clicar cada semana, en línea desde el primer día. El software es real cuando la gente lo usa, no cuando queda bien en una demo.",
      },
    ],
    teamKicker: "03 — El equipo",
    teamHeading: "Las personas que lo construirían.",
    teamIntro:
      "{n} personas entre producto, diseño, ingeniería y entrega, más una red de especialistas que traemos cuando un proyecto lo pide.",
    ctaHeading: "¿Quieres ver cómo abordaríamos tu problema?",
    personDescription:
      "Fundador de Plusultra Labs. Fundó Artupia en 2014 y la dirigió como CEO durante siete años, hasta superar los 100.000 usuarios y las 20 personas con hasta 3 millones de euros levantados. Hoy construye productos para otras empresas y opera una cartera que incluye BuzzWatch, ItaSign, IntelligoAI e InsightFlow, y trabaja en IA y producto en TourScanner.",
    meta: {
      title: "El estudio - Plusultra Labs",
      description:
        "Plusultra Labs es un estudio de producto de IA con sede en Singapur: un equipo senior entre producto, diseño e ingeniería que construye sus propios productos y lleva los mismos estándares al trabajo con clientes.",
    },
  },

  contact: {
    kicker: "Contacto",
    heading: "Habla con quien escribe el",
    headingEmphasis: "código.",
    lead: "Media hora de llamada es la forma más rápida de saber si somos el equipo adecuado para lo que quieres construir. No hace falta presentación, y en cualquier caso sales con una respuesta escrita.",
    speakingWith: "Vas a hablar con",
    founderNote: "Fundador. La primera llamada la hago yo, siempre.",
    prepKicker: "Antes de la llamada",
    prepHeading: "Qué hace útil a la primera llamada.",
    prep: [
      {
        title: "Dos líneas sobre el problema",
        body: "Qué quieres construir, o qué sistema necesita IA dentro. Con palabras normales basta, no hace falta un pliego.",
      },
      {
        title: "Un enlace, si ya existe algo",
        body: "Si hay un producto, un sitio o una versión a medias, un enlace vale más que mil palabras.",
      },
      {
        title: "Para quién es",
        body: "Quién lo usa, quién lo paga y qué hace hoy en su lugar.",
      },
      {
        title: "Las restricciones reales",
        body: "Una fecha límite, un techo de presupuesto, un regulador, un sistema con el que hay que integrarse. Mejor decirlo pronto que descubrirlo tarde.",
      },
    ],
    meta: {
      title: "Contacto - Plusultra Labs",
      description:
        "Reserva una llamada con Plusultra Labs para hablar de tu producto de IA, de integrar IA en tus sistemas o de una plataforma a medida.",
    },
  },

  footer: {
    blurb:
      "Un estudio de producto de IA con sede en Singapur. Construimos software propio y llevamos el mismo equipo al tuyo.",
    studio: "Estudio",
    aboutStudio: "El estudio",
    contact: "Contacto",
    workingWithUs: "Trabajar con nosotros",
    promises: [
      "Alcance cerrado antes de empezar",
      "Una entrega semanal que puedes clicar",
      "Código en cuentas tuyas",
    ],
    tagline: "Lanzamos nuestros productos de IA. Luego lanzamos el tuyo.",
  },

  llms: {
    intro: "Sede en Singapur, clientes en Europa y Asia.",
    contact: "Contacto:",
    whatWeDo: "Qué hacemos",
    typicalEngagement: "Proyecto típico: {duration}, desde {price}.",
    howItRuns: "Cómo transcurre un proyecto",
    whatWeDont: "Qué no hacemos",
    kindsOfBuild: "Tipos de proyecto",
    kindsIntro:
      "Hemos lanzado 35 productos. La lista de abajo está agrupada por tipo de proyecto, porque la pregunta útil es si ya hemos resuelto un problema con esa forma. Parte del trabajo con clientes está bajo NDA y no aparece.",
    examples: "Ejemplos:",
    ownProducts: "Productos que construimos y operamos",
    clientWork: "Una selección de trabajo con clientes",
    roles: "Productos fundados por otros en los que trabajamos",
    questions: "Preguntas frecuentes",
    pages: "Páginas",
    otherLanguages: "Este sitio en otros idiomas",
  },

  team: {
    alberto: "Fundador · Producto",
    weilin: "Responsable de Ingeniería",
    marta: "Product Designer sénior",
    ravi: "AI Engineer",
    giulia: "Desarrollo full-stack",
    junkai: "Desarrollo full-stack",
    elena: "Product Designer",
    tommaso: "Project Manager",
    sofia: "Project Manager",
    andres: "Brand Designer",
    priya: "Data Engineer",
    luca: "QA y Operaciones",
  },

  categories: {
    saas: {
      title: "Productos SaaS",
      blurb:
        "Productos multiinquilino con cuentas, facturación, permisos y una hoja de ruta que sigue moviéndose después del lanzamiento. La mayoría de los nuestros son propios y los operamos nosotros.",
      forWho: "Tienes una idea de producto, o una v1 que tiene que convertirse en un negocio.",
    },
    "internal-tools": {
      title: "Herramientas internas y plataformas de operaciones",
      blurb:
        "El sistema sobre el que funciona de verdad una empresa: pedidos, fichas, planificación, aprobaciones, informes. Normalmente sustituye a una hoja de cálculo que ya no puede mantener nadie.",
      forWho: "Tus operaciones viven en hojas de cálculo y en la cabeza de una persona.",
    },
    "ai-systems": {
      title: "IA dentro de los sistemas que ya tienes",
      blurb:
        "Una capa al lado del software que ya usas: lectura de documentos, clasificación, búsqueda sobre el conocimiento interno, informes que se escriben solos.",
      forWho: "Tu software funciona, pero tu equipo pierde horas en lo que haría un modelo.",
    },
    consumer: {
      title: "Apps de consumo y móviles",
      blurb:
        "Productos que usa el público y no la plantilla: interfaces pensadas primero para el móvil, flujos de registro y los problemas de escala que llegan con ambos.",
      forWho: "Vendes a consumidores, y la primera impresión lo decide todo.",
    },
  },

  pricing: {
    "ai-product-development": [
      {
        price: "~ 15.000 €",
        title: "Validar",
        body: "Una primera versión funcional de tu producto en 3-6 semanas: la experiencia central, usuarios reales, feedback real. Suficiente para saber si la idea merece más.",
      },
      {
        price: "~ 40.000 €",
        title: "Lanzar",
        body: "El producto completo: diseño cuidado, pagos, área de administración, funciones de IA donde se ganan su sitio. Listo para clientes que pagan.",
      },
      {
        price: "80.000 €+",
        title: "Escalar",
        body: "Producto en varios mercados con hoja de ruta: funciones nuevas cada semana, infraestructura que crece contigo, nuestro equipo como tu equipo de producto.",
      },
    ],
    "ai-integration": [
      {
        price: "~ 8.000 €",
        title: "Piloto",
        body: "Un proceso automatizado de principio a fin sobre tus datos reales, con un resultado medible. Si no se paga solo, lo sabrás rápido.",
      },
      {
        price: "~ 25.000 €",
        title: "Despliegue",
        body: "IA en tus procesos centrales: documentos, comunicación con clientes, conocimiento interno. Tu equipo formado, los costes bajo control.",
      },
      {
        price: "desde 2.000 €/mes",
        title: "Operación",
        body: "Lo mantenemos en marcha y lo mejoramos: monitorización, control de costes, actualización de modelos y automatizaciones nuevas a medida que demuestran su valor.",
      },
    ],
    "custom-platforms": [
      {
        price: "~ 5.000 €",
        title: "Sitio o portal",
        body: "Un sitio profesional o un portal interno pequeño, con un área de administración para que gestiones el contenido por tu cuenta.",
      },
      {
        price: "~ 15.000 €",
        title: "Plataforma completa",
        body: "Una plataforma completa con cuentas de usuario, integraciones con las herramientas que ya usas y un back office de verdad.",
      },
      {
        price: "35.000 €+",
        title: "Columna vertebral del negocio",
        body: "El sistema sobre el que funciona tu empresa: varias aplicaciones, automatizaciones, informes, operado y evolucionado por nosotros con el tiempo.",
      },
    ],
  },
};
