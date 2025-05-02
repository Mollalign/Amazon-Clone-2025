import firebase from "firebase/compat/app";
// Auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyBg5jRlTR7cQEjDuOOe_ba10xQ9k7XX0",
  authDomain: "clone-2025-2c4d3.firebaseapp.com",
  projectId: "clone-2025-2c4d3",
  storageBucket: "clone-2025-2c4d3.firebasestorage.app",
  messagingSenderId: "666702144794",
  appId: "1:666702144794:web:653e3ab393b1b17422f8a3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();