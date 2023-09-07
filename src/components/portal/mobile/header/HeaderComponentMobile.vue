<script>
export default {
  name: "MenuComponentMobile"
}
</script>

<template>
  <div class="container-menu">
    <div class="container-logo">
      <img src="@/assets/img/identifyBusiness/AgeLogoMobile.svg" alt="">
    </div>
    <div class="container-icons">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
      </svg>

    </div>
  </div>
</template>

<style scoped lang="scss">

.container-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
}

.container-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
}

.container-icons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin-right: 3rem;
    margin-left: 2rem;
    height: 2.5rem;
  }
}
</style>