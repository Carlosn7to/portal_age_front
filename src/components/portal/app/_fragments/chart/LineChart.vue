<script>
import {Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';

// Registre os componentes
Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale);

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({responsive: true, maintainAspectRatio: false})
    }
  },
  watch: {
    chartData: {
      handler(newVal) {
        if (this.myChart) {
          this.myChart.data = newVal;
          this.myChart.update();
        }
      },
      deep: true
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.myChart = new Chart(this.$refs.canvas.getContext('2d'), {
      type: 'line',
      data: this.chartData,
      options: this.options
    });
  }
};
</script>

<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>