import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'Hello world',
    },
  },
  zh: {
    message: {
      hello: '你好，世界',
    },
  },
}

const i18n = createI18n({
  locale: 'en', // 默认语言
  messages,
})

export default i18n
