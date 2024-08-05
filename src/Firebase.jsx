// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwG02DwG1plVM3fYo1SzHkm6BcJHsTUE",
  authDomain: "fir-crud-4b815.firebaseapp.com",
  projectId: "fir-crud-4b815",
  storageBucket: "fir-crud-4b815.appspot.com",
  messagingSenderId: "908310740275",
  appId: "1:908310740275:web:d98bbe2421cab987315246",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

export const auth = getAuth(app);
