import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "notes",
    component: () => import("@/pages/PageNotes.vue"),
  },
  {
    path: "/editNote/:id",
    name: "edit-notes",
    component: () => import("@/pages/PageEditNote.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/pages/PageStats.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/pages/Page404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
