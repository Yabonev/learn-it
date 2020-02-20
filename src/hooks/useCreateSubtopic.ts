import { useState } from "react";
import { firestore, arrayFunctions } from "../firestore";
import SubtopicModel from "../models/Subtopic";

const useCreateSubtopic = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSubtopic = (topicId: string, subtopic: SubtopicModel) => {
    setSuccess(false);
    setLoading(true);

    firestore
      .collection("topics")
      .doc(topicId)
      .update({
        subtopics: arrayFunctions.union(subtopic)
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return { success, loading, error, createSubtopic };
};

export default useCreateSubtopic;
