// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c424c.firebaseapp.com",
  projectId: "mern-estate-c424c",
  storageBucket: "mern-estate-c424c.appspot.com",
  messagingSenderId: "153331350565",
  appId: "1:153331350565:web:28ff5d41f1bdb979b553cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);