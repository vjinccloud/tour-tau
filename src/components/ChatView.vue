<template>
  <div class="chat-view">
    <div class="chat-view-circle" data-aos="zoom-in">
      <div class="chat-view-circle-content">
        <div class="chat-view-circle-content-title" :class="{ 'chat-view-circle-content-title-en': !isZH }">
          {{ $t('chat.title') }}
        </div>
        <div class="chat-view-circle-content-description" :class="{ 'chat-view-circle-content-description-en': !isZH }">
          <span v-html="$t('chat.description')"></span>
        </div>
      </div>
      <div class="ripple ripple-1"></div>
      <div class="ripple ripple-2"></div>
      <div class="ripple ripple-3"></div>
    </div>
    <div class="chat-view-media">
      <!-- Safari 顯示圖片 -->
      <img
        v-if="isSafari"
        src="@/assets/images/chat_img.webp"
        alt="Chat"
        class="chat-media-video"
      />
      <!-- 非 Safari 顯示影片 -->
      <video
        v-else
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        @timeupdate="handleTimeUpdate"
        class="chat-media-video"
      >
        <source src="@/assets/video/chat_video.webm" type="video/webm">
        您的瀏覽器不支援影片播放。
      </video>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isZH = computed(() => locale.value === 'zh-TW')

const videoRef = ref(null)
const isSafari = ref(false)

// 檢測是否為 Safari 瀏覽器
const detectSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  // 檢測 Safari 但排除 Chrome (因為 Chrome 也會包含 safari 字串)
  return ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android')
}

onMounted(() => {
  isSafari.value = detectSafari()
})

const handleTimeUpdate = () => {
  if (videoRef.value) {
    const video = videoRef.value
    const progress = video.currentTime / video.duration

    // 當播放進度達到97%時重頭播放，確保無縫循環
    if (progress >= 0.97) {
      video.currentTime = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-view {
  background-image: url('@/assets/images/chat-bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 700px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .chat-view-circle {
    position: relative;
    right: 170px;
    .chat-view-circle-content {
      width: 507px;
      height: 507px;
      background: linear-gradient(180deg, #0DC0DE 0%, #6ECCA9 51.44%, #FCDE5B 100%);
      border-radius: 50%;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      .chat-view-circle-content-title {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        line-height: 1.5;
        text-align: center;
        width: 400px;
      }
      .chat-view-circle-content-title-en {
        font-size: 32px;
      }
      .chat-view-circle-content-description {
        font-size: 20px;
        line-height: 1.5;
        color: #fff;
        text-align: center;
      }
      .chat-view-circle-content-description-en {
        font-size: 16px;
      }
    }
    .ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(180deg, #0DC0DE 0%, #6ECCA9 51.44%, #FCDE5B 100%);
      transform: translate(-50%, -50%) scale(0);
      animation: rippleAnimation 3s infinite ease-out;


      &.ripple-1 {
        animation-delay: 0s;
      }

      &.ripple-2 {
        animation-delay: 1s;
      }

      &.ripple-3 {
        animation-delay: 2s;
      }
    }
  }
  .chat-view-media {
    position: absolute;
    top: 36px;
    right: -9vw;

    .chat-media-video {
      width: 57vw;
      object-fit: cover;
    }

    .chat-media-img {
      width: 57vw;
      object-fit: cover;
    }
  }
}

@keyframes rippleAnimation {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0;
  }
}
@media (max-width: 1196px) {
  .chat-view {
    .chat-view-circle {
      right: 110px;
      .chat-view-circle-content {
        width: 400px;
        height: 400px;
      }
    }
    .chat-view-media {
      right: -7vw;
    }
  }
}
@media (max-width: 768px) {
  .chat-view {
    align-items: flex-start;
    height: 711px;
    .chat-view-circle {
      right: 0;
      margin-top: 87px;
      .chat-view-circle-content {
        width: 247px;
        height: 247px;
        .chat-view-circle-content-title {
          font-size: 32px;
          width: 163px;
        }
        .chat-view-circle-content-title-en {
          font-size: 20px;
        }
        .chat-view-circle-content-description {
          font-size: 16px;
          width: 163px;
        }
        .chat-view-circle-content-description-en {
          font-size: 14px;
        }
      }
    }
    .chat-view-media {
      right: calc(50% - 213px);
      bottom: -385px;
      top: auto;

      .chat-media-video,
      .chat-media-img {
        width: 427px
      }
    }
  }
}
</style>
