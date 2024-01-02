<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "App",
})
</script>
<template>
    <router-view></router-view>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;500&display=swap');

*,
::before,
::after {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
  text-decoration: none !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  list-style: none;
  box-sizing: border-box;
  letter-spacing: 0.4px;
}

html {
  font-size: 62.5%;
  overflow: hidden;
  overflow-y: scroll;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(245, 244, 243);
  text-indent: 0px;
  color: #333;
  letter-spacing: normal;
  word-spacing: 0px;
  vertical-align: baseline;
}

h1 {
  font-size: 3.6rem;
}

h2 {
  font-size: 1.4rem;
}

.mode-dark {

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

}

/*   PLACEHOLDER   */
::-webkit-input-placeholder {
  color: #33333360;
  font-weight: 500;
  font-size: 1.4rem;
}

/*   SCROLL BAR   */
::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}

::-webkit-scrollbar {
  width: 4px;
  background: #F4F4F4;
}

::-webkit-scrollbar-thumb {
  background: #dad7d7;
}

</style>
