import { createRouter, createWebHistory } from "vue-router";
import PageNotes from "@/pages/PageNotes.vue";
import PageEditNote from "@/pages/PageEditNote.vue";
import PageStats from "@/pages/PageStats.vue";
import Page404 from "@/pages/Page404.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: PageNotes,
  },
  {
    path: "/editNote/:id",
    name: "edit-notes",
    component: PageEditNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: PageStats,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
