<script>
import {mapMutations, mapState} from "vuex";
import {Portal} from "portal-vue";

export default {
  name: "FilterComponent",
  components: {Portal},
  props: {
    columns: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      selectedFilters: [],
      filterValue: '',
    }
  },
  computed: {
    ...mapState(['showOverlay']),
    showOverlay() {
      return this.$store.state.showOverlay;
    }
  },
  methods: {
    ...mapMutations(['toggleOverlay']),
    applyFilter() {
      this.$emit('filterApplied', { selectedFilters: this.selectedFilters, filterValue: this.filterValue });
    }
  }
}
</script>

<template>
  <div>
    <div class="filter" @click="toggleOverlay">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
      </svg>
      <span>Filtro</span>
    </div>

    <portal to="end-of-body">
      <div v-if="showOverlay" class="overlay" @click="toggleOverlay"></div>
      <div v-if="showOverlay" class="filter-options">
        <slot name="filter-content"></slot>
      </div>
    </portal>
  </div>

</template>

<style scoped lang="scss">
.filter {
  @include flex(row, flex-start, center, .5vw);
  cursor: pointer;

  svg {
    fill: rgba(0, 0, 0, 0.35);
    font-size: 2rem;
  }

  span {
    color: rgba(0, 0, 0, 0.50);
    font-size: 1.4rem;
    font-weight: 500;
  }

  &:hover {
    svg {
      fill: rgba(0, 0, 0, 0.60);
    }

    span {
      color: rgba(0, 0, 0, 0.75);
    }
  }
}

.filter-options {
  position: absolute;
  top: 40%;   // ajuste conforme necessário
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 400px;   // ajuste conforme necessário
  background-color: #fff;
  padding: 3vh 0;
  z-index: 10000; // Definindo um valor um pouco mais alto que o overlay
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9999; // Definindo um valor alto para garantir que está acima dos outros elementos
}

</style>