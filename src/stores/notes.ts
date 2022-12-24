import { defineStore } from "pinia";

export const useNotesStore = defineStore("NotesStore", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "John Kerry believes in the Constitutional freedoms that have made our country the envy of the world, and he will never sacrifice our basic liberties, nor use faith as a wedge to divide us. But it is where we start. Our problems must be dealt with through partnership; progress must be shared. That commitment is at the core of the Treaty, and it must be kept for all who fully abide by it. But we can only achieve it together.",
        },
        {
          id: "id2",
          content: "This is a shorter note! Woo!",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent: string) {
      let currentTime = new Date().getTime(),
        id = currentTime.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      //add the note to the list of existing notes
      this.notes.unshift(note);
    },
    deleteNote(idToDelete: string) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id: string, content: string) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string) =>
        state.notes.filter((note) => note.id === id)[0].content;
    },
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => (count += note.content.length));
      return count;
    },
  },
});
