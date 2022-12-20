import { defineStore } from "pinia";

export const useNotesStore = defineStore("NotesStore", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eaque esse ex quaerat ut? Amet commodi cumque iure libero magnam possimus sequi similique soluta vel vero.",
        },
        {
          id: "id2",
          content: "This is a shorter note! Woo!",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentTime = new Date().getTime(),
        id = currentTime.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      //add the note to the list of existing notes
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => state.notes.filter((note) => note.id === id)[0].content;
    },
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => (count += note.content.length));
      return count;
    },
  },
});
