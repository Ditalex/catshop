
npm
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPEeYGDXeF3iiqj9nTfkIZ6lFO1IEaS_E",
  authDomain: "catshop-ef2f8.firebaseapp.com",
  projectId: "catshop-ef2f8",
  storageBucket: "catshop-ef2f8.firebasestorage.app",
  messagingSenderId: "1035843976241",
  appId: "1:1035843976241:web:4fc18f0f0592bd2e0b2910",
  measurementId: "G-RXSRPZWM5T"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
