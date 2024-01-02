<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import OptionsComunicate from "@/components/portal/app/ageComunicate/home/OptionsComunicate.vue";

export default defineComponent({
  name: "HomePage",
  components: {OptionsComunicate, SubMenuModules},
  data () {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {title: 'Tela Inicial'},
            {title: 'Gerenciamento'}
          ]},
        {title: 'Opções',
          subItems: [
            {title: 'Nova comunicação'},
            {title: 'Comunicação existente'}
          ]},
      ],
    }
  }
})
</script>

<template>

  <div class="home-page">
    <SubMenuModules :items="subMenu"/>
    <div class="content-page">
      <div>
        <OptionsComunicate/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.home-page {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, .1vw);

  .content-page {
    background-image: url("@/assets/img/identifyBusiness/logoBackgroundComunicate.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    width: 100%;
    height: 100%;
    @include flex(row, center, center, .1vw);
    animation: fadeIn 1s ease-in-out forwards;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    }
  }


</style>