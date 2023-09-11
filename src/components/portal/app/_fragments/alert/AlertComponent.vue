<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "AlertComponent",
  methods: {
    ...mapMutations(['SAVE_ALERT']),
    closeAlert () {
      this.SAVE_ALERT({display: false, title: '', msg: ''})
    }
  },
  computed: {
    ...mapGetters([
      'system'
    ])
  },
  beforeMount() {
    setTimeout(() => {
      this.closeAlert()
    }, 15000)
  }
}
</script>

<template>
  <div class="alert">
    <div class="bar-icon">
      <div></div>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/></svg>    </div>
    <div class="alert-content">
      <div class="alert-title">
        <h4>{{ system.alert.title }}</h4>
      </div>
      <div class="alert-message">
        <span>{{ system.alert.msg }}</span>
      </div>
    </div>
    <svg

        @click="closeAlert"
        class="close" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
  </div>
</template>

<style scoped lang="scss">

.alert {
  position: absolute;
  animation: appears forwards .5s ease-in-out;
  top: 8vh;
  right: 2vw;
  z-index: 99;
  border-radius: 5px;
  background: #FFF;
  padding: 1vh 1vw 1vh .5vw;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.95px 4.6px;
  @include flex(row, center, center, 2vw);

  .bar-icon {
    @include flex(row, flex-start, center, 1vw);
    div {
      height: 8vh;
      background-color: #026FEE;
      width: 4px;
      border-radius: 3px;
    }

    svg {
      fill: #026FEE;
      font-size: 2rem;
    }
  }

  .alert-content {
    @include flex(column, flex-start, initial, 1vh);
    .alert-title  {
      h4 {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    .alert-message {
      span {
        font-size: 1.2rem;
        color: #00000050;
        font-weight: 500;
      }
    }
  }

  .close {
    fill: #00000030;
    font-size: 1.6rem;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }
}

@keyframes appears {
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>