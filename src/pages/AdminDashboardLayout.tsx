import React from "react";

import Loader from "react-loader-spinner";

import TopicsList from "../components/Topics/TopicsList";
import { useTopics } from "../hooks/useTopics";

const AdminDashboardLayout: React.FC = () => {
  const { topics, error, loading } = useTopics();

  const loader = loading && <Loader />;
  const errorMessage = error && <p>Error occurred : {error}</p>;

  return (
    <div className="container">
      {loader || errorMessage || <TopicsList topics={topics} />}
    </div>
  );
};

export default AdminDashboardLayout;
