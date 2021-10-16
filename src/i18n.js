import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './assets/locales/en.json'
import translationFI from './assets/locales/fi.json'
import translationSE from './assets/locales/se.json'

const resources = {
  en: {
    translation: translationEN
  },
  fi: {
    translation: translationFI
  },
  se: {
    translation: translationSE
  }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false
  }
})

export default i18n
