// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtjimfiPPki4bDOkYgpXqE2kDOWAK__YE",
  authDomain: "clase-13-b7508.firebaseapp.com",
  projectId: "clase-13-b7508",
  storageBucket: "clase-13-b7508.appspot.com",
  messagingSenderId: "317301015260",
  appId: "1:317301015260:web:aed062cf84557f3766ea19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
