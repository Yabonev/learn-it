import * as React from "react";
import { useForm } from "react-hook-form";
import { CSSProperties } from "@material-ui/styles";
import TopicModel from "../../models/Topic";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "2em",
    alignItems: "center"
  } as CSSProperties
};

const CreateTopic: React.FC = () => {
  const { handleSubmit, register } = useForm<TopicModel>();

  const onFormSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <div style={styles.container}>
      <h3>Create Topic</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>Topic name</label>
        <input name="name" type="text" ref={register} />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTopic;
