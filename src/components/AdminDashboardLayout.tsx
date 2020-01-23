import React from "react";
import Loader from "react-loader-spinner";
import TopicsList from "./TopicsList";
import { useTopics } from "../hooks/topics";

const AdminDashboardLayout: React.FC = () => {
  const { topics, error, loading } = useTopics();

  const loader = loading && <Loader />;
  const errorMessage = error && <p>Error occurred : {error}</p>;
  const topicsList = <TopicsList topics={topics} />;

  return <>{loader || errorMessage || topicsList}</>;
};

export default AdminDashboardLayout;
