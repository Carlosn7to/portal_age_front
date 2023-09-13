<script>
import {defineComponent} from 'vue'
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: "MenuComponent",
  props: ['showMenu', 'showSubMenu', 'showCommission'],
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      'SAVE_SYSTEM',
    ]),
    tradeMenu() {
      this.$emit('menu')
    },
    tradeSubMenu() {
      this.$emit('subMenu')
    },
    tradeCommission() {
      this.$emit('commission')
    }
  },
  computed: {
    ...mapGetters([
      'system'
    ]),
  }

});
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
    <button class="button-item" @click="tradeMenu();">
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
      <div>
        <div class="item-icon">
          <div class="item-row" @click="tradeSubMenu">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                  d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
            </svg>
            <span>Sua Atividade</span>
          </div>
          <div class="SubMenu-mobile-container">
            <div v-if="showSubMenu === true" class="mobile-SubMenu" :class="{'menu-appears-mobile' : showSubMenu}">

              <div class="SubMenu-icon-container">
                <div class="SubMenu-close">
                  <svg @click="tradeSubMenu()" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                       viewBox="0 0 16 16" fill="none">
                    <path
                        d="M15.5265 2.73247C16.1512 2.10776 16.1512 1.09324 15.5265 0.46853C14.9018 -0.156177 13.8872 -0.156177 13.2625 0.46853L8 5.73606L2.73247 0.473528C2.10776 -0.151179 1.09324 -0.151179 0.46853 0.473528C-0.156177 1.09824 -0.156177 2.11276 0.46853 2.73747L5.73606 8L0.473528 13.2675C-0.151179 13.8922 -0.151179 14.9068 0.473528 15.5315C1.09824 16.1562 2.11276 16.1562 2.73747 15.5315L8 10.2639L13.2675 15.5265C13.8922 16.1512 14.9068 16.1512 15.5315 15.5265C16.1562 14.9018 16.1562 13.8872 15.5315 13.2625L10.2639 8L15.5265 2.73247Z"
                        fill="black" fill-opacity="0.5"/>
                  </svg>
                </div>
                <div class="SubMenu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="23" viewBox="0 0 60 23" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M11.579 0.476516C17.8809 0.571824 22.9134 5.66069 22.8196 11.8427V11.842C22.7531 16.2204 20.3026 19.1561 18.1394 20.715C18.1394 20.715 17.1062 21.2746 16.5762 20.4255C16.0462 19.5764 16.8982 18.902 16.8982 18.902C19.0051 17.3424 20.5495 14.9294 20.5964 11.8088C20.6715 6.8311 16.6195 2.7343 11.5465 2.65777C6.47282 2.58123 2.29949 6.55384 2.2244 11.5315C2.14931 16.5092 6.20134 20.606 11.2743 20.6825C12.1509 20.696 12.5561 20.6258 12.8131 20.5813C12.8591 20.5733 12.9003 20.5662 12.9386 20.5605C12.9386 20.5605 14.0419 20.3388 14.205 21.4832C14.2917 21.9461 13.9429 22.5865 13.405 22.6977C12.6686 22.85 11.8 22.8602 11.2418 22.8645C4.94068 22.7692 -0.0918695 17.6803 0.00127231 11.4983C0.0944141 5.31628 5.27714 0.381208 11.579 0.476516ZM10.4087 3.55092C5.84039 4.03829 2.52483 8.06649 3.00281 12.5481C3.4808 17.0298 7.64041 20.2601 12.0174 19.7937C12.0174 19.7937 13.047 19.6471 12.9351 18.5995C12.8231 17.5518 11.7437 17.6348 11.7437 17.6348C8.64764 17.9648 5.55735 15.6009 5.20645 12.3127C4.85554 9.02463 7.28806 6.06936 10.6397 5.71195C12.2535 5.54011 13.4672 5.99355 14.2838 6.44554C14.6289 6.63687 15.4845 6.69608 15.803 5.91051C16.1221 5.12494 15.4715 4.59281 15.2802 4.49606C15.2697 4.49075 15.254 4.48229 15.2331 4.4711C14.874 4.27835 13.0025 3.27382 10.4087 3.5502V3.55092ZM31.8254 6.63835C29.0882 6.63835 26.5445 8.77484 26.5445 11.8803C26.5445 14.9857 29.4702 16.998 31.6146 16.9244C31.6146 16.9244 32.6673 16.9244 32.6969 15.8565C32.7265 14.7886 31.6146 14.7886 31.6146 14.7886C30.3554 14.7886 28.8983 13.5251 28.8983 11.7554C28.8983 10.1055 30.255 8.77556 31.8818 8.77556C33.5085 8.77556 34.8652 10.1099 34.8652 11.7554L34.8724 15.8565C34.8724 15.8565 34.9265 16.9244 35.9461 16.9244C36.9656 16.9244 37.0284 15.8565 37.0284 15.8565V11.8608C37.0284 8.71563 34.5634 6.63908 31.8262 6.63908L31.8254 6.63835ZM49.5168 11.781C49.517 8.77611 52.049 6.63835 54.7782 6.63835C57.5075 6.63835 59.9999 8.81383 59.9999 11.7814C59.9999 11.7814 60.005 12.2225 59.9248 12.6514C59.449 12.6514 51.8973 12.6543 51.8973 12.6543C52.454 14.2601 53.7284 14.7872 54.7782 14.7872C55.3977 14.7872 55.9631 14.5698 56.223 14.3987C56.223 14.3987 57.2461 13.9179 57.7255 14.8016C58.2057 15.6847 57.3313 16.2673 57.3313 16.2673L57.2735 16.2954C56.8215 16.5152 55.9813 16.9237 54.7782 16.9237C52.0483 16.9237 49.517 14.7859 49.5168 11.781ZM54.7782 8.77484C55.7853 8.77484 56.998 9.35225 57.5353 10.6875H51.9803C52.5168 9.32503 53.771 8.77484 54.7782 8.77484ZM38.0298 11.7814C38.0298 8.62899 40.6869 6.63835 43.2912 6.63835L43.2927 6.63908C45.8971 6.63908 48.5144 8.69614 48.5144 11.8608V15.8962C48.5144 19.6349 45.4848 21.1974 43.2725 21.1974C41.0602 21.1974 39.375 19.8674 38.6464 18.4768C38.6464 18.4768 38.2573 17.4507 39.1843 17.032C40.1114 16.6125 40.6544 17.5063 40.6544 17.5063C40.8392 17.8587 41.5302 19.0609 43.3317 19.0609C44.5158 19.0609 46.2472 17.9959 46.2472 16.2493C46.2472 16.1222 46.2489 16.0006 46.2507 15.8684C46.2528 15.7107 46.2552 15.5378 46.2552 15.3222C46.2552 16.3049 44.9924 16.9244 43.2718 16.9244C40.7057 16.9244 38.0298 14.9338 38.0298 11.7814ZM40.2883 11.7561C40.2883 13.4016 41.6241 14.7879 43.2718 14.7879C44.9194 14.7879 46.2552 13.4016 46.2552 11.7561C46.2552 10.1106 44.9194 8.77628 43.2718 8.77628C41.6241 8.77628 40.2883 10.1106 40.2883 11.7561ZM11.322 6.52645C8.58475 6.52645 6.04104 8.66294 6.04104 11.7684C6.04104 14.8738 8.9667 16.8861 11.1111 16.8125C11.1111 16.8125 12.1639 16.8125 12.1935 15.7446C12.2231 14.6767 11.1111 14.6767 11.1111 14.6767C9.85191 14.6767 8.39486 13.4132 8.39486 11.6435C8.39486 9.99364 9.75155 8.66366 11.3783 8.66366C13.005 8.66366 14.3617 9.99797 14.3617 11.6435L14.3689 15.7446C14.3689 15.7446 14.4231 16.8125 15.4426 16.8125C16.4621 16.8125 16.5249 15.7446 16.5249 15.7446V11.7489C16.5249 8.60373 14.0599 6.52717 11.3227 6.52717L11.322 6.52645Z"
                          fill="url(#paint0_linear_1734_122)"/>
                    <defs>
                      <linearGradient id="paint0_linear_1734_122" x1="-0.000154605" y1="11.6702" x2="22.821"
                                      y2="11.6702" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F59D1B"/>
                        <stop offset="1" stop-color="#FC461B"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="SubMenu-title-container">
                <div class="SubMenu-title">
                  <p>Um único lugar para gerenciar suas atividades</p>
                  <div class="SubMenu-sub-title">
                    <p>Visualize e gerencie suas vendas, estrelas, bônus e comissão.</p>
                  </div>
                </div>
              </div>
              <div class="SubMenu-container">
                <div class="SubMenu-sub">
                  <p>Sua Atividade</p>
                </div>
                <div class="SubMenu-menu">
                  <div class="SubMenu-row" @click="tradeCommission()">
                    <div class="items-title">
                      <div class="item-row-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 15 25" fill="none">
                          <path
                              d="M7.54147 0C8.45849 0 9.19935 0.698242 9.19935 1.5625V3.30566C9.28224 3.31543 9.35996 3.3252 9.44285 3.33984C9.46357 3.34473 9.47912 3.34473 9.49984 3.34961L11.9867 3.7793C12.8881 3.93555 13.4839 4.75098 13.3181 5.5957C13.1523 6.44043 12.2871 7.00684 11.3909 6.85059L8.92994 6.42578C7.30833 6.20117 5.87841 6.35254 4.87333 6.72852C3.86824 7.10449 3.46413 7.62207 3.37088 8.10059C3.26726 8.62305 3.34497 8.91602 3.43305 9.09668C3.5263 9.28711 3.71799 9.50195 4.0962 9.74121C4.94068 10.2637 6.23589 10.6055 7.91449 11.0254L8.06474 11.0645C9.54647 11.4355 11.3598 11.8848 12.7068 12.7148C13.4425 13.1689 14.1367 13.7842 14.5667 14.6436C15.0071 15.5176 15.1004 16.4941 14.8983 17.5342C14.5408 19.3896 13.1834 20.6299 11.4997 21.2793C10.7899 21.5527 10.0179 21.7285 9.19935 21.8164V23.4375C9.19935 24.3018 8.45849 25 7.54147 25C6.62446 25 5.88359 24.3018 5.88359 23.4375V21.7334C5.86287 21.7285 5.83697 21.7285 5.81624 21.7236H5.80588C4.54175 21.5381 2.46422 21.0254 1.06539 20.4395C0.231271 20.0879 -0.146932 19.165 0.22609 18.3789C0.599112 17.5928 1.5783 17.2363 2.41242 17.5879C3.49522 18.042 5.27743 18.4912 6.30843 18.6426C7.96112 18.8721 9.32369 18.7402 10.2459 18.3838C11.1215 18.0469 11.5204 17.5586 11.6344 16.9727C11.7328 16.4551 11.6551 16.1572 11.567 15.9766C11.4686 15.7813 11.2769 15.5664 10.8935 15.3271C10.0438 14.8047 8.74343 14.4629 7.05965 14.043L6.91459 14.0088C5.43804 13.6377 3.62474 13.1836 2.27771 12.3535C1.54203 11.8994 0.852975 11.2793 0.422963 10.4199C-0.0122297 9.5459 -0.100304 8.56934 0.10693 7.5293C0.479953 5.66406 1.96168 4.45312 3.64546 3.82324C4.33452 3.56445 5.09092 3.38867 5.88359 3.28613V1.5625C5.88359 0.698242 6.62446 0 7.54147 0Z"
                              fill="#19233B"/>
                        </svg>
                        <p>Total de Comissão</p>
                      </div>
                    </div>
                    <div class="Submenu-cross">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                        <path
                            d="M9.63386 7.6427C10.122 8.11687 10.122 8.88692 9.63386 9.3611L2.13533 16.6444C1.64714 17.1185 0.854325 17.1185 0.366139 16.6444C-0.122046 16.1702 -0.122046 15.4001 0.366139 14.926L6.98203 8.5L0.370045 2.07403C-0.118141 1.59985 -0.118141 0.8298 0.370045 0.355629C0.858231 -0.118543 1.65104 -0.118543 2.13923 0.355629L9.63777 7.6389L9.63386 7.6427Z"
                            fill="black" fill-opacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                  <div class="SubMenu-row">
                    <div class="items-title">
                      <div class="item-row-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                              d="M7.44141 2.6875L8.80078 5H8.75H5.9375C5.07422 5 4.375 4.30078 4.375 3.4375C4.375 2.57422 5.07422 1.875 5.9375 1.875H6.02344C6.60547 1.875 7.14844 2.18359 7.44141 2.6875ZM2.5 3.4375C2.5 4 2.63672 4.53125 2.875 5H1.25C0.558594 5 0 5.55859 0 6.25V8.75C0 9.44141 0.558594 10 1.25 10H18.75C19.4414 10 20 9.44141 20 8.75V6.25C20 5.55859 19.4414 5 18.75 5H17.125C17.3633 4.53125 17.5 4 17.5 3.4375C17.5 1.53906 15.9609 0 14.0625 0H13.9766C12.7305 0 11.5742 0.660156 10.9414 1.73438L10 3.33984L9.05859 1.73828C8.42578 0.660156 7.26953 0 6.02344 0H5.9375C4.03906 0 2.5 1.53906 2.5 3.4375ZM15.625 3.4375C15.625 4.30078 14.9258 5 14.0625 5H11.25H11.1992L12.5586 2.6875C12.8555 2.18359 13.3945 1.875 13.9766 1.875H14.0625C14.9258 1.875 15.625 2.57422 15.625 3.4375ZM1.25 11.25V18.125C1.25 19.1602 2.08984 20 3.125 20H8.75V11.25H1.25ZM11.25 20H16.875C17.9102 20 18.75 19.1602 18.75 18.125V11.25H11.25V20Z"
                              fill="#19233B"/>
                        </svg>
                        <p>Total de Bônus</p>
                      </div>
                    </div>
                    <div class="Submenu-cross">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                        <path
                            d="M9.63386 7.6427C10.122 8.11687 10.122 8.88692 9.63386 9.3611L2.13533 16.6444C1.64714 17.1185 0.854325 17.1185 0.366139 16.6444C-0.122046 16.1702 -0.122046 15.4001 0.366139 14.926L6.98203 8.5L0.370045 2.07403C-0.118141 1.59985 -0.118141 0.8298 0.370045 0.355629C0.858231 -0.118543 1.65104 -0.118543 2.13923 0.355629L9.63777 7.6389L9.63386 7.6427Z"
                            fill="black" fill-opacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                  <div class="SubMenu-row">
                    <div class="items-title">
                      <div class="item-row-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                              d="M3.33333 0C1.49479 0 0 1.12109 0 2.5V17.5C0 18.8789 1.49479 20 3.33333 20H16.6667C18.5052 20 20 18.8789 20 17.5V6.25H13.3333C12.4115 6.25 11.6667 5.69141 11.6667 5V0H3.33333ZM13.3333 0V5H20L13.3333 0ZM5.83333 10H14.1667C14.625 10 15 10.2812 15 10.625C15 10.9688 14.625 11.25 14.1667 11.25H5.83333C5.375 11.25 5 10.9688 5 10.625C5 10.2812 5.375 10 5.83333 10ZM5.83333 12.5H14.1667C14.625 12.5 15 12.7812 15 13.125C15 13.4688 14.625 13.75 14.1667 13.75H5.83333C5.375 13.75 5 13.4688 5 13.125C5 12.7812 5.375 12.5 5.83333 12.5ZM5.83333 15H14.1667C14.625 15 15 15.2812 15 15.625C15 15.9688 14.625 16.25 14.1667 16.25H5.83333C5.375 16.25 5 15.9688 5 15.625C5 15.2812 5.375 15 5.83333 15Z"
                              fill="#19233B"/>
                        </svg>
                        <p>Total de Vendas</p>
                      </div>
                    </div>
                    <div class="Submenu-cross">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                        <path
                            d="M9.63386 7.6427C10.122 8.11687 10.122 8.88692 9.63386 9.3611L2.13533 16.6444C1.64714 17.1185 0.854325 17.1185 0.366139 16.6444C-0.122046 16.1702 -0.122046 15.4001 0.366139 14.926L6.98203 8.5L0.370045 2.07403C-0.118141 1.59985 -0.118141 0.8298 0.370045 0.355629C0.858231 -0.118543 1.65104 -0.118543 2.13923 0.355629L9.63777 7.6389L9.63386 7.6427Z"
                            fill="black" fill-opacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                  <div class="SubMenu-row">
                    <div class="items-title">
                      <div class="item-row-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                              d="M11.0881 0.703046C10.8873 0.273407 10.4631 0 9.99728 0C9.53142 0 9.11101 0.273407 8.90649 0.703046L6.47114 5.87044L1.03233 6.69847C0.577834 6.76877 0.199086 7.09686 0.05895 7.54603C-0.0811866 7.9952 0.0324375 8.49124 0.35816 8.82323L4.30471 12.8501L3.37299 18.5409C3.29724 19.0096 3.48661 19.4861 3.86157 19.7634C4.23653 20.0407 4.73269 20.0759 5.14174 19.8532L10.0011 17.1778L14.8604 19.8532C15.2694 20.0759 15.7656 20.0446 16.1406 19.7634C16.5155 19.4822 16.7049 19.0096 16.6291 18.5409L15.6936 12.8501L19.6402 8.82323C19.9659 8.49124 20.0833 7.9952 19.9394 7.54603C19.7955 7.09686 19.4205 6.76877 18.966 6.69847L13.5234 5.87044L11.0881 0.703046Z"
                              fill="#19233B"/>
                        </svg>
                        <p>Faixa de Estrelas</p>
                      </div>
                    </div>
                    <div class="Submenu-cross">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                        <path
                            d="M9.63386 7.6427C10.122 8.11687 10.122 8.88692 9.63386 9.3611L2.13533 16.6444C1.64714 17.1185 0.854325 17.1185 0.366139 16.6444C-0.122046 16.1702 -0.122046 15.4001 0.366139 14.926L6.98203 8.5L0.370045 2.07403C-0.118141 1.59985 -0.118141 0.8298 0.370045 0.355629C0.858231 -0.118543 1.65104 -0.118543 2.13923 0.355629L9.63777 7.6389L9.63386 7.6427Z"
                            fill="black" fill-opacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="commission-page" v-if="showCommission" :class="{'menu-appears-mobile' : showCommission}">
                  <div class="row-container-commission">
                    <div class="close-commission" @click="tradeCommission()">
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
                        <path
                            d="M0.494409 7.29994C-0.164803 7.96369 -0.164803 9.04162 0.494409 9.70537L7.24474 16.5022C7.90395 17.1659 8.97451 17.1659 9.63372 16.5022C10.2929 15.8384 10.2929 14.7605 9.63372 14.0967L5.76283 10.1992H25.3124C26.2459 10.1992 27 9.43987 27 8.5C27 7.56013 26.2459 6.8008 25.3124 6.8008H5.76283L9.63372 2.90325C10.2929 2.2395 10.2929 1.16156 9.63372 0.497813C8.97451 -0.165938 7.90395 -0.165938 7.24474 0.497813L0.494409 7.29463V7.29994Z"
                            fill="black"/>
                      </svg>
                      <p>Total de comissão</p>
                    </div>
                  </div>
                  <div class="rowTitle-container-commission">
                    <div class="title-commission">
                      <p>O seu total de comissão</p>
                    </div>
                  </div>
                  <div class="container-commission">
                    <div class="number-commission">
                      <p>R$5.532</p>
                    </div>
                    <div class="subTitle-commission">
                      <p><strong>Comissão total</strong></p>
                      <p>O total de comissão por dia que você adquiriu no periodo de sete dias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

.SubMenu-mobile-container {
  height: 100vh;
}

.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* Cor de fundo do menu */
  height: 60vh;
  border-radius: 15px 15px 0 0;
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
  margin-top: 4vh;
  margin-left: 5vw;

  a {
    @include flex(row, flex-start, center, 0);

  }

  span {
    font-size: 1.8rem;
    font-weight: 500;
    color: #000000;
    margin-left: 1.5vw;
  }

  svg {
    font-size: 2.2rem;
  }
}

.item-row {
  display: flex;
}

.mobile-SubMenu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(89deg, #E5E5E5 3.84%, #354A7B 527.98%);
}

.menu-appears-mobile {
  animation: up-menu-mobile forwards ease-in-out .3s;

}

@keyframes up-menu-mobile {
  from {
    transform: translateY(500px);
  }
  to {
    transform: translateY(0);
  }
}

.SubMenu-icon-container {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.SubMenu-close {
  margin-top: 4vh;
  margin-left: 5vw;
  height: 5px;
  width: 10%;
  border-radius: 5px;
}

.SubMenu-icon {
  margin-top: 4vh;
  margin-left: 25vw;

  svg {
    width: 60px;
    height: 22.389px;
    flex-shrink: 0;
  }
}

.SubMenu-title-container {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 5vh;
}

.SubMenu-title {
  font-size: 2rem;
  font-weight: 500;
  max-width: 70%;
  word-wrap: break-word;
}

.SubMenu-container {
  margin-top: 5vh;
}

.SubMenu-sub {
  margin-left: 8vw;
  margin-bottom: 1vh;
  font-size: 1.5rem;
  font-weight: 500;
}

.SubMenu-sub-title {
  color: #5F687A;
  font-size: 1.3rem;
  font-weight: 400;
  max-width: 100%;
  word-wrap: break-word;
  margin-top: 1vh;
}

.SubMenu-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin-left: 5vw;
  margin-right: 5vw;
  height: 30vh;
  background-color: #FFFFFF;
  border-radius: 5px;
}

.SubMenu-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  height: 50%;
  width: 100%;
  margin-right: 5vw;
  gap: 5vw;
  border-bottom: #00000025 solid 1px;
}

.item-row-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 1vw;
  margin-left: 5vw;

  p {
    position: relative;
    font-size: 1.6rem;
    margin-left: 2vw;
    margin-top: .6vh;
    font-weight: 500;
  }
}

.Submenu-cross {
  margin-top: 1vh;
  height: 5px;
  width: 10%;
  border-radius: 5px;
}

.commission-page {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  z-index: 99;
}

.close-commission {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-direction: row;
  margin-top: 5vh;
  margin-left: 6vw;
  border-radius: 5px;

  svg {
    height: 25px;
  }

  p {
    font-size: 2rem;
    margin-left: 6vw;
    font-weight: 600;
  }
}

.rowTitle-container-commission {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin-top: 3vh;
  margin-left: 6vw;
}

.title-commission {
  font-size: 1.9rem;
  font-weight: 500;
  max-width: 100%;
  word-wrap: break-word;
}

.container-commission {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-top: 3vh;
  flex-wrap: wrap;
  text-align: center;
}

.number-commission {
  font-size: 3rem;
  background: linear-gradient(90deg, #FFB600 4.92%, #F93822 95.45%);
  background-clip: text;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subTitle-commission {
  margin-top: 2vh;
  font-size: 1.3rem;
  font-weight: 500;
  max-width: 80%;
  word-wrap: break-word;
  color: #000000;

  p {
    strong {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
}

</style>