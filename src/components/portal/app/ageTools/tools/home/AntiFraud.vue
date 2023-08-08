<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AntiFraud"
})
</script>

<template>
  <div class="antifraud-container">
    <h2 class="title">Painel operacional</h2>

    <div class="content-antifraud">
      <div class="filters">

      </div>
      <div class="data">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.antifraud-container {
  height: 100%;
  .title {
    font-weight: 500;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, .8);
  }

  .content-antifraud {
    width: 100%;
    height: 95%;
    padding: 1vh 0;
    @include flex(row, flex-start, initial, 1vw);


    .filters {
      width: 15%;
      height: 100%;
      background-color: red;
    }

    .data {
      width: 85%;
      height: 100%;
      background-color: blue;
    }
  }
}

</style>