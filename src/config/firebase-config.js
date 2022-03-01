// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClrFvssfHlAZyJJ9DYhKKwQ98lq-HTPWM",
  authDomain: "users-crud-react.firebaseapp.com",
  projectId: "users-crud-react",
  storageBucket: "users-crud-react.appspot.com",
  messagingSenderId: "361991793545",
  appId: "1:361991793545:web:48930718714675c59d0f58",
  measurementId: "G-E067WELLMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);