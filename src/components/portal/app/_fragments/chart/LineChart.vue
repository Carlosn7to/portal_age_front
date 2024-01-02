<script>
import { ref, onMounted, watch, toRefs } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'LineChart',
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const chartRef = ref(null);
    let chartInstance = null;

    // Destructure as props para reatividade
    const { chartData, chartOptions } = toRefs(props);

    // Este efeito irá reagir a mudanças nas props do gráfico e atualizar o gráfico
    watch([chartData, chartOptions], () => {
      if (chartInstance) {
        chartInstance.data = chartData.value;
        chartInstance.options = chartOptions.value;
        chartInstance.update();
      }
    }, {
      deep: true // Isso garante que o watcher detectará mudanças profundas nos objetos
    });

    onMounted(() => {
      chartInstance = new Chart(chartRef.value.getContext('2d'), {
        type: 'line',
        data: chartData.value,
        options: chartOptions.value
      });
    });

    return {
      chartRef
    };
  }
};
</script>

<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>