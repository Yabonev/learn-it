import React, { useState, useEffect } from "react";
import { Topic } from "../data/database-model";
import TopicsList from "./TopicsList";
import { useTopics } from "../hooks/topics";

const AdminDashboardLayout: React.FC = _ => {
  const { topics, error, loading } = useTopics();

  return <TopicsList topics={topics} />;
};

export default AdminDashboardLayout;
