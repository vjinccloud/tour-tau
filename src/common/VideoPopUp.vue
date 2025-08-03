<template>
  <Transition name="fade" appear>
    <div v-if="visible" class="video-pop-up" @click="handleBackdropClick">
      <Transition name="scale" appear>
        <div class="video-pop-up-container" @click.stop>
          <div class="video-pop-up-title">{{ $t('videoPopup.title') }}</div>
          <button class="close-btn" @click="close">✕</button>
          <div class="swiper-container">
            <div class="swiper-button-prev">
              <img src="@/assets/images/arrow_left.svg" alt="arrow-left">
            </div>
            <div class="swiper-button-next">
              <img src="@/assets/images/arrow_right.svg" alt="arrow-right">
            </div>
            <swiper
              :modules="modules"
              :loop="true"
              :pagination="false"
              :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              }"
              @slideChange="handleSlideChange"
              @swiper="setSwiperInstance"
              class="video-swiper"
            >
              <swiper-slide class="slide-item" v-for="(item, index) in slides" :key="index">
                <iframe
                  :ref="el => setIframeRef(el, index)"
                  :src="getVideoSrc(item.video)"
                  height="100%"
                  width="100%"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Autoplay, FreeMode, Navigation } from 'swiper/modules'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// 引入模塊
const modules = [Mousewheel, Autoplay, FreeMode, Navigation]

const slides = [
  {
    video: 'https://youtube.com/embed/OSFokZw49oQ?si=Dyi6L0PCG_p4vfJT'
  },
  {
    video: 'https://youtube.com/embed/cC5j7f5dLh0?si=I53FF-vs_wzeTJW-'
  },
  {
    video: 'https://youtube.com/embed/jUFyZL1vVjo?si=WmbqxFVTKV7bcjXU'
  },
  {
    video: 'https://youtube.com/embed/VG6yAZ4Uvz4?si=WLbCM6d47cHdRqRb'
  },
  {
    video: 'https://youtube.com/embed/SR9HjJm_YH4?si=1HgzUuV4Tsrbqirq'
  }
]

const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)
const swiperInstance = ref(null)
const iframeRefs = ref([])
const currentSlideIndex = ref(0)

// 設置 iframe 引用
const setIframeRef = (el, index) => {
  if (el) {
    iframeRefs.value[index] = el
  }
}

// 設置 Swiper 實例
const setSwiperInstance = (swiper) => {
  swiperInstance.value = swiper
}

// 獲取帶有 enablejsapi 參數的視頻 URL
const getVideoSrc = (originalSrc) => {
  const url = new URL(originalSrc)
  url.searchParams.set('enablejsapi', '1')
  return url.toString()
}

// 暫停指定 iframe 中的視頻
const pauseVideo = (iframe) => {
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    } catch (error) {
      console.log('無法暫停視頻:', error)
    }
  }
}

// 暫停所有視頻
const pauseAllVideos = () => {
  iframeRefs.value.forEach((iframe) => {
    if (iframe) {
      pauseVideo(iframe)
    }
  })
}

// 處理 slide 切換
const handleSlideChange = (swiper) => {
  const newIndex = swiper.activeIndex

  // 暫停之前播放的視頻
  if (currentSlideIndex.value !== newIndex) {
    const previousIframe = iframeRefs.value[currentSlideIndex.value]
    if (previousIframe) {
      pauseVideo(previousIframe)
    }
  }

  currentSlideIndex.value = newIndex
}

const close = () => {
  // 關閉時暫停所有視頻
  pauseAllVideos()
  visible.value = false
  emit('update:modelValue', false)
}

const handleBackdropClick = () => {
  close()
}

// 監聽外部傳入的 modelValue 變化
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
  if (!newValue) {
    // 當彈窗關閉時暫停所有視頻
    pauseAllVideos()
  }
}, { immediate: true })

// 當組件掛載時確保 YouTube API 可用
onMounted(() => {
  // 確保 YouTube iframe API 已加載
  if (!window.YT) {
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(script)
  }
})
</script>
<style lang="scss" scoped>
$primary-color: #353535;

// 背景淡入淡出動畫
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

// 彈窗縮放動畫
.scale-enter-active, .scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.video-pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  .video-pop-up-container {
    position: relative;
    width: calc(100% - 48px);
    max-width: 886px;
    height: calc(100vh - 200px);
    background-color: #fff;
    border-radius: 12px;
    padding: 26px 52px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 27px;
    overflow-y: auto;
    margin: 100px 0;
    box-sizing: border-box;

    .close-btn {
      position: absolute;
      top: 36px;
      right: 49px;
      background: none;
      border: none;
      font-size: 30px;
      color: $primary-color;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .video-pop-up-title {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.5;
      color: $primary-color;
      text-align: center;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      flex: 1;
      position: relative;
    }
    .video-swiper {
      width: 100%;
      height: 100%;
      flex: 1;
      .slide-item {
        width: 100%;
        background-color: #202020;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .swiper-button-prev, .swiper-button-next {
      &::after {
        content: '';
      }
      opacity: 1 !important;
      cursor: pointer !important;
      z-index: 1000;
      width: 48px;
      height: 48px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 10px 10px 0px #0000000D;

      img {
        width: 32px;
        height: 32px;
      }
    }
    .swiper-button-prev {
      left: -24px;
    }
    .swiper-button-next {
      right: -24px;
    }
  }
}
@media (max-width: 768px) {
  .video-pop-up {
    .video-pop-up-container {
      width: calc(100% - 32px);
      padding: 32px 30px;
      gap: 24px;
      .close-btn {
        top: 38px;
        right: 30px;
        width: 24px;
        height: 24px;
        font-size: 24px;
      }
      .video-pop-up-title {
        font-size: 24px;
      }

      .swiper-button-prev, .swiper-button-next {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
