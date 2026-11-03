import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import plTranslation from './locales/pl/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  pl: { translation: plTranslation },
  en: { translation: enTranslation },
};

const isBrowser = typeof window !== 'undefined';

if (!i18n.isInitialized) {
  const instance = i18n.use(initReactI18next);

  if (isBrowser) {
    instance.use(LanguageDetector);
  }

  instance.init({
    // On the server always render Polish so HTML has real content for crawlers.
    lng: isBrowser ? undefined : 'pl',
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
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });
}

export default i18n;
