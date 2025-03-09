// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-estate00.firebaseapp.com",
//   projectId: "mern-estate00",
//   storageBucket: "mern-estate00.firebasestorage.app",
//   messagingSenderId: "777471921131",
//   appId: "1:777471921131:web:6d0f04888d635d3baee7ae",
//   measurementId: "G-X8LK18EJ9Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACl6GWZGJLiJXLpLbyxIs3cc7ZyBEbG3M",
  authDomain: "mern-estate12.firebaseapp.com",
  projectId: "mern-estate12",
  storageBucket: "mern-estate12.appspot.com",
  messagingSenderId: "9641656854",
  appId: "1:9641656854:web:702eac0c8e1e8862f7eb37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

export default app;