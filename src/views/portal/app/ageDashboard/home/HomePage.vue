<script>
import ageList from "@/components/portal/app/ageBoard/listDashboard.vue"
import { defineComponent } from 'vue'

export default defineComponent({
  name: "HomePage",
  components: { ageList }
})
</script>

<template>
  <div class="home-page">
    <ageList />
  </div>
</template>

<style scoped lang="scss"></style>