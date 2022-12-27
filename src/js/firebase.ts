import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUAm3E99DpjUJZ_6qGr1_TunxWKDNGyuM",
  authDomain: "noteball-236de.firebaseapp.com",
  projectId: "noteball-236de",
  storageBucket: "noteball-236de.appspot.com",
  messagingSenderId: "530280860808",
  appId: "1:530280860808:web:e5be67421cd8eb1c66a33d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
