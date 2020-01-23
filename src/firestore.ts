import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtQliNEOZuqGWDAX4sUyTTF3yqf9OG0S0",
  authDomain: "learn-it-a2ba0.firebaseapp.com",
  databaseURL: "https://learn-it-a2ba0.firebaseio.com",
  projectId: "learn-it-a2ba0",
  storageBucket: "learn-it-a2ba0.appspot.com",
  messagingSenderId: "219307153355",
  appId: "1:219307153355:web:8b0407f0d0af4600afc84e",
  measurementId: "G-D6CGB7KJ6J"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
