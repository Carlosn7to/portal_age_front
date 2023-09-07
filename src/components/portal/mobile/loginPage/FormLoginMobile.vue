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
  <div class="form-login-page">
    <form @submit.prevent="login" id="login">
      <div class="input-container">
        <input type="text" minlength="6" name="email" id="email"
               v-model="payload.email" placeholder="Nome de Usuário" autocomplete="off">
      </div>
      <div class="input-container">
        <input type="password" minlength="8" maxlength="30" name="password" id="password"
               v-model="payload.password" placeholder="Senha" autocomplete="off">
      </div>

    </form>
    <div>
      <button v-if="! loading" form="login">
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

.form-login-page {
  height: 75%;
  @include flex(column, center, center, 3vh);


  form {
    width: 80%;
    height: 100%;
    @include flex(column, center, center, 2vh);
    background-color: #fff;
    border: 1px solid #D8D8D8;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border-radius: 7px;

    .input-container {
      width: 100%;
      height: 25%;
      @include flex(row, center, center, 2vh);
      padding: 0 5%;
    }

    input[type=text], input[type=password] {
      width: 90%;
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #D8D8D8;
      padding: 10px 10px;
      font-size: 1.2rem;
      font-weight: 500;
      transition: border-image ease-in-out .4s;

      &:focus {
        border-image: linear-gradient(62deg, rgba(255, 182, 0, 1) 32%, rgba(255, 92, 74, 1) 100%);
        border-image-slice: 1;
      }
    }


  }

  .loading {
    @include flex(column, flex-end, center, 2vh);
    height: 100%;
    animation: up 0.4s forwards ease-in-out;


    .loading-log {
      @include flex(column, space-between, center, 0vh);

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

button {
  font-size: 1.6rem;
  width: 40vw;
  padding: 12px 10px;
  outline: none;
  border: none;
  background: linear-gradient(62deg, rgba(255, 182, 0, 1) 32%, rgba(255, 92, 74, 1) 100%);
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: all ease-in-out .2s;

  &:hover {
    background-color: #0f1625;
    color: #fff;
  }

}

</style>