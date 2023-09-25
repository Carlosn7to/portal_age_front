<script>
export default {
  name: "AsideProgressBar",
  props: {
    currentPage: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: 3
    }
  },
  methods: {
    getPageText(index) {
      const pageTexts = ['Selecione o setor, o tipo de comunicação', 'Escreva o título e o conteúdo da comunicação', 'Selecione os anexos e envie a comunicação'];
      return pageTexts[index] || '';
    }
  }
}
</script>

<template>
  <div class="progress-container">
    <div class="progress-item" v-for="(page, index) in totalPages" :key="index">
      <div class="circle-text-container">
      <div :class="{'progress-circle' : true, 'active' : index === currentPage, 'completed' : index < currentPage, 'inactive': index > currentPage + 1}"><span class="circle-text">{{ index + 1 }}</span> </div>
      <div :class="{'page-text' : true, 'active' : index === currentPage, 'completed' : index < currentPage, 'inactive': index > currentPage + 1}"> {{ getPageText(index) }} </div>
      </div>
      <div class="progress-bar" :class="{'active': index === currentPage, 'completed': index < currentPage, 'inactive' : index > currentPage + 1, 'next' : index > currentPage}"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-container {
  padding-left: 35px;
  width: 100%;
  height: 40vh;
  background-color: #ffffff;
  @include flex(column, center, center, .1vw);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000000;
  }
}

.progress-item {
  @include flex(column, center, flex-start, .1vw);
  width: 100%;
}

.progress-circle {
  display: flex;
  justify-content: center;
  color: #026FEE;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 1px #026FEE;
}

.circle-text {
  align-self: center;
  font-size: 12px;
  font-weight: 500;
}

.circle-text-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.page-text {
  width: 60%;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 10px;
}

.progress-bar {
  margin-left: .75vw;
  margin-top: .5vh;
  margin-bottom: .5vh;
  width: 2px;
  height: 50px;
  background-color: #000000;
}

.progress-circle.active {
  background-color: #007bff;
  color: #ffffff;/* Estilo para a página atual */
}

.progress-circle.completed {
  background-color: #28a745; /* Estilo para páginas concluídas */
}

.progress-circle.inactive {
  border: solid 1px #BBBBBB;
  color: #BBBBBB; /* Estilo para páginas inativas */
}

.progress-bar.active {
  background-color: #007bff; /* Estilo para a página atual */
}

.progress-bar.completed {
  background-color: #28a745; /* Estilo para páginas concluídas */
}

.progress-bar.next {
  background-color: #D9D9D9; /* Estilo para páginas concluídas */
}

.progress-bar.inactive {
  display: none;
}

</style>