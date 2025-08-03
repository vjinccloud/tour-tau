<template>
  <div class="footer-view">
    <div class="footer-container">
      <img src="@/assets/images/king_logo.svg" alt="logo" class="logo cursor-opacity">

      <div class="footer-info">
        <div class="footer-info-title">
          {{ $t('footer.companyName') }}
        </div>
        <div class="footer-info-number">
          {{ $t('footer.taxId') }}
        </div>
        <div class="footer-info-contact">
          <a href="mailto:info@seeulair.com">
            <img src="@/assets/images/icon_mail.svg" alt="mail" class="icon-mail">
            info@seeulair.com
          </a>
          <a href="tel:+886-2-27188083">
            <img src="@/assets/images/icon_phone.svg" alt="phone" class="icon-phone">
            +886-2-2718-8083
          </a>
          <a href="https://maps.app.goo.gl/t2pAecACbtgp35aPA" target="_blank">
            <img src="@/assets/images/icon_location.svg" alt="location" class="icon-location">
            {{ $t('footer.address') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
$primary-color: #353535;
.footer-view {
  width: 100%;
  height: 208px;
  background-color: #FAFAFA;
  box-sizing: border-box;
  .footer-container {
    display: flex;
    align-items: center;
    width: calc(100% - 32px);
    height: 100%;
    gap: 24px;
    max-width: 1196px;
    padding: 0 16px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .logo {
    width: 178px;
    cursor: pointer;
  }
  .footer-info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    .footer-info-title {
      font-size: 20px;
      font-weight: 700;
      color: $primary-color;
      line-height: 1.5;
    }
    .footer-info-number {
      font-size: 14px;
      font-weight: 400;
      color: $primary-color;
      line-height: 1.5;
    }
    .footer-info-contact {
      display: flex;
      align-items: center;
      gap: 16px;
      a {
        font-size: 14px;
        font-weight: 400;
        color: $primary-color;
        line-height: 1.5;
        display: flex;
        align-items: center;
        gap: 4px;
        img {
          width: 16px;
        }
      }
    }
  }
}
@media (max-width: 860px) {
  .footer-view {
    height: auto;
    padding: 48px  55px;
    .footer-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      padding: 0;
      margin: 0;
    }
  }
}
@media (max-width: 768px) {
  .footer-view {
    .footer-container {
      padding: 0;
      margin: 0;
      .footer-info {
        gap: 12px;
      }
      .footer-info-contact {
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
}
</style>
