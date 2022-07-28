// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd2SetY7zJmQNWECi3f6CjOJXE0bm75ik",
  authDomain: "cangar-9e508.firebaseapp.com",
  databaseURL: "https://cangar-9e508-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cangar-9e508",
  storageBucket: "cangar-9e508.appspot.com",
  messagingSenderId: "972857343706",
  appId: "1:972857343706:web:8741c85ea60dba80c66fe3",
  measurementId: "G-XLS917ZKX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
