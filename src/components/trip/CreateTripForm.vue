<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="fixed"> Name Of Trip </ion-label>
        <ion-input type="text" required v-model="NameOfTrip"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed"> Destination </ion-label>
        <ion-input type="text" required v-model="Destination"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed"> Start Date </ion-label>
        <ion-input type="date" required v-model="StartDate"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed"> End Date </ion-label>
        <ion-input type="date" required v-model="EndDate"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed"> Transport </ion-label>
        <ion-input type="text" required v-model="Transport"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed"> Budget </ion-label>
        <ion-input type="number" required v-model="Budget"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed"> Description </ion-label>
        <ion-textarea rows="5" required v-model="Description"></ion-textarea>
      </ion-item>
      <ion-list-header>Risk Assessment</ion-list-header>
      <ion-radio-group v-model="RiskAssessment">
        <ion-item>
          <ion-label> Yes </ion-label>
          <ion-radio value="true"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label> No </ion-label>
          <ion-radio value="false"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
    <ion-button type="submit" expand="full">Add</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
} from "@ionic/vue";
export default {
  name: "MyAppCreateMemoryForm",
  emits: ["save-trip"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonRadio,
    IonRadioGroup,
    IonListHeader,
  },
  data() {
    return {
      NameOfTrip: "",
      Destination: "",
      StartDate: "",
      EndDate: "",
      RiskAssessment: "false",
      Transport: "",
      Description: "",
      Budget: "",
    };
  },
  methods: {
    submitForm() {
      const tripData = {
        NameOfTrip: this.NameOfTrip,
        Destination: this.Destination,
        StartDate: this.StartDate,
        EndDate: this.EndDate,
        RiskAssessment: this.RiskAssessment == "false" ? false : true,
        Transport: this.Transport,
        Description: this.Description,
        Budget: this.Budget,
      };
      this.$emit("save-trip", tripData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
