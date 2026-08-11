export const profile = {
  name: "Diego Nicolás Diaz",
  shortName: "Diego Diaz",
  role: "Desarrollador Full Stack",
  location: "Paraná, Entre Ríos, Argentina",
  availability: "Disponible para proyectos",
  linkedin: "https://www.linkedin.com/in/diego-nicol%C3%A1s-diaz-966153227/",
  github: "https://github.com/diazdiegok",
  headline:
    "Construyo productos digitales, tableros de datos y soluciones de software para negocios reales.",
  summary:
    "Soy desarrollador full stack nacido y radicado en Paraná. Combino el trabajo diario en un estudio jurídico —bases de datos, soporte y sistemas— con el diseño y desarrollo de sitios, catálogos y dashboards que la gente realmente usa.",
};

export const about = {
  paragraphs: [
    "Me llamo Diego Nicolás Diaz. Vivo en Paraná, Entre Ríos, y me dedico a transformar necesidades de negocio en software claro, rápido y bien presentado.",
    "Desde 2021 formo parte de Geller Abogados: primero en soporte informático —infraestructura, usuarios y operación diaria— y desde 2024 también como desarrollador SQL Server, diseñando consultas, reportes y estructuras de datos para el estudio.",
    "En paralelo formé un portafolio propio: e-commerce con checkout real, sitios institucionales, tableros deportivos con datos en vivo y productos de marca. Me interesa el detalle visual tanto como el backend: si no se entiende, no está terminado.",
  ],
  facts: [
    { label: "Base", value: "Paraná, Entre Ríos" },
    { label: "Enfoque", value: "Full stack · Datos · Producto" },
    { label: "Formación", value: "CoderHouse · Full Stack / Data" },
    { label: "Idiomas", value: "Español · Inglés técnico" },
  ],
};

export const experience = [
  {
    period: "May 2024 — Actualidad",
    title: "Desarrollador SQL Server",
    org: "Geller Abogados",
    place: "Paraná, Entre Ríos",
    points: [
      "Diseño y mantenimiento de bases de datos, consultas y reportes para la operación del estudio.",
      "Modelado de información jurídica y administrativa con foco en integridad y consulta ágil.",
      "Puente entre el área legal y la tecnología: traduzco pedidos del día a día en soluciones concretas.",
    ],
  },
  {
    period: "Mar 2021 — Actualidad",
    title: "Soporte informático",
    org: "Geller Abogados",
    place: "Paraná, Entre Ríos",
    points: [
      "Gestión de infraestructura, puestos de trabajo, redes y software del estudio.",
      "Atención a usuarios, diagnóstico y resolución de incidentes con continuidad operativa.",
      "Acompañamiento en la digitalización de procesos internos.",
    ],
  },
  {
    period: "Formación",
    title: "Desarrollo Full Stack & Data",
    org: "CoderHouse",
    place: "Argentina",
    points: [
      "HTML, CSS, SASS, Bootstrap, JavaScript y React.",
      "Bases de datos relacionales: SQL Server y MySQL.",
      "Proyectos aplicados a producto: catálogos, landings y modelado de datos.",
    ],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    group: "Datos",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Modelado relacional", "Reportes"],
  },
  {
    group: "Producto",
    items: ["UX / UI", "E-commerce", "Dashboards", "GitHub", "Vercel", "GitHub Pages"],
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  featured: boolean;
  category: string;
  stack: string[];
  description: string;
  detail: string;
  live?: string;
  repo: string;
};

export const projects: Project[] = [
  {
    slug: "eternity",
    title: "Eternity Recuerdos",
    client: "Eternity Recuerdos",
    year: "2025",
    featured: true,
    category: "E-commerce",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Mercado Pago"],
    description:
      "Catálogo online con panel de administración, carrito persistente, checkout por WhatsApp e integración opcional con Mercado Pago.",
    detail:
      "Producto completo para un negocio de recuerdos: el cliente navega sin registrarse, el dueño carga precios e imágenes desde /admin, y el pedido se arma automáticamente hacia WhatsApp. Pensado para producción con base de datos, no como landing estática.",
    repo: "https://github.com/diazdiegok/Eternity",
  },
  {
    slug: "leonel",
    title: "Leonel Daniel Aguirre",
    client: "El Tolito · Premier Padel",
    year: "2026",
    featured: true,
    category: "Sitio oficial",
    stack: ["Next.js", "TypeScript", "Tailwind", "Padel API"],
    description:
      "Sitio oficial del jugador de pádel Leonel “El Tolito” Aguirre: biografía, ranking FIP, calendario, sponsors y galería.",
    detail:
      "Web de alto rendimiento visual con datos en vivo del circuito FIP / Premier Padel, recorrido de carrera, pareja y marca de paleta. Publicada en GitHub Pages con build estático.",
    live: "https://diazdiegok.github.io/Leonel_Daniel_Aguirre/",
    repo: "https://github.com/diazdiegok/Leonel_Daniel_Aguirre",
  },
  {
    slug: "padel-fip",
    title: "FIP Analytics",
    client: "Proyecto propio",
    year: "2026",
    featured: true,
    category: "Datos en vivo",
    stack: ["JavaScript", "FIP Rankings", "UI de filtros"],
    description:
      "Tablero del ranking oficial de pádel FIP: masculino y femenino, búsqueda, país y profundidad Top 10 a Top 200.",
    detail:
      "Consulta la fuente oficial del circuito y presenta el ranking con filtros pensados para analistas y aficionados. Una pieza de producto de datos, no una tabla estática.",
    live: "https://diazdiegok.github.io/Padel_FIP/",
    repo: "https://github.com/diazdiegok/Padel_FIP",
  },
  {
    slug: "f1-2026",
    title: "F1 2026",
    client: "Proyecto propio",
    year: "2026",
    featured: true,
    category: "Dashboard",
    stack: ["JavaScript", "Datos de temporada", "Filtros"],
    description:
      "Tablero de la temporada de Fórmula 1: campeonato, grandes premios, escuderías y pilotos con actualización en vivo.",
    detail:
      "Interfaz de operación para seguir la temporada 2026: recortes por carrera, equipo y piloto, más el estado general del campeonato.",
    live: "https://diazdiegok.github.io/F1_2026/",
    repo: "https://github.com/diazdiegok/F1_2026",
  },
  {
    slug: "motogp-2026",
    title: "MotoGP 2026",
    client: "Proyecto propio",
    year: "2026",
    featured: false,
    category: "Dashboard",
    stack: ["JavaScript", "Datos de temporada", "Filtros"],
    description:
      "Tablero gemelo para MotoGP: rondas, equipos y pilotos de la temporada en curso, con la misma lógica de campeonato.",
    detail:
      "Misma familia de producto que F1 2026, adaptada al paddock: filtros por GP, equipo y piloto, y lectura inmediata de la tabla.",
    live: "https://diazdiegok.github.io/MOTOGP_2026/",
    repo: "https://github.com/diazdiegok/MOTOGP_2026",
  },
  {
    slug: "big-four",
    title: "Big Four",
    client: "Proyecto propio",
    year: "2025",
    featured: false,
    category: "Datos históricos",
    stack: ["JavaScript", "Tenis ATP", "Filtros"],
    description:
      "Tablero histórico de Federer, Nadal, Djokovic y Murray: Grand Slams, Masters 1000, superficies y Copa Davis.",
    detail:
      "Una lectura de la era dorada del tenis (2003–2024+) para comparar leyendas por torneo, superficie y jugador, no solo por recuento de títulos.",
    live: "https://diazdiegok.github.io/Big_Four/",
    repo: "https://github.com/diazdiegok/Big_Four",
  },
  {
    slug: "diazdiegokservice",
    title: "DiazDiegok Technology",
    client: "DiazDiegokService",
    year: "2025",
    featured: false,
    category: "E-commerce local",
    stack: ["JavaScript", "Catálogo", "WhatsApp"],
    description:
      "Tienda de tecnología en Paraná: Apple, Samsung y servicio técnico de celulares y notebooks, con catálogo y contacto directo.",
    detail:
      "Marca comercial propia: categorías, productos destacados, diagnóstico gratuito y reparación con garantía. Pensada para conversión local y envíos a todo el país.",
    live: "https://diazdiegok.github.io/diazdiegokservice/",
    repo: "https://github.com/diazdiegok/diazdiegokservice",
  },
  {
    slug: "mates-viajeros",
    title: "Mates Viajeros",
    client: "Mates Viajeros S.A.",
    year: "2024",
    featured: false,
    category: "Marca / Catálogo",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Sitio de mates artesanales, termos y bombillas: identidad argentina, colección y propuesta de envíos a todo el país.",
    detail:
      "Landing de producto con foco en oficio (calabaza, madera, cerámica, alpaca) y una narrativa de viaje: llevar la tradición a cada rincón.",
    live: "https://diazdiegok.github.io/mates_viajeros/",
    repo: "https://github.com/diazdiegok/mates_viajeros",
  },
  {
    slug: "desarrollarte",
    title: "Desarrollarte",
    client: "Desarrollarte",
    year: "2024",
    featured: false,
    category: "Agencia",
    stack: ["HTML", "CSS", "Responsive"],
    description:
      "Sitio de estudio de desarrollo web: diseño a medida, dominio, hosting, SEO y experiencia adaptable a todos los dispositivos.",
    detail:
      "Presentación de servicios de maquetación, estructura y asesoramiento comercial. Yo figuro como full stack del equipo: el sitio es la carta de presentación.",
    live: "https://diazdiegok.github.io/desarrollarte/",
    repo: "https://github.com/diazdiegok/desarrollarte",
  },
  {
    slug: "geller-mysql",
    title: "Geller Abogados — MySQL",
    client: "Geller Abogados · CoderHouse",
    year: "2024",
    featured: false,
    category: "Base de datos",
    stack: ["MySQL", "Modelado", "SQL"],
    description:
      "Proyecto de base de datos para un estudio jurídico: modelado relacional aplicado a la operatoria de un bufete real.",
    detail:
      "Trabajo académico con anclaje profesional: esquema MySQL pensado para la información de Geller Abogados, en el marco de la formación en datos de CoderHouse.",
    repo: "https://github.com/diazdiegok/gellerabogados-mysql",
  },
];

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];
