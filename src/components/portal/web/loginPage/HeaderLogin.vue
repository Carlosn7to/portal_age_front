<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderLogin"
})
</script>

<template>
  <div class="header-login-page">
    <h1>Bem-vindo(a)!</h1>
    <div class="logo">
      <img :src="require('@/assets/img/identifyBusiness/logo_azul_portal.png')" alt="logo">
    </div>
  </div>
</template>

<style scoped lang="scss">


.header-login-page {
  height: 40%;
  @include flex(column, center, center, 2vh);

  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .logo {
    padding: 1vh 1vw;
    @include flex(row, center, center, 0);

    img {
      width: 3.5vw;
      border-radius: 7px;
      height: auto;
    }
  }
}

@media screen and (max-width: 670px) {
  .header-login-page {

  }

  .logo {
    img {
      width: 20vw;
    }
  }
}

</style>