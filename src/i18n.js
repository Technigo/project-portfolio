import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTrans from "./translations/en.json";
import seTrans from "./translations/se.json";

const resourses = {
  en: {
    translation: enTrans,
  },
  se: {
    translation: seTrans,
  },
};

i18n.use(initReactI18next).init({
  resourses,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
