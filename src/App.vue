<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import LoginPage from "@/views/portal/web/LoginPage.vue";
import MenuComponent from "@/components/portal/app/menu/MenuComponent.vue";
import HeaderComponent from "@/components/portal/app/header/HeaderComponent.vue";
import AlertComponent from "@/components/portal/app/_fragments/alert/AlertComponent.vue";
import MenuComponentMobile from "@/components/portal/mobile/menu/MenuComponentMobile.vue";
import HeaderComponentMobile from "@/components/portal/mobile/header/HeaderComponentMobile.vue";

export default defineComponent({
  name: "App",
  components: {HeaderComponentMobile, MenuComponentMobile, AlertComponent, HeaderComponent, MenuComponent, LoginPage},
  computed: {
    ...mapGetters([
      'system'
    ]),
    isMobile() {
      return window.innerWidth <= 768;
    }
  },
  data() {
    return {
      showMenu: false,
      showSubMenu: false,
      showCommission: false,
    }
  },
})
</script>
<template>

  <template v-if="system.login === false">
    <LoginPage/>
  </template>

  <template v-else>

    <template v-if="isMobile">
      <div class="container-mobile">
        <div class="overlay" v-if="showMenu || this.showSubMenu" @click="showMenu = false; showSubMenu = false"></div>
        <div class="header-mobile">
          <HeaderComponentMobile/>
        </div>
        <div class="page-mobile" @click="showMenu = false; showSubmenu = false">
          <router-view></router-view>
        </div>
        <div class="menu-mobile">
          <MenuComponentMobile :showMenu="showMenu" :showSubMenu="showSubMenu" :showCommission="showCommission" @subMenu="showSubMenu = !showSubMenu" @menu="showMenu = true" @commission="showCommission = !showCommission"/>
        </div>
      </div>

      <AlertComponent v-if="system.alert.display === true"/>
    </template>

    <template v-else>
      <div class="container">
        <div class="menu">
          <MenuComponent/>
        </div>
        <div class="header">
          <HeaderComponent/>
        </div>
        <div class="page">
          <router-view></router-view>
        </div>
      </div>
      <AlertComponent v-if="system.alert.display === true"/>
    </template>

  </template>

</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*,
::before,
::after{
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
  text-decoration: none !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  list-style: none;
  box-sizing: border-box;
  letter-spacing: 0.4px;
}

html {
  font-size: 62.5%;
  overflow: hidden;
  overflow-y: scroll;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(245, 244, 243);
  text-indent: 0px;
  color: #333;
  letter-spacing: normal;
  word-spacing: 0px;
  vertical-align: baseline;
}

h1 {
  font-size: 3.6rem;
}

h2 {
  font-size: 1.4rem;
}

.mode-dark {

  h1,h2,h3, h4, h5, h6 {
    color: #fff;
  }

}

/*   PLACEHOLDER   */
::-webkit-input-placeholder {
  color: #33333360;
  font-weight: 500;
  font-size: 1.4rem;
}

/*   SCROLL BAR   */
::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}
::-webkit-scrollbar {
  width: 4px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #dad7d7;
}


.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5% 95%;
  grid-template-rows: 10% 90%;
  grid-template-areas: 'M H'
                        'M P';

  .menu {
    grid-area: M;
    z-index: 3;
  }

  .header {
    grid-area: H;
    z-index: 3;
  }

  .page {
    grid-area: P;
    z-index: 1;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo escura com opacidade */
  z-index: 2; /* Coloque-o acima dos outros componentes, mas abaixo do menu */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-mobile {
 height: 100vh;
}

.page-mobile {
  height: 80vh;
}

.menu-mobile {
  height: 10vh;
  width: 100%;
  position: fixed;
  z-index: 5;
  bottom: 0;
}
</style>
