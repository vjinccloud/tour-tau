<template>
  <div class="banner-view">
    <video src="@/assets/video/banner_video.mp4" autoplay loop :muted="isMuted"></video>
    <div class="banner-view-content">
      <div class="banner-view-content-container">
      <div class="banner-view-content-subtitle" data-aos="fade-up">
        {{ $t('banner.subtitle') }}
      </div>
      <div class="banner-view-content-title" data-aos="fade-up" data-aos-delay="100">
        {{ $t('banner.title') }}
      </div>
      <div class="banner-view-content-description" data-aos="fade-up" data-aos-delay="200">
        <span v-html="$t('banner.description')"></span>
      </div>
      </div>
    </div>
    <div class="banner-mute-button" @click="toggleMute">
      <img v-if="isMuted" src="@/assets/images/volume_off.svg" alt="volume_off">
      <img v-else src="@/assets/images/volume.svg" alt="volume">
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const isMuted = ref(true)

const toggleMute = () => {
  isMuted.value = !isMuted.value
}
</script>
<style lang="scss" scoped>
.banner-view {
  width: 100%;
  padding-bottom: calc(700px / 1440px * 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .banner-mute-button {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 28px;
    top: 123px;
    z-index: 2;
    cursor: pointer;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .banner-view-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.65);
    .banner-view-content-container {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      position: absolute;
      left: 0;
      bottom: calc((197px / 700px) * 100%);
      width: 100%;
      z-index: 1;

      .banner-view-content-subtitle {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        line-height: 1.5;
      }
      .banner-view-content-title {
        font-size: 48px;
        font-weight: 700;
        background: linear-gradient(90.03deg, #0DC0DE 1.09%, #6ECCA9 52.21%, #FCDE5B 100.46%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
      .banner-view-content-description {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        text-align: center;
        line-height: 1.5;
      }

      .vant-demo {
        display: flex;
        gap: 12px;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
@media (max-width: 1256px) {
  .banner-view {
    .banner-mute-button {
      right: 16px;
    }
  }
}
@media (max-width: 768px) {
  .banner-view {

    padding-bottom: calc(300px / 393px * 100%);
    .banner-mute-button {
      top: 76px;
    }
    .banner-view-content {
      .banner-view-content-container {
        bottom: 50px;
        .banner-view-content-subtitle {
          font-size: 18px;
        }
        .banner-view-content-title {
          font-size: 32px;
        }
        .banner-view-content-description {
          font-size: 16px;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .banner-view {
    padding-bottom: calc(384px / 393px * 100%);
  }
}
@media (max-width: 430px) {
  .banner-view {
    .banner-view-content {
      .banner-view-content-container {
        .banner-view-content-title {
          width: 230px;
          text-align: center;
        }
      }
    }
  }
}
</style>
