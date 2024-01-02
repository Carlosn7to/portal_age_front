<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import ReportPage from "@/components/portal/app/ageReport/ReportPage.vue";
import UserPage from "@/components/portal/app/ageReport/users/UserPage.vue";
import ReportManagement from "@/components/portal/app/ageReport/reports/ReportPage.vue";

export default defineComponent({
  name: "HomePage",
  components: {UserPage, ReportPage, SubMenuModules, ReportManagement},
  data () {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {id: 1, title: 'Relatórios', subtitle: 'Listagem'}
          ]},
        {title: 'Gerenciamento',
          subItems: [
            {id: 2, title: 'Usuários', subtitle: 'Gerenciamento'},
            {id: 3, title: 'Relatórios', subtitle: 'Gerenciamento'}
          ]},
      ],
      page: {
        id: 1,
        title: 'Relatórios',
        subtitle: 'Listagem'
      }
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
  <div class="home-page">
    <SubMenuModules :items="subMenu" @page="tradePage" />
    <div class="content-page">
      <h1>Painel de {{ page.title }}</h1>
      <span>{{ page.subtitle }}</span>
      <ReportPage v-if="page.id === 1"/>
      <UserPage v-else-if="page.id === 2"/>
      <ReportManagement v-else-if="page.id === 3"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.home-page {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, 1vw);

  .content-page {
    padding: 2vh 1vw;
    width: 84%;

    h1 {
      color: #000000;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 3.4rem;
    }

    span {
      color: #5F687A;
      font-weight: 500;
      font-size: 1.2rem;
    }

  }
}

</style>