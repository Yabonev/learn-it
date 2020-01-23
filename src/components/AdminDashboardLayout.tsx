import React from "react";
import TopicsList from "./TopicsList";
import { useTopics } from "../hooks/topics";

const AdminDashboardLayout: React.FC = () => {
  const { topics } = useTopics();

  return <TopicsList topics={topics} />;
};

export default AdminDashboardLayout;
