import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

// 引入 Vant3
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入 Swiper 樣式
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 引入 AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// 引入 i18n
import i18n from './i18n'

const app = createApp(App)

// 註冊 Vant3
app.use(Vant)

// 註冊 i18n
app.use(i18n)

app.mount('#app')

// 初始化 AOS
AOS.init({
  // offset: 100, // 元素距離視口底部多少 px 觸發動畫
  delay: 0,
  duration: 800,
  easing: 'ease-in-out',
  once: false, // 僅觸發一次
  mirror: false, // 向上滾動時不重播動畫
  anchorPlacement: 'top-bottom', // 控制動畫觸發位置
})
