import React, { useState, useEffect } from "react";
import { useTopics } from "../../hooks/useTopics";
import useCreateSubtopic from "../../hooks/useCreateSubtopic";
import {
  subtopicNameRequirement,
  importanceRequirement
} from "../../forms-util/requirements";
import { useForm } from "react-hook-form";
import "../../styles/CreateSubtopicForm.css";

const CreateSubtopicForm: React.FC = () => {
  const { topics } = useTopics();
  const { success, createSubtopic } = useCreateSubtopic();
  const { handleSubmit, register, errors } = useForm();
  const [renderCreateSuccess, setRenderCreateSuccess] = useState(false);

  useEffect(() => {
    setRenderCreateSuccess(success);
    setTimeout(() => setRenderCreateSuccess(false), 2500);
  }, [success]);

  const onSubmit = (formData: Record<"topicId" | "subtopic", any>) => {
    createSubtopic(formData.topicId, formData.subtopic);
  };

  const subtopicErrors = errors.subtopic || {};

  const inputErrors = Object.values(subtopicErrors).map(err => err.message);

  const errorMessages =
    inputErrors &&
    inputErrors.map(err => (
      <p key={err} style={{ color: "red" }}>
        {err}
      </p>
    ));

  return (
    <div className="container">
      <h2>Create new subtopic</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Topic </label>
        <select name="topicId" ref={register}>
          {topics.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>

        <label>Subtopic name</label>
        <input name="subtopic.name" ref={register(subtopicNameRequirement)} />

        <label>Content</label>
        <textarea name="subtopic.content" ref={register} />

        <label>Importance</label>
        <input
          type="number"
          name="subtopic.importance"
          ref={register(importanceRequirement)}
        />

        <input className="btn btn-primary" type="submit" name="Create" />
      </form>
      {renderCreateSuccess && <p>Created successfully.</p>}
      {errorMessages}
    </div>
  );
};

export default CreateSubtopicForm;
