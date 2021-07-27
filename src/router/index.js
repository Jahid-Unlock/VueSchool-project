import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "Brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName: "Panama" */ "../views/Panama.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/* webpackChunkName: "Hawaii" */ "../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import(/* webpackChunkName: "Jamaica" */ "../views/Jamaica.vue"),
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
