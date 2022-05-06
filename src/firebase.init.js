// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvfJScOCHVCiyWBOuk4ql8BAtwSJ1tl90",
  authDomain: "warehouse-management-737d8.firebaseapp.com",
  projectId: "warehouse-management-737d8",
  storageBucket: "warehouse-management-737d8.appspot.com",
  messagingSenderId: "537862306051",
  appId: "1:537862306051:web:6ce468bd47505cbc221136",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;