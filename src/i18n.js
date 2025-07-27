import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import plTranslation from './locales/pl/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en'],
    debug: false,
    resources: {
      pl: {
        translation: plTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
