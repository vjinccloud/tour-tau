import { createI18n } from 'vue-i18n'
import zhTW from './locales/zh-TW.js'
import en from './locales/en.js'

const messages = {
  'zh-TW': zhTW,
  'en': en
}

// 從 localStorage 讀取保存的語言設置，默認為中文
const getStoredLocale = () => {
  const stored = localStorage.getItem('locale')
  return stored && messages[stored] ? stored : 'zh-TW'
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getStoredLocale(), // 使用保存的語言或默認語言
  fallbackLocale: 'zh-TW', // 備用語言
  messages
})

export default i18n
