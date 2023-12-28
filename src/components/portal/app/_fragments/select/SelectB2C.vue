<script>
export default {
  props: {
    date: {
      type: Array,
      required: true
    },
    modelValue: {
      default: null
    }
  },
  data() {
    return {
      selectedOption: null,
      showOptions: false
    };
  },
  computed: {
    mappedSelectedOption() {
      return this.selectedOption?.name || this.selectedOption || 'Selecione';
    }
  },
  methods: {
    toggleOptionsSelect(option) {
      this.selectedOption = option;
      this.showOptions = false;
      this.$emit('filterDate', option.value);
    },
    toggleDropdown() {
      this.showOptions = !this.showOptions;
    }
  }
};
</script>

<template>
  <div class="dropdown-wrapper" @click="toggleDropdown">
    <div class="dropdown-selected-option">{{ mappedSelectedOption }}</div>
    <div class="options-wrapper" v-if="showOptions">
      <div
        class="option"
        v-for="(date, index) in date"
        :key="index"
        @click="toggleOptionsSelect(date)"
      >{{ date.collaborator }}</div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-wrapper {
  position: relative;
  padding: 1vw;
  cursor: pointer;
  max-width: 14vw;
  min-width: 14vw;
}

.dropdown-selected-option {
  padding: 1vw;
  border: solid 1px #00000020;
  border-radius: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 4px;
  background-color: #ffffff; /* Fundo sólido */
}

.options-wrapper {
  position: absolute;
  width: 100%; /* Garantir que a largura corresponda ao elemento pai */
  z-index: 1000; /* Alto valor para sobrepor outros elementos */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
  border-radius: 0.5rem; /* Opcional: bordas arredondadas */
}

.option:hover {
  background: #c5c5c5;
}

.option {
  padding: 1vw;
  border: solid 1px #00000020;
  box-sizing: border-box;
  background-color: #ffffff;
}

.option:last-of-type {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* Transição suave ao abrir e fechar o menu (opcional) */
.options-wrapper {
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: 0;
  visibility: hidden;
}

.dropdown-wrapper:hover .options-wrapper {
  opacity: 1;
  visibility: visible;
}
</style>