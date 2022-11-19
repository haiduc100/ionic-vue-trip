<template>
  <ion-item :router-link="`/trips/${trip.id}`">
    <ion-label>
      {{ trip.NameOfTrip }}
    </ion-label>
    <ion-label>
      {{ trip.Destination }}
    </ion-label>
    <ion-label>
      {{ trip.Description }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from "@ionic/vue";
export default {
  props: ["trip"],
  components: {
    IonItem,
    IonLabel,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
