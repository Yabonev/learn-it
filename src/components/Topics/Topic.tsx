import React from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from "react-accessible-accordion";

import SubtopicsList from "../Subtopics/SubtopicsList";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./styles.css";
import { TopicModel } from "../../models/Topic";
interface TopicProps {
  topic: TopicModel;
}

const Topic = ({ topic }: TopicProps) => {
  return (
    <AccordionItem key={topic.id} className="topic">
      <AccordionItemHeading>
        <AccordionItemButton>
          <AccordionItemState>
            {isExpanded =>
              isExpanded ? <ExpandMoreIcon /> : <div>no expando</div>
            }
          </AccordionItemState>
          {topic.name}
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel>
        <SubtopicsList subtopics={topic.subtopics} />
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Topic;
