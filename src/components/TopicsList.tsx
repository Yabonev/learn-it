import React from "react";
import { Topic } from "../data/database-model";

interface TopicsListProps {
  topics: Topic[];
}

const TopicsList: React.FC<TopicsListProps> = ({ topics }: TopicsListProps) => {
  console.log("topics: ", topics);
  return <h1> TOPICS</h1>;
};

export default TopicsList;
