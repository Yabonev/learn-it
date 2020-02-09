import * as React from "react";

import Subtopic from "./Subtopic";

import { List } from "@material-ui/core";
import { SubtopicModel } from "../../models/Subtopic";

interface SubtopicsProps {
  subtopics: SubtopicModel[];
}

const SubtopicsList = ({ subtopics }: SubtopicsProps) => {
  const subtopicListItems = subtopics.map(subtopic => (
    <Subtopic subtopic={subtopic} />
  ));

  return <List>{subtopicListItems}</List>;
};

export default SubtopicsList;
