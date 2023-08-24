<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import DashboardsComponent from "@/components/portal/app/ageRV/b2c/sales/DashboardsComponent.vue";
import LastSales from "@/components/portal/app/ageRV/b2c/sales/LastSales.vue";
import GraphsComponent from "@/components/portal/app/ageRV/b2c/sales/GraphsComponent.vue";
export default defineComponent({
  name: "SalesPage",
  components: {GraphsComponent, LastSales, DashboardsComponent, SubMenuModules},
  data: () => {
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
      ]
    }
  }
})
</script>

<template>
  <div class="container-sales">
    <SubMenuModules :items="subMenu"/>
    <div class="content">
      <div class="title">
        <h2>Painel de vendas</h2>
        <span>Gráfico de monitoramento das suas vendas.</span>
      </div>
      <div class="data">
        <div class="container-dashboards">
          <DashboardsComponent/>
        </div>
        <div class="container-graphs">
          <GraphsComponent/>
        </div>
        <div class="container-last-sales">
          <LastSales/>
        </div>
      </div>
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

  .data {
    width: 100%;
    height: 85%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 15% 85%;
    grid-template-areas: 'D S'
                          'G S';
    gap: 1vw;

    .container-dashboards {
      width: 100%;
      grid-area: D;
    }

    .container-graphs {
      grid-area: G;
    }

    .container-last-sales {
      grid-area: S;
    }
  }
}


@media (min-width: 1600px) {
  .container-sales {
    .data {
      grid-template-columns: 70% 30%;
      grid-template-rows: 12% 88%;
      grid-template-areas: 'D S'
                          'G S';
    }
  }
}

</style>