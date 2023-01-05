/*
  pinia import that we need to do to be able to make this file a pina store
 */
import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/js/firebase";
import { useNotesStore } from "@/stores/NotesStore";
import Credentials = Types.Credentials;
import User = Types.User;

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    user: {} as User,
  }),
  actions: {
    init() {
      const notesStore = useNotesStore();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push({ name: "notes" });
          notesStore.init();
        } else {
          this.user = {} as User;

          // were using replace here instead of push because we don't want the user to be able to go back to the auth page. So replace will change the browser history and remove the auth page from the history stack
          this.router.replace({ name: "auth" });

          // we also need to clear the user's notes saved in the store when the user logs out
          notesStore.clearNotes();
        }
      });
    },
    registerUser(credentials: Credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {});
    },
    loginUser(credentials: Credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {});
    },
    logoutUser() {
      signOut(auth)
        .then(() => {})
        .catch((error) => {});
    },
  },
  getters: {
    isLoggedIn(): boolean {
      return this.user.id !== undefined;
    },
  },
});
