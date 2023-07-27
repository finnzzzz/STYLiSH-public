// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCclu98oC8eOamPz0XVHuAqzCr9rPe3G_4",
  authDomain: "stylish-productpage.firebaseapp.com",
  projectId: "stylish-productpage",
  storageBucket: "stylish-productpage.appspot.com",
  messagingSenderId: "599296570771",
  appId: "1:599296570771:web:0e21d60f36ed75e35d2466",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
