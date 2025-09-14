import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/remote",
    component: () => import("@/views/remote.vue"),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
