<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "HomePageMobile",
  data() {
    return {
      innovationData: [
        {
          month: 'Jul', items: [
            {
              date: '31 Julho de 2023', title: 'Atualização do Portal Age Telecom',
              description: 'A equipe de desenvolvimento orgulhosamente apresentam o novo Portal Age, com melhorias visuais e funcionais significativas para uma experiência eficiente e aprimorada.'
            },
            {
              date: '18 Julho de 2023',
              title: 'Novo Módulo Age Comunica',
              description: 'Facilidade em falar com nossos clientes com agilidade e assertividade.'
            },
            {
              date: '17 Julho de 2023', title: 'Adicionada nova seção para o módulo RV (B2B)',
              description: 'Implementação e gerenciamento eficaz do módulo de remuneração variável em transações comerciais entre empresas. Incentivando o desempenho e a motivação das equipes B2B.'
            },
          ]
        },
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
  <div class="login-home">
    <div class="title-page">
      <h1><b>Bem-vindo(a), </b><b class="bold-identifyColor"> {{ user.firstName }}</b></h1>
      <div class="subtitle-page">
        <span>Uma nova cara para o sistema que <b>você já conhece!</b></span>
      </div>
      <div>
        <div class="innovations-content">
          <h2 class="title-inovation">Inovações em destaque</h2>
          <div class="innovation-card" v-for="(inno, index) in innovationData || []" :key="index">
            <div class="period">
              <div class="divisor">
                <div></div>
              </div>
              <div class="month">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-home {
  height: 100%;
  background-image: url("@/assets/img/identifyBusiness/HomeBackgroundMobile.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.title-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  gap: 2rem;
  margin-left: 4vw;
  margin-top: 4vh;

  .subtitle-page {
    max-width: 80vw;
    font-size: 2rem;
    color: #5F687A;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    color: #1A1A1A;
    text-align: center;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;

    b {
      font-weight: 700;
    }

    .bold-identifyColor {
      background: linear-gradient(62deg, rgba(255, 182, 0, 1) 32%, rgba(255, 92, 74, 1) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
}

.title-inovation {
  font-size: 2rem;
  color: #979AA1;
  font-weight: 500;
  margin-top: 2vh;
  margin-bottom: 3vh;
}

.innovations-content {
  opacity: 1;
  animation: up .4s ease-in-out forwards .6s;

  .innovation-card {
    @include flex(row, flex-start, center, 2vw);

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
        opacity: 1;


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


</style>