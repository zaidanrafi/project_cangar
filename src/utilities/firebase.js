// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
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
//const database = getDatabase(app);

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export const media1_suhuUdara = db.ref("sensor read/MEDIA 1/temp");//firebaseLocation
export const media1_kelembapanUdara = db.ref("sensor read/MEDIA 1/flow");
export const media1_cahaya = db.ref("sensor read/MEDIA 1/flow"); 
export const media1_flow = db.ref("sensor read/MEDIA 1/flow"); 

export const media2_suhuUdara = db.ref("sensor read/MEDIA 2/temp");//firebaseLocation
export const media2_kelembapanUdara = db.ref("sensor read/MEDIA 2/flow");
export const media2_cahaya = db.ref("sensor read/MEDIA 2/flow"); 
export const media2_flow = db.ref("sensor read/MEDIA 2/flow"); 

export const media3_suhuUdara = db.ref("sensor read/MEDIA 3/temp");//firebaseLocation
export const media3_kelembapanUdara = db.ref("sensor read/MEDIA 3/flow");
export const media3_cahaya = db.ref("sensor read/MEDIA 3/flow"); 
export const media3_flow = db.ref("sensor read/MEDIA 3/flow"); 

export const media4_suhuUdara = db.ref("sensor read/MEDIA 4/temp");//firebaseLocation
export const media4_kelembapanUdara = db.ref("sensor read/MEDIA 4/flow");
export const media4_cahaya = db.ref("sensor read/MEDIA 4/flow");
export const media4_flow = db.ref("sensor read/MEDIA 4/flow");




export default firebase;

console.log(analytics);