import React from "react";

import Loader from "react-loader-spinner";

import TopicsList from "../components/Topics/TopicsList";
import { useTopics } from "../hooks/useTopics";

const AdminDashboard: React.FC = () => {
  const { topics: allTopics, error, loading } = useTopics();

  const topicsLoading = loading && <Loader type="TailSpin" />;
  const topicsFetchFailed = error && <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      {topicsFetchFailed || topicsLoading || (
        <TopicsList initialTopics={allTopics} />
      )}
    </div>
  );
};

export default AdminDashboard;
