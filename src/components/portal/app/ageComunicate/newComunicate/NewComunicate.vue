<script>
export default {
  name: "NewComunicate"
}
</script>

<template>
  <div class="create-comunicate">
    <div class="">
      <h1>sei lá</h1>
    </div>
    <div class="aside-comunicate">
      <div class="progress-container">
        <div class="circle-progress"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.create-comunicate {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  @include flex(row, space-between, center, .1vw);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.aside-comunicate {
  width: 20vw;
  height: 90vh;
  background-color: #ffffff;
  @include flex(column, flex-start, flex-start, .1vw);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000000;
  }
}

.progress-container {
  padding-left: 40px;
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  @include flex(row, flex-start, center, .1vw);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000000;
  }
}

.circle-progress {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #000000;

}

</style>