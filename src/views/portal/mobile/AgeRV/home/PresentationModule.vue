<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PrensetationModule",
  props: {
    template: {
      type: String,
      default: 'b2c'
    }
  },
  data () {
    return {
      templates: {
        b2c: [
          {title: 'Apresentando o <b>AgeRv</b>',
            description: [
              'Com o <b>AgeRv</b>, você passa a ser <b>dono</b> da sua comissão <b>remunerável!</b> Você vai ganhar pelas <b>vendas</b> e pelos seus <b>indicadores</b>, a soma destes dois vão refletir no quão <b>longe</b> você chegará.'
            ],
            figure: 'home_fig_1'},
          {title: 'Junte estrelas! Ganhe o infinito com o <b>AgeRV</b>',
            description: [
              'Com o <b>AgeRv</b>, não apenas suas vendas <b>contribuem</b> para seus <b>ganhos</b>, mas também seus <b>indicadores de qualidade</b> se tornam poderosos impulsionadores. Cada indicador positivo que você alcança representa uma oportunidade para aumentar seus ganhos e obter resultados ainda mais expressivos.'
            ],
            figure: 'home_fig_2'},
          {title: '<b>Cliente</b> que foi <b>bem atendido</b> fica bem <b>mais que 7 dias!</b>',
            description: [
              'Dentro do <b>AgeRV</b>, possuímos indicadores de qualidade para potencializar seus <b>ganhos</b> e obter ótimos <b>resultados</b>',
              'A partir da instalação, é necessário que todos os clientes mantenham o produto ativo por, pelo menos, 7 dias.'
            ],
            figure: 'home_fig_3'},
          {title: 'Vamos começar a <b>conquistar</b> a sua <b>comissão!</b>',
            description: [
              'Acumule estrelas e para receber mais e mais em suas comissões',
              'Com a Age vendeu bem e vendeu com qualidade, você ganhará sem limites'
            ],
            figure: 'home_fig_4'},
        ]
      },
      module: 'b2c',
      pageScroll: 0
    }
  },
  methods: {
    getRoute() {
      const currentRoutePath = this.$route.path

      if(currentRoutePath.includes('b2c')) {
        this.module = 'b2c'
      } else if (currentRoutePath.includes('b2b')) {
        this.module = 'b2b'
      } else if (currentRoutePath.includes('tecnico')) {
        this.module = 'technical'
      }

    },
    tradeRoute() {
      this.$router.replace({path: `/rv/${this.module}/vendas`})
    }
  },
  beforeMount() {
    this.getRoute()
  }
})
</script>

<template>
  <div class="container-prensetation">
    <template v-if="module === 'b2c'">
      <section @scrollend="templates.b2c.length > index ? onScroll(index) : onScroll(index + 1) " class="b2c" v-for="(template, index) in templates.b2c" :key="index">
        <div class="info">
          <div class="title">
            <h2 v-html="template.title"></h2>
          </div>
          <div class="description">
            <p v-for="(item, ind) in template.description" :key="ind" v-html="item"></p>
            <div>
              <button @click="tradeRoute" v-if="templates.b2c.length === index + 1">
                Começar a ganhar comissão
              </button>
            </div>
          </div>
        </div>
        <div class="figure">
          <img :src="require(`@/assets/icons/figures/ageRv/b2c/${template.figure}.png`)" alt="figura">
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped lang="scss">

.container-prensetation {
  @include flex(column, flex-start, initial, 6vh);
  overflow-y: auto;
  max-height: 100%;
  padding: 2vh 2vw;
  section {
    width: 100%;
    min-height: 85vh;
    position: relative;

    .info {
      width: 100%;
      padding: 4vh 3vw;
      z-index: 5;

      .title {
        width: 100%;
        h2 {
          font-size: 2.2rem;
          font-weight: 500;
          color: #000;
        }
      }

      .description {
        width: 100%;
        height: 100%;
        padding: 2vh 0;

        p {
          font-size: 1.6rem;
          font-weight: 400;
          color: #5F687A;
          line-height: 1.6;
        }

        div {
          padding: 6vh 0;
          @include flex(row, center, center, 0);

          button {
            outline: none;
            border: none;
            color: #fff;
            font-size: 1.6rem;
            padding: 15px 30px;
            border-radius: 15px;
            background: linear-gradient(90deg, #FFB600 0%, #F93822 100%);
            cursor: pointer;
            transition: all ease-in-out 2s;

            &:hover {
              animation: gradient .1s ease-in-out infinite alternate;

            }

          }


        }
      }
    }

    .figure {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      img {

        width: 35vw;
        height: auto;
      }
    }
  }

  section:nth-child(even) {

    .info {
      width: 100%;

      .description {
        margin-left: auto;
        width:50%;
        padding-right: 6vw;
        @include flex(column, flex-start, initial, 1vh);
      }
    }

    .figure {
      left: 0;
      width: 50%;

    }
  }


  .b2c {

  }
}


@media (min-width: 1850px) {


  .container-prensetation {

    section {
      .info {
        .title {
          h2 {
            font-size: 3.2rem;
          }
        }

        .description {
          p {
            font-size: 2.2rem;
          }

        }
      }
    }

  }

}

</style>