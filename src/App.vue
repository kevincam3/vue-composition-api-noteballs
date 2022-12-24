<script setup lang="ts">
/*
  imports
 */
import NavBar from "@/components/layouts/NavBar.vue";
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
