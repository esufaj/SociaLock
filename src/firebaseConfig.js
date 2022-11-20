// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC1B5kGKrupF4z5sH-MD4nmUQlfGJEfVkU",

  authDomain: "socialock-3307b.firebaseapp.com",

  projectId: "socialock-3307b",

  storageBucket: "socialock-3307b.appspot.com",

  messagingSenderId: "980580950096",

  appId: "1:980580950096:web:1a925d556d7a05d08e3155",

  measurementId: "G-GEYH5EDZSR"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const databasae = getFirestore(app);

const analytics = getAnalytics(app);