import { writable } from "svelte/store";

type status = "init" | "loading" | "success" | "error";

export const contactModalStatus = writable<status>("init");
export const languageStore = writable<"en" | "es">("es");

export const setContactModalStatus = (status: status) => {
  contactModalStatus.set(status);
};

export const setLanguage = (language: "en" | "es") => {
  languageStore.set(language);
};
