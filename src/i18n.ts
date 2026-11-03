import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import plTranslation from './locales/pl/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  pl: { translation: plTranslation },
  en: { translation: enTranslation },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    // Always start with PL so SSR HTML matches the first client render.
    // Language is switched after mount in Header (from localStorage).
    lng: 'pl',
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en'],
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
