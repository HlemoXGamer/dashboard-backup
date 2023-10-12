import { createI18n } from "vue-i18n";

const messages = Object.fromEntries(
  Object.entries(import.meta.glob("./locales/*.json", { eager: true })).map(
    ([key, value]) => [key.slice(10, -5), value.default],
  ),
);

if(!localStorage.getItem("currentLanguage")){
  localStorage.setItem("currentLanguage", "en");
}

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('currentLanguage'),
  fallbackLocale: localStorage.getItem('currentLanguage') ?? "en",
  messages,
});
