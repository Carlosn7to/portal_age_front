<script>
import { defineComponent } from "vue";
import { maska } from "maska"

export default defineComponent({
  name: "AgeAttendant",
  directives: {
    maska: maska,
  },
  data() {
    return {
      cpf: '',
    };
  },
});
</script>

<template>
  <div class="attendant-container">
    <div class="search-container">
      <div class="search-bar">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.8759 8.93619C17.8759 10.9082 17.2356 12.7298 16.157 14.2077L21.5971 19.651C22.1343 20.1881 22.1343 21.0602 21.5971 21.5972C21.06 22.1343 20.1877 22.1343 19.6506 21.5972L14.2105 16.1539C12.7323 17.2365 10.9103 17.8724 8.93794 17.8724C4.00059 17.8724 0 13.8726 0 8.93619C0 3.9998 4.00059 0 8.93794 0C13.8753 0 17.8759 3.9998 17.8759 8.93619ZM8.93794 15.1228C9.75053 15.1228 10.5552 14.9628 11.3059 14.6519C12.0566 14.341 12.7388 13.8853 13.3134 13.3108C13.888 12.7363 14.3438 12.0543 14.6547 11.3037C14.9657 10.5531 15.1257 9.74863 15.1257 8.93619C15.1257 8.12376 14.9657 7.31928 14.6547 6.56868C14.3438 5.81809 13.888 5.13609 13.3134 4.56161C12.7388 3.98713 12.0566 3.53143 11.3059 3.22052C10.5552 2.90962 9.75053 2.7496 8.93794 2.7496C8.12534 2.7496 7.32071 2.90962 6.56997 3.22052C5.81923 3.53143 5.13709 3.98713 4.5625 4.56161C3.98791 5.13609 3.53212 5.81809 3.22115 6.56868C2.91019 7.31928 2.75013 8.12376 2.75013 8.93619C2.75013 9.74863 2.91019 10.5531 3.22115 11.3037C3.53212 12.0543 3.98791 12.7363 4.5625 13.3108C5.13709 13.8853 5.81923 14.341 6.56997 14.6519C7.32071 14.9628 8.12534 15.1228 8.93794 15.1228Z"
            fill="black" fill-opacity="0.15" />
        </svg>

        <input v-maska="'###.###.###-##'" placeholder="Insira o CPF do Cliente" type="text" v-model="cpf">
      </div>
    </div>
    <div class="celula-1">
      <div class="client-data">
        <div class="title-row">
          <div>
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 8.5C8.63664 8.5 9.72673 8.05223 10.5305 7.2552C11.3342 6.45817 11.7857 5.37717 11.7857 4.25C11.7857 3.12283 11.3342 2.04183 10.5305 1.2448C9.72673 0.447767 8.63664 0 7.5 0C6.36336 0 5.27327 0.447767 4.46954 1.2448C3.66581 2.04183 3.21429 3.12283 3.21429 4.25C3.21429 5.37717 3.66581 6.45817 4.46954 7.2552C5.27327 8.05223 6.36336 8.5 7.5 8.5ZM5.96987 10.0938C2.67187 10.0938 0 12.7434 0 16.0139C0 16.5584 0.445313 17 0.99442 17H14.0056C14.5547 17 15 16.5584 15 16.0139C15 12.7434 12.3281 10.0938 9.03013 10.0938H5.96987Z"
                fill="black" />
            </svg>
            <span class="client-title">Dados do Cliente</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="item-container">
            <span class="title-container">Nome</span>
            <span class="content-container">Nome do cliente completo</span>
          </div>
          <div class="item-container">
            <span class="title-container">Telefone</span>
            <span class="content-container">(00) 0 0000-0000</span>
          </div>
          <div class="item-container">
            <span class="title-container">Telefone Secundario</span>
            <span class="content-container">(00) 0 0000-0000</span>
          </div>
          <div class="item-container">
            <span class="title-container">CPF</span>
            <span class="content-container">000.000.000-00</span>
          </div>
          <div class="item-container">
            <span class="title-container">E-mail</span>
            <span class="content-container">emaildocliente@gmail.com</span>
          </div>
          <div class="item-container">
            <span class="title-container">Endereço</span>
            <span class="content-container">000 conjunto 00 casa 00 - Recanto das Emas</span>
          </div>
          <div class="item-container">
            <span class="title-container">Cep</span>
            <span class="content-container">00000-000</span>
          </div>
        </div>
      </div>
      <div class="client-data">
        <div class="title-row">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
              viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            <span class="client-title">Dados Financeiros</span>
          </div>
          <div class="btn-bill">
            <span>Ver Faturas</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="item-container">
            <span class="title-container">N° de Faturas em Aberto</span>
            <span class="content-container">0</span>
          </div>
          <div class="item-container">
            <span class="title-container">Valor Total em Aberto</span>
            <span class="content-container">R$ 0,00</span>
          </div>
        </div>
      </div>
      <div class="client-data">
        <div class="title-row">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
              <path
                d="M0 2.375C0 1.06504 1.12109 0 2.5 0H8.75V4.75C8.75 5.40684 9.30859 5.9375 10 5.9375H15V16.625C15 17.935 13.8789 19 12.5 19H2.5C1.12109 19 0 17.935 0 16.625V2.375ZM15 4.75H10V0L15 4.75Z"
                fill="black" />
            </svg>
            <span class="client-title">Dados do Contrato</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="item-container">
            <span class="title-container">Status</span>
            <div>
              <span class="content-container">Cancelado</span>
            </div>
          </div>
          <div class="item-container">
            <span class="title-container">Estágio</span>
            <span class="content-container">Aprovado</span>
          </div>
          <div class="item-container">
            <span class="title-container">inclusão do Contrato</span>
            <span class="content-container">08/06/2021</span>
          </div>
          <div class="item-container">
            <span class="title-container">Desbloqueios Realizados</span>
            <span class="content-container">0</span>
          </div>
          <div class="item-container">
            <span class="title-container">Tentativas Restantes</span>
            <span class="content-container">1</span>
          </div>
          <div class="item-container">
            <span class="title-container">Contrato Bloqueado</span>
            <span class="content-container">Nenhuma vez</span>
          </div>
          <div class="item-container">
            <span class="title-container">último Bloqueio</span>
            <span class="content-container">-</span>
          </div>
          <div class="item-container">
            <span class="title-container">Reduzido</span>
            <span class="content-container">Não</span>
          </div>
        </div>
      </div>
    </div>
    <div class="celula-2">
      <div class="client-data">
        <div class="title-row">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
              <path
                d="M2.78819 1.46309C2.42361 2.32293 2.22222 3.26245 2.22222 4.25177C2.22222 5.24108 2.42361 6.1806 2.78819 7.04044C3.01736 7.5849 2.74306 8.20239 2.17361 8.42482C1.60417 8.64725 0.958333 8.38166 0.725694 7.83721C0.256944 6.72838 0 5.51663 0 4.25177C0 2.9869 0.256944 1.77516 0.725694 0.666326C0.958333 0.12187 1.60417 -0.140399 2.17361 0.0787115C2.74306 0.297822 3.01736 0.918634 2.78819 1.46309ZM19.2743 0.666326C19.7431 1.77516 20 2.9869 20 4.25177C20 5.51663 19.7431 6.72838 19.2743 7.83721C19.0451 8.38166 18.3958 8.64393 17.8264 8.42482C17.2569 8.20571 16.9826 7.5849 17.2118 7.04044C17.5764 6.1806 17.7778 5.24108 17.7778 4.25177C17.7778 3.26245 17.5764 2.32293 17.2118 1.46309C16.9826 0.918634 17.2569 0.301142 17.8264 0.0787115C18.3958 -0.143719 19.0417 0.12187 19.2743 0.666326ZM12.2222 4.25177C12.2222 5.03857 11.7743 5.72578 11.1111 6.09096V15.9376C11.1111 16.5253 10.6146 17 10 17C9.38542 17 8.88889 16.5253 8.88889 15.9376V6.09096C8.22569 5.72246 7.77778 5.03857 7.77778 4.25177C7.77778 3.07986 8.77431 2.12706 10 2.12706C11.2257 2.12706 12.2222 3.07986 12.2222 4.25177ZM5.92361 2.552C5.6875 3.0699 5.55556 3.64423 5.55556 4.25177C5.55556 4.8593 5.6875 5.43363 5.92361 5.95153C6.17014 6.48935 5.9132 7.1168 5.3507 7.34919C4.78819 7.58158 4.13194 7.33923 3.88889 6.80141C3.53125 6.01793 3.33333 5.15477 3.33333 4.25177C3.33333 3.34877 3.53125 2.4856 3.88889 1.70212C4.13542 1.1643 4.78819 0.918634 5.3507 1.15434C5.9132 1.39005 6.17014 2.01419 5.92361 2.552ZM16.1111 1.70212C16.4688 2.4856 16.6667 3.34877 16.6667 4.25177C16.6667 5.15477 16.4688 6.01793 16.1111 6.80141C15.8646 7.33923 15.2118 7.5849 14.6493 7.34919C14.0868 7.11348 13.8299 6.48935 14.0764 5.95153C14.3125 5.43363 14.4444 4.8593 14.4444 4.25177C14.4444 3.64423 14.3125 3.0699 14.0764 2.552C13.8299 2.01419 14.0868 1.38673 14.6493 1.15434C15.2118 0.921954 15.8681 1.1643 16.1111 1.70212Z"
                fill="black" />
            </svg>
            <span class="client-title">Dados da Conexão</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="item-container">
            <span class="title-container">Serial do Cliente:</span>
            <div>
              <span class="content-container">ABC12345</span>
            </div>
          </div>
          <div class="item-container">
            <div class="item-list">
              <div class="title-container">
                <span>Ponto de Acesso</span>
              </div>
              <div class="list">
                <ul>
                  <li><b>POP: </b>TAGUATINGA</li>
                  <li><b>OLT: </b> BSA.OLT.CEI1</li>
                  <li><b>Slot OLT: </b> 3</li>
                  <li><b>Porta OLT:</b> 8</li>
                  <li><b>ID ONU:</b> ALCLF123</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-container">
            <div class="item-list">
              <div class="title-container">
                <span>Usuário e Senha Wi-Fi</span>
              </div>
              <div class="list">
                <ul>
                  <li><b>Usuário: </b>ClienteWiFi123</li>
                  <li><b>Senha: </b>SecurePass123!</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-container">
            <div class="item-list">
              <div class="title-container">
                <span>Extrato de Conexão</span>
              </div>
              <div class="list">
                <ul>
                  <li><b>Data de Instalação:</b> 15/10/2023</li>
                  <li><b>Data da Última Atualização:</b> 22/10/2023</li>
                  <li><b>Consumo de Dados (este mês):</b> 245 GB</li>
                  <li><b>Velocidade da Conexão:</b> 100 Mbps</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-container">
            <div class="item-list">
              <div class="title-container">
                <span><b>Plano do Cliente:</b> Plano Prata</span>
              </div>
              <div class="list">
                <ul>
                  <li><b>Velocidade de Download:</b> 100 Mbps</li>
                  <li><b>Velocidade de Upload:</b> 20 Mbps</li>
                  <li><b>Ligações Locais Gratuitas</b></li>
                  <li><b>Canais de TV:</b> Pacote Básico</li>
                </ul>
              </div>
              <div>
                <span><b>IP Fixo: </b> Não, o cliente não possui um IP fixo.</span>
              </div>
            </div>
          </div>
          <div class="item-container">
            <div class="item-list">
              <div class="title-container">
                <span>Informações AMS</span>
              </div>
              <div class="list">
                <ul>
                  <li><b>Status do Cliente no AMS</b> Up (Ativo)</li>
                  <li><b>RX Optical Signal Level</b> -7.5 dBm</li>
                  <li><b>TX Optical Signal Level:</b> 3.2 dBm</li>
                  <li><b>Temperatura do Módulo Ótico:</b> 45°C</li>
                </ul>
              </div>
              <div class="title-container">
                <span>Equipamentos Conectados </span>
              </div>
              <div class="list">
                <ul>
                  <li><b>5 dispositivos no total</b></li>
                </ul>
              </div>
              <div>
                <span><b>Conexão: </b> 3 Wi-Fi, 2 cabo Ethernet.</span>
              </div>
              <div>
                <span><b>VLAN: </b> Configurada na VLAN 10.</span>
              </div>
              <div>
                <span><b>Canal: </b> Configurado para automático.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="celula-3">
      <div class="client-data">
        <div class="title-row">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path
                d="M0 1.25C0 0.558594 0.391016 0 0.875 0H11.375C11.859 0 12.25 0.558594 12.25 1.25C12.25 1.94141 11.859 2.5 11.375 2.5H0.875C0.391016 2.5 0 1.94141 0 1.25ZM1.75 7.5C1.75 6.80859 2.14102 6.25 2.625 6.25H13.125C13.609 6.25 14 6.80859 14 7.5C14 8.19141 13.609 8.75 13.125 8.75H2.625C2.14102 8.75 1.75 8.19141 1.75 7.5ZM12.25 13.75C12.25 14.4414 11.859 15 11.375 15H0.875C0.391016 15 0 14.4414 0 13.75C0 13.0586 0.391016 12.5 0.875 12.5H11.375C11.859 12.5 12.25 13.0586 12.25 13.75Z"
                fill="black" />
            </svg>
            <span class="client-title">Histórico do Cliente</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="item-container">
            <div class="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                <path
                  d="M10.5011 17.6389C16.3001 17.6389 21 13.6914 21 8.81946C21 3.94756 16.3001 0 10.5011 0C4.70204 0 0.0021307 3.94756 0.0021307 8.81946C0.0021307 10.7318 0.728034 12.4999 1.95838 13.9458C1.88046 14.9846 1.49085 15.9089 1.08073 16.6128C0.855169 17.0029 0.625505 17.3167 0.457358 17.5287C0.371234 17.6347 0.305616 17.7152 0.256402 17.7704C0.231795 17.7958 0.21539 17.817 0.203087 17.8297L0.190783 17.8424C0.0021307 18.0375 -0.0511842 18.3258 0.0513445 18.5802C0.153873 18.8346 0.39174 19 0.658314 19C1.83534 19 3.02057 18.6226 4.00485 18.1817C4.94401 17.7576 5.74374 17.2531 6.23177 16.8842C7.53594 17.3718 8.97954 17.6432 10.5011 17.6432V17.6389ZM5.2516 7.46262C5.59966 7.46262 5.93347 7.60557 6.17958 7.86003C6.4257 8.11449 6.56396 8.4596 6.56396 8.81946C6.56396 9.17932 6.4257 9.52443 6.17958 9.77889C5.93347 10.0333 5.59966 10.1763 5.2516 10.1763C4.90354 10.1763 4.56973 10.0333 4.32361 9.77889C4.0775 9.52443 3.93923 9.17932 3.93923 8.81946C3.93923 8.4596 4.0775 8.11449 4.32361 7.86003C4.56973 7.60557 4.90354 7.46262 5.2516 7.46262ZM10.5011 7.46262C10.8491 7.46262 11.1829 7.60557 11.429 7.86003C11.6752 8.11449 11.8134 8.4596 11.8134 8.81946C11.8134 9.17932 11.6752 9.52443 11.429 9.77889C11.1829 10.0333 10.8491 10.1763 10.5011 10.1763C10.153 10.1763 9.8192 10.0333 9.57308 9.77889C9.32697 9.52443 9.1887 9.17932 9.1887 8.81946C9.1887 8.4596 9.32697 8.11449 9.57308 7.86003C9.8192 7.60557 10.153 7.46262 10.5011 7.46262ZM14.4382 8.81946C14.4382 8.4596 14.5764 8.11449 14.8225 7.86003C15.0687 7.60557 15.4025 7.46262 15.7505 7.46262C16.0986 7.46262 16.4324 7.60557 16.6785 7.86003C16.9246 8.11449 17.0629 8.4596 17.0629 8.81946C17.0629 9.17932 16.9246 9.52443 16.6785 9.77889C16.4324 10.0333 16.0986 10.1763 15.7505 10.1763C15.4025 10.1763 15.0687 10.0333 14.8225 9.77889C14.5764 9.52443 14.4382 9.17932 14.4382 8.81946Z"
                  fill="black" />
              </svg>
            </div>
            <div class="history-content">
              <div class="history-title">
                <span class="title">Relato</span>
                <span class="time">09:39</span>
              </div>
              <div class="history-span">
                Protocolo 815958 - atendimento_ao_cliente - GABRIELA FEITOSA MARANHÃO - Início do atendimento - Protocolo
                815958
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.attendant-container {
  display: grid;
  height: 88vh;
  grid-template-rows: 8% auto; // Ajuste aqui
  grid-template-columns: 1fr 0.9fr 0.8fr; // Ajuste aqui
}

.search-container {
  grid-row: 1;
  /* Posiciona na primeira linha */
  grid-column: 1 / -1;
  /* Estende-se do início ao fim, cobrindo todas as quatro colunas */
  margin: 1vh;

  .search-bar {
    display: flex;
    align-items: center;
    padding-left: 1vw;
    height: 100%;
    width: 100%;
    border: 2px solid #5F687A30;
    border-radius: .8rem;

    input {
      margin-left: 1vw;
      border: none;
      width: 100%;
      font-size: 1.5rem;
    }
  }
}

/* As células individuais da segunda linha podem ser estilizadas assim: */
.celula-1 {
  grid-row: 2;
  grid-column: 1;
  margin: 1vh;
  gap: 1vh;
  display: flex;
  flex-direction: column;

  .client-data {
    padding: 1rem;
    border: 2px solid #5F687A30;
    border-radius: .5rem;

    .title-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        height: 1.5rem;
      }

      .client-title {
        font-size: 1.2rem;
        margin-left: .5vw;
        font-weight: 600;
      }

      .btn-bill {
        padding: .5rem 1rem;
        border-radius: .5rem;
        background: linear-gradient(90deg, #FFB600 0%, #F93822 130.97%);
        color: #ffffff;
        font-weight: 500;
        font-size: 1.1rem;
        cursor: pointer;
      }
    }

    .flex-container {
      display: flex;
      margin-top: 2vh;
      flex-direction: row;
      gap: 1vw;
      flex-wrap: wrap;

      .item-container {
        display: flex;
        flex-direction: column;

        .title-container {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .content-container {
          user-select: text !important;
          font-size: 1.2rem;
        }

      }
    }
  }
}

.celula-2 {
  grid-row: 2;
  grid-column: 2;
  margin: 1vh;
  gap: 1vh;
  display: flex;
  flex-direction: column;

  .client-data {
    padding: 1rem;
    border: 2px solid #5F687A30;
    border-radius: .5rem;

    .title-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        height: 1.5rem;
      }

      .client-title {
        font-size: 1.2rem;
        margin-left: .5vw;
        font-weight: 600;
      }

      .btn-bill {
        padding: .5rem 1rem;
        border-radius: .5rem;
        background: linear-gradient(90deg, #FFB600 0%, #F93822 130.97%);
        color: #ffffff;
        font-weight: 500;
        font-size: 1.1rem;
        cursor: pointer;
      }
    }

    .flex-container {
      display: flex;
      margin-top: 2vh;
      margin-left: 1.5vw;
      flex-direction: column;
      gap: 1vw;
      flex-wrap: wrap;

      .item-container {
        display: flex;
        flex-direction: row;
        gap: .25vw;

        .title-container {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .content-container {
          user-select: text !important;
          font-size: 1.2rem;
        }

        .item-list {
          display: flex;
          flex-direction: column;
          font-size: 1.2rem;

          .list {
            margin-bottom: .5vh;
            margin-top: .5vh;
            margin-left: 1vw;

            li {
              list-style-type: disc;
              user-select: text !important;

            }
          }
        }
      }
    }
  }
}

.celula-3 {
  grid-row: 2;
  grid-column: 3;
  margin: 1vh;
  gap: 1vh;
  display: flex;
  flex-direction: column;

  .client-data {
    padding: 1rem;
    border: 2px solid #5F687A30;
    border-radius: .5rem;

    .title-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1rem;
      border-bottom: 1px solid #5F687A4D;

      svg {
        height: 1.5rem;
      }

      .client-title {
        font-size: 1.2rem;
        margin-left: .5vw;
        font-weight: 600;
      }

      .btn-bill {
        padding: .5rem 1rem;
        border-radius: .5rem;
        background: linear-gradient(90deg, #FFB600 0%, #F93822 130.97%);
        color: #ffffff;
        font-weight: 500;
        font-size: 1.1rem;
        cursor: pointer;
      }
    }

    .flex-container {
      display: flex;
      margin-top: 2vh;
      flex-direction: column;
      gap: 1vw;
      flex-wrap: wrap;

      .item-container {
        display: flex;
        flex-direction: row;
        gap: .25vw;

        .svg-container {
          height: 2vh;
          width: 3vw;
          display: flex;
          justify-self: center;
          align-self: center;

          svg {
            width: 16rem;
          }
        }

        .history-content {
          display: flex;
          flex-direction: column;

          .history-title {
            display: flex;
            justify-content: space-between;
            align-items: end;
            font-weight: 600;

            .title {
              font-size: 1.5rem;
            }

            .time {
              color: #1A1C1E66;
            }
          }

          .history-span {
            font-size: 500;
            
          }
        }

        .title-container {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .content-container {
          display: flex;
          flex-direction: column;
          user-select: text !important;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
