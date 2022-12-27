<!-- Displays a form to add notes and below it a list of all the notes added -->
<script setup lang="ts">
/*
  imports
 */
import { ref } from "vue";
import Note from "@/components/NoteItem.vue";
import AddEditNote from "@/components/NoteItemAddEdit.vue";
import { useNotesStore } from "@/stores/NotesStore";
import { useWatchCharacters } from "@/composables/useWatchCharacters";
/*
  store
 */
const notesStore = useNotesStore();

/*
  notes
 */

const addNote = () => {
  notesStore.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value?.focusTextarea();
};
const newNote = ref("");
const addEditNoteRef = ref<AddEditNote | null>(null);

/*
  watch characters
 */
useWatchCharacters(newNote);
</script>
<template>
  <div class="notes">
    <!-- Start: Display the add note textarea -->
    <AddEditNote
      placeholder="Add a new note"
      v-model="newNote"
      ref="addEditNoteRef">
      <template #buttons>
        <button
          :disabled="!newNote"
          @click="addNote"
          class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <!-- End: Display the add note textarea -->

    <!-- Start: list all the notes below the form to add a new note -->
    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note" />
    <!-- End: list all the notes below the form to add a new note -->
  </div>
</template>
