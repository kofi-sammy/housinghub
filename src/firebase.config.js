// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDMtEdvRh7VKimGQhPBdeFz_b862b0_pw",
  authDomain: "marketline-housing.firebaseapp.com",
  projectId: "marketline-housing",
  storageBucket: "marketline-housing.appspot.com",
  messagingSenderId: "35020354652",
  appId: "1:35020354652:web:c17ff1405681ae0200e299",
  measurementId: "G-TDRS2NNMP8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 

export default db;