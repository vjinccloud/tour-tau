<template>
  <div class="price-rent-plan-element">
    <!-- 租期 -->
    <div class="price-rent-plan-element-title">
      <span v-if="type === 'rent'">{{ $t('plan.rent') }}</span>
      <span v-if="plan.days" class="price-rent-plan-element-title-text" :class="{ 'price-rent-plan-element-title-text-en': !isZH }">{{ plan.days }} {{ type === 'rent' ? $t('plan.days') : $t('plan.touch') }}</span>
      <span v-if="plan.months" class="price-rent-plan-element-title-text" :class="{ 'price-rent-plan-element-title-text-en': !isZH }">{{ plan.months }} {{ $t('plan.months') }}</span>
    </div>
    <!-- 硬體尺寸 -->
    <div v-if="type === 'rent'" class="price-rent-plan-element-device-size">
      <div class="size-btn-list-item" v-for="size in plan.device_size" :key="size" :class="{ 'active': activeSize === size, 'size-btn-list-item-en': !isZH }" @click="activeSize = size">
        <span>{{ size }} {{ $t('plan.inches') }}</span>
      </div>
    </div>
    <!-- 硬體租金 -->
    <div class="price-rent-plan-element-price">
      <span :class="{ 'price-rent-plan-element-price-en': !isZH }">{{ type === 'rent' ? $t('plan.hardwareRent') : $t('plan.buyPrice') }}</span>
      <span v-if="activeSize && type === 'rent'">
        <span class="bold">$</span>
        <span class="bold">{{ activeSize === '32' ? amountFormat(plan.device_price[0]) : amountFormat(plan.device_price[1]) }}</span>
        <span class="bold">+</span>
      </span>
      <span v-if="!activeSize && type === 'rent'">-</span>
      <span v-if="type === 'buy'">
        <span class="bold">$</span>
        <span class="bold">{{amountFormat(plan.device_price) }}</span>
        <span class="bold">+</span>
      </span>

    </div>
    <!-- 方案 -->
    <div class="price-rent-plan-element-plans" :class="{ 'price-rent-plan-element-plans-buy': type === 'buy' }">
      <div class="price-rent-plan-element-plan-item" v-for="item in plan.plan" :key="item.name_en" :class="{ 'active': activePlan === item.name_en }" @click="activePlan = item.name_en">
        <div class="price-rent-plan-element-plan-item-name">
          <span>{{ item.name_en }}</span>
          <span>{{ type === 'rent' ? isZH ? item.name_zh : '' : $t('plan.annualFee') }}</span>
        </div>
        <div class="price-rent-plan-element-plan-item-price">
          <span :class="{ 'discount': item.discount }">${{ amountFormat(item.price) }} {{ type === 'rent' ? '/' + $t('plan.month') : '' }}</span>
        </div>
        <div v-if="item.discount" class="price-rent-plan-element-plan-item-discount">
          <span>{{ isZH ? item.discount : '20% off' }}</span>
        </div>
      </div>
    </div>
    <!-- 總費用 -->
    <div class="price-rent-plan-element-total">
      <span>{{ $t('plan.totalCost') }}</span>
      <span>{{ totalPrice ? '$' + amountFormat(totalPrice) : '-' }}</span>

      <div class="price-rent-plan-element-contact-btn">
        <button @click="emit('openContactPopUp')">{{ $t('common.buttons.contactUs') }}</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isZH = computed(() => locale.value === 'zh-TW')
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  plan: {
    type: Object,
    required: true,
  },
})
const activeSize = ref('');
const activePlan = ref('');

const totalPrice = computed(() => {
  if (props.type === 'rent' && activeSize.value && activePlan.value) {
    if (activeSize.value === '32') {
      if (props.plan.months) {
        return Number(props.plan.device_price[0]) + Number(props.plan.plan.find(item => item.name_en === activePlan.value).price) * Number(props.plan.months);
      } else {
        return Number(props.plan.device_price[0]) + Number(props.plan.plan.find(item => item.name_en === activePlan.value).price);
      }
    }
    if (activeSize.value === '55') {
      if (props.plan.months) {
        return Number(props.plan.device_price[1]) + Number(props.plan.plan.find(item => item.name_en === activePlan.value).price) * Number(props.plan.months);
      } else {
        return Number(props.plan.device_price[1]) + Number(props.plan.plan.find(item => item.name_en === activePlan.value).price);
      }
    }
  }
  if (props.type === 'buy' && activePlan.value) {
    return Number(props.plan.device_price) + Number(props.plan.plan.find(item => item.name_en === activePlan.value).price);
  }
  return 0;
})

const amountFormat = (amount) => {
  return amount.toLocaleString('en-US');
}

const emit = defineEmits(['openContactPopUp'])

</script>
<style lang="scss" scoped>
$primary-color: #353535;
.price-rent-plan-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  background-color: #fff;
  border-radius: 16px;
  gap: 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);

  .price-rent-plan-element-title {
    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    span {
      font-size: 20px;
      line-height: 1.5;
      font-weight: 700;
      color: #0FC0DD;
      display: block;
    }
    .price-rent-plan-element-title-text {
      font-size: 40px;
    }
    .price-rent-plan-element-title-text-en {
      font-size: 28px;
    }
  }
  .price-rent-plan-element-device-size {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    .size-btn-list-item {
      padding: 12px 25px;
      border-radius: 100px;
      border: 1px solid #E2E2E2;
      color: #353535;
      font-size: 20px;
      line-height: 1.5;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &.active {
        border: 1px solid #FDDD59;
        box-shadow: 0 0 0 1px #FDDD59;
        background-color: rgba(253, 221, 89, 0.2);
      }
      &.size-btn-list-item-en {
        font-size: 16px;
        padding: 12px 20px;
      }
    }
  }
  .price-rent-plan-element-price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    span {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      color: #353535;
      &.bold{
        font-size: 18px;
        font-weight: 700;
      }
      &:nth-child(2) {
        font-size: 18px;
        font-weight: 700;
      }
      &:nth-child(3) {
        font-size: 18px;
        font-weight: 700;
      }
    }
    .price-rent-plan-element-price-en {
      font-size: 14px;
    }
  }
  .price-rent-plan-element-plans {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;

    .price-rent-plan-element-plan-item {
      flex: 1;
      gap: 12px;
      padding: 12px 0;
      border: 1px solid #E2E2E2;
      background-color: #FAFAFA;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      transition: all 0.3s ease;
      position: relative;
      height: 107px;
      box-sizing: border-box;

      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &.active {
        border: 1px solid #FDDD59;
        box-shadow: 0 0 0 1px #FDDD59;
        background-color: rgba(253, 221, 89, 0.2);
      }
      .price-rent-plan-element-plan-item-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
          display: block;
          color: #8C8C8C;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 700;
        }
      }
      .price-rent-plan-element-plan-item-price {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 700;
        color: $primary-color;
        .discount {
          color: #FF4848;
        }
      }
      &:nth-child(2) {
        .price-rent-plan-element-plan-item-name {
          span {
            color: #C39448;
          }
        }
      }
      .price-rent-plan-element-plan-item-discount {
        position: absolute;
        top: -10px;
        left: -5.5px;
        background-color: #FFF2F2;
        padding: 2px 8px;
        border-radius: 4px;
        border: 1px solid #FF4848;
        font-size: 10px;
        line-height: 1.5;
        font-weight: 500;
        color: #FF4848;
      }
    }
    &.price-rent-plan-element-plans-buy {
      gap: 20px;
    }
  }
  .price-rent-plan-element-total {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    span {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      color: #000000;
      &:nth-child(2) {
        font-size: 32px;
        line-height: 1.5;
        font-weight: 700;
        color: #FFC300;
      }
    }
    .price-rent-plan-element-contact-btn {
      button {
        padding: 16px 0;
        width: 168px;
        border-radius: 100px;
        background-color: #FDDD59;
        color: $primary-color;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 700;
        transition: all 0.3s ease;
        &:hover {
          scale: 1.05;
        }
      }
    }
  }
}
@media (max-width: 1196px) {
  .price-rent-plan-element {
    padding: 24px 10px;
  }
}
@media (max-width: 820px) {
  .price-rent-plan-element {
    padding: 32px 24px;
  }
}
</style>
