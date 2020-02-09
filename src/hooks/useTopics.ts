import { useState, useEffect } from "react";
import { firestore } from "../firestore";
import TopicModel from "../models/Topic";

export const useTopics = () => {
  const [topics, setTopics] = useState<TopicModel[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onNext = (
    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  ) => {
    const newTopics = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setTopics(newTopics as TopicModel[]);
    setLoading(false);
  };

  const onError = (snapshotError: Error) => {
    setError(snapshotError.message);
  };

  useEffect(() => {
    setLoading(true);
    firestore.collection("topics").onSnapshot(onNext, onError);
  }, []);

  return { topics, error, loading };
};
