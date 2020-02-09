import * as React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { SubtopicModel } from "../../models/Subtopic";

interface SubtopicProps {
  subtopic: SubtopicModel;
}

const Subtopic = ({ subtopic }: SubtopicProps) => {
  return (
    <ListItem key={subtopic.id} divider>
      <ListItemText>{subtopic.name}</ListItemText>
    </ListItem>
  );
};

export default Subtopic;
