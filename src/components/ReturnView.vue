<template>
  <div class="return-view">
    <div class="return-view-container container">
      <div class="return-view-content" data-aos="fade-up">
        <div class="return-view-title" :class="{ 'return-view-title-en': !isZH }">{{ $t('return.title') }}</div>
        <div class="return-view-description" :class="{ 'return-view-description-en': !isZH }" v-html="$t('return.description')"></div>
      </div>
      <div class="return-view-content-list" :class="{ 'return-view-content-list-en': !isZH }">
        <div class="return-view-content-list-item" v-for="(item, index) in returnViewList" :key="item.key" data-aos="fade-up" :data-aos-delay="index * 200">
          <div class="return-view-content-list-item-icon">
            <img :src="item.icon" alt="return-view-content-list-item-icon-img" class="return-view-content-list-item-icon-img">
          </div>
          <div class="return-view-content-list-item-percent">
            {{ item.percent }}
          </div>
          <div class="return-view-content-list-item-text">
            {{ $t(`return.metrics.${item.key}`) }}
          </div>
          <div class="return-view-content-list-item-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import return1 from '@/assets/images/return-1.svg'
import return2 from '@/assets/images/return-2.svg'
import return3 from '@/assets/images/return-3.svg'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isZH = computed(() => locale.value === 'zh-TW')
const returnViewList = [
  {
    key: 'exploration',
    percent: '20-40%',
    icon: return1,
  },
  {
    key: 'cost',
    percent: '30%',
    icon: return2,
  },
  {
    key: 'interaction',
    percent: '30-60%',
    icon: return3,
  },
]

</script>
<style lang="scss" scoped>
$primary-color: #353535;
.return-view {
  background-color: #fafafa;
  width: 100%;
  height: 700px;
  background-image: url('@/assets/images/return-bg.webp');
  background-size: 100% 425px;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
  .return-view-container {
    box-sizing: border-box;
    padding: 0;
    .return-view-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 12px;
      padding: 103px 16px 0;
      .return-view-title {
        font-size: 48px;
        font-weight: 700;
        color: #fff;
      }
      .return-view-title-en {
        font-size: 40px;
      }
      .return-view-description {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
        color: #fff;
        text-align: left;
      }
    }
    .return-view-content-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 87.5px 16px 0;
      &.return-view-content-list-en {
       padding-top: 72px;
      }
      .return-view-content-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        background-color: #fff;
        border-radius: 16px;
        padding: 48px 32px;
        min-width: 300px;
        .return-view-content-list-item-icon {
          width: 115px;
          height: 115px;
        }
        .return-view-content-list-item-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .return-view-content-list-item-percent {

          font-size: 40px;
          font-weight: 700;
          background: linear-gradient(90deg, #0DC0DE 34.62%, #6ECCA9 51.33%, #FCDE5B 67.1%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          line-height: 1.5;
        }
        .return-view-content-list-item-text {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: $primary-color;
        }
        .return-view-content-list-item-dots {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          span {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: block;
            &:nth-child(1) {
              background: #0FC0DD;
            }
            &:nth-child(2) {
              background: #6BCCAB;
            }
            &:nth-child(3) {
              background: #FDDD59;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .return-view {
    padding: 48px 0;
    height: auto;
    background-size: 100% 40%;
    .return-view-container {
      .return-view-content {
        align-items: center;
        padding-top: 0px;
        .return-view-title {
          font-size: 32px;
        }
        .return-view-description {
          font-size: 18px;
          text-align: center;
        }
      }
      .return-view-content-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 19px;
        padding-top: 32px;
        overflow: auto;
        scrollbar-width: none;
        &.return-view-content-list-en {
          padding-top: 30px;
        }

        .return-view-content-list-item {
          height: 304px;
          width: 300px;
          padding: 0;
          gap: 8px;
          .return-view-content-list-item-icon {
            width: 80px;
            height: 80px;
          }
          .return-view-content-list-item-icon-img {
            width: 80px;
            height: 80px;
            object-fit: cover;
          }
          .return-view-content-list-item-percent {
            font-size: 40px;
          }
          .return-view-content-list-item-text {
            font-size: 16px;
          }
          .return-view-content-list-item-dots {
            margin-top: 8px;
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .return-view {
    .return-view-container {
      .return-view-content {
        .return-view-title-en {
          font-size: 25px;
          text-align: center;
        }
        .return-view-description {
          font-size: 18px;
          text-align: center;
          width: 252px;
        }
        .return-view-description-en {
          width: auto;
        }
      }

    }
  }
}
</style>
