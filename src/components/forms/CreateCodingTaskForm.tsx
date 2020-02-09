import React, { useState } from "react";
import { CSSProperties } from "@material-ui/styles";
import { useFormControl } from "@material-ui/core";
import { useForm } from "react-hook-form";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "left",
    alignItems: "center"
  } as CSSProperties,

  form: {
    display: "flex",
    flexDirection: "column",
    width: "600px",
    margin: "1em"
  } as CSSProperties
};
export interface CodingTask {
  taskDescription: string;
  difficulty: Number; // -- Maybe change to an enumerator
  solution?: string;
  hints?: string[];
  tags?: string[];
}

const CreateCodingTaskForm = () => {
  const emptyTask = {
    taskDescription: "",
    difficulty: 0,
    solution: ""
  };
  const [task, setTask] = useState<CodingTask>();
  const { handleSubmit, register, errors } = useForm();

  return (
    <div style={styles.container}>
      <h2>Create coding task</h2>
      <form style={styles.form}>
        <label>Problem description</label>
        <textarea name="taskDescription" ref={register} />

        <label>Difficulty</label>
        <input name="difficulty" type="number" ref={register} />

        <label>Solution</label>
        <textarea name="solution" ref={register} />

        <label>Hint</label>
        <input name="hint" type="text" ref={register} />

        <label>Tag</label>
        <input name="tag" type="text" ref={register} />
      </form>
    </div>
  );
};

export default CreateCodingTaskForm;
