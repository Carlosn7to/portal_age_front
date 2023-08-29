<script>

import {defineComponent} from 'vue'

export default defineComponent({
  name: "existedCommunicate",
  methods: {
    tradePage() {
      this.$emit('tradePage');
    }
  },
    computed: {
  animationClass() {
    return 'animate__animated animate__bounceIn'
  }
}
})
</script>

<template>
  <div>
    <div class="existedCommunication" :class="animationClass">
      <button class="existedSquareButton" @click="tradePage"></button>
      <h1>Comunicação existente</h1>
      <h2>Editar um agendamento</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.existedCommunication {
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 0.5vh;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #A0A0A0;
    text-align: center;
  }
}

.existedSquareButton {
  width: 15vw;
  height: 30vh;
  background-image: url("@/assets/img/app/ageCommunicate/existedSquareButton.svg");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 1vw;
}
</style>