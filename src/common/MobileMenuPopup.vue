<template>
  <Transition name="fade" appear>
    <div v-if="visible" class="mobile-menu-popup" @click="handleBackdropClick">
      <Transition name="slide-left" appear>
        <div v-if="visible" class="mobile-menu-popup-container" @click.stop>
          <div class="mobile-menu-popup-header">
            <img src="@/assets/images/logo.svg" alt="logo" class="logo">
            <img src="@/assets/images/icon_back.svg" alt="close" class="icon-back" @click="close">
          </div>
          <div class="mobile-menu-popup-content">
            <div class="mobile-menu-popup-content-item">
              <a href="#usecase-section" @click="scrollToUseCase">{{ $t('common.menu.useCase') }}</a>
            </div>
            <div class="mobile-menu-popup-content-item">
              <a href="#features-section" @click="scrollToFeatures">{{ $t('common.menu.features') }}</a>
            </div>
            <div class="mobile-menu-popup-content-item" @click="scrollToPrice">
              <a href="#price-section">{{ $t('common.menu.pricing') }}</a>
            </div>
            <div class="mobile-menu-popup-content-item" @click="scrollToContact">
              <a href="#contact-section">{{ $t('common.menu.contact') }}</a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)

const close = () => {
  visible.value = false
  emit('update:modelValue', false)
}

const handleBackdropClick = () => {
  close()
}

// 監聽外部傳入的 modelValue 變化
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
}, { immediate: true })



const scrollToUseCase = (event) => {
  event.preventDefault()
  const useCaseSection = document.getElementById('usecase-section')
  if (useCaseSection) {
    const elementTop = useCaseSection.offsetTop
    window.scrollTo({
      top: elementTop - 60,
      behavior: 'smooth'
    })
  }
  close()
}

const scrollToFeatures = (event) => {
  event.preventDefault()
  const featuresSection = document.getElementById('features-section')
  if (featuresSection) {
    const elementTop = featuresSection.offsetTop
    window.scrollTo({
      top: elementTop - 60,
      behavior: 'smooth'
    })
  }
  close()
}

const scrollToPrice = (event) => {
  event.preventDefault()
  const priceSection = document.getElementById('price-section')
  if (priceSection) {
    const elementTop = priceSection.offsetTop
    window.scrollTo({
      top: elementTop - 60,
      behavior: 'smooth'
    })
  }
  close()
}

const scrollToContact = (event) => {
  event.preventDefault()
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    const elementTop = contactSection.offsetTop
    window.scrollTo({
      top: elementTop - 60,
      behavior: 'smooth'
    })
  }
  close()
}


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

// 左側滑入動畫
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

// 彈窗縮放動畫
.scale-enter-active, .scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.mobile-menu-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .mobile-menu-popup-container {
    position: relative;
    width: 300px;
    height: 100vh;
    background-color: #000000E5;
    .mobile-menu-popup-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid #fff;
      .logo {
        width: 89px;
      }
      .icon-back {
        width: 24px;
        cursor: pointer;
      }
    }
    .mobile-menu-popup-content {
      padding: 16px;
      .mobile-menu-popup-content-item {
        padding: 16px 0;
        a {
          font-size: 16px;
          color: #fff !important;
          text-decoration: none;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
