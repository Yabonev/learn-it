import { useState } from "react";
import { firestore, firestoreArrayUnion } from "../firestore";
import { ICreateSubtopic } from "../data/models";

const useCreateSubtopic = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSubtopic = (subtopicInfo: ICreateSubtopic) => {
    setLoading(true);

    firestore
      .collection("topics")
      .doc(subtopicInfo.topicId)
      .update({
        subtopics: firestoreArrayUnion(subtopicInfo.subtopic)
      })
      .then(() => setLoading(false))
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return { loading, error, createSubtopic };
};

export default useCreateSubtopic;
