import React from "react";
import FormInput from "../../components/FormInput";
const InfoForm = () => {
  return (
    <>
      <div className="min-w-[40rem]">
        <FormInput labelName={"Email"} inputType={"text"}></FormInput>
        {/* <FormInput labelName={"First Name"} inputType={"text"}></FormInput>
        <FormInput labelName={"Last Name"} inputType={"text"}></FormInput>
        <FormInput labelName={"Phone Number"} inputType={"text"}></FormInput> */}
      </div>
    </>
  );
};

export default InfoForm;
