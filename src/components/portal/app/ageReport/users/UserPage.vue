<script>
import {AXIOS} from "../../../../../../services/api.ts";
import Cookie from "js-cookie";
export default {
  name: "UserPage",
  data () {
    return {
      list: {
        headers: ['Nome', 'E-mail', 'Status'],
        items: [{}],
        status : false
      },
      search: ''
    }
  },
  methods: {
    getUsers: function () {
      this.status = false

      AXIOS({
        method: 'GET',
        url: 'admin/access-systems',
        params: {
          system: 'agereport'
        },
        headers: {
          'Authorization': 'Bearer'+Cookie.get('token')
        }
      }).then((res) => {
        this.list.items = res.data
        this.list.status = true
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  computed: {
    filteredUsers () {

      let values = []

      values = this.list.items.filter((value) => {
        return (
            value.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      })

      return values
    }
  },
  beforeMount() {
    this.getUsers()
  }
}
</script>

<template>
  <div class="user-page">
    <div class="user-data">
      <div class="title-options">
        <div class="title">
          <h2>Usuários</h2>
        </div>
        <div class="options">
          <div class="input">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <input autocomplete="off" v-model="search" spellcheck="false"
                type="text" name="search" id="search" placeholder="Buscar usuário...">
          </div>
        </div>
      </div>
      <div class="data">
        <table>
          <thead>
            <tr>
              <th v-for="(header, index) in list.headers" :key="index">
                <span>{{ header }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></svg>
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody v-if="list.status === true">
            <tr v-for="(item, index) in filteredUsers" :key="index" :style="{animationDelay : index * .1+'s'}">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td :class="{'active' : item.access, 'inactive' : !item.access}">
                <span>
                  {{ item.access ? 'Ativo' : 'Inativo' }}
                </span>
              </td>
              <td>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.user-page {
  width: 100%;
  height: 90%;
  padding: 2vh 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: initial;
  gap: 1vw;

  .user-data {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    border: 1.5px solid rgba(95, 104, 122, 0.3);

    .title-options {
      @include flex(row, space-between, initial, 0);
      padding: 2vh 1vw;

      .title {
        h2 {
          font-size: 1.6rem;
          font-weight: 500;
          color: #000000;
        }
      }

      .options {
        width: 30%;
        .input {
          border-radius: 5px;
          border: 1.5px solid rgba(95, 104, 122, 0.30);
          padding: 10px 10px;
          width: 100%;
          @include flex(row, flex-start, center, .5vw);

          svg {
            fill: rgba(95, 104, 122, 0.30);
            font-size: 1.8rem;
          }

          input {
            border: none;
            outline: none;
            font-size: 1.2rem;
            color: #00000080;
            font-weight: 500;
          }
        }


      }
    }

    .data {
      max-height: 85%;
      overflow-y: auto;

      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        thead {
          tr {
            th {
              padding: 1vh 1vw;
              color: rgba(0, 0, 0, 0.50);
              font-size: 1.4rem;
              font-weight: 500;
              line-height: normal;
              border-bottom: 1px solid #cccccc80;
              text-align: left;



              svg {
                fill: rgba(0, 0, 0, 0.50);
                font-size: 1.2rem;
                margin-left: .5vw;
                cursor: pointer;

                &:hover {
                  fill: #000000;
                }
              }
            }

            th:nth-last-child(1), th:nth-last-child(2) {
              text-align: center;
            }
          }
        }

        tbody {
          tr {
            opacity: 0;
            animation: up ease-in-out forwards .4s;

            td {
              padding: 1vh 1vw;
              color: #000;
              font-size: 1.4rem;
              font-weight: 500;
              border-bottom: 1px solid #cccccc80;
              text-align: left;
              height: 9vh;

            }

            td:nth-last-child(1), td:nth-last-child(2) {
              text-align: center;

              span {
                padding: 5px 10px;
                border-radius: 5px;
                font-weight: 600;
                font-size: 1.2rem;
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


            @keyframes up {
              from  {
                transform: translateY(20px);
                opacity: 0;
              }
              to {
                transform: translateY(0px);
                opacity: 1;
              }
            }

            .active {
              span {
                background-color: rgba(221, 255, 236, 1);
                color: rgba(0, 148, 59, 1);
              }
            }

            .inactive {
              span {
                background-color: rgba(255, 68, 68, 0.2);
                color: rgba(225, 0, 0, 1);
              }
            }
          }
        }
      }
    }
  }
}

</style>