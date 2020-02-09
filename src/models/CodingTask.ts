export interface CodingTaskModel {
  id: string;
  taskDescription: string;
  difficulty: Number; // -- Maybe change to an enumerator
  solution?: string;
  hints?: string[];
  tags?: string[];
}

// Difficulty - How difficult/hard is the task at hand compared to the hardest tasks in the whole course.
