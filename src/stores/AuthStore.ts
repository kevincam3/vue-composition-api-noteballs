/*
  pinia import that we need to do to be able to make this file a pina store
 */
import {defineStore} from "pinia";
import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "@/js/firebase";
import Credentials = Types.Credentials;
import User = Types.User;

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    user: {} as User,
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push({name: "notes"});
        } else {
          this.user = {} as User;

          // were using replace here instead of push because we don't want the user to be able to go back to the auth page. So replace will change the browser history and remove the auth page from the history stack
          this.router.replace({name: "auth"});
        }
      });
    },
    registerUser(credentials: Credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log("User created: ", user);
          })
          .catch((error) => {
            // console.log("error.message", error.message);
          });
    },
    loginUser(credentials: Credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
          .then((userCredential) => {
            const user = userCredential.user;
            //  console.log("User logged in: ", user);
          })
          .catch((error) => {
            //  console.log("error.message", error.message);
          });
    },
    logoutUser() {
      signOut(auth)
          .then(() => {
            // console.log("User signed out");
          })
          .catch((error) => {
            // console.log("error.message", error.message);
          });
    },
  },
  getters: {
    isLoggedIn(): boolean {
      return this.user.id !== undefined;
    },
  },
});
