<script>
import SelectComponent from "@/components/portal/app/_fragments/select/SelectComponent.vue";
import { AXIOS } from '../../../../../../../services/api.ts';
import Cookie from 'js-cookie';

export default {
  components: {
    SelectComponent
  },
  data() {
    return {
      columns: [
        { title: "Colaborador", field: "collaborator" },
        { title: "Gráfico", field: "graphic" },
        { title: "Porcentagem", field: "percentage" },
        { title: "Ligações Produtivas Recebidas", field: "requests" },
        { title: "Solicitações Realizadas", field: "done" },
        { title: "Dinâmica", field: "dynamic" },
        { title: "Comissão", field: "commission" }
      ],
      data: [
        {
          collaborator: "Nome do 97 Colaborador",
          graphic: 91,
          percentage: 27,
          requests: 420,
          done: 1021,
          commission: 1449,
          dynamic: -972,
          month: 12
        },
        {
          collaborator: "Nome do 98 Colaborador",
          graphic: 10,
          percentage: 9,
          requests: 643,
          done: 1119,
          commission: 183,
          dynamic: 617,
          month: 4
        },
        {
          collaborator: "Nome do 99 Colaborador",
          graphic: 44,
          percentage: 80,
          requests: 1212,
          done: 475,
          commission: 265,
          dynamic: -195,
          month: 8
        }
      ],
      dataItems: {
        items: {},
        date: []
      },
      sortColumn: null,
      sortOrder: null,
      currentPage: 1,
      itemsPerPage: 11,
    };
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    }
  },
  methods: {
    getData() {

      let date = new Date();

      const year = date.getFullYear()
      const month = date.getMonth() - 1 


      AXIOS({
        url: 'saoijisao',
        method: 'get',
        params: {
          date: year+"-"+month+"-01"
        },
        headers: {
          'Authorization': 'Bearer '+Cookie.get('token')
        }
      }).then((res) => {
          this.dataItems.items = res.data.items
          this.dataItems.date = res.data.date
      }).catch((error) => {
          console.log(error)
      })
      

    },
    formatCurrency(value) {
      // Formata o número como moeda, incluindo o separador de milhar
      return `R$${value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    },
    sortData(column) {
      if (this.sortColumn === column) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = column;
        this.sortOrder = "asc";
      }

      this.data.sort((a, b) => {
        if (a[column] < b[column]) return this.sortOrder === "asc" ? -1 : 1;
        if (a[column] > b[column]) return this.sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    setCurrentPage(index) {
      this.currentPage = index;
    },
    getSvgColor(index) {
      return this.currentPage === index ? "#FB7411" : "#E0E0E0";
    },
    dynamicStyle(dynamicValue) {
      return {
        color: dynamicValue < 0 ? "#E10000" : "#00943B"
      };
    }
  },
  mounted() {
    this.getData()
  },
};
</script>

<template>
  <div class="grid-container">
    <div class="table-container">
      <div class="table-title-row">
        <h2 class="table-title">Painel de Supervisão (Rentenção)</h2>
        <SelectComponent :date="dataItems.date" @filterDate="getData" />
      </div>
      <div class="content-container">
        <table>
          <thead>
            <tr>
              <th
                v-for="column in columns"
                :key="column.field"
                class="column-title"
                @click="sortData(column.field)"
              >{{ column.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in paginatedData" :key="item.collaborator">
              <td
                :style="{animationDelay : item * .1+'s'}"
                v-for="column in columns"
                :key="column.field"
                class="column-items"
              >
                <div
                  v-if="column.field === 'collaborator'"
                  class="collaborator-field"
                >{{ item.collaborator }}</div>
                <div v-else-if="column.field === 'graphic'" class="progress-bar-container">
                  <div class="progress-bar" :style="{ width: item.graphic + '%' }"></div>
                </div>
                <div v-else-if="column.field === 'commission'">{{ formatCurrency(item.commission) }}</div>
                <div
                  v-else-if="column.field === 'dynamic'"
                  :style="dynamicStyle(item.dynamic)"
                >{{ formatCurrency(item.dynamic) }}</div>
                <div v-else-if="column.field === 'percentage'">{{ item.percentage }}%</div>
                <div v-else>{{ item[column.field] }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination Controls -->
      <div class="pagination-controls">
        <div @click="prevPage" :class="{ disabled: currentPage <= 1 }">
          <svg
            v-if="currentPage > 1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            class="pagination-buttons"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
          <svg
            class="pagination-buttons"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </div>
        <div>
          <svg
            v-for="index in pageCount"
            :key="index"
            :style="{ fill: getSvgColor(index) }"
            class="pagination-indicator"
            @click="setCurrentPage(index)"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
          </svg>
        </div>
        <div @click="nextPage" :class="{ disabled: currentPage >= pageCount }">
          <svg
            class="pagination-buttons"
            v-if="currentPage < pageCount"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
          <svg
            class="pagination-buttons"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Definição de cores e outras variáveis para reutilização
$background-color: #f5f7fb;
$table-background: #ffffff;
$border-color: #5f687a50;
$font-color: #00000060;
$hover-font-color: #00000090;
$progress-bar-background: #e0e0e0;
$progress-bar-color: linear-gradient(90deg, #ffb600 -0.88%, #f93822 235.67%);
$title-font-size: 2.4rem;
$paragraph-font-size: 1.6rem;
$font-color-dark: rgba(0, 0, 0, 0.7);
$font-color-medium: rgba(0, 0, 0, 0.5);
$background-light: #d9d9d950;
$input-border: 0.5px solid #d9d9d9;
$button-gradient: linear-gradient(90deg, #ffb600 -0.88%, #f93822 235.67%);

// Mixin para flex container
@mixin flex-container($direction: row, $justify: center, $align: left) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

.grid-container {
  display: grid;
  place-items: start;
  width: 95vw;
  padding: 1vh;
  background-color: $background-color;
}

.table-container {
  @include flex-container(column, space-between); // Mixin para flex container
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1vw;
  background-color: $table-background;
  border: 1px solid $border-color;
  border-radius: 1rem;

  table {
    flex-grow: 1;
    border-collapse: collapse;
  }

  .column-title,
  .column-items {
    width: 1vw;
    padding: 1.5vh 0;
    font-size: 1.3rem;
    text-align: center;
    vertical-align: top;
    font-weight: 500;
    border-bottom: 1px solid $border-color;
    opacity: 0;
    animation: up-item ease-in-out forwards 0.5s;

    @keyframes up-item {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &:nth-child(1),
    &:nth-child(2) {
      text-align: left;
      width: 15%;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      text-align: center;
      width: 10%;
    }

    &.column-title {
      font-size: 1.2rem;
      padding: 0 0 1vh 0;
      color: $font-color;

      &:hover {
        color: $hover-font-color;
      }
    }
  }

  .table-title-row {
    @include flex-container(row, space-between);
    padding: 0 1vw 0 0;
  }

  .table-title {
    flex: 0 0 auto;
    text-align: left;
    font-weight: 600;
    padding: 2vh 0 4vh 0;
  }
}

.select-month {
  border: 1px solid $border-color;
  border-radius: 0.5rem;
  padding: 0 0.5vw;
  margin: 2vh 0;
  width: 10%;
  height: 50%;
}

.content-container {
  min-height: 70vh;
}

// Mixin para flex container
@mixin flex-container($direction, $justify) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
}

.progress-bar-container {
  width: 100%;
  background-color: $progress-bar-background;
  border-radius: 4px;

  .progress-bar {
    height: 20px;
    background: $progress-bar-color;
    border-radius: 4px;
  }
}

.collaborator-field {
  width: 100%;
  font-size: 1.3rem;
  text-align: left;
  vertical-align: top;
  font-weight: 500;
}

.pagination-controls {
  @include flex-container(row, center); // Mixin para flex container
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.pagination-indicator {
  margin: 0.1vh 0.2vw;
  padding: 0.05vw;
}

.pagination-buttons {
  fill: #fb7411;
  margin: 0 0.5vw;
  height: 2vh;
}

.disabled svg {
  fill: #cccccc; /* Cor cinza para indicar que está desabilitado */
  pointer-events: none; /* Desativa a interação com o mouse */
}
</style>