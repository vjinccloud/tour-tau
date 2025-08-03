<template>
  <div id="contact-section" class="contact-view">
    <div class="contact-view-container container">
      <div class="contact-view-content">
        <div class="contact-view-title" data-aos="fade-up" :class="{ 'contact-view-title-en': !isZH }">
          <span>{{ $t('contact.title') }}</span>
          <img src="@/assets/images/hot.svg" alt="hot-icon">
        </div>
        <div class="contact-view-description" data-aos="fade-up" data-aos-delay="100" :class="{ 'contact-view-description-en': !isZH }" v-html="$t('contact.description')"></div>
      </div>
      <div  data-aos="fade-up" data-aos-delay="200">
        <button class="contact-view-button" @click="emit('openContactPopUp')">
          <span>{{ $t('common.buttons.contactNow') }}</span>
        </button>
      </div>
    </div>
    <div class="contact-view-image-container">
      <img src="@/assets/images/contact-1.webp" alt="contact-1" class="contact-view-image contact-view-image-1">
      <img src="@/assets/images/contact-2.webp" alt="contact-2" class="contact-view-image contact-view-image-2">
      <img src="@/assets/images/contact-3.webp" alt="contact-3" class="contact-view-image contact-view-image-3">
      <img src="@/assets/images/contact-4.webp" alt="contact-4" class="contact-view-image contact-view-image-4">
      <img src="@/assets/images/contact-5.webp" alt="contact-5" class="contact-view-image contact-view-image-5">
    </div>
  </div>
</template>
<script setup>
import { computed, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isZH = computed(() => locale.value === 'zh-TW')
const emit = defineEmits(['openContactPopUp'])
</script>
<style lang="scss" scoped>
$primary-color: #353535;
.contact-view {
  background-image: url('@/assets/images/contact-bg.webp');
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
  .contact-view-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 48px;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    .contact-view-title {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
      font-size: 48px;
      font-weight: 700;
      color: $primary-color;
      line-height: 1.5;
    }
    .contact-view-title-en {
      font-size: 30px;
    }
    .contact-view-description {
      margin-top: 12px;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.5;
      color: $primary-color;
    }
    .contact-view-description-en {
      font-size: 24px;
    }
    .contact-view-button {
      background: #FDDD59;
      color: $primary-color;
      font-size: 18px;
      font-weight: 700;
      padding: 16px 48px;
      border-radius: 100px;
      border: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: color 0.3s ease;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(90.97deg, #0DC0DE 0.51%, #6ECCA9 51.27%, #FCDE5B 99.18%);
        border-radius: 100px;
        transition: width 0.4s ease;
        z-index: -1;
      }

      &:hover {
        color: #fff;

        &::before {
          width: 100%;
        }
      }
    }
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .contact-view-image {
    position: absolute;
    object-fit: cover;
    animation: float 3s ease-in-out infinite;

    &.contact-view-image-1 {
      width: 339px;
      bottom: 238px;
      right: 500px;
      animation-delay: 0s;
    }
    &.contact-view-image-2 {
      width: 274px;
      bottom: 89px;
      right: 353px;
      animation-delay: 0.6s;
    }
    &.contact-view-image-3 {
      width: 172px;
      bottom: 398px;
      right: 315px;
      animation-delay: 1.2s;
    }
    &.contact-view-image-4 {
      width: 251px;
      bottom: 227px;
      right: 74px;
      animation-delay: 1.8s;
      z-index: 1;
    }
    &.contact-view-image-5 {
      height: 203px;
      bottom: 111px;
      right: -43px;
      animation-delay: 2.4s;
    }
  }
}
@media (max-width: 1320px) {
  .contact-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 48px 0;
    height: auto;
    .contact-view-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 48px;
      .contact-view-title {
        justify-content: center;
      }
      .contact-view-description {
        text-align: center;
      }

    }
    .contact-view-image-container {
      position: relative;
      width: 1px;
      height: 550px;
      .contact-view-image{
        position: absolute;

        &.contact-view-image-1 {
          width: 339px;
          bottom: 188px;
          right: 150px;
          animation-delay: 0s;
        }
        &.contact-view-image-2 {
          width: 274px;
          bottom: 39px;
          right: 3px;
          animation-delay: 0.6s;
        }
        &.contact-view-image-3 {
          width: 172px;
          bottom: 348px;
          right: -35px;
          animation-delay: 1.2s;
        }
        &.contact-view-image-4 {
          width: 251px;
          bottom: 177px;
          right: -276px;
          animation-delay: 1.8s;
        }
        &.contact-view-image-5 {
          height: 203px;
          bottom: 61px;
          right: -393px;
          animation-delay: 2.4s;
        }
      }

    }
  }
}
@media (max-width: 768px) {
  .contact-view {
    background-image: url('@/assets/images/contact-bg-mobile.webp');
    .contact-view-container {
      gap: 32px;
      .contact-view-title{
        font-size: 32px;
        flex-wrap: wrap;
      }
      .contact-view-description{
        font-size: 24px;
      }

    }
    .contact-view-image-container {
      height: 690px;
      .contact-view-image{
        position: absolute;

        &.contact-view-image-1 {
          width: 237px;
          top: 0;
          right: -24px;
          animation-delay: 0s;
        }
        &.contact-view-image-2 {
          width: 192px;
          top: 108px;
          right: -210px;
          animation-delay: 0.6s;
        }
        &.contact-view-image-3 {
          width: 120px;
          top: 412px;
          right: -174px;
          animation-delay: 1.2s;
        }
        &.contact-view-image-4 {
          width: 175px;
          top: 290px;
          right: -15px;
          animation-delay: 1.8s;
        }
        &.contact-view-image-5 {
          height: 154px;
          top: 535px;
          right: -77px;
          animation-delay: 2.4s;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .contact-view {
    .contact-view-image-container {
      height: 690px;
      .contact-view-image{
        &.contact-view-image-2 {
          right: -180px;
        }
      }
    }
  }
}
</style>
