<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DashboardsComponent",
  data() {
    return {
      currentSales: 200,
      salesTarget: 1000,
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentSales / this.salesTarget) * 100
    }
  }
})
</script>

<template>
  <div class="container-dashboards">
    <div class="content-dashboard">
      <h1>Gráfico de Vendas</h1>
      <div class="progress-bar">
        <div class="progress" :style="{width: progressPercentage + '%'}"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container-dashboards {
  border: 1.5px solid rgba(95, 104, 122, 0.30);
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  .content-dashboard {
    margin: 8px 0 0 16px;

    h1 {
      font-size: 1.6rem;
      font-weight: 600;
      color: #000000;
    }
  }
}

.progress-bar {
  width: 100%;
  height: 12px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 10px;
  background-color: #4CAF50; /* Por exemplo, verde. Altere conforme sua preferência. */
  width: 0%; /* Inicialmente, sem progresso. */
}


</style>