<template>
  <base-layout page-title="Add a Trip" page-default-back-link="/trips">
    <create-trip-form @save-trip="saveTrip" />
  </base-layout>
</template>

<script>
import CreateTripForm from "../../components/trip/CreateTripForm.vue";
import { insertTrip } from "../../../databaseHandler";
export default {
  components: { CreateTripForm },
  data() {
    return {};
  },
  methods: {
    async saveTrip(tripData) {
      await insertTrip(tripData);
      alert("Create trip successfully");
      await this.$router.replace("/trips");
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
