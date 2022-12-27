<script setup lang="ts">
/*
  imports
 */
import NavBar from "@/components/NavBar.vue";
import { useNotesStore } from "@/stores/NotesStore";
import { onMounted } from "vue";

/*
  store
 */
const { getNotes } = useNotesStore();

/*
  mounted
 */
onMounted(() => {
  getNotes();
});
</script>

<template>
  <NavBar />
  <div class="container px-2 py-4">
    <RouterView />
  </div>
</template>
<style>
@import "bulma/css/bulma.min.css";
</style>
