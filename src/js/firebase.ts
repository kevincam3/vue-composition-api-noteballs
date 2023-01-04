/* This code was provided by Firebase after creating the project. It is used to initialize the firebase app. */

// import the function needed to initialize the firebase app.
import { initializeApp } from "firebase/app";

// import the functions needed to initialize the firebase auth service.
import { getAuth } from "firebase/auth";

// import the function needed to access the firestore database
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUAm3E99DpjUJZ_6qGr1_TunxWKDNGyuM",
  authDomain: "noteball-236de.firebaseapp.com",
  projectId: "noteball-236de",
  storageBucket: "noteball-236de.appspot.com",
  messagingSenderId: "530280860808",
  appId: "1:530280860808:web:e5be67421cd8eb1c66a33d",
};

// Initialize Firebase app with the configuration settings defined above
const firebaseApp = initializeApp(firebaseConfig);

// Get the firestore instance needed to access the database
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// Export the database so it can be used in other files, specifically in our Pinia store
export { db, auth };
