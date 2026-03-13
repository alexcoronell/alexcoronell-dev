import { personalData, acercaDeMi, aboutMe } from "@data/index";

export const languages = {
  es: "Spanish",
  en: "English",
};

export const defaultLang = "es";

export type NavKey =
  | "nav.about"
  | "nav.skills"
  | "nav.learning"
  | "nav.works"
  | "nav.experiences"
  | "nav.contact";

export const uiMenu = {
  es: {
    "nav.about": "acerca",
    "nav.skills": "skills",
    "nav.learning": "aprendiendo",
    "nav.works": "portafolio",
    "nav.experiences": "experiencia",
    "nav.contact": "contacto",
  },
  en: {
    "nav.about": "about",
    "nav.skills": "skills",
    "nav.learning": "learning",
    "nav.works": "works",
    "nav.experiences": "experiences",
    "nav.contact": "contact",
  },
};

export const ui = {
  es: {
    nav: uiMenu.es,
    hero: {
      subtitle: "Hola, mi nombre es",
      description:
        "Desarrollador Full Stack con enfoque en frontend y más de 5 años de experiencia desarrollando aplicaciones web escalables y de alto rendimiento con Angular, Astro, React, Svelte y Next.js, complementado con experiencia en backend utilizando Node.js y NestJS.",
      cta: "Ver mi trabajo",
    },
    about: {
      title: acercaDeMi.title,
      content: acercaDeMi.content,
    },
    skills: "Habilidades",
    resumeName: "Alexander-Coronell-Hoja-de-Vida.pdf",
    resumeShortName: "Hoja de Vida",
    resumeAriaLabel: "Descargar mi Hoja de Vida",
    footer: `© ${new Date().getFullYear()} - Desarrollado por ${personalData.shortName}.`,
  },
  en: {
    nav: uiMenu.en,
    hero: {
      subtitle: "Hi, my name is",
      description:
        "Frontend-focused Full Stack Developer with 5+ years building scalable, high-performance web applications using Angular, Astro, React, Svelte, and Next.js, with backend expertise in Node.js and NestJS.",
      cta: "Know my work",
    },
    about: {
      title: aboutMe.title,
      content: aboutMe.content,
    },
    skills: "Skills",
    resumeName: "Alexander-Coronell-CV-Resume.pdf",
    resumeShortName: "Resume",
    resumeAriaLabel: "Download my Resume",
    footer: `© ${new Date().getFullYear()} - Built by ${personalData.shortName}.`,
  },
};
