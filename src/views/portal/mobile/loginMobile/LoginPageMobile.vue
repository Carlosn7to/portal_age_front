<script>
import {defineComponent} from 'vue'
import FormLoginMobile from "@/components/portal/mobile/loginPage/FormLoginMobile.vue";
import HeaderLogoLoginMobile from "@/components/portal/mobile/loginPage/HeaderLogoLoginMobile.vue";
import FooterLoginMobile from "@/components/portal/mobile/loginPage/FooterLoginMobile.vue";

export default defineComponent({
  name: "LoginPage",
  components: {FooterLoginMobile, HeaderLogoLoginMobile, FormLoginMobile}
})
</script>

<template>
  <div class="login-page-container">
    <HeaderLogoLoginMobile/>
    <div class="login-background">
      <div class="login-container">
        <div class="card-login-page">
          <FormLoginMobile/>
        </div>
      </div>
      <div class="footer-login-page">
        <FooterLoginMobile/>
      </div>
    </div>
    <!--    <img :src="require('@/assets/img/identifyBusiness/logo_blue.png')" alt="logo_age">-->
  </div>
</template>

<style scoped lang="scss">

.login-page-container {
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.login-background {
  background-image: url("@/assets/img/identifyBusiness/loginBackgroundMobile.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.card-login-page {
  height: 60%;
}

.login-container {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.footer-login-page {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 3;
}

</style>