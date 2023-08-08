<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DashboardsComponent"
})
</script>

<template>
  <div class="dashboards">
    <div class="dashboard">
      <div class="title">
        <h2>Total de vendas</h2>
      </div>
      <div class="values">
        <span>22</span>
      </div>
    </div>
    <div class="dashboard">
      <div class="title">
        <h2>Total de comissão</h2>
      </div>
      <div class="values">
        <span>R$5.532,21</span>
      </div>
    </div>
    <div class="dashboard">
      <div class="title">
        <h2>Total de bônus</h2>
      </div>
      <div class="values">
        <span>R$302,30</span>
      </div>
    </div>
    <div class="dashboard range_stars">
      <div class="title">
        <h2>Faixa de estrelas</h2>
      </div>
      <div class="values">
        <div class="stars">
          <img :src="require('@/assets/icons/figures/ageRv/icons/star_fill.png')" alt="star_fill">
          <img :src="require('@/assets/icons/figures/ageRv/icons/star_fill.png')" alt="star_fill">
          <img :src="require('@/assets/icons/figures/ageRv/icons/star_fill.png')" alt="star_fill">
          <img :src="require('@/assets/icons/figures/ageRv/icons/star_nofill.png')" alt="star_fill">
          <img :src="require('@/assets/icons/figures/ageRv/icons/star_nofill.png')" alt="star_fill">
        </div>
        <span>(1250)</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

.dashboards {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, 1vw);

  .dashboard {
    width: calc((100% / 3) - 3vw);
    background-color: #fff;
    border-radius: 1vw;
    border: 1px solid #5F687A30;
    padding: 2vh 1vw;
    @include flex(column, flex-start, initial, 10%);

    .title {
      width: 100%;

      h2 {
        font-size: 1.5rem;
        color: #333;
        font-weight: 500;
      }
    }

    .values {
      width: 100%;

      span {
        font-size: 1.6rem;
        color: #000;
        font-weight: 600;
      }
    }
  }

  .range_stars {
    width: calc((100% / 2.5) - 3vw);

    .values {
      @include flex(row, flex-start, center, .5vw);
      .stars {
        @include flex(row, flex-start, center, .5vw);
        img {
          width: 1.2vw;
          height: auto;
        }
      }
    }

  }
}

</style>