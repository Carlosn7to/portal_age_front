<script>
import AsideProgressBar from "@/components/portal/app/ageComunicate/newComunicate/AsideProgressBar.vue";
import FormNewComunicate from "@/components/portal/app/ageComunicate/newComunicate/FormNewComunicate.vue";

export default {
  name: "NewComunicate",
  components: {FormNewComunicate, AsideProgressBar}
}
</script>

<template>
  <div class="create-comunicate">
    <div class="principal-comunicate">
      <FormNewComunicate/>
    </div>
    <div class="aside-comunicate">
      <AsideProgressBar/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.create-comunicate {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  @include flex(row, space-between, center, .1vw);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.principal-comunicate {
  width: 62vw;
  height: 90vh;
  background-color: #F1F1F1;
  @include flex(column, flex-end, center, 0vw);

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

</style>