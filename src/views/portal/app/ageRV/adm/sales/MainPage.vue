<script>
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import AllSales from "@/components/portal/app/ageRV/adm/AllSales.vue";

export default {
  name: "MainPage",
  components: {AllSales, SubMenuModules},
  data () {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {title: 'Vendas'},
            {title: 'Analítico'}
          ]},
        {title: 'Gerenciamento',
          subItems: [
            {title: 'Usuários'},
            {title: 'Regra de negócio'}
          ]},
      ],
      page: {
        actual: 'sales',
        title: 'comissões',
        subtitle: 'Listagem das comissões',
        component: ''
      }
    }
  },
}
</script>

<template>
  <div class="container-sales">
    <SubMenuModules :items="subMenu"/>
    <div class="content">
      <div class="title">
        <h2>Painel de {{ page.title }}</h2>
        <span>{{ page.subtitle }}</span>
      </div>
      <AllSales v-if="page.actual === 'sales'"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container-sales {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, 1vw);

  .content {
    padding: 2vh 1vw;
    width: 83%;
    @include flex(column, flex-start, initial, 3vh);

    .title {
      @include flex(column, flex-start, initial, .5vh);
      h2 {
        font-size: 2rem;
        color: #000;
        font-weight: 500;
      }
      span {
        font-size: 1.4rem;
        color: #5F687A;
        font-weight: 400;
      }
    }
  }


}



</style>