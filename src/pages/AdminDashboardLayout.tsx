import React from "react";
import Loader from "react-loader-spinner";
import TopicsList from "../components/TopicsList";
import CreateTopic from "../components/forms/CreateTopicForm";
import { useTopics } from "../hooks/useTopics";

const AdminDashboardLayout: React.FC = () => {
  const { topics, error, loading } = useTopics();

  const loader = loading && <Loader />;
  const errorMessage = error && <p>Error occurred : {error}</p>;

  return (
    <>
      {loader || errorMessage || <TopicsList topics={topics} />}
      <br />
      <CreateTopic />
    </>
  );
};

export default AdminDashboardLayout;
