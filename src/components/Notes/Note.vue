<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/editNote/${note.id}`"
        href="#"
        class="card-footer-item">
        Edit
      </RouterLink>
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true">
        Delete
      </a>
    </footer>
    <ModalDeleteNote
      :noteId="props.note.id"
      v-model="modals.deleteNote"
      v-if="modals.deleteNote" />
  </div>
</template>

<script setup>
/*
  imports
 */
import { computed, reactive } from "vue";
import { useNotesStore } from "@/stores/notes.js";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
/*
  store
 */
const notesStore = useNotesStore();

/*
  props
 */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
  character length
 */
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/*
  modals
 */
const modals = reactive({
  deleteNote: false,
});
</script>

<style scoped></style>
