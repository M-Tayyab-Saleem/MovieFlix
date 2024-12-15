// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDE00xFwe0W6wUxRixED-u-xHCh-Pfx89A",
  authDomain: "first-firebase-ce02c.firebaseapp.com",
  projectId: "first-firebase-ce02c",
  storageBucket: "first-firebase-ce02c.firebasestorage.app",
  messagingSenderId: "855027593465",
  appId: "1:855027593465:web:a8188fe3f3c31b32b37228",
  measurementId: "G-01GGSPRNJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);