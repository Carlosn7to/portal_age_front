<script>
import {mapGetters} from "vuex";

export default {
  name: "OptionsComunicate",
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<template>
  <div class="principal-container">
    <h1>Olá, <b>{{ user.firstName }}</b></h1>
    <h2>Por favor, selecione a operação desejada</h2>
    <div class="optionComunicate">
      <div>
        <router-link to="">
          <img class="option" src="@/assets/img/ageComunicate/newComunicate.svg" alt="">
        </router-link>
        <h1> Comunicação nova</h1>
        <h2>Começar do zero</h2>
      </div>
      <div>
        <router-link to="">
          <img class="option" src="@/assets/img/ageComunicate/listComunicate.svg" alt="">
        </router-link>
        <h1>Comunicação existente</h1>
        <h2>Editar um agendamento</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.principal-container {
  text-align: center;

  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
    font-weight: 500;

    b {
      background: linear-gradient(90deg, #FFB600 28.42%, #F93822 124.07%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-style: normal;
      line-height: normal;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
}

.optionComunicate {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2vh;

  img {
    width: 14vw;
    height: auto;
    margin: 0 2rem;
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: #00000056;
  }
}

.option:hover {
  animation: scaleUp .3s ease-in-out forwards;

}

@keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>