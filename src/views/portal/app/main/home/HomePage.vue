<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "HomePage",
  data () {
    return {
      innovationData: [
        {month: 'Jul', items: [
            {date: '31 Julho de 2023', title: 'Atualização do Portal Age Telecom',
              description: 'A equipe de desenvolvimento orgulhosamente apresentam o novo Portal Age, com melhorias visuais e funcionais significativas para uma experiência eficiente e aprimorada.'},
            {date: '18 Julho de 2023', title: 'Novo Módulo Age Comunica', description: 'Facilidade em falar com nossos clientes com agilidade e assertividade.'},
            {date: '17 Julho de 2023', title: 'Adicionada nova seção para o módulo RV (B2B)',
              description: 'Implementação e gerenciamento eficaz do módulo de remuneração variável em transações comerciais entre empresas. Incentivando o desempenho e a motivação das equipes B2B.'},
          ]},
      ]
    }
  },
  computed: {
    ...mapGetters([
        'user'
    ])
  }
})
</script>

<template>
  <div class="container-main">
    <div class="title-subtitle">
      <div class="title">
        <h1><b>Bem-vindo(a)</b>, {{ user.firstName }}</h1>
      </div>
      <div class="subtitle">
        <span>Uma nova cara para o sistema que <b>você já conhece!</b></span>
      </div>
    </div>
    <div class="innovations-container">
      <h2 class="title">Inovações em destaque</h2>

      <div class="innovations-content">
        <div class="innovation-card" v-for="(inno, index) in innovationData || []" :key="index">
          <div class="period">
            <div class="divisor">
              <div></div>
            </div>
            <div class="month">
              <span>{{ inno.month }}</span>
              <div class="foccus"></div>
            </div>
            <div class="divisor">
              <div></div>
            </div>
          </div>
          <div class="items-card">
            <div class="item" v-for="(item, ind) in inno.items" :key="ind">
              <div class="date-item">
                <span>{{ item.date }}</span>
              </div>
              <div class="content-item">
                <div class="title">
                  <h4>{{ item.title }}</h4>
                </div>
                <div class="description-item">
                  <span>{{ item.description }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="image-welcome">
      <img :src="require('@/assets/icons/figures/welcome.png')" alt="bem_vindo">
    </div>
  </div>
</template>

<style scoped lang="scss">

.container-main {
  @include flex(column, flex-start, initial, 5vh);
  height: 100vh;
  padding: 4vh 5vw;
  position: relative;

  .title-subtitle {
    animation: up .4s ease-in-out forwards;

    .title {
      h1 {
        color: rgba(0, 0, 0, 1);
        font-size: 2.8rem;
        letter-spacing: 1px;
      }
    }

    .subtitle {
      margin-top: 1.5vh;

      span {
        font-size: 1.6rem;
        font-weight: 400;
        color: rgba(95, 104, 122, 1);
      }
    }
  }

  .innovations-container {
    @include flex(column, flex-start, initial, 2vh);
    width: 45%;
    height: 80%;
    position: relative;


    .title {
      font-size: 2rem;
      font-weight: 500;
      color: #979AA1;
      opacity: 0;
      animation: up .4s ease-in-out forwards .3s;
    }


    .innovations-content {
      padding: 2vh 1vw;
      position: absolute;
      left: -1.3vw;
      top: 6vh;
      opacity: 0;
      animation: up .4s ease-in-out forwards .6s;
      .innovation-card {
        @include flex(row, flex-star, center, 2vw);

        .period {
          position: relative;
          height: 45vh;

          @include flex(column, center, center, 2vh);

          .month {

            @include flex(row, flex-start, center, .5vw);

            span {
              color: #959595;
              font-size: 1.2rem;
              font-weight: 500;
              position: absolute;
              left: -2vw;
            }

            .foccus {
              width: 1vw;
              height: 1vw;
              border-radius: 50%;
              background-color: #787878;
            }
          }

          .divisor {
            width: 1px;
            height: 40%;
            @include flex(row, center, center, 0);

            div {
              width: 2px;
              height: 100%;
              background-color: #D9D9D990;
            }
          }
        }


        .items-card {
          @include flex(column, flex-start, initial, 3vh);


          .item {
            border-bottom: 1px solid #D9D9D980;
            padding-bottom: 3vh;
            animation: right-left .4s ease-in-out forwards 1s;
            opacity: 0;


            .date-item {
              span {
                color: #636363;
                font-size: 1.2rem;
                font-weight: 500;
              }
            }

            .content-item {
              margin-top: 1vh;

              .title {
                h4 {
                  color: #000000;
                  font-size: 1.6rem;
                  font-weight: 500;
                }
              }

              .description-item {
                margin-top: 1vh;

                span {
                  color: #4A4A4A;
                  font-size: 1.2rem;
                  font-weight: 500;
                }
              }
            }

          }
        }
      }
    }
  }


  .image-welcome {
    position: absolute;
    right: 2vw;
    bottom: 3vh;
    width: 100%;
    height: 88%;
    opacity: 0;
    animation: right-left .4s ease-in-out forwards 1.2s;

    img {
      width: 35%;
      height: auto;
      margin-left: auto;
      display: block;
    }
  }
}


@keyframes up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes right-left {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>