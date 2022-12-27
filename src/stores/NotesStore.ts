/*
  pinia import that we need to do to make this file a pina store
 */
import { defineStore } from "pinia";

/*
  Firebase imports
 */
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, query, orderBy } from "firebase/firestore";
import { db } from "@/js/firebase";

// This was done to DRY up the code since in Firebase we access the collection multiple times
const notesCollectionRef = collection(db, "notes");
// This is the firebase way of getting all the documents in a collection in realtime.
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

/*
  Here we are using a typescript feature called "type aliasing" https://www.typescriptlang.org/docs/handbook/namespaces.html#aliases
  Note this is not a normal import statement, it is a type aliasing statement.
 */
import Note = Types.Note;

/*
  Notes
  This variable is used to store all the notes. Each one is of type note which is defined in the types folder and imported above.
  For this reason, the notes variable is define as an array of type Note with its initial value being an empty array.
  We could have defined this directly in the state function below, but we are defining it here so that we can better provide its type
  instead of using the typescript "as" operator directly on the array e.g. notes: [] as Array<Note>.
 */
const notes: Array<Note> = [];

/*
  State Property
  The state property is a function that returns an object.
  We are using an arrow function here to avoid the need to use the return keyword.
  With arrow functions we don't need the return keyword or the parentheses if we only have one line of code.
  However if what we are returning starts with a parenthesis, as is the case when returning an object literal, we need to wrap the whole thing in parentheses.
  If we don't do this, the compiler will think we are starting a function body.
  For this reason, we need to wrap the object literal in parentheses.
  We can also define a state object outside of the state function and return it.
*/
export const useNotesStore = defineStore("NotesStore", {
  state: () => ({
    notes,
  }),
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        // We created this local array variable to store the notes we get from firebase.
        let notes: Array<Note> = [];
        querySnapshot.forEach((doc) => {
          let note: Note = {
            id: doc.id,
            date: doc.data().date,
            content: doc.data().content,
          };
          notes.push(note);
        });

        // Here we are using the state property, notes, to set its value to the notes we got from firebase. Essentially, we are overwriting the state's notes array with the one we generated from Firebase.
        this.notes = notes;
      });
    },
    async addNote(newNoteContent: string) {
      let date = new Date().getTime().toString();

      //add the note to the list of existing notes
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date,
      });
    },
    async deleteNote(idToDelete: string) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id: string, content: string) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      });
    },
  },
  getters: {
    getNoteContent: (state) => (id: string) => state.notes.filter((note) => note.id === id)[0].content,
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => (count += note.content.length));
      return count;
    },
  },
});
