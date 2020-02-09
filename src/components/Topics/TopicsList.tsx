import React from "react";

import { Accordion } from "react-accessible-accordion";
import Topic from "./Topic";

import "./styles.css";
import { TopicModel } from "../../models/Topic";

interface TopicsListProps {
  topics: TopicModel[];
}

const TopicsList: React.FC<TopicsListProps> = ({ topics }: TopicsListProps) => {
  const topicsHtml = topics.map(topic => <Topic topic={topic} />);

  return (
    <Accordion
      className="topics"
      allowZeroExpanded
      onChange={id => console.log(id)}
    >
      {topicsHtml}
    </Accordion>
  );
};

export default TopicsList;
