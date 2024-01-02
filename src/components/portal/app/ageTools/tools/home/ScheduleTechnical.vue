<script>
// import {AXIOS} from "../../../../../../../services/api.ts";
// import Cookie from 'js-cookie';
import {mapMutations} from "vuex";
import FilterComponent from "@/components/portal/app/_fragments/filter/FilterComponent.vue";

export default {
  name: "ScheduleTechnical",
  components: {FilterComponent},
  data() {
    return {
      monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      capacityInfo: {
        dayName: '',
        turn: [
          {title: 'Manhã',
            capacity: [
              {title: 'Instalações', valueTotal: 0, value: 0},
              {title: 'Visitas Técnicas', valueTotal: 0, value: 0},
              {title: 'MP/ME', valueTotal: 0, value: 0},
            ]},
          {title: 'Tarde',
            capacity: [
              {title: 'Instalações', valueTotal: 0, value: 0},
              {title: 'Visitas Técnicas', valueTotal: 0, value: 0},
              {title: 'MP/ME', valueTotal: 0, value: 0},
            ]},
        ]
      },
      currentYear: null,
      currentMonth: null,
      weeks: [],
      daySelected: '',
      payload: {
        typeNote: null,
        dateSchedule: null
      },
      showOverlay: false
    }
  },
  methods: {
    displayCalendar() {
      // Obtém o número de dias no mês atual
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      // Obtém o dia da semana do primeiro e último dia do mês atual
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const lastDay = new Date(this.currentYear, this.currentMonth, daysInMonth).getDay();

      // Array para armazenar as semanas do calendário
      const weeks = [];
      let week = [];

      // Adiciona dias em branco no início do calendário
      for (let i = 0; i < firstDay; i++) {
        week.push({});
      }

      // Adiciona os dias do mês atual
      for (let day = 1; day <= daysInMonth; day++) {
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
        week.push({date: day});
      }

      // Adiciona dias em branco no final do calendário
      for (let i = lastDay + 1; i <= 6; i++) {
        week.push({});
      }

      weeks.push(week);
      // Atualiza o array de semanas do calendário
      this.weeks = weeks;

      // Salva o dia atual
      this.selectDay({date: new Date().getDate()})
    },
    isCurrentDay(day) {
      const currentDate = new Date();
      return (
          day.date === currentDate.getDate() &&
          this.currentMonth === currentDate.getMonth() &&
          this.currentYear === currentDate.getFullYear()
      );
    },
    isCurrentMonth() {
      const currentDate = new Date();
      return (
          this.currentMonth === currentDate.getMonth() &&
          this.currentYear === currentDate.getFullYear()
      );
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentYear--;
        this.currentMonth = 11;
      } else {
        this.currentMonth--;
      }
      this.displayCalendar();
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentYear++;
        this.currentMonth = 0;
      } else {
        this.currentMonth++;
      }
      // Atualiza o calendário
      this.displayCalendar();
    },
    selectDay(day) {

      if (!this.pendingConsult) {
        this.daySelected = day.date
      }

      this.capacityBuild()

    },
    getData () {

      // alert(this.payload.dateSchedule)

      // AXIOS({
      //   method: 'GET',
      //   url: 'agetools/tools/schedule/dashboard/data',
      //   params: {
      //     dateSchedule: this.payload.dateSchedule
      //   },
      //   headers: {
      //     'Authorization': 'Bearer ' + Cookie.get('token')
      //   }
      // }).then((res) => {
      //
      //   console.log(res)
      //
      // })


    },
    ...mapMutations(['toggleOverlay']),
    capacityBuild () {
      const dayName = this.daysOfWeek[new Date(this.currentYear, this.currentMonth, this.daySelected).getDay()]

      switch (dayName) {
        case 'Dom':
          this.capacityInfo.dayName = 'Domingo'
          break
        case 'Seg':
          this.capacityInfo.dayName = 'Segunda-feira'
          this.capacityInfo.turn[0].capacity[0].valueTotal = 150
          this.capacityInfo.turn[1].capacity[0].valueTotal = 150
          this.capacityInfo.turn[0].capacity[1].valueTotal = 75
          this.capacityInfo.turn[1].capacity[1].valueTotal = 75
          this.capacityInfo.turn[0].capacity[2].valueTotal = 15
          this.capacityInfo.turn[1].capacity[2].valueTotal = 15
          break
        case 'Ter':
          this.capacityInfo.dayName = 'Terça-feira'
          this.capacityInfo.turn[0].capacity[0].valueTotal = 150
          this.capacityInfo.turn[1].capacity[0].valueTotal = 150
          this.capacityInfo.turn[0].capacity[1].valueTotal = 75
          this.capacityInfo.turn[1].capacity[1].valueTotal = 75
          this.capacityInfo.turn[0].capacity[2].valueTotal = 15
          this.capacityInfo.turn[1].capacity[2].valueTotal = 15
          break
        case 'Qua':
          this.capacityInfo.dayName = 'Quarta-feira'
          this.capacityInfo.turn[0].capacity[0].valueTotal = 150
          this.capacityInfo.turn[1].capacity[0].valueTotal = 150
          this.capacityInfo.turn[0].capacity[1].valueTotal = 75
          this.capacityInfo.turn[1].capacity[1].valueTotal = 75
          this.capacityInfo.turn[0].capacity[2].valueTotal = 15
          this.capacityInfo.turn[1].capacity[2].valueTotal = 15
          break
        case 'Qui':
          this.capacityInfo.dayName = 'Quinta-feira'
          this.capacityInfo.turn[0].capacity[0].valueTotal = 150
          this.capacityInfo.turn[1].capacity[0].valueTotal = 150
          this.capacityInfo.turn[0].capacity[1].valueTotal = 75
          this.capacityInfo.turn[1].capacity[1].valueTotal = 75
          this.capacityInfo.turn[0].capacity[2].valueTotal = 15
          this.capacityInfo.turn[1].capacity[2].valueTotal = 15
          break
        case 'Sex':
          this.capacityInfo.dayName = 'Sexta-feira'
          this.capacityInfo.turn[0].capacity[0].valueTotal = 150
          this.capacityInfo.turn[1].capacity[0].valueTotal = 150
          this.capacityInfo.turn[0].capacity[1].valueTotal = 75
          this.capacityInfo.turn[1].capacity[1].valueTotal = 75
          this.capacityInfo.turn[0].capacity[2].valueTotal = 15
          this.capacityInfo.turn[1].capacity[2].valueTotal = 15
          break
        case 'Sab':
          this.capacityInfo.dayName = 'Sábado'
          this.capacityInfo.turn[0].capacity[0].valueTotal = 100
          this.capacityInfo.turn[1].capacity[0].valueTotal = 100
          this.capacityInfo.turn[0].capacity[1].valueTotal = 37
          this.capacityInfo.turn[1].capacity[1].valueTotal = 37
          this.capacityInfo.turn[0].capacity[2].valueTotal = 10
          this.capacityInfo.turn[1].capacity[2].valueTotal = 10
          break
      }

    }
  },
  mounted() {
    // Obtém a data atual
    const date = new Date();
    // Define o ano e mês atual com base na data atual
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
    // Gera o calendário inicial
    this.displayCalendar();
  }
}
</script>

<template>
  <div class="container-schedule-technical">

    <div class="content-schedule">
      <h1>Painel - Agenda técnica</h1>

      <div class="headers">
        <div class="available-schedules">
          <div class="period" v-for="(turn, index)  in capacityInfo.turn" :key="index">
            <span>Disponibilidade Período - <b>{{ turn.title }}</b></span>
            <div class="container-progress">
              <div class="progress" v-for="(cap, ind) in turn.capacity" :key="ind">
                <div class="title-value">
                  <h4>{{ cap.title }}</h4>
                  <span>{{ cap.valueTotal }}</span>
                </div>
                <progress :style="{animationDelay : ind * .2+'s'}" id="activations" :max="cap.valueTotal"
                          :value="cap.value"></progress>
              </div>
            </div>
          </div>

        </div>
        <div class="calendar-container">
          <div id="calendar">
            <table>
              <caption>
                <div class="items">
                  <button @click="prevMonth">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                          d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"/>
                    </svg>
                  </button>
                  <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
                  <button @click="nextMonth">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                          d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"/>
                    </svg>
                  </button>
                </div>
              </caption>
              <thead>
              <!-- Cabeçalho com os nomes dos dias da semana -->
              <tr>
                <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
              </tr>
              </thead>
              <tbody>
              <!-- Corpo da tabela com as semanas e dias do calendário -->
              <tr v-for="(week, index) in weeks" :key="index">
                <td v-for="day in week" :key="day.date"
                    @click="selectDay(day);getData()">
                  <template v-if="day.date === daySelected">
                    <div class="day">
                      {{ day.date }}
                    </div>
                  </template>
                  <template v-else>
                    <div>
                      {{ day.date }}
                    </div>
                  </template>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="data-container">
        <div class="headers-data">
          <h1>Agenda técnica - <b>{{ capacityInfo.dayName }}</b>, <b>{{ daySelected }} de {{ monthNames[currentMonth] }} de {{ currentYear }}</b></h1>

          <div class="actions">
            <FilterComponent>
              <template #filter-content>
                <!-- Coloque suas opções de filtro customizadas aqui -->
                <div class="filter-title">
                  <h1>Filtrar tipos de solicitação</h1>
                  <p>Selecione por qual filtro você deseja realizar a sua consulta</p>
                </div>
                <div class="filter-input">
                  <input placeholder="Filtrar tipo de solicitação...">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                          d="M17.8759 8.93619C17.8759 10.9082 17.2356 12.7298 16.157 14.2077L21.5971 19.651C22.1343 20.1881 22.1343 21.0602 21.5971 21.5972C21.06 22.1343 20.1877 22.1343 19.6506 21.5972L14.2105 16.1539C12.7323 17.2365 10.9103 17.8724 8.93794 17.8724C4.00059 17.8724 0 13.8726 0 8.93619C0 3.9998 4.00059 0 8.93794 0C13.8753 0 17.8759 3.9998 17.8759 8.93619ZM8.93794 15.1228C9.75053 15.1228 10.5552 14.9628 11.3059 14.6519C12.0566 14.341 12.7388 13.8853 13.3134 13.3108C13.888 12.7363 14.3438 12.0543 14.6547 11.3037C14.9657 10.5531 15.1257 9.74863 15.1257 8.93619C15.1257 8.12376 14.9657 7.31928 14.6547 6.56868C14.3438 5.81809 13.888 5.13609 13.3134 4.56161C12.7388 3.98713 12.0566 3.53143 11.3059 3.22052C10.5552 2.90962 9.75053 2.7496 8.93794 2.7496C8.12534 2.7496 7.32071 2.90962 6.56997 3.22052C5.81923 3.53143 5.13709 3.98713 4.5625 4.56161C3.98791 5.13609 3.53212 5.81809 3.22115 6.56868C2.91019 7.31928 2.75013 8.12376 2.75013 8.93619C2.75013 9.74863 2.91019 10.5531 3.22115 11.3037C3.53212 12.0543 3.98791 12.7363 4.5625 13.3108C5.13709 13.8853 5.81923 14.341 6.56997 14.6519C7.32071 14.9628 8.12534 15.1228 8.93794 15.1228Z"
                          fill="white"/>
                    </svg>
                  </button>
                </div>
                <div>

                </div>
              </template>
            </FilterComponent>
            <div class="search">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
              <input autocomplete="off" type="text" name="search" id="search" placeholder="Pesquisar cliente">
            </div>
            <div class="download">
              <button>
                <span>Exportar agenda</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="data">
          <table>
            <thead>
            <tr>
              <th>Nº do contrato</th>
              <th>Cliente</th>
              <th>Protocolo</th>
              <th>Tipo de solicitação</th>
              <th>Turno</th>
              <th>Região</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>12912</td>
              <td>Carlos Neto</td>
              <td>21099021</td>
              <td>Ativação</td>
              <td>Manhã</td>
              <td>Sobradinho</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

.container-schedule-technical {
  height: 100%;
  opacity: 0;
  animation: up-page ease-in-out forwards .4s;

  h1 {
    font-size: 1.8rem;
    color: #000;
    font-weight: 500;
  }

  .content-schedule {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1.5px solid rgba(95, 104, 122, 0.30);
    padding: 2vh 1vw;
    @include flex(column, space-between, initial, 2vh);

    .headers {
      @include flex(row, space-between, center, 1vw);
      width: 100%;
      height: 25%;

      .available-schedules {
        @include flex(row, flex-start, center, 1vw);
        width: 70%;
        height: 100%;

        .period {
          border-radius: 5px;
          border: 1.5px solid rgba(95, 104, 122, 0.30);
          background: #FFF;
          width: 100%;
          padding: 1vh 1vw;

          span {
            font-size: 1.2rem;
            color: #000000;
            font-weight: 500;
          }

          @include flex(column, flex-start, initial, 1vh);

          .container-progress {
            width: 100%;
            @include flex(column, flex-start, initial, 1vh);

            .progress {
              width: 100%;

              .title-value {
                width: 100%;
                @include flex(row, space-between, center, 0vw);

                h4 {
                  font-size: 1.2rem;
                  color: #000;
                  font-weight: 500;
                }

                span {
                  color: rgba(0, 0, 0, 0.35);
                  font-weight: 600;
                }
              }

              progress {
                width: 0%;
                outline: none;
                border-radius: 5px;
                height: 7px;
                transition: all ease-in-out .2s;
                animation: width-progress ease-in-out 1s forwards;

                &::-webkit-progress-value {
                  background: linear-gradient(90deg, #FFB600 0.04%, #F93822 127.48%);
                  border-radius: 5px;
                }

                &::-webkit-progress-bar {
                  border-radius: 5px;
                  background: rgba(217, 217, 217, 0.60);
                }
              }

              @keyframes width-progress {
                from {
                  width: 0%;
                }
                to {
                  width: 100%;
                }
              }
            }
          }
        }
      }

      .calendar-container {
        height: 100%;
        width: 30%;
        padding: 1vh 1vw;
        background-color: #fff;
        border-radius: 10px;

        #calendar {
          width: 100%;
          height: 100%;
          @include flex(column, center, center, 0);

          table {
            width: 100%;
            height: 80%;
            border-collapse: collapse;

            caption {
              width: 100%;

              .items {
                @include flex(row, space-between, center, 0);
                padding: 0 1vw;

                span {
                  background: linear-gradient(90deg, #FFB600 -2.66%, #FC461B 112.9%);
                  background-clip: text;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  font-size: 1.6rem;
                  font-weight: 500;
                }

                button {
                  outline: none;
                  background-color: transparent;
                  border: none;

                  svg {
                    font-size: 1.4rem;
                    fill: #19233B;
                    cursor: pointer;

                  }
                }
              }
            }

            thead {
              tr {

                th {
                  font-size: 1.2rem;
                  color: #000000;
                  font-weight: 500;
                  padding: 1vh 0;
                  border-bottom: 2px solid;
                  border-color: #FFB600;
                }
              }
            }

            tbody {
              tr {

                td {
                  font-size: 1.2rem;
                  color: #000000;
                  font-weight: 500;
                  text-align: center;
                  cursor: pointer;
                  padding: 2px 0;

                  &:hover {
                    color: linear-gradient(90deg, #FFB600 -2.66%, #FC461B 112.9%);
                    transform: scale(1.2);
                  }


                }

                .day {
                  background: linear-gradient(90deg, #FFB600 -2.66%, #FC461B 112.9%);
                  background-clip: text;
                  -webkit-background-clip: text; /* Para compatibilidade com navegadores WebKit */
                  color: transparent;
                  font-weight: 600;
                  transform: scale(1.2);
                }
              }
            }
          }
        }
      }

    }

    .data-container {
      border: 1.5px solid rgba(95, 104, 122, 0.30);
      background: #FFF;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      padding: 1vh 1vw;

      .headers-data {
        @include flex(row, space-between, center, 0);

        h1 {
          font-size: 1.4rem;
          width: 30%;
          color: rgba(0, 0, 0, 0.7);

        }

        .actions {
          @include flex(row, space-evenly, center, 1vw);
          width: 50%;

          .filter {
            @include flex(row, flex-start, center, .5vw);

            svg {
              fill: rgba(0, 0, 0, 0.15);
              font-size: 2rem;
            }

            span {
              color: rgba(0, 0, 0, 0.30);
              font-size: 1.4rem;
              font-weight: 500;
            }


          }

          .search {
            padding: 10px 15px;
            @include flex(row, flex-start, center, 0vw);
            border: 1.5px solid rgba(95, 104, 122, 0.30);
            border-radius: 7px;
            width: 45%;

            svg {
              fill: rgba(0, 0, 0, 0.15);
              font-size: 2rem;
            }

            input {
              outline: none;
              border: none;
              background-color: transparent;
              color: rgba(0, 0, 0, 1);
              font-size: 1.4rem;
              font-weight: 500;
              width: 100%;
              padding: 0 1vw;
            }
          }

          .download {
            button {
              @include flex(row, flex-start, center, 1vw);
              border-radius: 5px;
              background: linear-gradient(90deg, #FFB600 0%, #F93822 152.5%);
              box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
              outline: none;
              padding: 10px 20px;
              color: #fff;
              fill: #fff;
              border: none;

              cursor: pointer;
            }
          }
        }


      }

      .data {
        padding: 2vh 0;

        table {
          width: 100%;
          border-collapse: collapse;
          height: 80%;

          thead {
            th {
              text-align: left;
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
              padding: 2vh 1vw;
              color: rgba(0, 0, 0, 0.5);
              font-size: 1.2rem;
              font-weight: 500;

            }
          }

          tbody {
            td {
              text-align: left;
              height: 7vh;
              padding-left: 1vw;
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
              color: rgba(0, 0, 0, 0.7);
              font-size: 1.2rem;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

@keyframes up-page {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filter-title {
  margin-left: 2vw;
  margin-right: 2vw;
  padding-bottom: 2vh;

  h1 {
    font-size: 2.4rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
  }
}

.filter-input {
  height: auto;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 2vh 0;
  background-color: #D9D9D950;

  input {
    height: 35px;
    width: 75%;
    border: .5px solid #d9d9d9 ;
    padding-left: 15px;
  }

  button {
    width: 10%;
    border-radius: 5px;
    background: linear-gradient(90deg, #FFB600 -0.88%, #F93822 235.67%);
    border: none;
    cursor: pointer;
  }
}

</style>