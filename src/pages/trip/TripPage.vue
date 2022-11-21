<template>
  <base-layout pageTitle="All Trips">
    <template v-slot:actions-end>
      <ion-buttons router-link="/trips/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-buttons>
      <ion-buttons>
        <ion-icon :icon="closeCircle" @click="reset"></ion-icon>
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
import { add, closeCircle } from "ionicons/icons";
import ListTrip from "../../components/trip/ListTrip.vue";
import { getAllTrip, deleteTrip } from "../../../databaseHandler";
export default {
  components: { IonButtons, IonIcon, ListTrip, IonSearchbar },

  data() {
    return {
      closeCircle,
      add,
      trips: [],
      defaultTrips: [],
    };
  },
  async created() {
    await this.getTrips();
  },
  methods: {
    async reset() {
      let list = await getAllTrip();
      if (list.length == 0) {
        alert("Nothing to delete");
        return;
      }
      for (let i = 0; i < list.length; i++) {
        await deleteTrip(list[i].id);
      }
      alert("Deleted all trips successfully");
      window.location.reload();
    },
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
