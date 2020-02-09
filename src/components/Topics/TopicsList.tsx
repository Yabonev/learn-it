import React, { useState } from "react";

import { Accordion } from "react-accessible-accordion";
import Topic from "./Topic";

import "./styles.css";
import TopicModel from "../../models/Topic";

interface TopicsListProps {
  initialTopics: TopicModel[];
}

const TopicsList: React.FC<TopicsListProps> = ({
  initialTopics
}: TopicsListProps) => {
  const [topics] = useState<TopicModel[]>(initialTopics);

  const topicsHtml = topics.map(topic => (
    <Topic key={topic.id} initialTopic={topic} />
  ));

  return (
    <Accordion className="topics" allowZeroExpanded>
      {topicsHtml}
    </Accordion>
  );
};

export default TopicsList;
