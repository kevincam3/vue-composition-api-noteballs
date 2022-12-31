import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "notes", // can use this name to navigate to this route. This will allow us to change the route path here and everywhere else in the app the link will change.
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
    path: "/auth",
    name: "auth",
    component: () => import("@/views/LoginRegister.vue"),
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
