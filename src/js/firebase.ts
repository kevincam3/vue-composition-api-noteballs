/* This code was provided by Firebase after creating the project. It is used to initialize the firebase app. */

// import the function needed to initialize the firebase app.
import { initializeApp } from "firebase/app";

// import the functions needed to access the firestore database
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUAm3E99DpjUJZ_6qGr1_TunxWKDNGyuM",
  authDomain: "noteball-236de.firebaseapp.com",
  projectId: "noteball-236de",
  storageBucket: "noteball-236de.appspot.com",
  messagingSenderId: "530280860808",
  appId: "1:530280860808:web:e5be67421cd8eb1c66a33d",
};

// Initialize Firebase with the configuration settings defined above
const app = initializeApp(firebaseConfig);

// Get the firestore instance needed to access the database
const firestore = getFirestore(app);

// Export the database so it can be used in other files, specifically in our Pinia store
export { firestore };
