import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

type DocumentData = firebase.firestore.DocumentData;
type QuerySnapshotType = firebase.firestore.QuerySnapshot<DocumentData>;

const firestore = firebase.firestore();

const firestoreArrayUnion = firebase.firestore.FieldValue.arrayUnion;
const firestoreArrayRemove = firebase.firestore.FieldValue.arrayRemove;

const arrayFunctions = {
  union: firestoreArrayUnion,
  remove: firestoreArrayRemove
};

export type QuerySnapshot = QuerySnapshotType;
export { firestore, arrayFunctions };
