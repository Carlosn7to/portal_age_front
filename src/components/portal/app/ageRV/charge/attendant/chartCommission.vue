<script>
export default {
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          zoom: {
            enabled: false, 
            type: "x", 
          },
          toolbar: {
            show: false, 
          },
          pan: {
            enabled: false, 
          },
          selection: {
            enabled: false, 
          },
        },
        title: {
          style: {
            text: '{{ type }}',
            align: 'left',
            fontFamily: "Montserrat, sans-serif",
          },
        },

        legend: {
          fontFamily: "Montserrat, sans-serif",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            style: {
              fontFamily: "Montserrat, sans-serif",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: "Montserrat, sans-serif",
            },
          },
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#FF8200"],
        dataLabels: {
          enabled: false,
          style: {
            fontFamily: "Montserrat, sans-serif",
          },
        },
        markers: {
          size: 0, 
        },
        tooltip: {
          style: {
            fontFamily: "Montserrat, sans-serif",
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="chart-container">
    <apexchart
      width="100%"
      height="100%"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped lang="scss">
.chart-container {
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 50vh;
}
</style>
