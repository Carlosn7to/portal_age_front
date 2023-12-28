<script>
import MenuComponent from '@/components/portal/app/menu/SidebarComponent.vue'

export default {
    components: {
        MenuComponent, 
    }
}
</script>

<template>
    <div class="container">
        <div class="menu">
            <MenuComponent />
        </div>
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 5% 95%;
    grid-template-rows: 10% 90%;
    grid-template-areas: 'M P'
        'M P';

    .menu {
        grid-area: M;
        z-index: 4;
    }

    .page {
        grid-area: P;
        z-index: 1;
    }
}
</style>