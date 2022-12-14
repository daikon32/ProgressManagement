import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/progressManagement",
    name: "progress-management",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ProgressManagement.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/inquiry",
    name: "inquiry",
    component: () =>
      import(/* webpackChunkName: "inquiry" */ "@/views/Inquiry.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
