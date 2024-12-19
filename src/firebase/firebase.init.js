// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQsvM4KC54gPht0V_J4xuTcXmypAWiNU",
  authDomain: "coffee-shop-ee3d0.firebaseapp.com",
  projectId: "coffee-shop-ee3d0",
  storageBucket: "coffee-shop-ee3d0.firebasestorage.app",
  messagingSenderId: "447332647579",
  appId: "1:447332647579:web:00b0d6669ff7fd7e563c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);