<script>
import {defineComponent} from 'vue'
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: "MenuComponent",
  props: ['showMenu'],
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      'SAVE_SYSTEM'
    ]),
    tradeMenu() {
      this.$emit('menu')
    }
  },
  computed: {
    ...mapGetters([
      'system'
    ]),
  }
})
</script>

<template>
  <div class="items-menu">
    <router-link to="/inicio" @click="SAVE_SYSTEM({module: 'Página inicial'})"
                 :class="{'routed' : system.module === 'Página inicial'}">
      <div class="item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>
      </div>
    </router-link>
    <button class="button-item" @click="tradeMenu(); SAVE_SYSTEM({module: 'Vendas'})" :class="{'routed' : system.module === 'Vendas'}">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/>
      </svg>
    </button>
    <div v-if="showMenu" class="mobile-menu" :class="{'menu-appears' : showMenu}">
      <div class="menu-icon-container">
        <div class="menu-icon"></div>
      </div>
      <ul>

        <li class="item-icon">
          <router-link to="/rv/b2c/vendas">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                  d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
            </svg> <span>Sua Atividade</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
.items-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #F5F7FB;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 10vw;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.5rem;
    padding: 1.5rem;

    svg {
      height: 2rem;
      width: 2rem;
      fill: #000000;
    }
  }

  .button-item {
    width: 12%;
    height: 4.5rem;
    border: none;
    background-color: transparent;

    svg {
      height: 2rem;
      width: 2rem;
      fill: #000000;
    }
  }

  .routed {
    background: linear-gradient(62deg, rgba(255, 182, 0, 1) 32%, rgba(255, 92, 74, 1) 100%);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .2);
    border-radius: 10px;

    svg {
      fill: #ffffff;
    }
  }
}

.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* Cor de fundo do menu */
  height: 60vh;
}

.menu-appears {
  animation: up-menu forwards ease-in-out .3s;

}

@keyframes up-menu {
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}

.menu-icon-container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.menu-icon {
  margin-top: .5vh;
  height: 5px;
  width: 10%;
  border-radius: 5px;
  background-color: #5F687A;
}

.item-icon {
  margin-top: 3vw;
  margin-left: 5vw;

  a {
    @include flex(row, flex-start, center, 0);

  }
  span {
    font-size: 1.7rem;
    font-weight: 500;
    color: #000000;
    margin-left: 1.5vw;
  }

  svg {
    font-size: 2rem;
  }
}


</style>