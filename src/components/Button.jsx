import React from "react";

const Button = ({ handleOnClick, text, isBordered, hoverColor,}) => {
  const buttonClass = `w-full rounded px-2 py-4 bg-white my-4 hover:bg-[${hoverColor}] ${
    isBordered ? "border" : ""
  } `;

  return (
    <button type="button" className={buttonClass} onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default Button;
