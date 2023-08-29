<script>
import existedCommunicate from "@/components/portal/app/ageCommunicate/ExistingCommunication.vue";
import NewCommunicate from "@/components/portal/app/ageCommunicate/NewCommunicate.vue";
import CreateCommunication from "@/components/portal/app/ageCommunicate/CreateCommunication.vue";
import ViewCommunication from "@/components/portal/app/ageCommunicate/ViewCommunication.vue";

export default {
  name: "OptionsComponent",
  components: {ViewCommunication, CreateCommunication, NewCommunicate, existedCommunicate},
  data() {
    return {
      page: 1
    }
  }
}
</script>

<template>
  <div class="container-principal">
    <template v-if="page === 1">
      <div class="container-communicate">
        <NewCommunicate
            @tradePage="page = 2"
        />
        <existedCommunicate
            @tradePage="page =3"
        />
      </div>
    </template>
    <template v-if="page === 2">
      <div class="container-newCommunicate">
        <CreateCommunication/>
      </div>
    </template>
    <template v-if="page ===3">
      <div class="container-viewCommunicate">
        <ViewCommunication/>
      </div>
    </template>
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
  flex-direction: row;
  gap: 2vw;
  background-image: url("@/assets/img/app/ageCommunicate/logoBackground.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
</style>