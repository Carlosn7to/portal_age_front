<script>
import {defineComponent} from 'vue'
import 'animate.css';

export default defineComponent({
  name: "NewCommunicate",
  methods: {
    tradePage() {
      this.$emit('tradePage');
    }
  },
  computed: {
    entranceAnimation() {
      return 'animate__animated animate__bounceIn';
    },
  },
});
</script>

<template>
  <div>
    <div class="newCommunication" :class="entranceAnimation">
      <button class="dashedSquareButton" @click="tradePage"></button>
      <h1>Comunicação nova</h1>
      <h2>Começar do zero</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.newCommunication {
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
    text-align: center;
    font-weight: 500;
    color: #A0A0A0;
  }
}

.dashedSquareButton {
  width: 15vw;
  height: 30vh;
  background-image: url("@/assets/img/app/ageCommunicate/dashedSquareButton.svg");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

</style>