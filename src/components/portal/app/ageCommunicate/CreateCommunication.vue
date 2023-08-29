<script>
export default {
  name: "CreateCommunication",
  data() {
    return {
      step: 1
    }
  }
}
</script>

<template>
  <div class="container-flex">
    <form class="container-principal">
      <h1 class="title-principal">Nova Comunicação</h1>
      <div class="input-principal">
        <div class="input-container">
          <label>Tipo de Mensagem <span></span> </label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Canal de Envio</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Template</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Canal de Disparo</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Parâmetro</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Periodicidade</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Repetir o agendamento</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Bloqueio mês</label>
          <input type="text">
        </div>
        <div class="input-container">
          <label>Bloqueio dia</label>
          <input type="text">
        </div>
      </div>
    </form>
    <div class="container-aside">
      <div class="container-progress">
        <div class="progress-row">
          <div class="progress-circle" :class="{'progress-concluded' : step > 1, 'progress-actual' : step === 1}">
            {{ step > 1 ? '' : 1 }}
          </div>
          <div class="lebel-column">
            <h1>Selecione o tipo de mensagem</h1>
            <h2>Qual a finalidade da comunicação</h2>
          </div>
        </div>
        <div class="divisor" :class="{'checked-divisor' : step > 1}">
          <div>

          </div>
        </div>
        <div class="progress-row">
          <div class="progress-circle" :class="{'progress-concluded' : step > 2, 'progress-actual' : step === 2}">
            {{ step > 2 ? '' : 2 }}
          </div>
          <div class="lebel-column">
            <h1>Selecione o tipo de mensagem</h1>
            <h2>Qual a finalidade da comunicação</h2>
          </div>
        </div>
        <div class="divisor" :class="{'checked-divisor' : step >= 3}">
          <div>

          </div>
        </div>
        <div class="progress-row">
          <div class="progress-circle" :class="{'progress-concluded' : step > 3, 'progress-actual' : step === 3}">
            {{ step > 3 ? '' : 3 }}
          </div>
          <div class="lebel-column">
            <h1>Selecione o tipo de mensagem</h1>
            <h2>Qual a finalidade da comunicação</h2>
          </div>
        </div>
      </div>
      <div class="container-contact">
        <img class="icon-contact" src="@/assets/img/app/ageCommunicate/contactVector.svg" alt="IconContact">
        <h1>Está com problemas?</h1>
        <h2>Sinta-se livre para nos contatar e nós iremos sempre lhe ajudar.</h2>
        <button>Entrar em contato</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container-flex {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #F1F1F1;
  justify-content: center;
  align-items: center;
  gap: 10vw;
}

.container-principal {
  width: 45vw;
  background-color: #FFFFFF;
  margin-left: 10vw;
  padding: 3vh 4vw;
  overflow: auto;
  border-radius: 1rem;

  .title-principal {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: start;
    margin-top: 2vh;
  }

  .input-principal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2vh;

    .input-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 1vw;
    }

    label {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1vh;


    }

    input {
      width: 100%;
      height: 5vh;
      border: 1px solid #DEE0E4;
      background: #F5F7FB;
      border-radius: 0.5rem;
      padding: 0 1vw;
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1vh;
    }
  }
}

.container-aside {
  width: 15vw;
  height: 100vh;
  background-color: #FFFFFF;

  .container-progress {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 5vh;


    .divisor {
      width: 100%;
      height: 10vh;
      @include flex(row, start, center, 0);
      margin-left: 6vw;


      div {
        width: 0.15vw;
        height: 80%;
        background-color: #ccc;
      }
    }

    .checked-divisor {
      div {
        background-color: #12B569;
      }
    }

  }

  .progress-circle {
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    background-color: #D9D9D9;
    color: #ffffff;
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .progress-concluded {
    border: 0.1rem solid #12B569;
    background-color: #12B569;
    background-image: url("@/assets/img/app/ageCommunicate/checkedVector.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .progress-actual {
    border: 0.1rem solid #026FEE;
    background-color: #fff;
    color: #026FEE;
  }

  .progress-row {
    width: 15vw;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-left: 4vw;

    h1 {
      font-size: 1.3rem;
      font-weight: 500;
      margin-left: 0.5vw;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 400;
      margin-left: 0.5vw;
    }
  }

  .container-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-top: 5vh;

    .icon-contact {
      width: 3.5vw;
      height: 3.5vh;
      margin-left: 1.1vw;
    }

    h1 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-top: 1vh;
      margin-left: 2vw;
      color: #5F687A;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 1vh;
      margin-left: 2vw;
      color: #7B8497;
    }

    button {
      width: 9vw;
      height: 4.5vh;
      background-color: #ffffff;
      border-radius: 0.5rem;
      border: 0.1rem solid #DFDFDF;
      color: #5F687A;
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: 1.5vh;
      margin-left: 2vw;
      cursor: pointer;
    }

    button:hover {
      background-color: #5F687A;
      color: #ffffff;
      transition: 0.5s;
    }
  }
}

</style>