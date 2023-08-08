<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LastSales"
})
</script>

<template>

  <div class="last-sales">
    <div class="header">
      <span>Vendas recentes</span>
      <span>Ver todas</span>
    </div>

    <div class="data">
      <div class="item">
        <div class="icon">
<!--          <img :src="require('@/assets/icons/figures/ageRv/icons/')">-->
        </div>
        <div class="info">
          <h3>
            Carlos Neto
          </h3>
          <span>02 minutos atrás</span>
        </div>
        <div class="value">
          + R$120,00
        </div>
      </div>
      <div class="item">
        <div class="icon">

        </div>
        <div class="info">
          <h3>
            Carlos Neto
          </h3>
          <span>02 minutos atrás</span>
        </div>
        <div class="value">
          + R$120,00
        </div>
      </div>
      <div class="item">
        <div class="icon">

        </div>
        <div class="info">
          <h3>
            Carlos Neto
          </h3>
          <span>02 minutos atrás</span>
        </div>
        <div class="value">
          + R$120,00
        </div>
      </div>
      <div class="item">
        <div class="icon">

        </div>
        <div class="info">
          <h3>
            Carlos Neto
          </h3>
          <span>02 minutos atrás</span>
        </div>
        <div class="value">
          + R$120,00
        </div>
      </div>
      <div class="item">
        <div class="icon">

        </div>
        <div class="info">
          <h3>
            Carlos Neto
          </h3>
          <span>02 minutos atrás</span>
        </div>
        <div class="value">
          + R$120,00
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped lang="scss">

.last-sales {
  background-color: #fff;
  border-radius: 1vw;
  border: 1px solid #5F687A30;
  padding: 2vh 1vw;
  height: 100%;
  overflow: hidden;

  .header {
    @include flex(row, space-between, center, 0);
    margin-bottom: 3vh;


    span:nth-child(1) {
      font-size: 1.6rem;
      color: #000;
      font-weight: 500;
    }

    span:nth-child(2) {
      font-size: 1.2rem;
      color: #00000065;
      font-weight: 600;

      cursor: pointer;


      &:hover {
        color: #00000090;
      }
    }
  }

  .data {
    @include flex(column, flex-start, initial, 2.2vh);
    overflow-y: auto;
    max-height: 95%;
    padding: 1vh .5vw;
    .item {
      width: 100%;
      padding: 1.5vh 1vw;
      border-radius: 10px;
      border: 1.5px solid rgba(95, 104, 122, 0.30);
      background: #FFF;
      @include flex(row, space-between, center, 1vw);

      .icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #3F3D56;
      }

      .info {
        @include flex(column, flex-start, initial, .3vh);
        h3 {
          font-size: 1.2rem;
          color: #000;
          font-weight: 500;
        }
        span {
          font-size: 1.1rem;
          color: #00000065;
          font-weight: 600;
        }
      }

      .value {
        font-size: 1.2rem;
        color: #000;
        font-weight: 600;
      }
    }
  }
}

</style>