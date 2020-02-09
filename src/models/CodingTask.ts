interface CodingTaskModel {
  id: string;
  taskDescription: string;
  difficulty: Number; // -- Maybe change to an enumerator;How difficult/hard is the task at hand compared to the hardest tasks in the whole course.
  solution?: string;
  hints?: string[];
  tags?: string[];
}

export default CodingTaskModel;
