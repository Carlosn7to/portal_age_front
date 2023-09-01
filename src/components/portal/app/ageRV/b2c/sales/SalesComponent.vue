<script>
import GraphsComponent from "@/components/portal/app/ageRV/b2c/sales/GraphsComponent.vue";
import DashboardsComponent from "@/components/portal/app/ageRV/b2c/sales/DashboardsComponent.vue";
import LastSales from "@/components/portal/app/ageRV/b2c/sales/LastSales.vue";

export default {
  name: "SalesComponent",
  components: {LastSales, DashboardsComponent, GraphsComponent}
}
</script>

<template>
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
</template>

<style scoped lang="scss">

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