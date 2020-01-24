import React from "react";
import Loader from "react-loader-spinner";
import TopicsList from "./TopicsList";
import CreateTopic from "./CreateTopic";
import { useTopics } from "../hooks/topics";

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
