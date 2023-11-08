<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgeAttendant",
});
</script>

<template>
  <div class="attendant-container">
    <div class="search-container">
      <h3>Barra de pesquisa</h3>
    </div>
    <div class="celula-1">
      <h1>Dados do cliente</h1>
    </div>
    <div class="celula-2">
      <h1>Dados do conexão</h1>
    </div>
    <div class="celula-3">
      <h1>Dados financeiros</h1>
    </div>
    <div class="celula-4">
      <h1>Histórico do cliente</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.attendant-container {
  display: grid;
  height: 100vh;
  grid-template-rows: 10% auto; // Ajuste aqui
  grid-template-columns: repeat(4, 1fr); // Ajuste aqui
}

.search-container {
  grid-row: 1; /* Posiciona na primeira linha */
  grid-column: 1 / -1; /* Estende-se do início ao fim, cobrindo todas as quatro colunas */
  margin: 2vh;
  border: 1px solid #000000;
}

/* As células individuais da segunda linha podem ser estilizadas assim: */
.celula-1 {
  grid-row: 2; /* Posiciona na segunda linha */
  grid-column: 1; /* Posiciona na primeira coluna da segunda linha */
  margin: 2vh;
  border: 1px solid #000000;
}

.celula-2 {
  grid-row: 2;
  grid-column: 2;
  margin: 2vh;
  border: 1px solid #000000;
}

.celula-3 {
  grid-row: 2;
  grid-column: 3;
  margin: 2vh;
  border: 1px solid #000000;
}

.celula-4 {
  grid-row: 2;
  grid-column: 4;
  margin: 2vh;
  border: 1px solid #000000;
}
</style>
