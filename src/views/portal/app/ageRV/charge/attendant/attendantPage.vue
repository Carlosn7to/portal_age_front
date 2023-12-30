<script>
import attendantCommission from "@/components/portal/app/ageRV/charge/attendant/attendantCommission.vue"
import historyCharge from "@/components/portal/app/ageRV/charge/attendant/historyCharge.vue"
import gridCharge from "@/components/portal/app/ageRV/charge/attendant/gridCharge.vue"

export default {
    name: "attendantPage",
    components: { attendantCommission, historyCharge, gridCharge },
    data() {
        return {
            chargeItens: [
                { title: 'Total Cobranças', value: 171 },
                { title: 'Renegociado', value: 80, info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sint doloribus architecto cum tempora nobis? Aliquid sapiente inventore qui modi, molestias labore voluptate nulla autem consequuntur veniam enim adipisci quos!'},
                { title: 'Acordos Pagos', value: 60 },
                { title: 'A vencer', value: 15 },
                { title: 'Quebra', value: 5 },
                { title: 'A vencer', value: 15 },
                { title: 'Quebra', value: 5 },
                { title: 'A vencer', value: 15 },
                { title: 'Quebra', value: 5 },
                
            ]
        }
    }
}
</script>

<template>
    <div class="container-charge">
        <div class="wallet-container">
            <attendantCommission />
            <historyCharge />
        </div>
        <div class="dash-container">
            <gridCharge :grid-itens="chargeItens" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-charge {
    padding: 5rem;
    height: 100vh;
    display: grid;
    grid-template-columns: .45fr 1fr;
    gap: 10px;
    gap: 4vh;

    .wallet-container {
        display: flex;
        gap: 4vh;
        flex-direction: column;
        border-right: 2px solid #00000020;
    }
}
</style>