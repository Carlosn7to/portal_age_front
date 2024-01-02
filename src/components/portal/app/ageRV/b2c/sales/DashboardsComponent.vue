<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { defineComponent } from 'vue'
import LineChart from '@/components/portal/app/_fragments/chart/LineChart.vue'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default defineComponent({
  name: "DashboardsComponent",
  components: {
    LineChart
  },

  data() {
    return {
      datacollection: {
        labels: [
          'Dia 1',
          'Dia 2',
          'Dia 3',
          'Dia 4',
          'Dia 5',
          'Dia 6',
          'Dia 7',
          'Dia 8',
          'Dia 9',
          'Dia 10',
          'Dia 11',
          'Dia 12',
          'Dia 13',
          'Dia 14',
          'Dia 15',
          'Dia 16',
          'Dia 17',
          'Dia 18',
          'Dia 19',
          'Dia 20',
          'Dia 21',
          'Dia 22',
          'Dia 23',
          'Dia 24',
          'Dia 25',
          'Dia 26',
          'Dia 27',
          'Dia 28',
          'Dia 29',
          'Dia 30'
        ],
        datasets: [{
          label: 'Número de vendas',
          backgroundColor: '#FFB600',
          borderColor: '#FFB600',
          tension: 0.4,
          data: [10, 54, 21, 84, 86, 43, 56, 9, 43, 35, 6, 10, 54, 21, 84, 86, 43, 56, 9, 43, 35, 6, 10, 54, 21, 84, 86, 43, 56, 9] // Adicione os dados correspondentes
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            display: false,
          }
        }
      },
      currentSales: 200,
      salesTarget: 1000,
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentSales / this.salesTarget) * 100
    },
    formattedProgressPercentage() {
      return this.progressPercentage.toFixed(2) + '%'; // Arredonda para 2 casas decimais e adiciona o símbolo '%'
    }
  }
})
</script>

<template>
  <div class="container-dashboards">
    <div class="content-dashboard">
      <h1>Gráfico de Vendas</h1>
      <div class="first-row">
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="progress-bar-subtitle">
          <div class="progress-subtitle"></div>
          <div class="label-subtitle"><span>{{ formattedProgressPercentage }} Atingida</span></div>
        </div>
      </div>
      <div class="chart-container">
        <LineChart class="chart" :chart-data="datacollection" :chart-options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-dashboards {
  border: 1.5px solid rgba(95, 104, 122, 0.30);
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  height: 100%;

  .content-dashboard {
    margin: 1rem;
    height: 100%;

    h1 {
      margin-bottom: 1vh;
      font-size: 1.6rem;
      font-weight: 600;
      color: #000000;
    }
  }
}

.first-row {
  display: flex;
  flex-direction: row;
}

.progress-bar {
  width: 80%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 3vh;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 10px;
  background-color: #FFB600;
  /* Por exemplo, verde. Altere conforme sua preferência. */
  width: 0%;
  /* Inicialmente, sem progresso. */
}

.progress-bar-subtitle {
  display: flex;
  flex-direction: row;
}

.progress-subtitle {
  width: 2vw;
  height: 8px;
  background-color: #FFB600;
  border-radius: 10px;
  margin-bottom: 3vh;
  margin-left: .5vw;
  overflow: hidden;
}

.label-subtitle {
  margin-bottom: 3vh;
  margin-left: .5vw;
  font-size: 1rem;
  font-weight: 600;
}

.chart-container {
  width: 80%;

  .chart {
    width: 100%;
    height: 27vh;
  }
}
</style>