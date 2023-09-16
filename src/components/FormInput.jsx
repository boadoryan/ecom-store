import React from "react";

const FormInput = ({ labelName, inputType }) => {
  return (
    <>
      <div className=" mb-8">
        <label className="font-bold text-lg" htmlFor={labelName}>
          {labelName}
        </label>
        <br></br>
        <input
          className="bg-white text-black p-4 w-full border rounded mt-4"
          placeholder={labelName}
          type={inputType}
          name={labelName}
        />
      </div>
    </>
  );
};

export default FormInput;
