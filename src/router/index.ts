import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "notes",
    component: () => import("@/views/NoteList.vue"),
  },
  {
    path: "/editNote/:id",
    name: "edit-notes",
    component: () => import("@/views/NoteEdit.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/NoteStats.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
