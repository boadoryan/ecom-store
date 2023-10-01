import React, { useState } from "react";
import { convertToCamelCase } from "../utils/stringUtils";
const FormInput = ({
  labelName,
  inputType,
  formData,
  setFormData,
  placeHolder,
  handleVerification,
}) => {
  // State to track the validity of the input field and error text
  const [isFieldValid, setIsFieldValid] = useState(true);
  const [errorText, setErrorText] = useState("");

  // Handler for input value change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the form data with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset the field validity and error text
    setIsFieldValid(true);
    setErrorText("");
  };

  // Handler for input blur (when it loses focus)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Validate the input value using the validateField function
    // const validation = validateField(name, value);
    const validation = handleVerification(name, value);

    if (!value.trim()) {
      // If the input is empty, mark it as invalid and show a "required" error message
      setIsFieldValid(false);
      setErrorText("This field is required.");
    } else {
      // If the input is not empty, set its validity based on the validation result
      setIsFieldValid(validation.isValid);
      setErrorText(validation.errorText);
    }
  };

  // Generate the input name in camelCase
  const inputName = convertToCamelCase(labelName);

  return (
    <>
      <div className="mb-4">
        {/* Render the label */}
        <label className="font-bold text-sm md:text-md " htmlFor={inputName}>
          {labelName}
        </label>
        <br />
        {/* Render the input element */}
        <input
          className={`bg-white text-black text-sm md:text-md w-full border rounded px-2 py-3 md:py-4 mt-2${
            isFieldValid ? "" : "border-red-500"
          }`}
          placeholder={placeHolder}
          type={inputType}
          name={inputName}
          value={formData[inputName] || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* Display an error message if the field is invalid */}
        {!isFieldValid && (
          <div className="text-sm text-red-500">{errorText}</div>
        )}
      </div>
    </>
  );
};

export default FormInput;
