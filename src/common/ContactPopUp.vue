<template>
  <Transition name="fade" appear>
    <div v-if="visible" class="contact-pop-up" @click="handleBackdropClick">
      <Transition name="scale" appear>
        <div class="contact-pop-up-container" @click.stop>
          <div class="contact-pop-up-title">{{ $t('contactPopup.title') }}</div>
          <button class="close-btn" @click="close">✕</button>
          <div class="contact-pop-up-form">
            <div class="form-group">
              <div class="contact-pop-up-form-item-title">{{ $t('contactPopup.customerInfo') }}</div>
              <div class="contact-pop-up-form-item">
                <label for="name">{{ $t('contactPopup.fields.name') }}<span>*</span></label>
                <input type="text" id="name" v-model="formData.name" :placeholder="$t('contactPopup.fields.placeholder')">
              </div>
              <div class="contact-pop-up-form-item">
                <label for="company">{{ $t('contactPopup.fields.company') }}<span>*</span></label>
                <input type="text" id="company" v-model="formData.company" :placeholder="$t('contactPopup.fields.placeholder')">
              </div>
              <div class="contact-pop-up-form-item">
                <label for="email">{{ $t('contactPopup.fields.email') }}</label>
                <input type="text" id="email" v-model="formData.email" :placeholder="$t('contactPopup.fields.placeholder')">
              </div>
              <div class="contact-pop-up-form-item">
                <label for="phone">{{ $t('contactPopup.fields.phone') }}</label>
                <input type="text" id="phone" v-model="formData.phone" :placeholder="$t('contactPopup.fields.placeholder')">
              </div>
            </div>
            <div class="form-group">
              <div class="contact-pop-up-form-item-title">{{ $t('contactPopup.requirements') }}</div>
              <div class="contact-pop-up-form-radio-item">
                <label for="name">{{ $t('contactPopup.deviceType') }}</label>
                <div class="radio-list">
                  <div class="radio-item" v-for="size in sizeOptions" :key="size.key" @click="formData.size = size.key" :class="{ 'active': formData.size === size.key }">{{ $t(size.label) }}</div>
                </div>
              </div>
              <div class="contact-pop-up-form-radio-item">
                <label for="name">{{ $t('contactPopup.rentDuration') }}</label>
                <div class="radio-list">
                  <div class="radio-item" v-for="due in dueOptions" :key="due.key" @click="formData.due = due.key" :class="{ 'active': formData.due === due.key }">{{ $t(due.label) }}</div>
                </div>
              </div>
              <div class="contact-pop-up-form-radio-item">
                <label for="name">{{ $t('contactPopup.memberPlan') }}</label>
                <div class="radio-list">
                  <div class="radio-item" v-for="member in memberOptions" :key="member.key" @click="formData.member = member.key" :class="{ 'active': formData.member === member.key }">{{ $t(member.label) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-pop-up-form-submit">
            <button class="submit-btn" :disabled="!formData.name || !formData.company || !formData.size || !formData.due || !formData.member" @click="handleSubmit">{{ $t('common.buttons.submit') }}</button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const formData = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  size: '',
  due: '',
  member: '',
})

const sizeOptions = [
  { key: 'size32', label: 'plan.sizes.size32' },
  { key: 'size55', label: 'plan.sizes.size55' }
]

const dueOptions = [
  { key: 'week', label: 'contactPopup.options.durations.week' },
  { key: 'month', label: 'contactPopup.options.durations.month' },
  { key: 'quarter', label: 'contactPopup.options.durations.quarter' },
  { key: 'yearly', label: 'contactPopup.options.durations.yearly' }
]

const memberOptions = [
  { key: 'premium', label: 'contactPopup.options.members.premium' },
  { key: 'enterprise', label: 'contactPopup.options.members.enterprise' }
]

const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)

const close = () => {
  visible.value = false
  emit('update:modelValue', false)
}

const handleBackdropClick = () => {
  close()
}

const handleSubmit = () => {
  console.log(formData.value)
  close()
}

// 監聽外部傳入的 modelValue 變化
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
}, { immediate: true })
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

// 彈窗縮放動畫
.scale-enter-active, .scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.contact-pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  .contact-pop-up-container {
    position: relative;
    box-sizing: border-box;
    width: calc(100% - 48px);
    max-width: 886px;
    max-height: calc(100vh - 100px);
    background-color: #fff;
    border-radius: 12px;
    padding: 46px 64px 64px 64px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 48px;
    overflow-y: auto;
    margin: 100px 0;




    .close-btn {
      position: absolute;
      top: 53px;
      right: 64px;
      background: none;
      border: none;
      font-size: 30px;
      color: $primary-color;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .contact-pop-up-title {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.5;
      color: $primary-color;
      text-align: center;
    }
    .contact-pop-up-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      width: 100%;
      .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 12px;
        width: 100%;
        .contact-pop-up-form-item-title {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.5;
          color: $primary-color;
          margin-bottom: 5px;
        }
        .contact-pop-up-form-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          label {
            width: 150px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color: $primary-color;
            span {
              color: #FF2A2A;
              margin-left: 4px;
            }
          }
          input {
            flex: 1;
            height: 50px;
            min-height: 50px;
            border-radius: 4px;
            padding: 0 16px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color: $primary-color;
            background-color: #FAFAFA;
          }
        }
        .contact-pop-up-form-radio-item {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          label {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color: $primary-color;
          }
          .radio-list {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
            flex-wrap: wrap;
            .radio-item {
              font-size: 20px;
              font-weight: 700;
              line-height: 1.5;
              color: $primary-color;
              cursor: pointer;
              padding: 12px 24px;
              border-radius: 100px;
              border: 1px solid #E2E2E2;
              &.active {
                border: 1px solid #FDDD59;
                box-shadow: 0 0 0 1px #FDDD59;
                background-color: rgba(253, 221, 89, 0.2);
              }
            }
          }
        }
      }
    }
    .contact-pop-up-form-submit {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .submit-btn {
        width: 300px;
        height: 59px;
        border-radius: 100px;
        background-color: #FDDD59;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: $primary-color;
        cursor: pointer;
        &:disabled {
          background-color: #EDEDED;
          color: #B9B9B9;
          cursor: not-allowed;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .contact-pop-up {
    .contact-pop-up-container {
      padding: 32px 16px;
      width: calc(100% - 32px);
      gap: 24px;
      .close-btn {
        top: 38px;
        right: 16px;
        width: 24px;
        height: 24px;
        font-size: 24px;
      }
      .contact-pop-up-title {
        font-size: 24px;
      }
      .contact-pop-up-form {
        gap: 32px;
        .form-group {
          gap: 16px;
          .contact-pop-up-form-item-title {
            font-size: 20px;
            margin-bottom: 0;
          }
          .contact-pop-up-form-item {
            gap: 8px;
            flex-direction: column;
            label {
              width: 100%;
            }
            input {
              width: 100%;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .contact-pop-up-form-submit {
    .submit-btn {
      width: 100% !important;
    }
  }
}
</style>
