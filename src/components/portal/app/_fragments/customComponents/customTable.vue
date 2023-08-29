<script>
export default {
  props: {
    title_table: String,
    data: Array,
    columns: Array,
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    visibleColumns() {
      return this.columns;
    },
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    }
  },
  methods: {
    changePage(change) {
      this.currentPage += change;
    }
  }
};
</script>

<template>
  <div class="custom-table">
    <h1>{{ title_table }}
    </h1>
    <table>
      <thead>
      <tr>
        <th v-for="col in visibleColumns" :key="col">
          {{ col }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in paginatedData" :key="index">
        <td v-for="col in visibleColumns" :key="col">
          {{ item[col] }}
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">Anterior</button>
      <span class="current-page">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">Próximo</button>
    </div>
  </div>
</template>

<style scoped lang="scss">

.custom-table {
  width: 100%;
  height: 100%;
  border: 0.1rem solid #5F687A;
  border-radius: 0.6rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #000000;
    padding: 1.5rem;
  }

  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-radius: 0.6rem;

    thead {
      background-color: #FFFFFF;
      color: #000000;
      font-size: 1.4rem;
      font-weight: 600;
      border-bottom: 0.1rem solid #5F687A;

      th {
        padding: 1rem;
        text-align: start;
      }
    }

    tbody {
      background-color: #FFFFFF;
      color: #5F687A;
      font-size: 1.4rem;
      font-weight: 500;

      tr {
        border-bottom: 0.1rem solid #5F687A;

        td {
          padding: 1rem 5rem 1.5rem 1rem;
        }
      }
    }
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    .current-page {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
