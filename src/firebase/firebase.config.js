// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyz3gyEMHlTX_7_q3VYArZUsL9pW8QBU8",
  authDomain: "blood-donation-a2721.firebaseapp.com",
  projectId: "blood-donation-a2721",
  storageBucket: "blood-donation-a2721.firebasestorage.app",
  messagingSenderId: "1013065030893",
  appId: "1:1013065030893:web:0617043cbb1121f97980e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
