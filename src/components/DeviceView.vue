<template>
  <div class="device-view">
    <div class="device-view-imgs">
      <img src="@/assets/images/device-1.webp" alt="device-view-img" data-aos="fade-up">
      <img src="@/assets/images/device-2.webp" alt="device-view-img" data-aos="fade-up" data-aos-delay="100">
      <div class="device-view-imgs-little">
        <img src="@/assets/images/device-3.webp" alt="device-view-img" data-aos="fade-right" data-aos-delay="200">
        <img src="@/assets/images/device-4.webp" alt="device-view-img" data-aos="fade-right" data-aos-delay="300">
        <img src="@/assets/images/device-5.webp" alt="device-view-img" data-aos="fade-right" data-aos-delay="400">
      </div>
    </div>
    <div :class="{ 'device-view-title-en': !isZH }">
      <div class="device-view-title" data-aos="fade-up" v-html="$t('device.title')"></div>
      <div class="device-view-description" data-aos="fade-up" data-aos-delay="100" v-html="$t('device.description')"></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isZH = computed(() => locale.value === 'zh-TW')
</script>
<style lang="scss">
$primary-color: #353535;
.device-view {
  background-image: url('@/assets/images/device-bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // height: 983px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 58px;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  .device-view-imgs {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 21px;
    padding-top: 36px;
    img {
      object-fit: cover;
      position: relative;
      z-index: 3;
      &:nth-child(1) {
        width: 138px;
        margin-right: 33px;
      }
      &:nth-child(2) {
        width: 253px;
      }
    }
    .device-view-imgs-little {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 33px;
      height: 100%;
      position: relative;
      z-index: 1;
      img {
        object-fit: cover;
        &:nth-child(1) {
          width: 170px;
          margin-right: 0px;
          margin-bottom: 6px;
        }
        &:nth-child(2) {
          width: 155px;
        }
        &:nth-child(3) {
          width: 101px;
        }
      }
    }
  }
  .device-view-title-en {
   padding-bottom: 60px;
  }
  .device-view-title {
    font-size: 48px;
    font-weight: 700;
    color: $primary-color;
    line-height: 1.4;
    text-align: center;
    margin-bottom: 12px;
  }
  .device-view-description {
    font-size: 16px;
    line-height: 1.5;
    color: $primary-color;
    text-align: center;
    span {
      font-weight: 700;
    }
  }
}
@media (max-width: 768px) {
  .device-view {
    padding: 70px 16px;
    box-sizing: border-box;
    gap: 50px;
    .device-view-imgs {
      padding-top: 0;
      gap: 9px;
      img {
        &:nth-child(1) {
          width: 71px;
        }
        &:nth-child(2) {
          width: 131px;
        }

      }
      .device-view-imgs-little {
        gap: 23px;
        img {
          &:nth-child(1) {
            width: 82px;
          }
          &:nth-child(2) {
            width: 75px;
          }
          &:nth-child(3) {
            width: 50px;
          }
        }
      }
    }
    .device-view-title {
      font-size: 24px;
    }
    .device-view-description {
      font-size: 16px;
    }
  }

}
</style>
