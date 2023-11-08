<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import AntiFraud from "@/components/portal/app/ageTools/tools/home/AntiFraud.vue";
import ScheduleTechnical from "@/components/portal/app/ageTools/tools/home/ScheduleTechnical.vue";
import AgeAttendant from "@/components/portal/app/ageTools/tools/home/AgeAttendant.vue"

export default defineComponent({
  name: "HomePage",
  components: {ScheduleTechnical, AntiFraud, SubMenuModules, AgeAttendant},
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
            {title: 'Atendimento'},
          ]},
        // {title: 'Gerenciamento',
        //   subItems: [
        //     {title: 'Permissões de acesso'},
        //     {title: 'Logs'}
        //   ]},
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
      <AntiFraud v-if="page.title === 'Anti-Fraude'"/>
      <ScheduleTechnical v-if="page.title === 'Agenda Técnica'"/>
      <AgeAttendant v-if="page.title === 'Atendimento'"/>
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
    padding: 2vh 2vw;
    height: 100%;
  }
}

</style>