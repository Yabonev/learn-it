import React, { useState, useEffect } from "react";
import { Topic } from "../data/database-model";
import TopicsList from "./TopicsList";


const AdminDashboardLayout: React.FC = _ => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const { data: loadedTopics, refetch: fetchTopics } = useTopics();

  useEffect(() => {
    loadedTopics && setTopics(loadedTopics);
  }, [loadedTopics]);

  return <TopicsList topics={topics} />;
};

export default AdminDashboardLayout;
