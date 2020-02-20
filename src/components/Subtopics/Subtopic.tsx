import * as React from "react";

import SubtopicModel from "../../models/Subtopic";

import {
  AccordionItem,
  AccordionItemState,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";

const styles = {
  indent: {
    marginLeft: "1em"
  }
};

interface SubtopicProps {
  initialSubtopic: SubtopicModel;
}

const Subtopic = ({ initialSubtopic }: SubtopicProps) => {
  const [subtopic] = useState<SubtopicModel>(initialSubtopic);
  return (
    <AccordionItem
      style={styles.indent}
      key={subtopic.name}
      className="subtopic"
    >
      <AccordionItemHeading>
        <AccordionItemButton className="heading">
          <AccordionItemState>
            {({ expanded }) =>
              expanded ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />
            }
          </AccordionItemState>
          {subtopic.name}
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel>
        <ul>
          <li>Name: {subtopic.name}</li>
          <li>Content: {subtopic.content}</li>
          <li>Importance: {subtopic.importance}</li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Subtopic;
