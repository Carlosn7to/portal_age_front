<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderLogin"
})
</script>

<template>
  <div class="header-logo">
    <img src="@/assets/img/identifyBusiness/AgeLogo.svg" alt="">
  </div>
  <div class="header-login-page">
    <h1>Bem-vindo(a)!</h1>
    <h2>Acesse com seu usuário Age Telecom</h2>
  </div>
</template>

<style scoped lang="scss">
.header-logo {
  height: 10%;
  width: 100%;
  @include flex(column, center, center, 2vh);
  background-color: #F5F7FB;

  img {
    width: 7vw;
    height: auto;
  }
}

.header-login-page {
  height: 30%;
  @include flex(column, flex-end, center, 2vh);

  h1 {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #00000056;
  }

}

</style>