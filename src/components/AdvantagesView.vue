<template>
  <div class="advantages-view">
    <div class="advantages-view-container container">
      <div class="advantages-view-tabs" data-aos="fade-up">
        <div
          class="advantages-view-tab"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'active': active_tab.index === index }"
          @click="active_tab.index = index; active_tab.key = tab.key"
        >
          <img :src="active_tab.index === index ? tab.active_icon : tab.default_icon" alt="tab.title" class="advantages-view-tab-icon">
          <div class="advantages-view-tab-title" :class="{ 'advantages-view-tab-title-en': !isZH }">
            {{ $t(`advantages.tabs.${tab.key}.title`) }}
          </div>
        </div>
      </div>
      <div class="advantages-view-content" data-aos="fade-up" data-aos-delay="300">
        <Transition name="content-fade" mode="out-in">
          <div class="advantages-view-content-wrapper" :key="active_tab.index">
            <div class="advantages-view-content-description">
              {{ $t(`advantages.tabs.${active_tab.key}.description`) }}
            </div>
            <div class="advantages-view-content-items">
              <div class="advantages-view-content-item" v-for="(item, index) in tabs[active_tab.index].data" :key="index">
                <img :src="item.img" alt="item.text" class="advantages-view-content-item-img">
                <div class="advantages-view-content-item-text" :class="{ 'advantages-view-content-item-text-en': !isZH }">
                  {{ $t(`advantages.tabs.${active_tab.key}.items.${item.key}`) }}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import user_active from '@/assets/images/user-active.svg'
import user_gray from '@/assets/images/user-gray.svg'
import map_active from '@/assets/images/map-active.svg'
import map_gray from '@/assets/images/map-gray.svg'
import point_active from '@/assets/images/point-active.svg'
import point_gray from '@/assets/images/point-gray.svg'

import img_1_1 from '@/assets/images/advantages-1-1.webp'
import img_1_2 from '@/assets/images/advantages-1-2.webp'
import img_1_3 from '@/assets/images/advantages-1-3.webp'
import img_1_4 from '@/assets/images/advantages-1-4.webp'

import img_2_1 from '@/assets/images/advantages-2-1.webp'
import img_2_2 from '@/assets/images/advantages-2-2.webp'
import img_2_3 from '@/assets/images/advantages-2-3.webp'
import img_2_4 from '@/assets/images/advantages-2-4.webp'

import img_3_1 from '@/assets/images/advantages-3-1.webp'
import img_3_2 from '@/assets/images/advantages-3-2.webp'
import img_3_3 from '@/assets/images/advantages-3-3.webp'
import img_3_4 from '@/assets/images/advantages-3-4.webp'

const { locale } = useI18n()
const isZH = computed(() => locale.value === 'zh-TW')

// 用於存儲定時器
let autoSwitchInterval = null

onMounted(() => {
  // 每8秒自動切換到下一個 tab
  autoSwitchInterval = setInterval(() => {
    const nextIndex = (active_tab.value.index + 1) % tabs.length
    active_tab.value.index = nextIndex
    active_tab.value.key = tabs[nextIndex].key
  }, 8000)
})

onUnmounted(() => {
  // 清理定時器
  if (autoSwitchInterval) {
    clearInterval(autoSwitchInterval)
  }
})

const tabs = [
  {
    key: 'aiAssistant',
    default_icon: user_gray,
    active_icon: user_active,
    data: [
      {
        key: 'friendly',
        img: img_1_1,
      },
      {
        key: 'professional',
        img: img_1_2,
      },
      {
        key: 'consultant',
        img: img_1_3,
      },
      {
        key: 'consultant2',
        img: img_1_4,
      },
    ]
  },
  {
    key: 'visualMap',
    default_icon: map_gray,
    active_icon: map_active,
    data: [
      {
        key: 'floorPlan',
        img: img_2_1,
      },
      {
        key: 'guidance',
        img: img_2_2,
      },
      {
        key: 'realView',
        img: img_2_3,
      },
      {
        key: 'qrCode',
        img: img_2_4,
      },
    ]
  },
  {
    key: 'aiRecommendation',
    default_icon: point_gray,
    active_icon: point_active,
    data: [
      {
        key: 'model3d',
        img: img_3_1,
      },
      {
        key: 'imageText',
        img: img_3_2,
      },
      {
        key: 'multimedia',
        img: img_3_3,
      },
      {
        key: 'smartCounter',
        img: img_3_4,
      },
    ]
  },
]

const active_tab = ref({
  index: 0,
  key: tabs[0].key,
})

</script>
<style lang="scss" scoped>
$primary-color: #353535;
.advantages-view {
  padding: 60px 0;
  background-color: #fff;
  overflow: hidden;
  .advantages-view-container {
    display: flex;
    flex-direction: column;
    gap: 48px;
    box-sizing: border-box;
    max-width: 1228px;
    .advantages-view-tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 48px;
      overflow: auto;
      width: 100%;
      scrollbar-width: none;

      .advantages-view-tab {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        cursor: pointer;
        text-wrap-mode: nowrap;
        .advantages-view-tab-icon {
          width: 40px;
          height: 40px;
        }
        .advantages-view-tab-title {
          font-size: 32px;
          font-weight: 700;
          color: #C4C4C4;
          line-height: 1.5;
        }
        .advantages-view-tab-title-en {
          font-size: 24px;
        }
        &.active {
        .advantages-view-tab-title {
          color: $primary-color;
          }
        }
      }


    }
    .advantages-view-content {
      display: flex;
      flex-direction: column;
      gap: 48px;


      // Transition 動畫樣式
      .content-fade-enter-active,
      .content-fade-leave-active {
        transition: all 0.5s ease;
      }

      .content-fade-enter-from {
        opacity: 0;
        transform: translateY(20px);
      }

      .content-fade-leave-to {
        opacity: 0;
        transform: translateY(-20px);
      }

      .advantages-view-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 48px;

      }

      .advantages-view-content-description {
        font-size: 20px;
        font-weight: 700;
        color: $primary-color;
        line-height: 1.5;
        text-align: center;
      }
      .advantages-view-content-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        overflow: auto;
        scrollbar-width: none;
        .advantages-view-content-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 16px;
          .advantages-view-content-item-img {
            width: 280px;
            height: 280px;
            object-fit: cover;
            box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
            border-radius: 16px;
          }
          .advantages-view-content-item-text {
            font-size: 24px;
            font-weight: 700;
            color: $primary-color;
            line-height: 1.5;
            text-align: center;
          }
          .advantages-view-content-item-text-en {
            font-size: 20px;
          }
        }
      }

    }
  }
}
@media (max-width: 980px) {
  .advantages-view {
    .advantages-view-container {
      .advantages-view-tabs {
        justify-content: flex-start;
      }
    }
  }
}
@media (max-width: 768px) {
  .advantages-view {
    padding: 48px 0;
    .advantages-view-container {
      gap: 40px;
      .advantages-view-tabs {
        gap: 24px;
        .advantages-view-tab {
          gap: 8px;
          .advantages-view-tab-icon {
            width: 32px;
            height: 32px;
          }
          .advantages-view-tab-title {
            font-size: 24px;
          }
        }
      }
      .advantages-view-content {
        gap: 40px;
        .advantages-view-content-wrapper {
          gap: 40px;
        }
        .advantages-view-content-description {
          font-size: 16px;
        }
        .advantages-view-content-items {
          gap: 24px;
          .advantages-view-content-item {
            .advantages-view-content-item-text {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
