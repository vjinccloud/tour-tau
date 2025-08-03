<template>
  <div class="header-view">
    <div class="header-container">
      <div class="header-view-mobile">
        <!-- mobile menu -->
        <img src="@/assets/images/icon_menu.svg" alt="menu" class="icon-menu cursor-opacity" @click="toggleMenu" v-if="isMobile">
        <!-- logo -->
        <img src="@/assets/images/logo.svg" alt="logo" class="logo cursor-opacity">
      </div>

      <div class="header-view-menu" v-if="!isMobile">
        <a href="#usecase-section" @click="scrollToUseCase">{{ $t('common.menu.useCase') }}</a>
        <a href="#features-section" @click="scrollToFeatures">{{ $t('common.menu.features') }}</a>
        <a href="#price-section" @click="scrollToPrice">{{ $t('common.menu.pricing') }}</a>
        <a href="#contact-section" @click="scrollToContact">{{ $t('common.menu.contact') }}</a>
      </div>

      <div class="header-view-language">
        <img src="@/assets/images/icon_earth.svg" alt="language" class="language cursor-opacity" @click="toggleLanguageList">
        <div class="header-view-language-list" v-if="isLanguageListOpen">
          <div
            class="header-view-language-list-item"
            :class="{ 'active': locale === 'zh-TW' }"
            @click="changeLanguage('zh-TW')"
          >
            TW
          </div>
          <div
            class="header-view-language-list-item"
            :class="{ 'active': locale === 'en' }"
            @click="changeLanguage('en')"
          >
            EN
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { defineEmits } from 'vue'

const emit = defineEmits(['openMobileMenuPopUp'])

const { locale } = useI18n()
const isLanguageListOpen = ref(false)

const isMobile = ref(false)

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})


const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const toggleLanguageList = () => {
  isLanguageListOpen.value = !isLanguageListOpen.value
}

const changeLanguage = (language) => {
  isLanguageListOpen.value = false
  locale.value = language

  // 保存語言選擇到 localStorage
  localStorage.setItem('locale', language)

  console.log('Language changed to:', language)
}

const scrollToUseCase = (event) => {
  event.preventDefault()
  const useCaseSection = document.getElementById('usecase-section')
  if (useCaseSection) {
    const elementTop = useCaseSection.offsetTop
    window.scrollTo({
      top: elementTop - 100,
      behavior: 'smooth'
    })
  }
}

const scrollToFeatures = (event) => {
  event.preventDefault()
  const featuresSection = document.getElementById('features-section')
  if (featuresSection) {
    const elementTop = featuresSection.offsetTop
    window.scrollTo({
      top: elementTop - 100,
      behavior: 'smooth'
    })
  }
}

const scrollToPrice = (event) => {
  event.preventDefault()
  const priceSection = document.getElementById('price-section')
  if (priceSection) {
    const elementTop = priceSection.offsetTop
    window.scrollTo({
      top: elementTop - 100,
      behavior: 'smooth'
    })
  }
}

const scrollToContact = (event) => {
  event.preventDefault()
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    const elementTop = contactSection.offsetTop
    window.scrollTo({
      top: elementTop - 100,
      behavior: 'smooth'
    })
  }
}

const toggleMenu = () => {
  emit('openMobileMenuPopUp')
}
</script>
<style lang="scss" scoped>
.header-view {
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 32px);
    height: 100%;
    gap: 24px;
    max-width: 1196px;
    padding: 0 16px;
    margin: 0 auto;
  }
  .header-view-mobile {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .icon-menu {
    width: 24px;
    cursor: pointer;
  }
  .logo {
    width: 167px;
    cursor: pointer;
  }
  .header-view-menu {
    display: flex;
    align-items: center;
    gap: 32px;
    flex: 1;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      font-weight: 700;
    }
  }
  .header-view-language {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    .language {
      width: 24px;
      cursor: pointer;
    }
    .header-view-language-list {
      position: absolute;
      top: 30px;
      right: -10px;
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #353535;
      .header-view-language-list-item {
        width: 80px;
        height: 47px;
        color: #353535;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        &:hover {
          background-color: #f5f5f5;
        }
        &.active {
          background-color: #FDDD59;
        }
      }
    }
  }

}
@media (max-width: 768px) {
  .header-view {
    height: 60px;
    .header-view-mobile {
      .logo {
        width: 89px;
      }
    }
  }
}
</style>
