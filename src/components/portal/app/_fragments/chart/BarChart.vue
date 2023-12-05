<template>
    <div class="chart-container">
      <canvas ref="chartRef"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch, toRefs } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'BarChart',
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
  
      const { chartData, chartOptions } = toRefs(props);
  
      watch([chartData, chartOptions], () => {
        if (chartInstance) {
          chartInstance.data = chartData.value;
          chartInstance.options = chartOptions.value;
          chartInstance.update();
        }
      }, {
        deep: true
      });
  
      onMounted(() => {
        chartInstance = new Chart(chartRef.value.getContext('2d'), {
          type: 'bar',
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
  
  <style>

  </style>
  