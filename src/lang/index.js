import { createI18n } from 'vue-i18n'
import textsEN from './texts_EN.js'
import textsFR from './texts_FR.js'

const messages = {
	en: textsEN,
	fr: textsFR
}

const i18n = createI18n({
  locale: 'fr',
  messages
})

export default i18n
