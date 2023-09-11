<script>
import {defineComponent} from 'vue'
import FormLogin from "@/components/portal/web/loginPage/FormLogin.vue";
import HeaderLogin from "@/components/portal/web/loginPage/HeaderLogin.vue";
import FooterLogin from "@/components/portal/web/loginPage/FooterLogin.vue";

export default defineComponent({
  name: "LoginPage",
  components: {FooterLogin, HeaderLogin, FormLogin}
})
</script>

<template>
  <div class="login-page-container">
    <HeaderLogin/>
    <div class="card-login-page">
      <FormLogin/>
    </div>
    <div class="footer-login-page">
      <FooterLogin/>
    </div>
    <!--    <img :src="require('@/assets/img/identifyBusiness/logo_blue.png')" alt="logo_age">-->
  </div>
</template>

<style scoped lang="scss">

.login-page-container {
  width: 100vw;
  height: 100vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("@/assets/img/identifyBusiness/loginBackground.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .card-login-page {
    width: 23vw;
  }

  //img {
  //  position: absolute;
  //  left: -5vw;
  //  bottom: -20vw;
  //  width: 50vw;
  //  height: auto;
  //  z-index: 1;
  //  opacity: .4;
  //}
}

.footer-login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
  left: 0;
  z-index: 2;
  margin-bottom: 2vh;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #00000056;
  }
}


</style>