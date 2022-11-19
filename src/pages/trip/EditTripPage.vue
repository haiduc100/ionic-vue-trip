<template>
  <base-layout page-title="Edit Trip" page-default-back-link="/trips">
    <edit-trip-form @update-trip="updateTripHandler" />
  </base-layout>
</template>

<script>
import EditTripForm from "../../components/trip/EditTripForm.vue";
import { updateTrip } from "../../../databaseHandler";
export default {
  components: { EditTripForm },
  data() {
    return {};
  },
  methods: {
    async updateTripHandler(tripData) {
      await updateTrip(tripData);
      alert("Trip updated successfully");
      await this.$router.replace("/trips");
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
