<template>
  <!-- Header -->
  <HeaderView @openMobileMenuPopUp="showMobileMenuPopUp = true" />
  <!-- Main -->
  <main>
    <!-- Banner -->
    <BannerView />
    <!-- Space AI -->
    <SpaceAIView />
    <!-- Solution -->
    <SolutionView @openVideoPopUp="showVideoPopUp = true" />
    <!-- Advantages -->
    <AdvantagesView />
    <!-- Integrate -->
    <IntegrateView />
    <!-- Chat -->
    <ChatView />
    <!-- Return -->
    <ReturnView />
    <!-- Device -->
    <DeviceView />
    <!-- Price -->
    <PriceView @openContactPopUp="showContactPopUp = true" />
    <!-- Add-On -->
    <AddOnView />
    <!-- Contact -->
    <ContactView @openContactPopUp="showContactPopUp = true" />
  </main>
  <!-- Footer -->
  <FooterView />


  <!-- Contact Pop Up -->
  <ContactPopUp v-model="showContactPopUp" />
  <!-- Video Pop Up -->
  <VideoPopUp v-model="showVideoPopUp" />
  <!-- Mobile Menu Pop Up -->
  <MobileMenuPopUp v-model="showMobileMenuPopUp" />
</template>
<script setup>
import { ref } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import BannerView from '@/components/BannerView.vue'
import FooterView from '@/components/FooterView.vue'
import SpaceAIView from '@/components/SpaceAIView.vue'
import SolutionView from '@/components/SolutionView.vue'
import AdvantagesView from '@/components/AdvantagesView.vue'
import IntegrateView from '@/components/IntegrateView.vue'
import ChatView from '@/components/ChatView.vue'
import ReturnView from '@/components/ReturnView.vue'
import DeviceView from '@/components/DeviceView.vue'
import PriceView from '@/components/PriceView.vue'
import AddOnView from '@/components/AddOnView.vue'
import ContactView from '@/components/ContactView.vue'
import ContactPopUp from '@/common/ContactPopUp.vue'
import VideoPopUp from '@/common/VideoPopUp.vue'
import MobileMenuPopUp from '@/common/MobileMenuPopup.vue'

const showContactPopUp = ref(false)
const showVideoPopUp = ref(false)
const showMobileMenuPopUp = ref(false)
</script>
