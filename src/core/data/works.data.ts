import type { Work } from "@interfaces/index";

export const works: Work[] = [
  {
    title: "Proclick Digital",
    status: "active",
    technologies: ["Astro", "Svelte", "TailwindCSS"],
    description: "",
    repoOrigin: "Github",
    repo: "",
    repoIsPrivate: true,
    url: "https://proclick-digital.com/",
    urlIsAvailable: true,
    image: "proclick-digital.webp",
  },
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
    technologies: ["HTML", "Bootstrap", "JavaScript", "JQuery"],
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
    work.title === "Proclick Digital"
      ? "Sitio web corporativo de una agencia de marketing digital, diseñado para presentar sus servicios, casos de éxito y canales de contacto."
      : work.title === "Mordisko Criollo"
        ? "Sitio web institucional para un restaurante de comida criolla, enfocado en la presentación de su oferta gastronómica y el fortalecimiento de su presencia digital."
        : work.title === "Catapult Steel Buildings"
          ? "Sitio web corporativo desarrollado para la promoción y comercialización de edificios de acero."
          : work.title === "Pricing Program CRM"
            ? "Centraliza la gestión de clientes, presupuestos y cálculos de precios para proyectos de construcción metálica, optimizando los procesos comerciales de la organización."
            : work.title === "Steel Buildings Stores"
              ? "Plataforma comercial especializada en la promoción y venta de edificaciones metálicas, diseñada para facilitar la consulta de productos y la captación de clientes potenciales."
              : work.title === "Direct Metal Buildings"
                ? "Sitio web corporativo enfocado en la comercialización de edificios metálicos prefabricados y la generación de oportunidades comerciales."
                : work.title === "Catapult Steel Buildings (Old version)"
                  ? "Versión anterior de la plataforma corporativa de Catapult Steel Buildings, desarrollada como parte de la evolución tecnológica y comercial de la compañía."
                  : work.title === "Masterisand"
                    ? "Sitio web corporativo desarrollado para una empresa de impresión digital y diseño gráfico, con catálogo de servicios y canales de contacto comerciales."
                    : work.title === "El Maderero"
                      ? "Plataforma web orientada a la exhibición y promoción de productos industriales de madera y soluciones para almacenamiento y logística."
                      : work.title === "Nettside"
                        ? "Aplicación web tipo SPA desarrollada para la presentación estructurada de servicios empresariales mediante una experiencia de navegación dinámica."
                        : work.title === "Sicoain (Mean stack)"
                          ? "Sistema de gestión de seguridad y salud en el trabajo diseñado para el registro, control y seguimiento de accidentes e incidentes laborales."
                          : work.title === "Sicoain"
                            ? "Facilita el registro, seguimiento y análisis de accidentes e incidentes laborales mediante una plataforma centralizada de gestión ocupacional."
                            : "",
}));

export const worksEn: Work[] = works.map((work) => ({
  ...work,
  description:
    work.title === "Proclick Digital"
      ? "Corporate website for a digital marketing agency, designed to showcase its services, success stories, and contact channels."
      : work.title === "Mordisko Criollo"
        ? "Institutional website for a traditional cuisine restaurant, focused on presenting its culinary offerings and strengthening its digital presence."
        : work.title === "Catapult Steel Buildings"
          ? "Corporate website developed to promote and market steel buildings."
          : work.title === "Pricing Program CRM"
            ? "Centralizes customer management, budgeting, and pricing calculations for steel construction projects, streamlining the organization's commercial processes."
            : work.title === "Steel Buildings Stores"
              ? "Commercial platform specialized in promoting and selling steel buildings, designed to facilitate product discovery and lead generation."
              : work.title === "Direct Metal Buildings"
                ? "Corporate website focused on marketing prefabricated metal buildings and generating business opportunities."
                : work.title === "Catapult Steel Buildings (Old version)"
                  ? "Previous version of the Catapult Steel Buildings corporate platform, developed as part of the company's technological and commercial evolution."
                  : work.title === "Masterisand"
                    ? "Corporate website developed for a digital printing and graphic design company, featuring a service catalog and commercial contact channels."
                    : work.title === "El Maderero"
                      ? "Web platform focused on showcasing and promoting industrial wood products and storage and logistics solutions."
                      : work.title === "Nettside"
                        ? "Single-page web application developed to present business services through a structured and dynamic user experience."
                        : work.title === "Sicoain (Mean stack)"
                          ? "Occupational health and safety management system designed for recording, monitoring, and tracking workplace accidents and incidents."
                          : work.title === "Sicoain"
                            ? "Facilitates the registration, monitoring, and analysis of workplace accidents and incidents through a centralized occupational management platform."
                            : "",
}));
