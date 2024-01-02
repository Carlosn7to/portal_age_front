<script>
import SupervisorVision from "@/components/portal/app/ageRV/retention/supervisor/SupervisorVision.vue"

export default {
    name: "SupervisorPage",
    components: { SupervisorVision }
}
</script>

<template lang="">
    <div class="container-retention">
        <SupervisorVision/>
    </div>
</template>

<style lang="scss">
.container-retention {
    height: 100vh,
}
</style>