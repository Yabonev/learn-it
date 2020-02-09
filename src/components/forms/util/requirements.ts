import { ValidationOptions } from "react-hook-form";

const subtopicNameRequirement: ValidationOptions = {
  required: {
    value: true,
    message: "Subtopic name is a required field."
  }
};

const importanceValueErrorMessage =
  "Importance value should be in the range [1, 10]";
const importanceRequirement: ValidationOptions = {
  min: {
    value: 0,
    message: importanceValueErrorMessage
  },
  max: {
    value: 10,
    message: importanceValueErrorMessage
  }
};

export { subtopicNameRequirement, importanceRequirement };
