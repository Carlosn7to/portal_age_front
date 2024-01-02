<script>
import attendantCommission from "@/components/portal/app/ageRV/charge/attendant/attendantCommission.vue";
import historyCharge from "@/components/portal/app/ageRV/charge/attendant/historyCharge.vue";
import gridCharge from "@/components/portal/app/ageRV/charge/attendant/gridCharge.vue";
import chartCommission from "@/components/portal/app/ageRV/charge/attendant/chartCommission.vue";

export default {
  name: "attendantPage",
  components: {
    attendantCommission,
    historyCharge,
    gridCharge,
    chartCommission,
  },
  data() {
    return {
      chargeItens: [
        { title: "Total Cobranças", value: 171 },
        {
          title: "Renegociado",
          value: 80,
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sint doloribus architecto cum tempora nobis? Aliquid sapiente inventore qui modi, molestias labore voluptate nulla autem consequuntur veniam enim adipisci quos!",
        },
        { title: "Acordos Pagos", value: 60 },
        { title: "A vencer", value: 15 },
        { title: "Quebra", value: 5 },
      ],
    };
  },
};
</script>

<template>
  <div class="container-charge">
    <div class="wallet-container">
      <attendantCommission />
      <historyCharge />
    </div>
    <div class="dash-container">
      <gridCharge :grid-itens="chargeItens" />
      <div class="chart-container">
        <chartCommission />

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-charge {
  padding: 5rem;
  display: grid;
  height: 100vh;
  grid-template-columns: 0.45fr 1fr;
  gap: 4vh;

  .wallet-container {
    display: flex;
    gap: 4vh;
    flex-direction: column;
    border-right: 2px solid #00000020;
  }

  .dash-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 4vh;
  }
}
</style>
