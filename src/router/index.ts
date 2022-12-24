import PageNotes from "@/pages/PageNotes.vue";
import PageEditNote from "@/pages/PageEditNote.vue";
import PageStats from "@/pages/PageStats.vue";
import { createRouter, createWebHistory } from "vue-router";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
