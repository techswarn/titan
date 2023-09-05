import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBANxJrqYzYF9OraZW9OAfCJ5Yis5MX4NI",
  authDomain: "titan-c8e54.firebaseapp.com",
  projectId: "titan-c8e54",
  storageBucket: "titan-c8e54.appspot.com",
  messagingSenderId: "97003296276",
  appId: "1:97003296276:web:419438f9cb58147bd8f901",
  measurementId: "G-6GZML0JEM9",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.timestamp;

export { projectFireStore, projectAuth, timestamp, projectStorage };
