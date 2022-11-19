<template>
  <ion-list>
    <ion-item>
      <ion-label> Name Of Trip </ion-label>
      <ion-label> Destination </ion-label>
      <ion-label> Description </ion-label>
    </ion-item>
    <list-trip-item v-for="trip in trips" :key="trip.id" :trip="trip">
    </list-trip-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";
import ListTripItem from "./ListTripItem.vue";
export default {
  props: ["trips"],
  components: {
    IonList,
    ListTripItem,
    IonItem,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
