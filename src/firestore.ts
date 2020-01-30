import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const firestoreArrayUnion = firebase.firestore.FieldValue.arrayUnion;
const firestoreArrayRemove = firebase.firestore.FieldValue.arrayRemove;

export { firestore, firestoreArrayUnion, firestoreArrayRemove };
