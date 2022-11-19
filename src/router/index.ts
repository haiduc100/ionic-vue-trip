import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TripPage from "../pages/trip/TripPage.vue";
import AddTripForm from "../pages/trip/AddTripPage.vue";
import EditTripPage from "../pages/trip/EditTripPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/trips",
  },
  {
    path: "/trips",
    name: "List Trip",
    component: TripPage,
  },
  {
    path: "/trips/:id",
    name: "Update Trip",
    component: EditTripPage,
  },
  {
    path: "/trips/add",
    name: "Add Trip",
    component: () => AddTripForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
