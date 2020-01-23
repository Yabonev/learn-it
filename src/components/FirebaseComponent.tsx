import React, { PureComponent, useContext } from "react";
import * as Firebase from "firebase";

function FirebaseDataRenderer() {
  const firestore = Firebase.firestore();
  firestore.collection("topics").get().then()
  firestore
    .collection("topics")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
      });
      debugger;
    });
  return <p>Successfully started firebase renderer.</p>;
}

export default FirebaseDataRenderer;
