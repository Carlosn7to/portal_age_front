<script>
import {AXIOS} from "../../../../../../services/api.ts";
import Cookie from "js-cookie";

export default {
  name: "ReportPage",
  data () {
    return {
      reports: [],
      search: ''
    }
  },
  methods: {
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
    }
  },
  computed: {
    reportFiltered () {
      return this.reports.filter(item => {
        return item.nome.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  beforeMount() {
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
              <button>
                <span>Editar Relatório</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>              </button>
            </div>
          </div>

        </div>
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
    width: 100%;
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
              background: rgb(255, 182, 0);
              background: linear-gradient(62deg, rgba(255, 182, 0, 1) 32%, rgba(255, 92, 74, 1) 100%);
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
          from {
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
}

</style>