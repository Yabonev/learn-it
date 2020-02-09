import * as React from "react";
import { useForm } from "react-hook-form";
import { Input, TextField } from "@material-ui/core";
const CreateTopic: React.FC = () => {
  const { handleSubmit, register, reset, control } = useForm();

  const onFormSubmit = (values: unknown) => {
    console.log(values);
  };
  return (
    <>
      <h3>Create Topic</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <TextField label="Topic name" type="text" />
      </form>
    </>
  );
};

export default CreateTopic;
