import { CodingTaskModel } from "./CodingTask";

export interface SubtopicModel {
  id: string;
  name: string;
  content: string; // Convert to a structured entity?
  importance: Number; // -- Maybe change to an enumerator
  subtopicLevelTasks?: CodingTaskModel[]; // Spans over previous material and current subtopic.
}

// Importance - How important is the material in relation to the whole course.
