export const profile = {
  name: "Diego Nicolás Diaz",
  shortName: "Diego Diaz",
  role: "Desarrollador Full Stack",
  location: "Paraná, Entre Ríos, Argentina",
  availability: "Disponible para nuevos desafíos",
  linkedin: "https://www.linkedin.com/in/diego-nicol%C3%A1s-diaz-966153227/",
  github: "https://github.com/diazdiegok",
  headline:
    "Especializado en desarrollo web, SQL Server y JavaScript. Diseño y mantengo aplicaciones, sitios y sistemas de información para entornos corporativos y comerciales.",
};

export const about = {
  heading: "Perfil profesional",
  paragraphs: [
    "Soy Diego Nicolás Diaz, desarrollador full stack radicado en Paraná, Entre Ríos. Combino el desarrollo de aplicaciones web con la administración de bases de datos y el soporte de sistemas en un entorno profesional.",
    "Desde 2021 integro el área de sistemas de Geller Abogados. Allí brindo asistencia técnica a la operación del estudio y, desde 2024, desarrollo procedimientos y funciones en SQL Server para el procesamiento de datos provenientes de entidades financieras, incluyendo archivos en Excel y texto.",
    "En paralelo desarrollo proyectos propios: sitios institucionales, catálogos comerciales y tableros de información. Me formé en desarrollo full stack y bases de datos en CoderHouse.",
  ],
  facts: [
    { label: "Ubicación", value: "Paraná, Entre Ríos" },
    { label: "Especialidad", value: "Web y bases de datos" },
    { label: "Formación", value: "CoderHouse" },
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
      "Desarrollo de procedimientos y funciones en SQL Server para el procesamiento de datos de entidades financieras.",
      "Normalización y carga de archivos en distintos formatos (Excel, texto) para el análisis diario de carteras.",
      "Consultas, reportes y estructuras de datos para la operación del estudio.",
    ],
  },
  {
    period: "Mar 2021 — Actualidad",
    title: "Técnico de asistencia para TI",
    org: "Geller Abogados",
    place: "Paraná, Entre Ríos",
    points: [
      "Soporte técnico del área de sistemas: infraestructura, puestos de trabajo y software del estudio.",
      "Diagnóstico y resolución de incidentes para garantizar la continuidad operativa.",
      "Acompañamiento en la digitalización de procesos internos.",
    ],
  },
  {
    period: "Formación",
    title: "Desarrollo Full Stack y bases de datos",
    org: "CoderHouse",
    place: "Argentina",
    points: [
      "HTML, CSS, SASS, Bootstrap, JavaScript y React.",
      "Bases de datos relacionales: SQL Server y MySQL.",
      "Proyectos aplicados: catálogos, sitios institucionales y modelado de datos.",
    ],
  },
];

export const skills = [
  {
    group: "Desarrollo",
    items: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    group: "Bases de datos",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Modelado relacional"],
  },
  {
    group: "Herramientas",
    items: ["Git", "GitHub", "Vercel", "GitHub Pages"],
  },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  stack: string[];
  description: string;
  live?: string;
  repo: string;
  preview: string;
};

export const projects: Project[] = [
  {
    slug: "eternity",
    title: "Eternity Recuerdos",
    year: "2025",
    category: "E-commerce",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Mercado Pago"],
    description:
      "Catálogo online con panel de administración, carrito y checkout por WhatsApp, con integración opcional a Mercado Pago.",
    repo: "https://github.com/diazdiegok/Eternity",
    preview: "/projects/eternity.svg",
  },
  {
    slug: "leonel",
    title: "Leonel Daniel Aguirre",
    year: "2026",
    category: "Sitio oficial",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    description:
      "Sitio oficial del jugador de pádel Premier Padel: biografía, ranking FIP, calendario, sponsors y galería.",
    live: "https://diazdiegok.github.io/Leonel_Daniel_Aguirre/",
    repo: "https://github.com/diazdiegok/Leonel_Daniel_Aguirre",
    preview: "/projects/leonel.png",
  },
  {
    slug: "padel-fip",
    title: "FIP Analytics",
    year: "2026",
    category: "Tablero de rankings",
    stack: ["JavaScript", "FIP Rankings"],
    description:
      "Consulta del ranking oficial de pádel FIP, con filtros por categoría, país y profundidad del listado.",
    live: "https://diazdiegok.github.io/Padel_FIP/",
    repo: "https://github.com/diazdiegok/Padel_FIP",
    preview: "/projects/padel-fip.png",
  },
  {
    slug: "f1-2026",
    title: "F1 2026",
    year: "2026",
    category: "Tablero de temporada",
    stack: ["JavaScript"],
    description:
      "Seguimiento de la temporada de Fórmula 1: campeonato, grandes premios, escuderías y pilotos.",
    live: "https://diazdiegok.github.io/F1_2026/",
    repo: "https://github.com/diazdiegok/F1_2026",
    preview: "/projects/f1-2026.png",
  },
  {
    slug: "motogp-2026",
    title: "MotoGP 2026",
    year: "2026",
    category: "Tablero de temporada",
    stack: ["JavaScript"],
    description:
      "Tablero de la temporada de MotoGP, con filtros por gran premio, equipo y piloto.",
    live: "https://diazdiegok.github.io/MOTOGP_2026/",
    repo: "https://github.com/diazdiegok/MOTOGP_2026",
    preview: "/projects/motogp-2026.png",
  },
  {
    slug: "big-four",
    title: "Big Four",
    year: "2025",
    category: "Tablero histórico",
    stack: ["JavaScript"],
    description:
      "Comparativa histórica de Federer, Nadal, Djokovic y Murray por Grand Slam, Masters 1000 y superficie.",
    live: "https://diazdiegok.github.io/Big_Four/",
    repo: "https://github.com/diazdiegok/Big_Four",
    preview: "/projects/big-four.png",
  },
  {
    slug: "diazdiegokservice",
    title: "DiazDiegok Technology",
    year: "2025",
    category: "E-commerce",
    stack: ["JavaScript", "WhatsApp"],
    description:
      "Tienda de tecnología en Paraná, con catálogo, servicio técnico y contacto comercial.",
    live: "https://diazdiegok.github.io/diazdiegokservice/",
    repo: "https://github.com/diazdiegok/diazdiegokservice",
    preview: "/projects/diazdiegokservice.svg",
  },
  {
    slug: "mates-viajeros",
    title: "Mates Viajeros",
    year: "2024",
    category: "Catálogo",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Sitio de mates artesanales, termos y bombillas, con identidad de marca y propuesta de envíos a todo el país.",
    live: "https://diazdiegok.github.io/mates_viajeros/",
    repo: "https://github.com/diazdiegok/mates_viajeros",
    preview: "/projects/mates-viajeros.png",
  },
  {
    slug: "desarrollarte",
    title: "Desarrollarte",
    year: "2024",
    category: "Sitio institucional",
    stack: ["HTML", "CSS"],
    description:
      "Presentación de servicios de desarrollo web: diseño a medida, hosting, SEO y sitios adaptables a todos los dispositivos.",
    live: "https://diazdiegok.github.io/desarrollarte/",
    repo: "https://github.com/diazdiegok/desarrollarte",
    preview: "/projects/desarrollarte.png",
  },
  {
    slug: "geller-mysql",
    title: "Geller Abogados — MySQL",
    year: "2024",
    category: "Base de datos",
    stack: ["MySQL", "SQL"],
    description:
      "Modelado relacional de una base de datos para la operatoria de un estudio jurídico, desarrollado en CoderHouse.",
    repo: "https://github.com/diazdiegok/gellerabogados-mysql",
    preview: "/projects/geller-mysql.svg",
  },
];

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];
