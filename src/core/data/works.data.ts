import type { Work } from "@interfaces/index";

export const works: Work[] = [
  {
    title: "Mordisko Criollo",
    status: "active",
    technologies: ["Astro", "Svelte", "TailwindCSS"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/CatapultSteelBuildings/mordisko-criollo-astrojs.git",
    repoIsPrivate: true,
    url: "https://mordiskocriollo.com/",
    urlIsAvailable: true,
    image: "mordisko-criollo.webp",
  },
  {
    title: "Catapult Steel Buildings",
    status: "active",
    technologies: ["Astro", "Svelte", "TailwindCSS"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/CatapultSteelBuildings/csb-officialWebsite-red-iron-buildings.git",
    repoIsPrivate: true,
    url: "https://catapultsteel.com/",
    urlIsAvailable: true,
    image: "catapult-steel.webp",
  },
  {
    title: "Pricing Program CRM",
    status: "active",
    technologies: ["Angular", "NestJS", "Angular Material", "PostgreSQL"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/CatapultSteelBuildings/mordisko-criollo-astrojs.git",
    repoIsPrivate: true,
    url: "https://mordiskocriollo.com/",
    urlIsAvailable: false,
    image: "pricing-program.webp",
  },
  {
    title: "Steel Buildings Stores",
    status: "active",
    technologies: ["Astro", "Svelte", "TailwindCSS"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/CatapultSteelBuildings/sbs-officialWebsite-astro.git",
    repoIsPrivate: true,
    url: "https://steelbuildingstores.com/",
    urlIsAvailable: true,
    image: "steel-building-stores.webp",
  },
  {
    title: "Direct Metal Buildings",
    status: "active",
    technologies: ["Astro", "Svelte", "TailwindCSS"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/CatapultSteelBuildings/dmb-officialWebsite-astro.git",
    repoIsPrivate: true,
    url: "https://directmetalbuildings.com/",
    urlIsAvailable: true,
    image: "direct-metal-buildings.webp",
  },
  {
    title: "Personal Portfolio",
    status: "active",
    technologies: ["React", "MaterialUI"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/alexcoronell/alexcoronell.github.io.git",
    repoIsPrivate: true,
    url: "https://alexcoronell.github.io/",
    urlIsAvailable: true,
    image: "cv-alexcoronell.webp",
  },
  {
    title: "Catapult Steel Buildings (Old version)",
    status: "inactive",
    technologies: ["Astro", "Svelte", "TailwindCSS"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/CatapultSteelBuildings/csb-officialWebsite-astro.git",
    repoIsPrivate: true,
    url: "https://oldsite.catapultsteel.com/",
    urlIsAvailable: true,
    image: "olsite-catapult-steel.webp",
  },
  {
    title: "Masterisand",
    status: "inactive",
    technologies: ["React", "Bootstrap"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/alexcoronell/masterisand-react.git",
    repoIsPrivate: false,
    url: "https://masterisand-react-oldsite.vercel.app/",
    urlIsAvailable: true,
    image: "masterisand.webp",
  },
  {
    title: "El Maderero",
    status: "inactive",
    technologies: ["React", "Bootstrap"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/alexcoronell/elMaderero.git",
    repoIsPrivate: false,
    url: "https://el-maderero-oldsite.vercel.app/",
    urlIsAvailable: true,
    image: "el-maderero.webp",
  },
  {
    title: "Nettside",
    status: "inactive",
    technologies: ["Angular", "Bootstrap"],
    description: "",
    repoOrigin: "Gitlab",
    repo: "https://gitlab.com/alexcoronell/nettsideangular.git",
    repoIsPrivate: false,
    url: "",
    urlIsAvailable: false,
    image: "nettside.webp",
  },
  {
    title: "Sicoain (Mean stack)",
    status: "inactive",
    technologies: ["Angular", "NodeJS", "Express", "MongoDB", "Bootstrap"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/alexcoronell/SICOAIN_FullStackMean.git",
    repoIsPrivate: false,
    url: "",
    urlIsAvailable: false,
    image: "sicoain-meanstack.webp",
  },
  {
    title: "Sicoain",
    status: "inactive",
    technologies: ["PHP", "Javascript", "JQuery", "MySQL"],
    description: "",
    repoOrigin: "Github",
    repo: "https://github.com/alexcoronell/SICOAIN_PHP_FINAL.git",
    repoIsPrivate: false,
    url: "",
    urlIsAvailable: false,
    image: "sicoain.webp",
  },
];

export const worksEs: Work[] = works.map((work) => ({
  ...work,
  title:
    work.title === "Personal Portfolio" ? "Portafolio Personal" : work.title,
  description:
    work.title === "Mordisko Criollo"
      ? "Sitio web institucional para una empresa de comida criolla, desarrollado con Astro y Svelte para máximo rendimiento y SEO optimizado."
      : work.title === "Catapult Steel Buildings"
        ? "Plataforma principal para empresa de construcción de edificios de acero, con sistema de gestión de productos y cotizaciones."
        : work.title === "Pricing Program CRM"
          ? "Sistema de gestión de relaciones con clientes especializado en programas de precios para la industria de la construcción."
          : work.title === "Steel Buildings Stores"
            ? "E-commerce especializado en la venta de edificios de acero con catálogo interactivo y sistema de pedidos."
            : work.title === "Direct Metal Buildings"
              ? "Sitio web corporativo para empresa de construcción de edificios metálicos con integración de CRM."
              : work.title === "Personal Portfolio"
                ? "Portafolio personal desarrollado en React showcasing proyectos y habilidades profesionales."
                : work.title === "Catapult Steel Buildings (Old version)"
                  ? "Versión anterior del sitio principal, migrada a nueva arquitectura para mejor rendimiento."
                  : work.title === "Masterisand"
                    ? "Plataforma de servicios para empresa de construcción con sistema de gestión de proyectos."
                    : work.title === "El Maderero"
                      ? "Sitio web comercial para empresa de productos de madera con catálogo de productos y e-commerce."
                      : work.title === "Nettside"
                        ? "Aplicación web empresarial desarrollada con Angular y Bootstrap para gestión de negocio."
                        : work.title === "Sicoain (Mean stack)"
                          ? "Aplicación full-stack utilizando MongoDB, Express, Angular y Node.js para gestión empresarial."
                          : work.title === "Sicoain"
                            ? "Sistema web desarrollado con PHP y MySQL para gestión de procesos de negocio."
                            : "",
}));

export const worksEn: Work[] = works.map((work) => ({
  ...work,
  description:
    work.title === "Mordisko Criollo"
      ? "Institutional website for a Creole food company, developed with Astro and Svelte for maximum performance and optimized SEO."
      : work.title === "Catapult Steel Buildings"
        ? "Main platform for steel building construction company with product management and quoting system."
        : work.title === "Pricing Program CRM"
          ? "Customer relationship management system specialized in pricing programs for the construction industry."
          : work.title === "Steel Buildings Stores"
            ? "E-commerce specialized in steel building sales with interactive catalog and ordering system."
            : work.title === "Direct Metal Buildings"
              ? "Corporate website for metal building construction company with CRM integration."
              : work.title === "Personal Portfolio"
                ? "Personal portfolio developed in React showcasing projects and professional skills."
                : work.title === "Catapult Steel Buildings (Old version)"
                  ? "Previous version of the main site, migrated to new architecture for better performance."
                  : work.title === "Masterisand"
                    ? "Services platform for construction company with project management system."
                    : work.title === "El Maderero"
                      ? "Commercial website for wood products company with product catalog and e-commerce."
                      : work.title === "Nettside"
                        ? "Enterprise web application developed with Angular and Bootstrap for business management."
                        : work.title === "Sicoain (Mean stack)"
                          ? "Full-stack application using MongoDB, Express, Angular and Node.js for business management."
                          : work.title === "Sicoain"
                            ? "Web system developed with PHP and MySQL for business process management."
                            : "",
}));
