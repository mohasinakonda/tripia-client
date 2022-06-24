// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2qy2rtJPcsnNX4AS6qLBEktyj4wjXg9A",
  authDomain: "tripia-a1b3e.firebaseapp.com",
  projectId: "tripia-a1b3e",
  storageBucket: "tripia-a1b3e.appspot.com",
  messagingSenderId: "882823597794",
  appId: "1:882823597794:web:a94470f657215d310358bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
