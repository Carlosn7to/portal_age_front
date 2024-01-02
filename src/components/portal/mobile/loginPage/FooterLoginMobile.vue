<script>
export default {
  name: "FooterLogin"
}
</script>

<template>
  <div class="footer-login-page">
    <h1>Portal Age Telecom</h1>
    <div class="footer-divisor"></div>
    <div>
      <p>Acesse os principais sistemas internos,</p>
      <p>ferramentas, relatórios, dashboards e mais!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-login-page {
  @include flex(column, center, center, .5vh);
  width: 100%;

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    color: #000000;
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: #00000080;
  }

  .footer-divisor {
    height: .1px;
    width: 90%;
    background-color: #4A4A4A;

  }
}


</style>