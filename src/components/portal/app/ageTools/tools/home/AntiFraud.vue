<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AntiFraud",
  data() {
    return {
      fields: {
        name: '',
        email: '',
        number: null,
        cep: '',
        address: '',
        neighborhood: '',
        document: '',
        tel: '',
        cel: '',
       },
  }
  }
    
})
</script>

<template>
  <div class="antifraud-container">
    <h2 class="title">Painel operacional</h2>

    <div class="content-antifraud">
      <div class="filters">
      <div v-for="(value, key) in fields" :key="key" class="input-container">
        <input class="input" v-model="fields[key]" :name="key" :id="key" :placeholder="key">
      </div>
      </div>
      <div class="data"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.antifraud-container {
  height: 100%;
  .title {
    font-weight: 500;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.8);
  }

  .content-antifraud {
    width: 100%;
    height: 95%;
    padding: 1vh 0;
    @include flex(row, flex-start, initial, 1vw);

    .filters {
      width: 15%;
      height: 100%;
    }

    .data {
      width: 85%;
      height: 100%;
    }

    .input-container {
      padding: 2vh 0 2vh 0;

      .input {
        padding: 1vh;
        border: 1px solid #DEE0E4;
        background-color: #F5F7FB;
        color: #AFAFAF;
        border-radius: 5px
      }
    }
  }
}
</style>
