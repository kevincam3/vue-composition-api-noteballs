import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/AuthStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "notes", // can use this name to navigate to this route. This will allow us to change the route path here and everywhere else in the app the link will change.
    component: () => import("@/views/NoteListPage.vue"),
  },
  {
    path: "/editNote/:id",
    name: "edit-notes",
    component: () => import("@/views/NoteEditPage.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/NoteStatsPage.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/LoginRegisterPage.vue"),
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

// navigation guards
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn && to.name !== "auth") {
    return { name: "auth" };
  }
  if (authStore.isLoggedIn && to.name === "auth") {
    return false;
  }
});

export default router;
