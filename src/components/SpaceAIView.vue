<template>
  <div class="space-ai-view">
    <div class="space-ai-view-container container">
      <div class="space-ai-view-title" data-aos="fade-up" :class="{ 'space-ai-view-title-en': !isZH }">
        {{ $t('spaceAI.title') }}<br>{{ $t('spaceAI.subtitle') }}
      </div>
      <div class="space-ai-view-box" :class="{ 'space-ai-view-box-en': !isZH }" data-aos="fade-right" data-aos-delay="200">
        <div class="space-ai-view-box-title">
          <img v-if="isZH" src="@/assets/images/icon_user.svg" alt="user">
          {{ $t('spaceAI.features.assistant.title') }}
        </div>
        <div class="space-ai-view-box-description">{{ $t('spaceAI.features.assistant.description') }}</div>
      </div>
      <div class="space-ai-view-box" :class="{ 'space-ai-view-box-en': !isZH }" data-aos="fade-left" data-aos-delay="400">
        <div class="space-ai-view-box-title">
          <img v-if="isZH" src="@/assets/images/icon_map.svg" alt="map">
          {{ $t('spaceAI.features.map.title') }}
        </div>
        <div class="space-ai-view-box-description" v-html="$t('spaceAI.features.map.description')"></div>
      </div>
      <div class="space-ai-view-box" :class="{ 'space-ai-view-box-en': !isZH }" data-aos="fade-right" data-aos-delay="600">
        <div class="space-ai-view-box-title">
          <img v-if="isZH" src="@/assets/images/icon_point.svg" alt="point">
          {{ $t('spaceAI.features.recommendation.title') }}
        </div>
        <div class="space-ai-view-box-description">{{ $t('spaceAI.features.recommendation.description') }}</div>
      </div>
      <div class="space-ai-view-machine-container" v-if="isMobile">
        <img src="@/assets/images/space_ai_machine.webp" alt="space-ai" class="space-ai-view-machine">
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref, onMounted } from 'vue';
const { locale } = useI18n();
const isZH = computed(() => locale.value === 'zh-TW');
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768;
  });
});

</script>
<style lang="scss" scoped>
$primary-color: #353535;
.space-ai-view {
  width: 100%;
  min-height: 700px;
  background-image: url('@/assets/images/space_ai_bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  .space-ai-view-container {
    box-sizing: border-box;
    .space-ai-view-title {
      font-size: 40px;
      font-weight: 700;
      color: $primary-color;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    .space-ai-view-title-en {
      font-size: 32px;
    }
    .space-ai-view-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
      padding: 24px;
      background: linear-gradient(90deg, rgba(13, 192, 222, 0.9) 0%, rgba(110, 204, 169, 0.9) 51.44%, rgba(252, 222, 91, 0.9) 100%);
      width: 500px;
      margin-bottom: 20px;
      box-sizing: border-box;

      &:nth-child(3) {
        position: relative;
        left: 307px;
      }
      &:nth-child(4) {
        position: relative;
        left: 104px;
      }

      .space-ai-view-box-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        line-height: 1.5;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .space-ai-view-box-description {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        line-height: 1.5;
      }
      &.space-ai-view-box-en {
        width: 570px;
        .space-ai-view-box-title{
          font-size: 20px;
        }
        .space-ai-view-box-description {
          font-size: 14px;
        }
        &:nth-child(3) {
          width: 545px;
        }
        &:nth-child(4) {
          width: 582px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .space-ai-view {
    min-height: 840px;
    background-image: url('@/assets/images/space_ai_bg_mobile.webp');
    justify-content: flex-start;
    overflow: hidden;
    .space-ai-view-container {
      padding: 50px 33px 0;
      box-sizing: border-box;
      .space-ai-view-title {
        font-size: 24px;
      }
      .space-ai-view-box {
        margin-bottom: 28px;
        padding: 16px;
        box-sizing: border-box;
        position: relative;
        &:nth-child(1) {
          left: 0;
        }
        &:nth-child(2) {
          left: 81px;
        }
        &:nth-child(3) {
          left: -15px;
        }
        &:nth-child(4) {
          left: 81px;
        }
        &.space-ai-view-box-en {
          width: 80% !important;
          .space-ai-view-box-title{
            font-size: 18px;
          }
        }


      }
    }
    .space-ai-view-machine-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .space-ai-view-machine {
      width: 172px;
      margin: 50px auto 0;
      position: relative;
      top: 4px;
      left: 0;
    }
  }
}

@media (max-width: 576px) {
  .space-ai-view {

    .space-ai-view-container {

      .space-ai-view-box {
        width: 327px;
        .space-ai-view-box-title {
          font-size: 18px;
        }
        .space-ai-view-box-description {
          font-size: 14px;
        }
      }

    }
  }
}
</style>
