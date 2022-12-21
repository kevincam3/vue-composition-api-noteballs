import ViewNotes from "@/views/ViewNotes.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";
import ViewStats from "@/views/ViewStats.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/editNote/:id",
    name: "edit-notes",
    component: ViewEditNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
