import CodingTaskModel from "./CodingTask";
import SubtopicModel from "./Subtopic";

interface TopicModel {
  id: string;
  name: string;
  subtopics: SubtopicModel[];
  codingTasks?: CodingTaskModel[]; // Possible questions can contain material up to the end of the current topic.
  publish: boolean;
}

export default TopicModel;
