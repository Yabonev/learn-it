import * as React from "react";
import { useTopics } from "../hooks/useTopics";

import "../styles/CreateSubtopicForm.css";
import { useForm } from "react-hook-form";
import useCreateSubtopic from "../hooks/useCreateSubtopic";
import { ICreateSubtopic } from "../data/models";
import { Subtopic } from "../data/database-model";

const CreateSubtopicForm: React.FC = () => {
  const { topics } = useTopics();
  const { createSubtopic } = useCreateSubtopic();
  const { handleSubmit, register } = useForm();

  const onSubmit = (subtopicInfo: any) => {
    const subtopic: Subtopic = {
      name: subtopicInfo["name"] as string,
      content: subtopicInfo["content"] as string,
      importance: subtopicInfo["importance"] as number
    };

    const selectedTopic = topics.filter(
      topic => topic.name === subtopicInfo.topicName
    )[0];

    createSubtopic({
      subtopic: subtopic,
      topicId: selectedTopic.id
    } as ICreateSubtopic);
  };

  return (
    <div className="container">
      <h2>Create new subtopic</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="topicName"> Topic </label>
        <select name="topicName" ref={register}>
          {topics.map(topic => (
            <option key={topic.id}>{topic.name}</option>
          ))}
        </select>

        <label htmlFor="name">Subtopic name</label>
        <input name="name" ref={register} />

        <label htmlFor="content">Content</label>
        <textarea name="content" ref={register} />

        <label htmlFor="importance">Importance</label>
        <input type="number" name="importance" ref={register} />

        <input className="btn" type="submit" name="Create" />
      </form>
    </div>
  );
};

export default CreateSubtopicForm;
