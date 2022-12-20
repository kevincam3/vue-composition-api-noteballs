<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notesStore.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ notesStore.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteBalls"
      v-autofocus
      class="input"
      type="text"
      placeholder="Do you love noteballs?" />
  </div>
</template>
<script setup>
/*
  imports
 */
import { useNotesStore } from "@/stores/notes.js";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/composables/useWatchCharacters";
import { ref } from "vue";

/*
  store
 */
const notesStore = useNotesStore();
/*
  love noteballs
 */
const loveNoteBalls = ref("");
useWatchCharacters(loveNoteBalls, 50);
</script>
