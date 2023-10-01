import React from "react";

const Button = ({ handleOnClick, text, isBordered,}) => {
  const buttonClass = `w-full rounded px-2 py-4 bg-white my-4 border-black hover:bg-[#f0f0f0] ${
    isBordered ? "border" : ""
  } `;

  return (
    <button type="button" className={buttonClass} onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default Button;
