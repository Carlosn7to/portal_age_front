<script>
import {defineComponent} from 'vue'
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: "HeaderComponent",
  computed: {
    ...mapGetters([
        'system'
    ])
  },
  methods: {
    ...mapMutations([
        'SAVE_USER',
        'SAVE_SYSTEM'
    ]),
    logout() {
      this.SAVE_SYSTEM({login: false})
      this.SAVE_USER({token: '', firstName: ''})
    }
  }
})
</script>

<template>
  <div class="header-container">

    <h1 class="title-module">
      {{ system.module }}
    </h1>

    <div class="icons">

      <div class="icon">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>

      </div>
      <div class="icon">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>

      </div>
      <div class="icon" @click="logout">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

.header-container {
  width: 100%;
  height: 100%;
  background-color: #F5F7FB;
  @include flex(row, flex-end, center, 0);


  .title-module {
    padding: 1vh 1.35vw;
    margin-right: auto;
    font-size: 1.8rem;
    font-weight: 500;
  }


  .icons {
    @include flex(row, flex-start, center, .5vw);
    padding: 0 2vw;

    .icon {
      padding: 1vh 1vw;

      svg {
        cursor: pointer;

        fill: rgba(105, 115, 136, 1);
        width: 1.2vw;

        &:hover {
          fill: rgb(123, 133, 152);

        }
      }
    }

    .icon:nth-child(1) {
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      padding-left: 1.5vw;
    }
  }
}

</style>