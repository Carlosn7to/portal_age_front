<script>
export default {
  name: "HeaderLogoLogin"
}
</script>

<template>
  <div class="header-logo-login">
    <img :src="require('@/assets/img/identifyBusiness/AgeLogo.svg')" alt="logo_age">
  </div>
</template>

<style scoped lang="scss">
.header-logo-login {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  height: 10vh;
  width: 100vw;
  background-color: #F5F7FB;

  img {
    width: 20vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>