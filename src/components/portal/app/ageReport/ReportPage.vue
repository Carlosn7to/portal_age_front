<script>
import {AXIOS} from "../../../../../services/api.ts";
import Cookie from "js-cookie";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ReportPage",
  data () {
    return {
      reports: [],
      report: [],
      search: '',
      selectedOptionsReport: [],
      typeDateReport: 'day',
      preview: false
    }
  },
  methods: {
    ...mapMutations(['SAVE_ALERT']),
    getReports () {
        AXIOS({
          method: 'GET',
          url: 'agereport/report/reports',
          headers: {
            "Authorization": "Bearer "+Cookie.get('token')
          }
        }).then(res => {
          this.reports = res.data
        }).catch(err => {
          console.log(err)
        })
    },
    downloadExcel () {

      const reportId = this.report.id

      this.reports.map((item) => {
        if (item.id === reportId) {
          item.status = true
        }
      })

      this.SAVE_ALERT({display: true, type: 'info', title: 'Extraindo relatório', msg: 'Avisaremos quando estiver pronto.'})

      AXIOS({
        method: 'GET',
        url: `agereport/report-download/${this.report.id}`,
        headers: {
          'Authorization': 'Bearer '+Cookie.get('token')
        },
        params: {paramnsId: this.selectedOptionsReport},
        responseType: 'blob',
      }).then((res) => {

        this.reports.map((item) => {
          if (item.id === reportId) {
            item.status = false
          }
        })

        let blob = new Blob([res.data],
            { type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = this.report.nome_arquivo
        link.click()

      })
    },
    checkAllCheckboxes () {
      this.selectedOptionsReport = this.report.parametros.map(item => item.id);

    }
  },
  computed: {
    ...mapGetters(['system']),
    reportFiltered () {
      return this.reports.filter(item => {
        return item.nome.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted() {
    this.getReports()
  }
}
</script>

<template>
  <div class="report-page">

    <div class="reports">
      <div class="title">
        <h3>Relatórios</h3>
        <div class="search">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M17.8759 8.93619C17.8759 10.9082 17.2356 12.7298 16.157 14.2077L21.5971 19.651C22.1343 20.1881 22.1343 21.0602 21.5971 21.5972C21.06 22.1343 20.1877 22.1343 19.6506 21.5972L14.2105 16.1539C12.7323 17.2365 10.9103 17.8724 8.93794 17.8724C4.00059 17.8724 0 13.8726 0 8.93619C0 3.9998 4.00059 0 8.93794 0C13.8753 0 17.8759 3.9998 17.8759 8.93619ZM8.93794 15.1228C9.75053 15.1228 10.5552 14.9628 11.3059 14.6519C12.0566 14.341 12.7388 13.8853 13.3134 13.3108C13.888 12.7363 14.3438 12.0543 14.6547 11.3037C14.9657 10.5531 15.1257 9.74863 15.1257 8.93619C15.1257 8.12376 14.9657 7.31928 14.6547 6.56868C14.3438 5.81809 13.888 5.13609 13.3134 4.56161C12.7388 3.98713 12.0566 3.53143 11.3059 3.22052C10.5552 2.90962 9.75053 2.7496 8.93794 2.7496C8.12534 2.7496 7.32071 2.90962 6.56997 3.22052C5.81923 3.53143 5.13709 3.98713 4.5625 4.56161C3.98791 5.13609 3.53212 5.81809 3.22115 6.56868C2.91019 7.31928 2.75013 8.12376 2.75013 8.93619C2.75013 9.74863 2.91019 10.5531 3.22115 11.3037C3.53212 12.0543 3.98791 12.7363 4.5625 13.3108C5.13709 13.8853 5.81923 14.341 6.56997 14.6519C7.32071 14.9628 8.12534 15.1228 8.93794 15.1228Z" fill="black" fill-opacity="0.15"/>
          </svg>
          <input type="text" id="search" name="search" autocomplete="off"
                 placeholder="Pesquisar relatório..." v-model="search">
        </div>
      </div>
      <div class="data-reports">
        <div class="header-reports">
          <div class="item" style="width: 35%; justify-content: left">
            <h4>Título</h4>
          </div>
          <div class="item">
            <h4>Área</h4>
          </div>
          <div class="item">
            <h4>Sistema</h4>
          </div>
          <div class="item"  style="width: 30%">
            <h4>Ações</h4>
          </div>
        </div>
        <div class="body-reports">
          <div
              :style="{animationDelay : index * .1+'s'}" class="report" v-for="(item, index) in reportFiltered" :key="index">
            <div class="item" style="width: 35%; justify-content: left">
              <h4>{{ item.nome }}</h4>
            </div>
            <div class="item">
              <h4>-</h4>
            </div>
            <div class="item">
              <h4>-</h4>
            </div>
            <div class="item" style="width: 30%">
              <button v-if="! item.status"  @click="report = item; checkAllCheckboxes(); preview = true">
                <span>Visualizar Relatório</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
              </button>
              <button v-else>
                <span>Extraindo Relatório</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="preview">
      <h3>Pré-visualização</h3>
      <div class="content">
        <p>
        Customize seu relatório com o que você deseja visualizar.
      </p>

        <template v-if="preview">
          <div class="checkbox-data">
            <h4>Colunas</h4>
            <div class="checkbox-container" v-for="(item, index) in report.parametros" :key="index">
              <label class='checkbox blue'>
                <input checked type='checkbox' :value="item.id" :id="item.id" v-model="selectedOptionsReport">
                <span class='indicator'></span>
              </label>
              <span>{{ item.name }}</span>
            </div>
          </div>


          <div class="date-options">
            <template v-if="report.isPeriodo != 0 || report.isPeriodoHora != 0">
              <p>
                Selecione a periocidade que deseja receber o relatório.
              </p>
              <br>
              <select name="period" id="period" v-model="typeDateReport">
                <option value="day" selected>
                  Dia
                </option>
                <option value="period">
                  Período
                </option>
              </select>
              <div class="date">
                <template v-if="typeDateReport === 'day'">
                  <input type="date" name="day" id="day">
                </template>
                <template v-else>
                  <div class="period">
                    <input type="date" name="firstPeriod" id="firstPeriod">
                    <label for="firstPeriod">Data inicio</label>
                  </div>

                  <div class="period">
                    <input type="date" name="lastPeriod" id="lastPeriod">
                    <label for="lastPeriod">Data Fim</label>
                  </div>
                </template>
              </div>
            </template>
            <br>
            <button @click="downloadExcel">
              Baixar relatório
            </button>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.report-page {
  width: 100%;
  height: 90%;
  padding: 2vh 0;
  @include flex(row, flex-start, initial, 1vw);

  h3 {
    font-size: 1.8rem;
    color: #000;
    font-weight: 500;
  }

  .reports {
    width: 70%;
    height: 100%;
    border-radius: 7px;
    border: 1.5px solid rgba(95, 104, 122, 0.30);

    .title {
      @include flex(row, space-between, center, 0);
      padding: 1vh 1vw;

      h3 {
        width: 50%;
      }

      .search {
        width: 40%;
        border: 1.5px solid rgba(95, 104, 122, 0.30);
        border-radius: 7px;
        padding: 7px 10px;
        @include flex(row, flex-start, center, .5vw);

        input {
          border: none;
          width: 100%;
        }
      }
    }

    .data-reports {
      height: 85%;
      .header-reports {
        width: 100%;
        @include flex(row, space-between, center, 0);
        border-bottom: 1.5px solid rgba(95, 104, 122, 0.30);
        padding: 2vh 1vw;


        .item {
          width: 23%;
          @include flex(row, center, center, 0);

          h4 {
            font-size: 1.2rem;
            color: #00000050;
            font-weight: 600;
            text-align: center;
          }


        }
      }

      .body-reports {
        overflow-y: auto;
        max-height: 85%;
        .report {
          width: 100%;
          @include flex(row, space-between, center, 0);
          padding: 2vh 1vw;
          border-bottom: 1.5px solid rgba(95, 104, 122, 0.30);
          opacity: 0;
          animation: up-report ease-in-out forwards .4s;

          .item {
            width: 23%;
            @include flex(row, center, center, 0);

            h4 {
              font-size: 1.2rem;
              color: #000;
              font-weight: 500;
              text-align: left;

            }



            button {
              margin: 0 auto;
              border-radius: 5px;
              background: rgb(255,182,0);
              background: linear-gradient(62deg, rgba(255,182,0,1) 32%, rgba(255,92,74,1) 100%);
              color: #fff;
              padding: 7px 15px;
              border: none;
              box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
              cursor: pointer;
              transition: background-color .2s ease-in-out, color ease-in-out .2s;
              @include flex(row, center, center, .8vw);

              &:hover {
                background-color: #1D2A48;
                color: #fff;
              }

              svg {
                fill: #FFFFFF;
              }
            }

          }
        }


        @keyframes up-report {
          from  {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      }
    }

  }

  .preview {
    width: 30%;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    border-radius: 7px;
    border: 1.5px solid rgba(95, 104, 122, 0.30);

    h3 {
      padding: 2vh 1vw;

      border-bottom: 1px solid rgba(95, 104, 122, 0.30);
    }


    .content {
      height: 80%;

      padding: 2vh 1vw;
      @include flex(column, flex-start, initial, 3vh);
      p {
        font-size: 1.4rem;
        padding: 0 1vw;
        color: rgba(0, 0, 0, 0.4);
        font-weight: 500;
        text-align: center;
      }

      .checkbox-data {
        @include flex(row, flex-start, center, .5vw);
        flex-wrap: wrap;
        width: 100%;

        h4 {
          font-size: 1.2rem;
          color: #00000050;
          font-weight: 600;
          text-align: left;
          margin-bottom: 2vh;
          width: 100%;
        }

        .checkbox-container {
          padding: .2vh .5vw;
          @include flex(row, flex-start, center, .5vw);
          width: 48%;


          span {
            font-size: 1.2rem;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
          }

        }


      }


      .date-options {
        select {
          width: 100%;
          padding: 10px 8px;
          border-radius: 5px;
          outline: none;
          border: 1px solid #edeae9;
          transition: border .2s ease-in-out;
          margin-bottom: 10px;
        }

        .date {
          @include flex(column, flex-start, initial, 1vh);

          input {
            width: 50%;
            padding: 10px 8px;
            border-radius: 5px;
            outline: none;
            border: 1px solid #edeae9;
            transition: border .2s ease-in-out;
          }

          label {
            font-size: 1.2rem;
            color: #000;
            font-weight: 500;
          }

          .period {
            @include flex(row, flex-start, center, 1vw);
          }

        }

      }

      button {
        margin: 0 auto;
        border-radius: 5px;
        background: rgb(255,182,0);
        background: linear-gradient(62deg, rgba(255,182,0,1) 32%, rgba(255,92,74,1) 100%);
        color: #fff;
        padding: 7px 15px;
        border: none;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        cursor: pointer;
        transition: background-color .2s ease-in-out, color ease-in-out .2s;
        @include flex(row, center, center, .8vw);
        margin-bottom: 2vh;

        &:hover {
          background-color: #1D2A48;
          color: #fff;
        }

        svg {
          fill: #FFFFFF;
        }
      }
    }

  }
}

/* Checkbox styles */

$black: #2D3137;
  $blue: #1A1C1E;
$grey: #D6D6D6;
$white: #FFFFFF;


$border-radius: 3px;

@mixin checkbox($color) {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 1vh .5vw;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;

    &:focus ~ span {
      border: 2px solid lighten($black, 50%);
    }

    &:focus:checked ~ span {
      border: 2px solid darken($color, 15%);
    }

    &:checked ~ span {
      color: $white;
      background: $color url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxMiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTIgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZD0iTTQuNTc1IDguOTc3cy0uNDA0LS4wMDctLjUzNi0uMTY1TC4wNTcgNS42NGwuODI5LTEuMjI3TDQuNDcgNy4yNjggMTAuOTIxLjA4NmwuOTIzIDEuMTAzLTYuODYzIDcuNjRjLS4xMzQtLjAwMy0uNDA2LjE0OC0uNDA2LjE0OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPg0KPC9zdmc+) 50% 40% no-repeat;
      border: 2px solid $color;
    }

  }

  span {
    border-radius: $border-radius;
    position: absolute;
    left: 0;
    top: -2px;
    width:  1.6rem;
    height: 1.6rem;
    background-color: lighten($black, 65%);
    border: 2px solid lighten($black, 65%);

    cursor: pointer;
  }
}

label.checkbox {

  &.blue {
    @include checkbox($blue);
  }
}


</style>