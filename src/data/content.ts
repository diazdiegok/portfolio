export const profile = {
  name: "Diego Nicolás Diaz",
  shortName: "Diego Diaz",
  role: "Desarrollador Full Stack",
  location: "Paraná, Entre Ríos, Argentina",
  email: "diazdiegognicok@gmail.com",
  portfolio: "https://diegodiaz.vercel.app",
  linkedin: "https://www.linkedin.com/in/diego-nicol%C3%A1s-diaz-966153227/",
  github: "https://github.com/diazdiegok",
  headline:
    "Desarrollo aplicaciones web, sistemas de bases de datos y herramientas con Python e IA para entornos corporativos.",
};

export const about = {
  heading: "Sobre mí",
  paragraphs: [
    "Soy Diego Nicolás Diaz, desarrollador full stack de Paraná, Entre Ríos. Diseño y construyo software que resuelve problemas reales: sitios, sistemas, bases de datos y herramientas internas que el equipo usa todos los días.",
    "En Geller Abogados trabajo el área de sistemas de punta a punta. Desarrollo procedimientos en SQL Server para el procesamiento de datos financieros, aplicativos de optimización integrados con IA y automatizaciones en Python. También doy soporte técnico para que la operación no se detenga.",
    "En paralelo desarrollo productos propios: e-commerce con checkout real, sitios oficiales y tableros de información en vivo. Me interesa que se vea bien, que sea claro y que funcione. Si no aporta, no está terminado.",
    "Formación en Tecnicatura en Programación (UTN) y Full Stack / bases de datos (CoderHouse). Combino el criterio de un perfil de sistemas con la capacidad de salir a producir interfaces, APIs y soluciones de datos.",
  ],
  education: [
    "Tecnicatura en Programación — UTN",
    "Full Stack y bases de datos — CoderHouse",
  ],
};

export const experience = [
  {
    period: "2024 — Actualidad",
    title: "Desarrollador SQL Server, Python e IA",
    org: "Geller Abogados",
    place: "Paraná, Entre Ríos",
    points: [
      "Procedimientos y funciones en SQL Server para el procesamiento de datos de entidades financieras.",
      "Desarrollo de aplicativos internos de optimización de procesos, integrados con IA.",
      "Herramientas en Python para automatizar cargas, conciliación y análisis de información operativa.",
      "Scripts y tableros para reducir tiempos de trabajo sobre archivos Excel y TXT.",
      "Consultas, reportes y modelado de datos para la operación del estudio.",
    ],
  },
  {
    period: "2021 — Actualidad",
    title: "Soporte de sistemas",
    org: "Geller Abogados",
    place: "Paraná, Entre Ríos",
    points: [
      "Administración de infraestructura Windows, puestos de trabajo, redes y software.",
      "Soporte de entornos Linux y servicios internos para continuidad operativa.",
      "Resolución de incidentes y mantenimiento de la operación del área de sistemas.",
    ],
  },
];

export const skills = [
  {
    group: "Lenguajes",
    items: [
      { name: "SQL / T-SQL", level: "Avanzado" },
      { name: "Python", level: "Intermedio" },
      { name: "JavaScript", level: "Intermedio" },
      { name: "TypeScript", level: "Intermedio" },
      { name: "HTML5", level: "Avanzado" },
      { name: "CSS3", level: "Avanzado" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", level: "Intermedio" },
      { name: "Next.js", level: "Intermedio" },
      { name: "SASS", level: "Intermedio" },
      { name: "Bootstrap", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Intermedio" },
      { name: "Responsive UI", level: "Avanzado" },
    ],
  },
  {
    group: "Datos",
    items: [
      { name: "SQL Server", level: "Avanzado" },
      { name: "MySQL", level: "Avanzado" },
      { name: "PostgreSQL", level: "Intermedio" },
      { name: "Prisma", level: "Intermedio" },
      { name: "Modelado relacional", level: "Avanzado" },
      { name: "ETL / Excel / TXT", level: "Avanzado" },
    ],
  },
  {
    group: "IA y automatización",
    items: [
      { name: "Python", level: "Intermedio" },
      { name: "IA aplicada", level: "Intermedio" },
      { name: "Automatización de procesos", level: "Intermedio" },
      { name: "Scripts de optimización", level: "Intermedio" },
    ],
  },
  {
    group: "Sistemas",
    items: [
      { name: "Windows", level: "Avanzado" },
      { name: "Linux", level: "Intermedio" },
      { name: "Docker", level: "Básico" },
      { name: "Redes / TCP-IP", level: "Intermedio" },
      { name: "PowerShell", level: "Intermedio" },
      { name: "Bash", level: "Básico" },
    ],
  },
  {
    group: "Herramientas",
    items: [
      { name: "Git / GitHub", level: "Intermedio" },
      { name: "Vercel", level: "Intermedio" },
      { name: "GitHub Pages", level: "Intermedio" },
      { name: "REST APIs", level: "Intermedio" },
      { name: "Render", level: "Básico" },
      { name: "SSH / servicios", level: "Intermedio" },
    ],
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
    live: "https://eternity-i5n2.onrender.com/",
    repo: "https://github.com/diazdiegok/Eternity",
    preview: "/projects/eternity.png",
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
    category: "Dashboard",
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
    category: "Dashboard",
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
    category: "Dashboard",
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
    category: "Dashboard",
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
    stack: ["JavaScript"],
    description:
      "Tienda de tecnología en Paraná, con catálogo, servicio técnico y contacto comercial.",
    live: "https://diazdiegok.github.io/diazdiegokservice/",
    repo: "https://github.com/diazdiegok/diazdiegokservice",
    preview: "/projects/diazdiegokservice.png",
  },
  {
    slug: "mates-viajeros",
    title: "Mates Viajeros",
    year: "2024",
    category: "Catálogo",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Sitio de mates artesanales, termos y bombillas, con catálogo y envíos a todo el país.",
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
      "Sitio de servicios de desarrollo web: diseño a medida, hosting y sitios adaptables.",
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
      "Base de datos de testing: modelo relacional, tablas, claves foráneas y consultas SQL de prueba.",
    repo: "https://github.com/diazdiegok/gellerabogados-mysql",
    preview: "/projects/geller-mysql.png",
  },
];

export const nav = [
  { id: "inicio", label: "inicio" },
  { id: "sobre-mi", label: "sobre-mi" },
  { id: "skills", label: "skills" },
  { id: "experiencia", label: "experiencia" },
  { id: "proyectos", label: "proyectos" },
  { id: "contacto", label: "contacto" },
];
