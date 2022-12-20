<template>
  <div class="edit-note">
    <AddEditNote
      label="Edit Note"
      placeholder="Edit note"
      bgColor="link"
      v-model="noteContent"
      ref="addEditNoteRef">
      <template #buttons>
        <button
          class="button is-link is-light mr-2"
          @click="$router.back()">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="handleSaveClicked">
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>
<script setup>
/*
  imports
 */
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useNotesStore } from "@/stores/notes.js";
import { useRoute, useRouter } from "vue-router";

/*
  router
 */
const route = useRoute();
const router = useRouter();

/*
  store
 */
const storeNotes = useNotesStore();

/*
  note
 */
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

/*
  save clicked
 */
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
