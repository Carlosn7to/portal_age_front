<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import ReportPage from "@/components/portal/app/ageReport/ReportPage.vue";

export default defineComponent({
  name: "HomePage",
  components: {ReportPage, SubMenuModules},
  data () {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {title: 'Relatórios'}
          ]},
        {title: 'Gerenciamento',
          subItems: [
            {title: 'Usuários'},
            {title: 'Relatórios'}
          ]},
      ],
      page: {
        title: 'Painel analítico de relatórios',
        subtitle: 'Listagem de relatórios',
        actual: 'Relatórios'
      }
    }
  },
  methods: {
    tradePage (page) {
      this.page.actual = page
    }
  }
})
</script>

<template>
  <div class="home-page">
    <SubMenuModules :items="subMenu" @page="tradePage" />
    <div class="content-page">
      <h1>{{ page.title }}</h1>
      <span>{{ page.subtitle }}</span>
      <ReportPage v-if="page.actual === 'Relatórios'"/>

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