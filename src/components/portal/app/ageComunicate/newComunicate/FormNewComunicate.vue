<script>
export default {
  name: "FormNewComunicate",
  data() {
    return {
      currentPage: 0,
      totalPage: 2,
      formData: {},
      optionsTypeMessage: [
        {label: 'Cobrança', value: 'cobranca'},
        {label: 'Boleto', value: 'boleto'},
        {label: 'Comercial', value: 'comercial'},
        {label: 'Promocional', value: 'promocional'},
        {label: 'Marketing', value: 'marketing'},
      ],
      optionsChannelShiping: [
        {label: 'SMS', value: 'sms'},
        {label: 'E-mail', value: 'email'},
        {label: 'WhatsApp', value: 'whatsapp'},
        {label: 'URA', value: 'ura'},
      ],
      optionsTemplate: [
        {label: 'Cobrança D-5', value: 'cobrancaD-20'},
        {label: 'Cobrança D-3', value: 'cobrancaD-3'},
        {label: 'Cobrança D-1', value: 'cobrancaD-1'},
        {label: 'Cobrança D+1', value: 'cobrancaD+1'},
      ],
      optionsChannelTrigger: [
        {label: 'E-mail de cobrança', value: 'e-mailCobranca'},
        {label: 'E-mail de boleto', value: 'e-mailBoleto'},
        {label: 'E-mail de comercial', value: 'e-mailComercial'},
        {label: 'E-mail de promocional', value: 'e-mailPromocional'},
        {label: 'E-mail de marketing', value: 'e-mailMarketing'},
        {label: 'SMS de cobrança', value: 'smsCobranca'},
        {label: 'SMS de boleto', value: 'smsBoleto'},
        {label: 'SMS de comercial', value: 'smsComercial'},
        {label: 'SMS de promocional', value: 'smsPromocional'},
        {label: 'SMS de marketing', value: 'smsMarketing'},
        {label: 'WhatsApp de cobrança', value: 'whatsappCobranca'},
        {label: 'WhatsApp de boleto', value: 'whatsappBoleto'},
        {label: 'WhatsApp de comercial', value: 'whatsappComercial'},
        {label: 'WhatsApp de promocional', value: 'whatsappPromocional'},
        {label: 'WhatsApp de marketing', value: 'whatsappMarketing'},
        {label: 'URA de cobrança', value: 'uraCobranca'},
        {label: 'URA de boleto', value: 'uraBoleto'},
        {label: 'URA de comercial', value: 'uraComercial'},
        {label: 'URA de promocional', value: 'uraPromocional'},
        {label: 'URA de marketing', value: 'uraMarketing'},

      ],
      optionsParameter: [
        {label: 'Dia do cliente', value: 'diaCliente'},
        {label: 'Aniversário Age', value: 'aniversarioAge'},
        {label: 'Aniversário do cliente', value: 'aniversarioCliente'},
        {label: 'SCPC', value: 'scpc'},
      ],
      optionsFrquency: [
        {label: 'Antes', value: 'before'},
        {label: 'Depois', value: 'after'},
        {label: 'Instante', value: 'instant'},
      ],
      optionsRepeatSchedule: [
        {label: 'Diário', value: 'daily'},
        {label: 'Semanal', value: 'weekly'},
        {label: 'Mensal', value: 'monthly'},
        {label: 'Anual', value: 'yearly'},
      ],
      optionsLockMonth: [
        {label: 'Janeiro', value: 'january'},
        {label: 'Fevereiro', value: 'february'},
        {label: 'Março', value: 'march'},
        {label: 'Abril', value: 'april'},
        {label: 'Maio', value: 'may'},
        {label: 'Junho', value: 'june'},
        {label: 'Julho', value: 'july'},
        {label: 'Agosto', value: 'august'},
        {label: 'Setembro', value: 'september'},
        {label: 'Outubro', value: 'october'},
        {label: 'Novembro', value: 'november'},
        {label: 'Dezembro', value: 'december'},
      ],
      optionsLockDay: [],
      typeMessage: '',
      channelShipping: '',
      template: '',
      channelTrigger: '',
      parameter: '',
      repeatSchedule: '',
      lockMonth: '',
      lockDay: '',
    };
  },
  computed: {
    canGoBack() {
      return this.currentPage > 0;
    },
    canGoForward() {
      return true;
    },
  },
  methods: {
    nextPage() {
      this.currentPage++;
    },
    previousPage() {
      if (this.canGoBack) {
        this.currentPage--;
      }
    },
  },
}
</script>

<template>
  <div class="container-form">
    <div class="container-title">
      <h1>Criar Nova Comunicação</h1>
    </div>

    <div class="container-select">
      <h1>Parâmetro</h1>
      <input type="text">
    </div>
    <div class="page" v-if="currentPage === 0">
      <div class="container-select">
        <h1>Tipo de Mensagem</h1>
        <select name="typeMessage" id="typeMessage" v-model="typeMessage" required>
          <option value="" disabled selected>Selecione o tipo de mensagem</option>
          <option v-for="option in optionsTypeMessage" :key="option.value" :value="option.value">{{
              option.label
            }}
          </option>
        </select>
      </div>
      <div class="container-select">
        <h1>Canal de Envio</h1>
        <select name="channelShipping" id="channelShipping" v-model="channelShipping">
          <option value="" disabled selected>Selecione o canal de envio</option>
          <option v-for="option in optionsChannelShiping" :key="option.value" :value="option.value">{{
              option.label
            }}
          </option>
        </select>
      </div>
      <div class="container-select">
        <h1>Template</h1>
        <select name="template" id="template" v-model="template">
          <option value="" disabled selected>Selecione o template</option>
          <option v-for="option in optionsTemplate" :key="option.value" :value="option.value">{{
              option.label
            }}
          </option>
        </select>
      </div>
      <div class="container-select">
        <h1>Canal de Disparo</h1>
        <select name="channelTrigger" id="channelTrigger" v-model="channelTrigger">
          <option value="" disabled selected>Selecione o canal de disparo</option>
          <option v-for="option in optionsChannelTrigger" :key="option.value" :value="option.value">{{
              option.label
            }}
          </option>
        </select>
      </div>
    </div>

    <div v-else-if="currentPage === 1">
      <div class="container-select">
        <h1>Periodicidade</h1>
        <select name="frequency" id="frequency" v-model="frequency">
          <option value="" disabled selected>Selecione a periodicidade</option>
          <option v-for="option in optionsFrquency" :key="option.value" :value="option.value">{{
              option.label
            }}
          </option>
        </select>
      </div>
      <div class="container-select">
        <h1>Repetir o Agendamento</h1>
        <select name="repeatSchedule" id="repeatSchedule" v-model="repeatSchedule">
          <option value="" disabled selected>Selecione a repetição do agendamento</option>
          <option v-for="option in optionsRepeatSchedule" :key="option.value" :value="option.value">{{
              option.label
            }}
          </option>
        </select>
      </div>
      <div class="container-select-lock">
        <div>
          <h1>Bloqueio Mês</h1>
          <select name="lockMonth" id="lockMonth" v-model="lockMonth">
            <option value="" disabled selected>Selecione o mês de bloqueio</option>
            <option v-for="option in optionsLockMonth" :key="option.value" :value="option.value">{{
                option.label
              }}
            </option>
          </select>
        </div>
        <div>
          <h1>Bloqueio Dia</h1>
          <select name="lockDay" id="lockDay" v-model="lockDay">
            <option value="" disabled selected>Selecione o dia de bloqueio</option>
          </select>
        </div>
      </div>
    </div>
    <div class="div_pagination">
      <button @click="previousPage" :disabled="!canGoBack">Anterior</button>
      <span>Página {{ currentPage + 1 }}</span>
      <button @click="nextPage" :disabled="!canGoForward">Próximo</button>
    </div>
  </div>

</template>

<style scoped lang="scss">

.container-form {
  width: 70%;
  height: 98%;
  background-color: #ffffff;
  @include flex(column, flex-start, flex-start, .1vw);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000000;
  }
}

.page {
  width: 100%;
  height: 90%;
  @include flex(column, flex-start, flex-start, .1vw);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .container-select {
    width: 100%;
    height: 14%;
    margin-left: 4vw;
    margin-top: 2vh;
    @include flex(column, flex-start, flex-start, .1vw);

    h1 {
      width: 40%;
      height: 100%;
      @include flex(row, flex-start, center, .1vw);
    }

    select {
      width: 60%;
      height: 100%;
      border: 1px solid #DEE0E4;
      border-radius: 5px;
      padding-left: 1vw;
      font-size: 1.4rem;
      color: #000000;
      background-color: #F5F7FB;
    }

    input {
      width: 60%;
      height: 100%;
      border: 1px solid #DEE0E4;
      border-radius: 5px;
      padding-left: 1vw;
      font-size: 1.4rem;
      color: #AFAFAF;
      background-color: #F5F7FB;
    }
  }

  .container-select-lock {
    width: 100%;
    height: 10%;
    margin-left: 4vw;
    margin-top: 4vh;
    @include flex(row, flex-start, flex-start, .1vw);

    h1 {
      width: 60%;
      height: 100%;
      @include flex(row, flex-start, center, .1vw);
    }

    select {
      width: 76%;
      height: 100%;
      border: 1px solid #DEE0E4;
      border-radius: 5px;
      padding-left: 1vw;
      font-size: 1.4rem;
      color: #AFAFAF;
      background-color: #F5F7FB;
    }

  }
}

.div_pagination {
  width: 100%;
  height: 10%;
  @include flex(row, center, flex-end, .1vw);

  button {
    width: 10%;
    height: 50%;
    border: 1px solid #DEE0E4;
    border-radius: 5px;
    padding-left: 1vw;
    font-size: 1.4rem;
    color: #AFAFAF;
    background-color: #F5F7FB;
  }
}
</style>