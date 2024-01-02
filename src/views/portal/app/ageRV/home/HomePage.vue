<script>
import {defineComponent} from 'vue'
// import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";

export default defineComponent({
  name: "HomePage",
  components: {},
  data: () => {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {title: 'Vendas'},
            {title: 'Dashboards'}
          ]},
        {title: 'Gerenciamento',
          subItems: [
            {title: 'Usuários'},
            {title: 'Regra de negócio'}
          ]},
      ],
      dataTypeRv: [
        {title: 'B2C', subtitle: 'Vendas e comissão - Varejo', route: '/rv/b2c/inicio', svg: 'b2c', status: true},
        {title: 'B2B', subtitle: 'Vendas e comissão - Corporativo', route: '/rv/b2b/inicio', svg: 'b2b', status: true},
        {title: 'Retenção', subtitle: 'Instalação e manutenção', route: '/rv/retencao/supervisor', svg: 'retention', status: true},
        {title: 'Técnica', subtitle: 'Instalação e manutenção', route: '/rv/tecnico/inicio', svg: 'technical', status: false},
        {title: 'Motoboy', subtitle: 'Instalação e manutenção', route: '/rv/tecnico/inicio', svg: 'motocycle', status: false},
      ],
      search: ''
    }
  },
  methods: {
    tradeRouter(route) {
      this.$router.push(route)
    }
  },
  computed: {
    ItemsFiltered () {
      let values = []

      values = this.dataTypeRv.filter((value) => {
        return (
            value.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      })

      return values;
    }
  }
})
</script>

<template>
  <div class="rv-module">
<!--    <SubMenuModules :items="subMenu"/>-->
    <div class="search">
      <div class="box-search">
        <img :src="require('@/assets/icons/figures/ageRv/icons/search.png')" alt="">
        <input type="text" name="search" id="search" placeholder="Pesquise aqui..." v-model="search">

      </div>
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in ItemsFiltered" :key="index" @click="item.status ? tradeRouter(item.route) : null"
      :class="{'disable' : ! item.status}">
        <div class="icon">
          <img :src="require('@/assets/icons/figures/ageRv/icons/' + item.svg + '.png')" alt="">
        </div>
        <div class="description">
          <div class="title">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="subtitle">
            <span>{{ item.subtitle }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

.rv-module {
  width: 100%;
  height: 100%;
  padding: 2vh 2vw;


  .search {
    height: 15%;
    width: 100%;

    @include flex(row, center, center, 0);

    .box-search {
      border-radius: 7px;
      border: 1.5px solid rgba(0, 0, 0, 0.30);
      background: #FFF;
      width: 35%;
      padding: 10px 15px;
      @include flex(row, flex-start, center, .5vw);
      margin-bottom: 2vh;

      img {
        width: 1.5vw;

      }


      input {
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }

  .items {
    width: 100%;
    padding: 0 2vw;
    @include flex(row, flex-start, initial, 3vw);
    flex-wrap: wrap;
    .item {
      @include flex(column, center, center, 1vh);
      min-width: calc((100% / 4) - 3vw);
      max-width: calc((100% / 4) - 3vw);
      height: 30vh;
      border-radius: 15px;
      border: 1.5px solid rgba(0, 0, 0, 0.30);
      background: #FFF;
      padding: 4vh 2vw;
      cursor: pointer;
      transition: border-color .3s ease-in-out;
      animation: up ease-in-out .5s forwards;


      &:hover {
        border-color: #19233B;
      }

      .icon {
        margin: 0 auto;
        border-radius: 5px;
        img {
          width: 3.5vw;
          height: auto;
        }
      }

      .description {
        @include flex(column, flex-start, center, 1vh);
        .title {
          text-align: center;
          h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #333;
          }
        }

        .subtitle {
          text-align: center;
          span {
            font-size: 1.2rem;
            font-weight: 500;
            color: #333;
          }
        }
      }
    }

    .disable {
      border: 1.5px dashed rgba(0, 0, 0, 0.10);
      cursor: default;

      &:hover {
        border-color: rgba(0, 0, 0, 0.10);
      }

      .description {
        .title {
          h3 {
            color: #33333330;
          }
        }

        .subtitle {
          span {
            color: #33333330;
          }
        }
      }

    }


    @keyframes up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

</style>