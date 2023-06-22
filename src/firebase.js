// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAUZy4bHYMGDkgbNj3V1DMbzutJjsMiUVA",
    authDomain: "practice-2ef3e.firebaseapp.com",
    projectId: "practice-2ef3e",
    storageBucket: "practice-2ef3e.appspot.com",
    messagingSenderId: "508049568760",
    appId: "1:508049568760:web:0a935a1e0e343bbfbe9c0d"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;


