<script>
import { defineComponent } from 'vue'
import { Chart } from "chart.js/auto";
import SelectComponent from '../../../_fragments/select/SelectB2C.vue';
import { AXIOS } from '../../../../../../../services/api.ts';
import Cookie from 'js-cookie';


export default defineComponent({
  name: "GraphsComponent",
  component: {
    SelectComponent
  },
  data: () => {
    return {
      graph: {
        screen: 'commission'
      },
      vendors: [
        {
          collaborator: "Nome do 1 Colaborador",
          id: 1,
        },
        {
          collaborator: "Nome do 2 Colaborador",
          id: 2,
        },
        {
          collaborator: "Nome do 3 Colaborador",
          id: 3,
        },
      ],
      data2: {
        lastSales: [], 
      },
    }
  },
  methods: {
    getData(id) {


      AXIOS({
        url: '',
        params: {
          id: id
        },
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + Cookie.get('token')
        }
      }).then((res) => {
        this.data2.lastSales = res.data[0].lastSales;
        console.log(res.data[0].lastSales)

      }).catch((error) => {
        console.log(error)
      })


    },
    graphCommission: function () {


      const days = Array.from({ length: 31 }, (_, index) => index + 1);

      // Criando o array "Values" com valores aleatórios entre 1 e 20 para cada "day"
      const values = days.map(() => Math.floor(Math.random() * 20) + 1);



      // this.data.sales.salesLast7Days.forEach((item) => {
      //   dayName.push(item.dayName)
      //   values.push(item.sales)
      // })


      const barCollors = [
        '#03257E10',
        '#03257E20',
        '#03257E50',
        '#03257E80',
        '#03257E20',
        '#03257E40',
        '#03257E'
      ]

      const dataConfig = {
        labels: days,
        datasets: [{
          data: values,
          label: 'Comissão',
          borderWidth: 0,
          pointRadius: 0,
          borderRadius: 5,
          backgroundColor: barCollors,
          borderSkipped: false,
          categoryPercentage: .8,
          barPercentage: .8,
          type: 'bar',
        }],
      }

      let ctx = document.getElementById('graphCommission').getContext('2d');

      const graphCommission = new Chart(ctx, {
        data: dataConfig,
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: true,
              grid: {
                display: false
              },
              border: {
                display: false
              },
              ticks: {
                color: 'rgba(89, 91, 106, 0.48)'
              },

            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {}
        }
      });

      return graphCommission
    },
    graphSales: function () {


      const days = Array.from({ length: 31 }, (_, index) => index + 1);

      // Criando o array "Values" com valores aleatórios entre 1 e 20 para cada "day"
      const values = days.map(() => Math.floor(Math.random() * 20) + 1);



      // this.data.sales.salesLast7Days.forEach((item) => {
      //   dayName.push(item.dayName)
      //   values.push(item.sales)
      // })


      const barCollors = [
        '#03257E10',
        '#03257E20',
        '#03257E50',
        '#03257E80',
        '#03257E20',
        '#03257E40',
        '#03257E'
      ]

      const dataConfig = {
        labels: days,
        datasets: [{
          data: values,
          label: 'Comissão',
          borderWidth: 0,
          pointRadius: 0,
          borderRadius: 5,
          backgroundColor: barCollors,
          borderSkipped: false,
          categoryPercentage: .8,
          barPercentage: .8,
          type: 'bar',
        }],
      }

      let ctx = document.getElementById('graphSales').getContext('2d');

      const graphSales = new Chart(ctx, {
        data: dataConfig,
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: true,
              grid: {
                display: false
              },
              border: {
                display: false
              },
              ticks: {
                color: 'rgba(89, 91, 106, 0.48)'
              },

            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {}
        }
      });

      return graphSales
    },
    graphBonus: function () {


      const days = Array.from({ length: 31 }, (_, index) => index + 1);

      // Criando o array "Values" com valores aleatórios entre 1 e 20 para cada "day"
      const values = days.map(() => Math.floor(Math.random() * 20) + 1);



      // this.data.sales.salesLast7Days.forEach((item) => {
      //   dayName.push(item.dayName)
      //   values.push(item.sales)
      // })


      const barCollors = [
        '#03257E10',
        '#03257E20',
        '#03257E50',
        '#03257E80',
        '#03257E20',
        '#03257E40',
        '#03257E'
      ]

      const dataConfig = {
        labels: days,
        datasets: [{
          data: values,
          label: 'Comissão',
          borderWidth: 0,
          pointRadius: 0,
          borderRadius: 5,
          backgroundColor: barCollors,
          borderSkipped: false,
          categoryPercentage: .8,
          barPercentage: .8,
          type: 'bar',
        }],
      }

      let ctx = document.getElementById('graphBonus').getContext('2d');

      const graphBonus = new Chart(ctx, {
        data: dataConfig,
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: true,
              grid: {
                display: false
              },
              border: {
                display: false
              },
              ticks: {
                color: 'rgba(89, 91, 106, 0.48)'
              },

            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {}
        }
      });

      return graphBonus
    },
    graphStars: function () {


      const days = Array.from({ length: 31 }, (_, index) => index + 1);

      // Criando o array "Values" com valores aleatórios entre 1 e 20 para cada "day"
      const values = days.map(() => Math.floor(Math.random() * 20) + 1);



      // this.data.sales.salesLast7Days.forEach((item) => {
      //   dayName.push(item.dayName)
      //   values.push(item.sales)
      // })


      const barCollors = [
        '#03257E10',
        '#03257E20',
        '#03257E50',
        '#03257E80',
        '#03257E20',
        '#03257E40',
        '#03257E'
      ]

      const dataConfig = {
        labels: days,
        datasets: [{
          data: values,
          label: 'Comissão',
          borderWidth: 0,
          pointRadius: 0,
          borderRadius: 5,
          backgroundColor: barCollors,
          borderSkipped: false,
          categoryPercentage: .8,
          barPercentage: .8,
          type: 'bar',
        }],
      }

      let ctx = document.getElementById('graphStars').getContext('2d');

      const graphStars = new Chart(ctx, {
        data: dataConfig,
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: true,
              grid: {
                display: false
              },
              border: {
                display: false
              },
              ticks: {
                color: 'rgba(89, 91, 106, 0.48)'
              },

            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {}
        }
      });

      return graphStars
    },
    handleSelectChange(event) {
      const selectedVendorId = event.target.value;
      this.getData(selectedVendorId);
    },
  },
  mounted() {
    this.graphCommission()
    this.graphSales()
    this.graphBonus()
    this.graphStars()
  }
})
</script>

<template>
  <div class="graphs">
    <div class="filter">
      <div class="balance-month">
        <div class="balance">
          <h3>Seu balanço</h3>
          <span>R$ 0,00</span>
        </div>
      </div>
      <div>
        <select name="" id="" @change="handleSelectChange">
          <option :value="vendor.id" v-for="vendor in vendors" :key="vendor.id">{{ vendor.collaborator }}</option>
        </select>
      </div>
      <div class="week-data" style="display: none">
        <div class="week">
          <span>S1</span>
        </div>
        <div class="week select">
          <span>S2</span>
        </div>
        <div class="week">
          <span>S3</span>
        </div>
        <div class="week">
          <span>S4</span>
        </div>
        <div class="week">
          <span>S5</span>
        </div>
      </div>
    </div>
    <div class="list-options">
      <ul>
        <li :class="{ 'select': graph.screen === 'commission' }" @click="graph.screen = 'commission'">Comissão</li>
        <li :class="{ 'select': graph.screen === 'sales' }" @click="graph.screen = 'sales'">Vendas</li>
        <li :class="{ 'select': graph.screen === 'bonus' }" @click="graph.screen = 'bonus'">Bônus</li>
        <li :class="{ 'select': graph.screen === 'stars' }" @click="graph.screen = 'stars'">Estrelas</li>
      </ul>
    </div>
    <div class="graph">

      <div v-show="graph.screen === 'commission'">
        <canvas id="graphCommission"></canvas>
      </div>
      <div v-show="graph.screen === 'sales'">
        <canvas id="graphSales"></canvas>
      </div>
      <div v-show="graph.screen === 'bonus'">
        <canvas id="graphBonus"></canvas>
      </div>
      <div v-show="graph.screen === 'stars'">
        <canvas id="graphStars"></canvas>
      </div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.graphs {
  background-color: #fff;
  border-radius: 1vw;
  border: 1px solid #5F687A30;
  padding: 2vh 1vw;
  height: 100%;

  .filter {
    width: 100%;
    @include flex(row, space-between, center, 0);
    height: 10%;

    .balance-month {
      .balance {
        h3 {
          font-size: 1.2rem;
          font-weight: 500;
          color: rgba(95, 104, 122, 0.70);
        }

        span {
          color: #000;
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 2.6rem;
        }
      }
    }

    .week-data {
      @include flex(row, flex-start, center, 1vw);
      padding: 1vw;
      height: 100%;
      background-color: #E6E6E650;
      border-radius: 5px;

      .week {
        padding: 5px 10px;

        span {
          color: #00000050;
          font-weight: 600;
          font-size: 1.4rem;
        }

        transition: background-color ease-in-out .2s;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
          background-color: #fff;
        }
      }

      .select {
        background-color: #fff;
      }
    }
  }

  .list-options {
    ul {
      @include flex(row, flex-start, center, 1vw);
      border-bottom: 1px solid #00000015;

      li {
        padding: 1.5vh 0;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
        transition: all ease-in-out .2s;

        &:hover {
          color: #026FEE;
          border-bottom: 1px solid #026FEE;
        }

      }


      .select {
        color: #026FEE;
        border-bottom: 1px solid #026FEE;
      }
    }
  }


  .graph {
    width: 100%;
    height: 88%;

    div {
      padding: 4vh 4vw;

      width: 100%;
      height: 100%;
    }
  }
}
</style>