<template>
  <div id="price-section" class="price-view">
    <div class="price-view-container container">
      <div class="price-view-title">{{ $t('price.title') }}</div>
      <div class="price-view-rent">
        <div class="price-rent-plan-list">
          <div class="price-rent-plan-list-item" v-for="plan in rentPlanList" :key="plan.days">
            <PlanElement type="rent" :plan="plan" @openContactPopUp="emit('openContactPopUp')" />
          </div>
        </div>
        <div class="price-view-rent-description">
          <p>{{ $t('price.rentDescription.line1') }}</p>
          <p>{{ $t('price.rentDescription.line2') }}</p>
          <p>{{ $t('price.rentDescription.line3') }}</p>
          <p>{{ $t('price.rentDescription.line4') }}</p>
          <p>{{ $t('price.rentDescription.line5') }}</p>
        </div>
      </div>
      <div class="price-view-buy-text" v-html="$t('price.buyText')"></div>
      <div class="price-view-buy">
        <div class="price-buy-plan-list">
          <div class="price-buy-plan-list-item" v-for="plan in buyPlanList" :key="plan.days">
            <PlanElement type="buy" :plan="plan" @openContactPopUp="emit('openContactPopUp')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PlanElement from '@/common/PlanElement.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['openContactPopUp'])

const rentPlanList = [
  {
    days: '7',
    months: null,
    device_size: ['32', '55'],
    device_price: [6000, 12000],
    plan: [
      {
        name_en: 'Premium',
        name_zh: '優選',
        price: 2999,
      },
      {
        name_en: 'Enterprise',
        name_zh: '企業',
        price: 4999,
      },
    ]
  },
  {
    days: '30',
    months: null,
    device_size: ['32', '55'],
    device_price: [9000, 15000],
    plan: [
      {
        name_en: 'Premium',
        name_zh: '優選',
        price: 2999,
      },
      {
        name_en: 'Enterprise',
        name_zh: '企業',
        price: 4999,
      },
    ]
  },
  {
    days: null,
    months: 3,
    device_size: ['32', '55'],
    device_price: [15000, 20000],
    plan: [
      {
        name_en: 'Premium',
        name_zh: '優選',
        price: 2999,
      },
      {
        name_en: 'Enterprise',
        name_zh: '企業',
        price: 4999,
      },
    ]
  },
]

const buyPlanList = [
  {
    days: '32',
    device_price: 40200,
    plan: [
      {
        name_en: 'Premium',
        name_zh: '年費',
        price: 28790,
        discount: '8折'
      },
      {
        name_en: 'Enterprise',
        name_zh: '年費',
        price: 47990,
        discount: '8折'
      },
    ]
  },
  {
    days: '55',
    device_price: 71000,
    plan: [
      {
        name_en: 'Premium',
        name_zh: '年費',
        price: 28790,
        discount: '8折'
      },
      {
        name_en: 'Enterprise',
        name_zh: '年費',
        price: 47990,
        discount: '8折'
      },
    ]
  },
]
</script>
<style lang="scss" scoped>
$primary-color: #353535;
.price-view {
  background: linear-gradient(89.95deg, #0DC0DE 0.05%, #6ECCA9 51.44%, #FCDE5B 99.95%);
  // height: 983px;
  width: 100%;
  position: relative;
  padding: 60px 0;
  overflow: hidden;
  .price-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    box-sizing: border-box;
    .price-view-title {
      font-size: 48px;
      font-weight: 700;
      color: #fff;
      text-align: center;
    }
    .price-view-rent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 32px;
      width: 100%;
      .price-rent-plan-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 47px;
        width: 100%;
        .price-rent-plan-list-item {
          width: 100%;
        }
      }
      .price-view-rent-description {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        p {
          text-indent: -1.2em;
          padding-left: 1.2em;
          line-height: 1.5;
        }
      }
    }
    .price-view-buy-text {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      text-align: center;
      line-height: 1.5;
    }
    .price-view-buy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      .price-buy-plan-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 24px;
        width: 100%;
        .price-buy-plan-list-item {
          width: 100%;
          max-width: 400px;
        }
      }
    }

  }

}
@media (max-width: 1196px) {
  .price-view {
    .price-view-container {
      .price-view-rent {
        .price-rent-plan-list {
          gap: 20px;
        }
      }
      .price-view-buy {
        .price-buy-plan-list {
          gap: 20px;
        }
      }
    }
  }
}
@media (max-width: 940px) {
  .price-view {
    .price-view-container {
      .price-view-rent {
        .price-rent-plan-list {
          gap: 10px;
        }
      }
      .price-view-buy {
        .price-buy-plan-list {
          gap: 10px;
        }
      }
    }
  }
}
@media (max-width: 880px) {
  .price-view {
    .price-view-container {
      .price-view-rent {
        .price-rent-plan-list {
          grid-template-columns: repeat(1, 1fr);
          gap: 12px;
          .price-rent-plan-list-item {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      }
      .price-view-buy {
        .price-buy-plan-list {
          flex-direction: column;
          gap: 12px;
          .price-buy-plan-list-item {
            max-width: 400px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .price-view {
    padding: 48px 0;

    .price-view-container {
      gap: 32px;
      .price-view-title {
        font-size: 32px;
      }
      .price-view-buy-text {
        width: 230px;
      }
    }
  }
}
</style>
