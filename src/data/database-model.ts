// Ids should come automatically from Firebase.

interface Topic {
  name: string;
  subtopics: Subtopic[];
  codingTasks?: CodingTask[]; // Possible questions can contain material up to the end of the current topic.
}

interface Subtopic {
  name: string;
  content: string; // Convert to a structured entity?
  importance: Number; // -- Maybe change to an enumerator
  subtopicLevelTasks?: CodingTask[]; // Spans over previous material and current subtopic.
}

interface CodingTask {
  taskDescription: string;
  difficulty: Number; // -- Maybe change to an enumerator
  solution?: string;
  hints?: string[];
  tags?: string[];
}

interface DatabaseTypescriptModel {
  topics: Topic[];
  codingTasks: CodingTask[]; // Quiz-level coding tasks, here for completeness.
}

// Importance - How important is the material in relation to the whole course.
// Difficulty - How difficult/hard is the task at hand compared to the hardest tasks in the whole course.
export {};
