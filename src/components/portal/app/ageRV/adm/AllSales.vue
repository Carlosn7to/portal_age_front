<script>
export default {
  name: "AllSales"
}
</script>

<template>
<div>

</div>
</template>

<style scoped lang="scss">

.data {
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 40% 60%;
  grid-template-areas: 'D S'
                          'G S';
  gap: 1vw;

  .container-dashboards {
    width: 100%;
    grid-area: D;
  }

  .container-graphs {
    grid-area: G;
  }

  .container-last-sales {
    grid-area: S;
  }
}
@media (min-width: 1600px) {
  .container-sales {
    .data {
      grid-template-columns: 70% 30%;
      grid-template-rows: 12% 88%;
      grid-template-areas: 'D S'
                          'G S';
    }
  }
}

</style>