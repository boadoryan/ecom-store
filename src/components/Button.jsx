import React from "react";

const Button = ({ handleOnClick, text }) => {
  return (
    <button
      type="button"
      className="w-full rounded px-2 py-4 bg-white my-4"
      onClick={handleOnClick} // Corrected this line
    >
      {text}
    </button>
  );
};

export default Button;
