<script>
import { defineComponent } from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import CommunicateComponent from "@/components/portal/app/ageCommunicate/OptionsComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: {CommunicateComponent, SubMenuModules,},
  data() {
    return {
      subMenu: [
        {
          title: 'Principal',
          subItems: [
            { title: 'Tela Inicial' },
            { title: 'Gerenciamento' }
          ]
        },
        {
          title: 'Opções',
          subItems: [
            { title: 'Nova comunicação' },
            { title: 'Comunicação existente' }
          ]
        },
      ],
    }
  }
})
</script>

<template>
  <div class="communicate-module">
    <SubMenuModules :items="subMenu" />
    <CommunicateComponent />
  </div>
</template>

<style scoped lang="scss">
.communicate-module {
  width: 100%;
  height: 100%;
  @include flex(row, space-between, center, 0);
}

</style>