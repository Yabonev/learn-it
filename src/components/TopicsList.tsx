import React from "react";
import { Topic } from "../data/database-model";

interface TopicsListProps {
  topics: Topic[];
}

const TopicsList: React.FC<TopicsListProps> = ({ topics }: TopicsListProps) => {
  console.log("topics: ", topics);
  return (
    <>
      <h1> TOPICS</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </>
  );
};

export default TopicsList;
