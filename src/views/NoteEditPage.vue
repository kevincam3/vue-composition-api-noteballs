<script setup lang="ts">
/*
  imports
 */
import AddEditNote from "@/components/NoteItemAddEdit.vue";
import { ref } from "vue";
import { useNotesStore } from "@/stores/NotesStore";
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
noteContent.value = storeNotes.getNoteContent(route.params.id as string);

/*
  save clicked
 */
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id as string, noteContent.value);

  // using a named route so that we can change the route path in the future and not have to change it here. Not to mention it would update everywhere else in the app that this named route is used.
  router.push({ name: "notes" });
};
</script>
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
