import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translation/en.json";
import svTranslations from "./translation/sv.json";

const resourses = {
  en: {
    translation: enTranslations,
  },
  sv: {
    translation: svTranslations,
  },
};

i18n.use(initReactI18next).init({
  resourses,
  lng: "en",
  debug: true,
  // fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
