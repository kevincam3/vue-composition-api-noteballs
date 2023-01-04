<script setup lang="ts">
/*
  imports
 */
import NavBar from "@/components/NavBar.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { onMounted } from "vue";

/*
  store
 */
const authStore = useAuthStore();

/*
  mounted
 */
onMounted(() => {
  authStore.init();
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
