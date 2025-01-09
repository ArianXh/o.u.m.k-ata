import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translations using HTTP
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    supportedLngs: ['al', 'mk', 'tr'], // Define supported languages
    fallbackLng: 'al', // Fallback language
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'], // Save detected language in a cookie
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    react: {
      useSuspense: true, // Enable suspense mode
    },
  });

export default i18n;
