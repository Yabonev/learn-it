import { firestore } from "../firestore";
import { useState, useEffect } from "react";
import { TopicModel } from "../models/Topic";

export const useTopics = () => {
  const [topics, setTopics] = useState<TopicModel[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    firestore
      .collection("topics")
      .get()
      .then(snapshot => {
        const newTopics = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTopics(newTopics as TopicModel[]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return { topics, error, loading };
};
