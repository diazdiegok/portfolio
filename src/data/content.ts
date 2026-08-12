export const profile = {
  name: "Diego Nicolás Diaz",
  shortName: "Diego Diaz",
  role: "Desarrollador Full Stack",
  location: "Paraná, Entre Ríos, Argentina",
  email: "diazdiegognicok@gmail.com",
  portfolio: "https://diegodiaz.vercel.app",
  cv: "/cv.pdf",
  linkedin: "https://www.linkedin.com/in/diego-nicol%C3%A1s-diaz-966153227/",
  github: "https://github.com/diazdiegok",
  headline:
    "Desarrollo aplicaciones web, sistemas de bases de datos y herramientas con Python e IA para entornos corporativos.",
};

export const about = {
  heading: "Sobre mí",
  paragraphs: [
    "Soy Diego Nicolás Diaz, desarrollador full stack de Paraná, Entre Ríos. Llevo más de 10 años en informática y soporte; en los últimos años me especialicé en desarrollo web, bases de datos y automatización con Python e IA en entorno corporativo.",
    "En Geller Abogados trabajo el área de sistemas de punta a punta. Desarrollo procedimientos en SQL Server para el procesamiento de datos financieros, aplicativos de optimización integrados con IA y automatizaciones en Python. También doy soporte de sistemas para que la operación no se detenga.",
    "En paralelo desarrollo productos propios: e-commerce con checkout real, sitios oficiales y tableros de información en vivo. Me interesa que se vea bien, que sea claro y que funcione. Si no aporta, no está terminado.",
    "Formación en Tecnicatura en Programación (UTN), Full Stack y bases de datos (CoderHouse), y Data Analytics (CoderHouse). Combino el criterio de un perfil de sistemas con la capacidad de salir a producir interfaces, APIs y soluciones de datos.",
  ],
  education: [
    "Tecnicatura en Programación — UTN",
    "Desarrollador Full Stack — CoderHouse",
    "Bases de datos SQL / MySQL — CoderHouse",
    "Data Analytics — CoderHouse",
  ],
};

export const experience = [
  {
    period: "2024 — Actualidad",
    title: "Desarrollador SQL Server, Python e IA",
    org: "Geller Abogados",
    place: "Paraná, Entre Ríos",
    points: [
      "Procedimientos y funciones en SQL Server para el procesamiento diario de datos de entidades financieras.",
      "Automatizaciones en Python que reemplazan cargas manuales recurrentes sobre archivos Excel y TXT.",
      "Aplicativos internos de optimización de procesos integrados con IA, usados por el área de sistemas.",
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
      { name: "SQL / T-SQL" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "SASS" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Responsive UI" },
    ],
  },
  {
    group: "Datos",
    items: [
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Modelado relacional" },
      { name: "ETL / Excel / TXT" },
      { name: "Power BI" },
      { name: "Tableau" },
    ],
  },
  {
    group: "IA y automatización",
    items: [
      { name: "IA aplicada" },
      { name: "Automatización de procesos" },
      { name: "Scripts de optimización" },
    ],
  },
  {
    group: "Sistemas",
    items: [
      { name: "Windows" },
      { name: "Linux" },
      { name: "Docker" },
      { name: "Redes / TCP-IP" },
      { name: "PowerShell" },
      { name: "Bash" },
    ],
  },
  {
    group: "Herramientas",
    items: [
      { name: "Git / GitHub" },
      { name: "WordPress" },
      { name: "Vercel" },
      { name: "GitHub Pages" },
      { name: "REST APIs" },
      { name: "Render" },
      { name: "SSH / servicios" },
    ],
  },
];

export type ProjectLink = {
  title: string;
  live: string;
  repo: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  stack: string[];
  description: string;
  live?: string;
  repo?: string;
  preview: string;
  note?: string;
  links?: ProjectLink[];
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
    slug: "geller-mysql",
    title: "Geller Abogados — MySQL",
    year: "2024",
    category: "Base de datos",
    stack: ["MySQL", "SQL"],
    description:
      "Modelo relacional de testing con tablas, claves foráneas y consultas SQL. Proyecto interno del estudio, sin demo pública por confidencialidad.",
    repo: "https://github.com/diazdiegok/gellerabogados-mysql",
    preview: "/projects/geller-mysql.png",
    note: "Proyecto interno · solo repo",
  },
  {
    slug: "dashboards-deportivos",
    title: "Dashboards deportivos",
    year: "2025 — 2026",
    category: "Dashboard",
    stack: ["JavaScript", "APIs", "Datos en vivo"],
    description:
      "Colección de tableros con datos en vivo: consumo de APIs, filtros, rankings y visualización clara de temporadas deportivas.",
    preview: "/projects/padel-fip.png",
    links: [
      {
        title: "FIP Analytics",
        live: "https://diazdiegok.github.io/Padel_FIP/",
        repo: "https://github.com/diazdiegok/Padel_FIP",
      },
      {
        title: "F1 2026",
        live: "https://diazdiegok.github.io/F1_2026/",
        repo: "https://github.com/diazdiegok/F1_2026",
      },
      {
        title: "MotoGP 2026",
        live: "https://diazdiegok.github.io/MOTOGP_2026/",
        repo: "https://github.com/diazdiegok/MOTOGP_2026",
      },
      {
        title: "Big Four",
        live: "https://diazdiegok.github.io/Big_Four/",
        repo: "https://github.com/diazdiegok/Big_Four",
      },
    ],
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
];

export const nav = [
  { id: "inicio", label: "inicio" },
  { id: "sobre-mi", label: "sobre-mi" },
  { id: "skills", label: "skills" },
  { id: "experiencia", label: "experiencia" },
  { id: "proyectos", label: "proyectos" },
  { id: "contacto", label: "contacto" },
];
