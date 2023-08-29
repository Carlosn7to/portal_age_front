<script>
import {defineComponent} from 'vue'
import FormLogin from "@/components/portal/web/loginPage/FormLogin.vue";
import HeaderLogin from "@/components/portal/web/loginPage/HeaderLogin.vue";

export default defineComponent({
  name: "LoginPage",
  components: {HeaderLogin, FormLogin}
})
</script>

<template>
  <div class="login-page-container">
      <div class="card-login-page">
        <HeaderLogin/>
        <FormLogin/>
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
  justify-content: center;
  align-items: center;

  .card-login-page {
    width: 20%;
    padding: 4vh 0 6vh 0;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border-radius: 7px;
    z-index: 3;
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

  @media screen and (max-width: 670px) {
    .card-login-page {
      width: 80%;

    }
  }
}


</style>