import React, { useState } from "react";

import CreateTopic from "./CreateTopicForm";
import CreateSubtopicForm from "./CreateSubtopicForm";
import CreateCodingTaskForm from "./CreateCodingTaskForm";
import { CSSProperties } from "@material-ui/styles";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } as CSSProperties,

  form: {
    width: "800px",
    height: "600px"
  },
  buttonsGroup: {
    display: "flex",
    alignItems: "center"
  } as CSSProperties
};

const MasterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const decrementStep = () =>
    currentStep > 0 && setCurrentStep(currentStep - 1);

  const incrementStep = () =>
    currentStep < 2 && setCurrentStep(currentStep + 1);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.form}>
          {(currentStep == 0 && <CreateTopic />) ||
            (currentStep == 1 && <CreateSubtopicForm />) ||
            (currentStep == 2 && <CreateCodingTaskForm />)}
        </div>
        <div style={styles.buttonsGroup}>
          <button onClick={decrementStep}>Previous</button>
          <button onClick={incrementStep}>Next</button>
        </div>
      </div>
    </>
  );
};

export default MasterForm;
