import CodingTaskModel from "./CodingTask";

interface SubtopicModel {
  name: string;
  content: string; // Convert to a structured entity?
  importance: Number; // -- Maybe change to an enumerator; How important is the material in relation to the whole course.
  subtopicLevelTasks?: CodingTaskModel[]; // Spans over previous material and current subtopic.
}

export default SubtopicModel;
