<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import AntiFraud from "@/components/portal/app/ageTools/tools/home/AntiFraud.vue";

export default defineComponent({
  name: "HomePage",
  components: {AntiFraud, SubMenuModules},
  data () {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {title: 'Tela inicial'},
          ]},
        {title: 'Ferramentas',
          subItems: [
            {title: 'Anti-Fraude'},
            {title: 'Agenda Técnica'},
            {title: 'Capacidade Técnica'},
          ]},
        {title: 'Gerenciamento',
          subItems: [
            {title: 'Permissões de acesso'},
            {title: 'Logs'}
          ]},
      ],
      page: 'Tela inicial'
    }
  },
  methods: {
    tradePage (page) {
      this.page = page
    }
  }
})
</script>

<template>
  <div class="tools-module">
    <SubMenuModules
        :items="subMenu"
        @page="tradePage"
    />

    <div class="page-tools">
      <AntiFraud v-if="page === 'Anti-Fraude'"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.tools-module {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, center, 0vw);

  .page-tools {
    width: 85%;
    padding: 4vh 2vw;
    height: 100%;
  }
}

</style>