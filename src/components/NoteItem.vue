<script setup lang="ts">
/*
  imports
 */
import { computed, PropType, reactive } from "vue";
import { useDateFormat } from "@vueuse/core";
import ModalDeleteNote from "@/components/NoteItemDeleteModal.vue";
import Note = Types.Note;

/*
  props
 */
const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true,
  },
});

/*
  date formatted
 */
const dateFormatted = computed(() => {
  const date = new Date(parseInt(props.note.date));
  return useDateFormat(date, "MM/DD/YYYY @ HH:mm").value;
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
<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ props.note.content }}
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/editNote/${props.note.id}`"
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
