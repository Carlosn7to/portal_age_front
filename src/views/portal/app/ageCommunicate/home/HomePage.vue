<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";

export default defineComponent({
  name: "HomePage",
  components: {SubMenuModules},
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

  <div class="communicate-module">
    <SubMenuModules
      :items="subMenu"
    />
  </div>

</template>

<style scoped lang="scss">

.communicate-module {
  width: 100%;
  height: 100%;
}


</style>