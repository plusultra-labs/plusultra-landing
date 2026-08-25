import type { ServiceTexts } from "./types";

export const servicesEs: ServiceTexts = {
  "ai-product-development": {
    cardTitle: "Desarrollo de producto de IA",
    cardBody:
      "De la idea al producto terminado. Diseñamos, construimos y operamos productos digitales igual que los nuestros: primera versión en línea en semanas, hecha para durar.",
    title: "Desarrollo de producto de IA, por gente que ya lanzó el suyo",
    lead: "Muchas agencias construyen su primer producto de IA con el presupuesto del cliente. Nosotros el nuestro ya lo construimos: BuzzWatch, InsightFlow, ItaSign e IntelligoAI son SaaS vivos que diseñamos, lanzamos y operamos. Tu producto hereda los patrones que sobrevivieron a producción.",
    specs: [
      { label: "Duración habitual", value: "6–12 semanas" },
      { label: "Primera versión usable", value: "3–6 semanas" },
      { label: "Desde", value: "~ 15.000 €" },
    ],
    narrative: {
      heading: "Qué estás comprando de verdad cuando encargas un producto",
      paragraphs: [
        "La versión estándar va así. Una agencia te cotiza una fase de discovery, produce un pliego y subcontrata la construcción. Seis meses después tienes un código que nadie de la primera llamada ha leído, sobre una infraestructura que nadie quiere mantener, con una función de IA que cuesta por usuario más de lo que el usuario paga.",
        "Nosotros tomamos el otro camino. Antes de vender desarrollo de producto de IA construimos el nuestro. BuzzWatch vigila qué dicen los asistentes de IA sobre una marca, tiene clientes que pagan y un acuerdo enterprise con una agencia internacional. ItaSign, IntelligoAI e InsightFlow están vivos, se pagan solos y los operamos nosotros.",
        "Eso cambia lo que recibes. La arquitectura que proponemos es la arquitectura que operamos. Los costes de API que te cotizamos son costes que pagamos cada mes. Las formas de romperse que anticipamos son las que ya nos despertaron de noche. Estás comprando los patrones que sobrevivieron al contacto con usuarios reales, no los que quedaban bien en una propuesta.",
      ],
      pullQuote: "Todo lo que recomendamos ya lo tenemos en producción nosotros.",
    },
    points: [
      {
        title: "Diseño y arquitectura desde el modelo de negocio",
        body: "El encuadre empieza por quién paga, por qué cosa y con qué márgenes. Solo después se decide el stack. Te diremos qué funciones cortar y cuáles no sobrevivirán a su propia factura de API.",
      },
      {
        title: "Primera versión en línea en semanas",
        body: "Una pieza publicable en producción en 3-6 semanas, y después una entrega por semana. Ves el avance en un entorno real con datos reales, no en una presentación. Si la idea está equivocada, lo descubres cuando cambiarla todavía es barato.",
      },
      {
        title: "IA diseñada para coste y latencia",
        body: "Enrutado entre modelos, caché, lotes, fallbacks y techos de gasto escritos en el código. Usamos los mismos proveedores para nuestros productos y sabemos la diferencia entre una demo que impresiona y una función que sigue siendo rentable con mil usuarios.",
      },
      {
        title: "Un diseño que no parece generado",
        body: "Interfaz y marca trabajadas por diseñadores, no una librería de componentes dejada por defecto. Tu producto tiene que parecer hecho a propósito, porque quien lo mira decide qué piensa en unos cuatro segundos.",
      },
      {
        title: "Construido para poder entregarse",
        body: "Documentado, probado, stack estándar, cuentas tuyas. Lo operemos nosotros durante años o te lo lleves a casa el trimestre que viene, el código, los datos y la infraestructura son tuyos desde el primer commit.",
      },
      {
        title: "Lo que lanzamos, lo operamos",
        body: "Hosting, monitorización, respuesta a incidentes y una hoja de ruta que sigue avanzando después del lanzamiento. La versión de un producto que importa es la doce, no la uno.",
      },
    ],
    pipeline: {
      intro:
        "Cada proyecto pasa por las mismas cuatro fases. Cada una termina con algo en la mano y una decisión que tomar: seguir, cambiar de dirección o parar.",
      stages: [
        {
          title: "Encuadre",
          duration: "1 semana",
          basis: "Gratis",
          body: "Una llamada y después una respuesta breve por escrito. Problema, usuarios, modelo de negocio y si somos las personas adecuadas.",
          outputs: [
            "Problema, usuarios y modelo de negocio sobre la mesa",
            "Una respuesta honesta: encajamos o no encajamos",
            "Rango de presupuesto y plazos realistas",
          ],
        },
        {
          title: "Proyecto ejecutivo",
          duration: "1-2 semanas",
          basis: "Precio cerrado",
          body: "El plan que convierte la construcción en un compromiso en lugar de una estimación. Alcance, stack, modelo de costes y fechas, acordados antes del código.",
          outputs: [
            "Alcance y lista de funciones cerrados",
            "Decisión de arquitectura y stack",
            "Modelo del coste de IA por usuario",
            "Precio cerrado y fechas de entrega",
          ],
        },
        {
          title: "Construcción",
          duration: "3-12 semanas",
          basis: "Cerrado por fase",
          body: "En producción desde la primera semana y una entrega por semana después. No enseñamos nada en demo que no esté también en línea.",
          outputs: [
            "Entorno en línea desde la primera semana",
            "Demo y entrega cada semana",
            "Área de administración y datos reales desde pronto",
            "Sistema de diseño y marca aplicados",
          ],
        },
        {
          title: "Lanzamiento y operación",
          duration: "En curso",
          basis: "Mensual",
          body: "Lo mantenemos en marcha y lo seguimos moviendo, o te lo entregamos limpio cuando quieras.",
          outputs: [
            "Hosting, monitorización y copias de seguridad",
            "Seguimiento de coste y consumo",
            "Hoja de ruta y entregas semanales",
            "Traspaso limpio cuando lo pidas",
          ],
        },
      ],
      footnote:
        "Puedes parar después de cualquier fase y quedarte con todo lo construido hasta ahí, en tus propias cuentas.",
    },
    deliverables: [
      {
        group: "Producto",
        items: [
          "Diseño de interfaz y aplicación de marca",
          "Aplicación web responsive, de nivel producción",
          "Back office para tu equipo",
          "Pagos, suscripciones y facturación donde hagan falta",
          "Multiidioma cuando tu mercado lo pida",
        ],
      },
      {
        group: "Capa de IA",
        items: [
          "Selección de modelos y enrutado entre proveedores",
          "Búsqueda sobre tus propios contenidos y datos",
          "Conjunto de evaluación, para medir la calidad en vez de suponerla",
          "Techos de gasto, medición de consumo y límites por cliente",
          "Fallbacks para cuando un proveedor se degrada",
        ],
      },
      {
        group: "Cimientos",
        items: [
          "Cuentas de nube, base de datos y repositorio a tu nombre",
          "CI/CD con entornos de staging y producción",
          "Monitorización, registro de errores y alertas",
          "Analítica de producto desde el día del lanzamiento",
          "Documentación y notas de traspaso",
        ],
      },
    ],
    notDoing: [
      "Fases de discovery que acaban en un documento en lugar de en software.",
      "Cesión de personal. Entregamos resultados, no desarrolladores por horas.",
      "Marketing, SEO o contenidos. Construimos producto, no somos una agencia de publicidad.",
      "Funciones de IA que existen para que la presentación pueda decir IA. Si lo resuelve un motor de reglas, te lo diremos.",
      "Dependencia forzada. Ninguna plataforma propietaria, ninguna cuenta a nuestro nombre, ninguna penalización por salir.",
    ],
    faq: [
      {
        q: "¿En cuánto tiempo podemos estar en línea, siendo realistas?",
        a: "Una primera versión usable en 3-6 semanas para la mayoría de productos, si las decisiones vuelven en un par de días. El proyecto ejecutivo existe precisamente para convertir ese plazo en un compromiso y no en una estimación.",
      },
      {
        q: "¿Quién escribe el código realmente?",
        a: "Las personas que ves en las llamadas. Somos un equipo pequeño y senior y no subcontratamos la construcción. Conocerás por su nombre a cada persona que trabaje en tu producto.",
      },
      {
        q: "¿Qué pasa con la factura de IA cuando crezcamos?",
        a: "La modelamos por usuario antes de construir y la medimos después, con techos escritos en el código. La mayoría de productos que operamos cuestan céntimos por usuario activo al mes, y durante el proyecto ejecutivo te enseñamos las cuentas con tus números.",
      },
      {
        q: "¿Podemos llevarnos el producto a casa más adelante?",
        a: "Sí, y está diseñado para eso. Stack estándar, cuentas tuyas, todo documentado. El traspaso es un proceso planificado de dos semanas, no una negociación.",
      },
      {
        q: "¿Y si ya tenemos un producto a medias?",
        a: "Pasa a menudo. Empezamos por una auditoría de lo que existe y te decimos con honestidad si es una base o un coste hundido. Nos hemos encontrado los dos casos.",
      },
      {
        q: "¿Firmáis NDA y trabajáis con nuestro equipo legal?",
        a: "Sí. Para nosotros es lo normal, y estamos acostumbrados a pasar por revisiones europeas de protección de datos.",
      },
    ],
    cta: "¿Tienes una idea de producto que merece construirse de verdad?",
    meta: {
      title: "Desarrollo de producto de IA - Plusultra Labs",
      description:
        "Diseñamos, construimos y operamos productos de IA de principio a fin, igual que nuestros propios SaaS. Primera versión en semanas, nivel producción desde el primer día.",
    },
  },

  "ai-integration": {
    cardTitle: "Integración de IA",
    cardBody:
      "IA dentro de las herramientas que tu empresa ya usa. Conforme con la privacidad, con costes que puedes prever, y quien te habla es quien lo construye.",
    title: "IA dentro de tus sistemas. Construida, no aconsejada.",
    lead: "Las grandes consultoras te venden una hoja de ruta. Nosotros te vendemos un sistema que funciona. Integramos modelos de lenguaje en el software que tu empresa ya usa, con arquitectura conforme a la normativa europea y costes previsibles, porque la misma infraestructura de IA la operamos cada día para nuestros productos.",
    specs: [
      { label: "Duración habitual", value: "4–8 semanas" },
      { label: "Piloto", value: "3–5 semanas, precio cerrado" },
      { label: "Desde", value: "~ 8.000 €" },
    ],
    narrative: {
      heading: "Dónde compensa de verdad la IA en una empresa que ya funciona",
      paragraphs: [
        "El otro discurso ya lo has oído. Una gran consultora hace un discovery, produce una evaluación de madurez y una hoja de ruta, y se va. La hoja de ruta no está equivocada. Simplemente no es software, y el lunes por la mañana en tu empresa no cambia nada.",
        "El trabajo que vale, en una empresa mediana, es mucho más estrecho y mucho más concreto. Documentos que llegan en PDF y alguien reescribe a mano en el ERP. Correos de clientes que alguien clasifica a mano tres horas al día. Conocimiento parado en una unidad compartida que nadie consigue buscar. Presupuestos montados a copiar y pegar. Esos son los procesos donde una capa de IA bien hecha quita horas reales, y casi nunca son los de la diapositiva.",
        "Por eso partimos de tus sistemas tal y como están: el CRM que no vas a cambiar, el ERP con quince años de historia dentro, el buzón por el que pasa todo. Ponemos la capa de IA al lado, sobre infraestructura europea, con traza de auditoría y un techo de coste. Y lo demostramos en un solo proceso antes de que nadie firme un despliegue.",
      ],
      pullQuote: "Un piloto que se paga solo, o una respuesta honesta de que no lo hará.",
    },
    points: [
      {
        title: "El código lo escribimos nosotros",
        body: "Quien está en la llamada es quien está en el repositorio. Ningún traspaso a un equipo de entrega que no has visto nunca, ninguna subcontrata en otro país, ningún gestor de cuenta pasándole tus preguntas a otro.",
      },
      {
        title: "Modelos de coste reales",
        body: "Gasto de API, hosting y mantenimiento modelados antes de que te comprometas y medidos después, con los techos escritos en el código. Nadie recibe una factura sorpresa porque un bucle estuvo girando toda la noche.",
      },
      {
        title: "Europa y RGPD por arquitectura",
        body: "Residencia del dato, elección de modelo, retención y traza de auditoría decididos al principio y no parcheados después para el auditor. El tratamiento sensible puede quedarse dentro de la UE, o en tus propios servidores donde la ley lo exija.",
      },
      {
        title: "Se conecta con lo que ya tienes",
        body: "Sistemas comerciales, de operaciones y financieros, buzones, carpetas compartidas, bases de datos. Nos integramos por las interfaces que tus proveedores exponen de verdad, y te decimos claramente cuando un sistema no tiene ninguna.",
      },
      {
        title: "Medido, no supuesto",
        body: "Cada piloto sale con el número que tiene que mover: horas ahorradas, tiempo de respuesta, tasa de error, coste por documento. Si el número no se mueve, te lo decimos y paras.",
      },
      {
        title: "Probado en nuestra propia producción",
        body: "Lectura de documentos, clasificación de solicitudes, conocimiento interno, flujos con agentes. Nuestras operaciones van sobre asistentes de IA todos los días, así que cada patrón que proponemos ya sobrevivió a nuestro propio uso.",
      },
    ],
    pipeline: {
      intro:
        "Cuatro fases, cada una con una decisión al final. El piloto es deliberadamente pequeño y a precio cerrado, porque su función es descubrir barato si merece la pena hacer el resto.",
      stages: [
        {
          title: "Auditoría de sistemas",
          duration: "1-2 semanas",
          basis: "Precio cerrado",
          body: "Mapeamos cómo se mueven de verdad el trabajo y los datos por tu empresa, y después ordenamos los candidatos por valor y no por novedad.",
          outputs: [
            "Mapa de tus sistemas y de por dónde pasan los datos de verdad",
            "Los procesos candidatos, puestos en orden",
            "Modelo de costes y ahorro para cada candidato",
            "La lista honesta de dónde la IA no encaja",
          ],
        },
        {
          title: "Piloto",
          duration: "3-5 semanas",
          basis: "Precio cerrado",
          body: "Un proceso, de principio a fin, sobre tus datos reales. Lo bastante pequeño para caber en el presupuesto de un departamento, lo bastante real para demostrar la tesis.",
          outputs: [
            "Un proceso en línea sobre tus datos reales",
            "El número objetivo medido antes y después",
            "Alojado en la UE, con traza completa y coste con techo",
            "Un sí o un no que puedes defender internamente",
          ],
        },
        {
          title: "Despliegue",
          duration: "6-12 semanas",
          basis: "Cerrado por fase",
          body: "Llevamos lo que el piloto demostró a los procesos de al lado, y dejamos caer lo que desmintió.",
          outputs: [
            "El patrón probado extendido a otros procesos",
            "Integraciones en los sistemas de referencia",
            "Tu equipo formado en el nuevo flujo",
            "Todo lo que el piloto desmintió, descartado",
          ],
        },
        {
          title: "Operación",
          duration: "En curso",
          basis: "Mensual",
          body: "Los modelos cambian cada pocos meses. Mantenemos calidad, coste y disponibilidad donde estaban el día que firmaste.",
          outputs: [
            "Monitorización y control de la calidad de las respuestas",
            "Seguimiento de coste por proceso",
            "Actualización de modelos según se mueven los proveedores",
            "Automatizaciones nuevas a medida que demuestran su valor",
          ],
        },
      ],
      footnote:
        "Puedes parar después de cualquier fase y quedarte con todo lo construido hasta ahí, en tus propias cuentas.",
    },
    deliverables: [
      {
        group: "Integración",
        items: [
          "Conectores hacia tu CRM, ERP, buzón y almacenamiento de archivos",
          "Ingesta de documentos: PDF, escaneos, hojas de cálculo, adjuntos",
          "Búsqueda sobre el conocimiento interno, respetando los permisos",
          "Escritura de vuelta en los sistemas de referencia, no solo otro panel",
          "Ejecuciones programadas y por evento, no copiar y pegar a mano",
        ],
      },
      {
        group: "Ingeniería de IA",
        items: [
          "Selección de modelos y enrutado entre proveedores disponibles en la UE",
          "Conjuntos de evaluación, para que la calidad sea un número y no una opinión",
          "Revisión humana en el flujo donde lo que está en juego lo exige",
          "Barreras, fallbacks y techos de gasto estrictos",
          "Modelos abiertos en tu propia infraestructura cuando los datos no pueden salir",
        ],
      },
      {
        group: "Cumplimiento y operación",
        items: [
          "Decisiones de residencia y retención del dato, documentadas",
          "Traza completa de qué vio y qué hizo el sistema",
          "Control de acceso alineado con los roles que ya tienes",
          "Monitorización, alertas y una persona con nombre a la que llamar",
          "Contrato de encargo de tratamiento y documentación de proveedores",
        ],
      },
    ],
    notDoing: [
      "Evaluaciones de madurez, puntuaciones de preparación y hojas de ruta que no son software.",
      "Arrancar sistemas que funcionan. Nos integramos con tu ERP, no lo sustituimos.",
      "Un chatbot en la web como primer proyecto. Rara vez es ahí donde está el dinero.",
      "Entrenar tus datos dentro de un modelo público. Tus datos siguen siendo tuyos.",
      "Cuotas vagas. Cada fase tiene un alcance, un precio y un número que debe mover.",
    ],
    faq: [
      {
        q: "¿Tenemos que llevarnos los datos a Estados Unidos?",
        a: "No. Elegimos proveedores con residencia del dato en la UE y, para las cargas más delicadas, ejecutamos modelos abiertos sobre infraestructura europea o en tus propios servidores. Es una decisión explícita que se toma durante la auditoría, con las contrapartidas por escrito.",
      },
      {
        q: "¿Cuánto cuesta hacer funcionar la IA?",
        a: "Para la mayoría de procesos de una empresa mediana, de decenas a unos pocos cientos de euros al mes en API, muy por debajo del trabajo que sustituye. Lo modelamos por documento o por petición antes de que te comprometas, y lo medimos en vivo después.",
      },
      {
        q: "¿Y si el piloto falla?",
        a: "Entonces pagaste un precio cerrado pequeño por descubrirlo en cinco semanas en lugar de comprometerte con un despliegue. Para eso está la fase. Ya le hemos dicho a algún cliente que pare.",
      },
      {
        q: "Nuestro equipo de IT es pequeño. ¿Qué tiene que hacer?",
        a: "Darnos accesos y responder preguntas sobre los sistemas. La ingeniería la hacemos nosotros. En el despliegue formamos a las personas que lo van a usar y documentamos lo que tu equipo necesita para sostenerlo.",
      },
      {
        q: "¿Esto va a sustituir personas?",
        a: "En nuestra experiencia quita la parte del trabajo que no quería nadie: reescribir, clasificar, buscar. Diseñamos con una persona revisando el resultado allí donde lo que está en juego es real, y te decimos claramente cuando un proceso sí es automatizable por completo.",
      },
      {
        q: "¿Podéis trabajar con nuestro proveedor de software actual?",
        a: "Sí, y muchas veces no queda otra. Estamos acostumbrados a integrarnos sorteando los límites de la API de un proveedor, y a ser los que se leen bien su documentación.",
      },
    ],
    cta: "¿Quieres ver dónde compensa de verdad la IA en tus sistemas?",
    meta: {
      title: "Integración de IA para empresas medianas - Plusultra Labs",
      description:
        "Metemos IA dentro de los sistemas que ya usas: selección de modelos, arquitectura conforme al RGPD con residencia europea, control de costes, monitorización en producción. Ingenieros, no diapositivas.",
    },
  },

  "custom-platforms": {
    cardTitle: "Plataformas a medida",
    cardBody:
      "Portales, sistemas de gestión, herramientas internas, marketplaces. Plataformas sólidas entregadas en semanas y cuidadas una vez en línea.",
    title: "Plataformas a medida que salen en semanas y aguantan años",
    lead: "Portales de cliente, CRM, sistemas de reservas, marketplaces, herramientas internas. Los construimos como construimos nuestros productos: equipo pequeño y senior, stack moderno, producción desde la primera semana. Y nos quedamos a operarlos.",
    specs: [
      { label: "Duración habitual", value: "3–8 semanas" },
      { label: "Tras el lanzamiento", value: "Operación mensual" },
      { label: "Desde", value: "~ 5.000 €" },
    ],
    narrative: {
      heading: "El hueco entre lo que hace tu software y lo que hace tu empresa",
      paragraphs: [
        "Casi todas las empresas rellenan ese hueco con hojas de cálculo, una unidad compartida y una persona que sabe cómo encaja todo. Funciona hasta que deja de funcionar: hasta que esa persona se va de vacaciones, hasta que la hoja llega a su límite, hasta que un cliente pide algo que la herramienta sencillamente no sabe enseñarle.",
        "El software a medida era la respuesta cara a ese hueco. Ya no lo es. Un stack moderno y estandarizado, más un equipo que usa IA de verdad en su propio trabajo, significa que una plataforma real con cuentas, permisos, integraciones y back office sale en semanas, a un precio que compite con un año de licencias por usuario.",
        "Lo sabemos porque lo hacemos para nosotros. Nuestro motor de plataformas de viajes lleva decenas de sitios distintos desde una sola sala de control, cada uno en su dominio y en sus idiomas. Nuestras operaciones internas van sobre herramientas que construimos. Misma arquitectura, mismo equipo, apuntados a lo que tu empresa tenga que dejar de hacer a mano.",
      ],
      pullQuote: "Un back office de verdad, para que dejes de llamarnos por cada cambio.",
    },
    points: [
      {
        title: "Semanas, honestamente",
        body: "Un alcance habitual sale en 3-6 semanas porque el stack está estandarizado y usamos mucha IA en nuestro propio trabajo. No porque recortemos esquinas que pagas después.",
      },
      {
        title: "Un back office de verdad",
        body: "Cada plataforma lleva un área de administración construida para tu equipo, no un visor de base de datos. Añades usuarios, cambias contenido, ajustas opciones y sacas informes sin abrirnos un ticket.",
      },
      {
        title: "Habla con tus otras herramientas",
        body: "Contabilidad, pagos, calendarios, buzones, el CRM. Una plataforma que no se integra acaba siendo un sitio más donde alguien reescribe la misma información.",
      },
      {
        title: "Preparada para IA de serie",
        body: "La misma arquitectura que usan nuestros productos de IA. Cuando quieras lectura de documentos, redacción o búsqueda sobre tus datos, llegará como una función y no como una reescritura.",
      },
      {
        title: "Pensada para quien vive dentro cada día",
        body: "Interfaces diseñadas alrededor del trabajo real y probadas con el equipo que va a pasar ocho horas al día ahí dentro. La adopción es un problema de diseño mucho antes que de formación.",
      },
      {
        title: "La operamos nosotros",
        body: "Hosting, copias de seguridad, monitorización, actualizaciones de seguridad y pequeñas evoluciones en una sola línea mensual previsible. El código, los datos y las cuentas de infraestructura siguen siendo tuyos todo el tiempo.",
      },
    ],
    pipeline: {
      intro:
        "Las mismas cuatro fases que en todo lo que construimos. Precio cerrado acordado antes de cualquier línea de código, demos cada semana durante, y un acuerdo de operación claro después.",
      stages: [
        {
          title: "Encuadre",
          duration: "1 semana",
          basis: "Gratis",
          body: "Qué tiene que hacer la plataforma, quién vive dentro y a qué sustituye. Incluido si una herramienta ya hecha te serviría mejor.",
          outputs: [
            "Qué debe hacer la plataforma, y para quién",
            "A qué sustituye y con qué se tiene que conectar",
            "Una respuesta honesta: encajamos o no encajamos",
            "Rango de presupuesto y plazos",
          ],
        },
        {
          title: "Proyecto ejecutivo",
          duration: "1 semana",
          basis: "Precio cerrado",
          body: "Pantalla a pantalla, integración a integración, con precio y fecha antes de empezar a construir.",
          outputs: [
            "Alcance pantalla a pantalla",
            "Modelo de datos y lista de integraciones",
            "Precio cerrado y fecha de entrega",
            "Dirección de diseño acordada",
          ],
        },
        {
          title: "Construcción",
          duration: "3-8 semanas",
          basis: "Precio cerrado",
          body: "Tus datos reales entran pronto y tu equipo los ve cada semana, así las sorpresas aparecen en la segunda semana y no en la entrega.",
          outputs: [
            "Demo semanal sobre un entorno en línea",
            "Tus datos reales cargados desde pronto",
            "Área de administración desde la primera semana",
            "Pruebas de aceptación con tu equipo real",
          ],
        },
        {
          title: "Lanzamiento y operación",
          duration: "En curso",
          basis: "Mensual",
          body: "Migración, formación y después una línea mensual previsible que cubre todo lo que la mantiene sana.",
          outputs: [
            "Migración y apoyo en la puesta en marcha",
            "Formación para usuarios y administradores",
            "Hosting, copias, monitorización, actualizaciones",
            "Pequeñas evoluciones cada mes",
          ],
        },
      ],
      footnote:
        "Puedes parar después de cualquier fase y quedarte con todo lo construido hasta ahí, en tus propias cuentas.",
    },
    deliverables: [
      {
        group: "Plataforma",
        items: [
          "Aplicación web, usable en móvil y en ordenador",
          "Cuentas de usuario, roles y permisos",
          "Back office para tu equipo",
          "Informes y exportaciones que tu equipo financiero pueda usar de verdad",
          "Multiidioma donde haga falta",
        ],
      },
      {
        group: "Integraciones",
        items: [
          "Pagos y facturación",
          "Correo y calendario",
          "Contabilidad y sistemas ERP",
          "Importación desde las hojas de cálculo que estás sustituyendo",
          "Una API para que la consuman tus otras herramientas",
        ],
      },
      {
        group: "Cimientos",
        items: [
          "Cuentas de nube y repositorio a tu nombre",
          "Entornos de staging y producción",
          "Copias de seguridad automáticas con restauraciones probadas",
          "Monitorización, registro de errores y alertas",
          "Documentación para administradores y desarrolladores",
        ],
      },
    ],
    notDoing: [
      "Licencias por usuario. Es tuya, y añadir personas no cambia el precio.",
      "Reconstruir algo que ya funciona. Si la respuesta es una herramienta ya hecha, te lo diremos.",
      "Entregar un código sin documentación y desearte suerte.",
      "Servicios de marketing o SEO por encima. Nosotros construimos la plataforma, el crecimiento es cosa tuya o de otro.",
      "Cambios cotizados a posteriori. Los movimientos de alcance se recotizan antes de construirlos.",
    ],
    faq: [
      {
        q: "¿Sale realmente más barato a medida que una suscripción SaaS?",
        a: "A menudo sí, a partir de cierto tamaño de equipo. Veinte licencias de una herramienta de gama media son fácilmente 15.000 € al año, para siempre, sobre la hoja de ruta de otro. Una plataforma construida sobre tu proceso es una inversión única más una línea de operación previsible, y hace exactamente lo que haces tú.",
      },
      {
        q: "¿Y si nuestros requisitos cambian durante la construcción?",
        a: "Está previsto y contemplado. Las demos semanales existen para que los cambios salgan en la segunda semana y no en la entrega. Los cambios pequeños se absorben. Todo lo que mueve el alcance de forma material se recotiza antes de construirse, nunca después.",
      },
      {
        q: "¿De quién es el código?",
        a: "Tuyo, desde el primer commit, en tu propio repositorio. Lo mismo con las cuentas de nube, el dominio y la base de datos.",
      },
      {
        q: "¿Qué pasa si dejamos de trabajar con vosotros?",
        a: "La plataforma sigue funcionando. Todo está en tus cuentas, sobre un stack estándar, y lo documentamos para quien se haga cargo. Preferimos que nos mantengáis porque funciona, no porque irse sea difícil.",
      },
      {
        q: "¿Podéis haceros cargo de una plataforma que construyó otro?",
        a: "Sí, si el código es recuperable. Empezamos con una auditoría y un veredicto por escrito: ampliar, refactorizar o rehacer. Hemos hecho las tres cosas.",
      },
      {
        q: "¿Os ocupáis del RGPD y de la seguridad?",
        a: "Sí. Alojamiento en la UE, control de acceso, cifrado, un procedimiento de copia y restauración probado y un contrato de encargo de tratamiento. Con clientes regulados pasamos su revisión de seguridad junto a ellos.",
      },
    ],
    cta: "¿Necesitas una plataforma sobre la que tu negocio pueda funcionar de verdad?",
    meta: {
      title: "Plataformas a medida y desarrollo SaaS - Plusultra Labs",
      description:
        "Plataformas a medida de nivel producción: portales, CRM, marketplaces, herramientas internas. Entregadas en semanas sobre un stack moderno por un equipo que opera más de diez propias.",
    },
  },
};
