// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-36ec8.firebaseapp.com",
  projectId: "mern-estate-36ec8",
  storageBucket: "mern-estate-36ec8.firebasestorage.app",
  messagingSenderId: "1042729777040",
  appId: "1:1042729777040:web:36c666c2d01c3cae28a515",
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig)


