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
    resumeName: "Alexander-Coronell-Hoja-de-Vida.pdf",
    resumeShortName: "Hoja de Vida",
    resumeAriaLabel: "Descargar mi Hoja de Vida",
  },
  en: {
    nav: uiMenu.en,
    resumeName: "Alexander-Coronell-CV-Resume.pdf",
    resumeShortName: "Resume",
    resumeAriaLabel: "Download my Resume",
  },
};
