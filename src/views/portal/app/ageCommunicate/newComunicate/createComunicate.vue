<script>

import NewComunicate from "@/components/portal/app/ageComunicate/newComunicate/NewComunicate.vue";
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";

export default {
  name: "createComunicate",
  components: {SubMenuModules, NewComunicate},
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
  },
  methods: {
    changePage(page) {
      this.page.actual = page
    }
  }
}
</script>

<template>
  <div class="create-comunicate">
    <SubMenuModules :items="subMenu"/>
    <div>
    <NewComunicate/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.create-comunicate {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, .1vw);
}
</style>