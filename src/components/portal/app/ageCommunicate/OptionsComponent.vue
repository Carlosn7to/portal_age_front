<script>
import existedCommunicate from "@/components/portal/app/ageCommunicate/ExistingCommunication.vue";
import NewCommunicate from "@/components/portal/app/ageCommunicate/NewCommunicate.vue";

export default {
  name: "OptionsComponent",
  components: {NewCommunicate, existedCommunicate},
  data() {
    return {
      page: 1
    }
  }
}
</script>

<template>
  <div class="container-principal">
    <div class="container-communicate">
      <template v-if="page === 1">
        <NewCommunicate
            @tradePage="page = 2"
        />
        <existedCommunicate/>
      </template>
    </div>
    <div>
      <template v-if="page === 2">

      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container-principal {
  width: 100%;
  height: 100%;
  display: flex;
  background-image: none;
}

.container-communicate {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 2vw;
  background-image: url("@/assets/img/app/ageCommunicate/logoBackground.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
</style>