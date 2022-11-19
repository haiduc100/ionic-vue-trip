<template>
  <base-layout pageTitle="All Trips">
    <template v-slot:actions-end>
      <ion-buttons router-link="/trips/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-buttons>
    </template>
    <ion-searchbar
      :debounce="1000"
      @ionChange="handleChange($event)"
    ></ion-searchbar>
    <list-trip :trips="trips"></list-trip>
  </base-layout>
</template>

<script>
import { IonButtons, IonIcon, IonSearchbar } from "@ionic/vue";
import { add } from "ionicons/icons";
import ListTrip from "../../components/trip/ListTrip.vue";
import { getAllTrip } from "../../../databaseHandler";
export default {
  components: { IonButtons, IonIcon, ListTrip, IonSearchbar },

  data() {
    return {
      add,
      trips: [],
      defaultTrips: [],
    };
  },
  async created() {
    await this.getTrips();
  },
  methods: {
    async getTrips() {
      const data = await getAllTrip();
      this.trips = data;
      this.defaultTrips = data;
      return data;
    },
    handleChange(event) {
      const query = event.target.value.toLowerCase();
      this.trips = this.defaultTrips;
      this.trips = this.trips.filter((value) => {
        return value.NameOfTrip.toLowerCase().includes(query);
      });
    },
  },
};
</script>

<style></style>
