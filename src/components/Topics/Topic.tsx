import React, { useState } from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from "react-accessible-accordion";

import SubtopicsList from "../Subtopics/SubtopicsList";
import TopicModel from "../../models/Topic";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./styles.css";
interface TopicProps {
  initialTopic: TopicModel;
}

const Topic = ({ initialTopic }: TopicProps) => {
  const [topic] = useState<TopicModel>(initialTopic);
  return (
    <AccordionItem key={topic.id} className="topic">
      <AccordionItemHeading>
        <AccordionItemButton className="heading">
          <AccordionItemState>
            {({ expanded }) =>
              expanded ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />
            }
          </AccordionItemState>
          {topic.name}
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel>
        <SubtopicsList initialSubtopics={topic.subtopics} />
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Topic;
