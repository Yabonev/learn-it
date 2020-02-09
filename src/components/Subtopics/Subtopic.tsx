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

interface SubtopicProps {
  initialSubtopic: SubtopicModel;
}

const Subtopic = ({ initialSubtopic }: SubtopicProps) => {
  const [subtopic] = useState<SubtopicModel>(initialSubtopic);
  return (
    <AccordionItem key={subtopic.id} className="subtopic">
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

      <AccordionItemPanel></AccordionItemPanel>
    </AccordionItem>
  );
};

export default Subtopic;
