import React from "react";

import Subtopic from "./Subtopic";

import SubtopicModel from "../../models/Subtopic";
import { Accordion } from "react-accessible-accordion";
import { useState } from "react";

interface SubtopicsProps {
  initialSubtopics: SubtopicModel[];
}

const SubtopicsList = ({ initialSubtopics }: SubtopicsProps) => {
  const [subtopics] = useState<SubtopicModel[]>(initialSubtopics);

  const subtopicsHtml = subtopics.map(subtopic => (
    <Subtopic key={subtopic.name} initialSubtopic={subtopic} />
  ));

  return <Accordion allowZeroExpanded>{subtopicsHtml}</Accordion>;
};

export default SubtopicsList;
