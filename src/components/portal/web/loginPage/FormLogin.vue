<script>
import {defineComponent} from 'vue'
import {mapMutations} from "vuex";
import {AXIOS} from "../../../../../services/api.ts";
import Cookie from 'js-cookie'

export default defineComponent({
  name: "FormLogin",
  data() {
    return {
      payload: {
        email: '',
        password: ''
      },
      loading: false,
      response: {
        status: '',
        message: '',
        class: '',
        display: false
      }
    }
  },
  methods: {
    ...mapMutations([
      'SAVE_SYSTEM',
      'SAVE_USER'
    ]),
    login() {

      this.loading = true
      this.response.display = false
      this.response.class = ''

      const payload = JSON.stringify(this.payload);


      AXIOS({
        method: 'POST',
        url: 'auth/login_ad',
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json',
        },
        data: payload
      }).then((res) => {
        this.$router.replace('/inicio')

        this.SAVE_USER({token: res.data.access_token, firstName: res.data.name})
        this.SAVE_SYSTEM({login: true, module: 'Página inicial'})

        Cookie.set('token', res.data.access_token, {expires: 1})
        this.loading = false


      }).catch((error) => {
        this.loading = false
        if (error.response) {
          const errorResponse = error.response.status
          switch (errorResponse) {
            case 401:
              this.response.display = true
              this.response.status = "Erro:"
              this.response.message = 'Usuário ou senha incorretos.'
              this.response.class = 'trigger'
              break;
            case 500:
              this.response.display = true
              this.response.status = "Erro:"
              this.response.message = 'Erro interno, tente novamente mais tarde.'
              this.response.class = ''
              break;
            default:
              this.response.display = true
              this.response.status = "Erro:"
              this.response.message = 'Erro interno, tente novamente mais tarde.'
              this.response.class = ''
          }
        } else {
          this.response.status = "Erro:"
          this.response.message = 'Erro interno, tente novamente mais tarde.'
          this.response.class = ''
        }


      })

    }
  }
})
</script>

<template>
  <div class="response" v-if="response.display" :style="{padding : response.display ? '4vh 0' : '1vh 0'}">
    <span> <b>{{ response.status }}</b> {{ response.message }}</span>
  </div>
  <div class="card-login-page">
  <div class="form-login-page">
    <form action="#" @submit.prevent="login" :class="response.class" name="login" id="login">
      <input type="text" minlength="6" name="email" id="email"
             v-model="payload.email" placeholder="Usuário" autocomplete="off">
      <input type="password" minlength="8" maxlength="30" name="password" id="password"
             v-model="payload.password" placeholder="Senha" autocomplete="off" @keyup.enter="login">
    </form>
  </div>
  </div>
  <div class="button-form">
    <button v-if="! loading" @click="login">
      Entrar
    </button>
    <div class="loading" v-else>
      <div class="loading-log">
        <div class="loadingio-spinner-rolling-i7it2319hb">
          <div class="ldio-et2shv9jupa">
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.response {

  width: 100%;
  padding: 1vh 0;
  text-align: center;
  animation: appears .2s forwards ease-in-out;

  span {
    padding: 10px 15px;
    background-color: #ECC8C5;
    border-radius: 3px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #B32F2D;
    border: 1px solid #B32F2D;
  }


  @keyframes appears {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;

    }
  }
}

.card-login-page {
  width: 100%;
  padding: 4vh 0 6vh 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  border-radius: 7px;
  z-index: 3;
}

.form-login-page {
  height: 60%;
  @include flex(row, center, center, 0);

  form {
    width: 80%;
    height: 100%;
    @include flex(column, flex-start, initial, 2vh);

    input[type=text], input[type=password] {
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #D8D8D8;
      padding: 10px 10px;
      font-size: 1.2rem;
      font-weight: 500;
      transition: border-bottom-color ease-in-out .4s;

      &:focus {
        border-bottom-color: #FFB600;
      }
    }

    button {
      margin-top: 6vh;
      padding: 7px 10px;
      outline: none;
      border: none;
      background-color: #19233B;
      color: #dedede;
      border-radius: 15px;
      cursor: pointer;
      transition: all ease-in-out .2s;

      &:hover {
        background-color: #0f1625;
        color: #fff;
      }

    }

    .loading {
      @include flex(column, space-between, center, 2vh);
      height: 100%;
      animation: up 0.4s forwards ease-in-out;


      .loading-log {
        @include flex(column, flex-end, center, 0vh);

        @keyframes ldio-et2shv9jupa {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .ldio-et2shv9jupa div {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 3px solid #19233B;
          border-top-color: transparent;
          border-radius: 50%;
        }

        .ldio-et2shv9jupa div {
          animation: ldio-et2shv9jupa 1s linear infinite;
          top: 50px;
          left: 50px
        }

        .loadingio-spinner-rolling-i7it2319hb {
          width: 100px;
          height: 70px;
          display: inline-block;
          overflow: hidden;
        }

        .ldio-et2shv9jupa {
          width: 100%;
          height: 100%;
          position: relative;
          transform: translateZ(0) scale(1);
          backface-visibility: hidden;
          transform-origin: 0 0;
        }

        .ldio-et2shv9jupa div {
          box-sizing: content-box;
        }
      }

    }

    @keyframes up {
      0% {
        opacity: 0;
        transform: translateY(00px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }


  .trigger {
    input[type=text], input[type=password] {
      border-bottom-color: #B32F2D80 !important;
      color: #B32F2D !important;
    }

    button {
      margin-top: 5vh;
    }
  }

}

.button-form {
  width: 60%;
  height: 20%;
  @include flex(row, center, center, 0);
  margin: auto;
  margin-top: 3vh;

  button {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 15px;
    background: linear-gradient(90deg, #FFB600 -10.98%, #F93822 150.68%);
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all ease-in-out .2s;

    &:hover {
      background: linear-gradient(90deg, #FFB600 110.68%, #F93822 -30.98%);
      color: #fff;
    }

  }
}

</style>