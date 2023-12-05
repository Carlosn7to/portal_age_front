<script>
import GraphsComponent from "@/components/portal/app/ageRV/b2c/sales/GraphsComponent.vue";
import LastSales from "@/components/portal/app/ageRV/b2c/sales/LastSales.vue";

export default {
  name: "SalesComponent",
  components: { GraphsComponent, LastSales}
}
</script>

<template>
  <div class="data">
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
  grid-template-rows: 80% 20%;
  grid-template-areas: 'G S'
                          'D S';
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
      grid-template-rows: 50% 50%;
      grid-template-areas: 'G S'
                          'D S';
    }
  }
}

</style>