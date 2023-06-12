// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqSBG0RUyLWAMHbD5BSILH4WqzWXOYDes",
  authDomain: "mindtech-fbea1.firebaseapp.com",
  projectId: "mindtech-fbea1",
  storageBucket: "mindtech-fbea1.appspot.com",
  messagingSenderId: "768956277730",
  appId: "1:768956277730:web:25780f0c8d348c58a40fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app