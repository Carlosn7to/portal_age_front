<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";
import SalesComponent from "@/components/portal/app/ageRV/b2c/sales/SalesComponent.vue";

export default defineComponent({
  name: "SalesPage",
  components: {SubMenuModules, SalesComponent},
  data () {
    return {
      subMenu: [
        {title: 'Principal',
          subItems: [
            {title: 'Vendas'},
            {title: 'Analítico'}
          ]},
        {title: 'Gerenciamento',
          subItems: [
            {title: 'Usuários'},
            {title: 'Regra de negócio'}
          ]},
      ],
      page: {
        actual: 'sales',
        title: 'Vendas',
        subtitle: 'Gráfico de monitoramento das suas vendas.',
        component: ''
      }
    }
  },
  methods: {
    changePage(page) {
      this.page.actual = page
    }
  }
})
</script>

<template>
  <div class="container-sales">
    <SubMenuModules :items="subMenu"/>
      <div class="title">
        <h2>Painel {{ page.title }}</h2>
        <span>{{ page.subtitle }}</span>
      </div>
      <SalesComponent v-if="page.actual === 'sales'"/>
  </div>
</template>

<style scoped lang="scss">

.container-sales {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, 1vw);

  .content {
    padding: 2vh 1vw;
    width: 83%;
    @include flex(column, flex-start, initial, 3vh);

    .title {
      @include flex(column, flex-start, initial, .5vh);
      h2 {
        font-size: 2rem;
        color: #000;
        font-weight: 500;
      }
      span {
        font-size: 1.4rem;
        color: #5F687A;
        font-weight: 400;
      }
    }
  }


}



</style>