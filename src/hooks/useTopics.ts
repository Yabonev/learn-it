import { firestore } from "../firestore";
import { useState, useEffect } from "react";
import { Topic } from "../data/database-model";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
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

        setTopics(newTopics as Topic[]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return { topics, error, loading };
};
