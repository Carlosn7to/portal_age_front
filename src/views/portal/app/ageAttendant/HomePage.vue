<script>
import {defineComponent} from 'vue'
import SubMenuModules from "@/components/portal/app/_fragments/subMenuModules/SubMenuModules.vue";

export default defineComponent({
  name: "HomePage",
  components: {SubMenuModules},
  data() {
    return {
        subMenu: [
            {title: 'Tela Inicial',
          subItems: [
            {id: 1, title: 'Relatórios', subtitle: 'Listagem'}
          ]},
        ]
    }
  },
  methods: {
    tradePage (page) {
      this.page = page
    }
  }
})
</script>

<template>
  <div class="home-page">
    <SubMenuModules :items="subMenu" @page="tradePage" />
    <div class="content-page">

    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, initial, 1vw);

  .content-page {
    padding: 2vh 1vw;
    width: 84%;

    h1 {
      color: #000000;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 3.4rem;
    }

    span {
      color: #5f687a;
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
}
</style>
