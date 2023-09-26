import React from "react";

const ErrorModal = ({ errorMessage, setShowError }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md mx-auto rounded-lg shadow-md text-center flex flex-col">
        <p className="text-4xl text-center">Oops!</p>
        <div className="my-4">
          <div className="text-lg font-bold">
            There were some errors with your form.
          </div>
          <div className="text-lg">
            Please go back and ensure you have filled out all fields correctly.
          </div>
        </div>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
          onClick={() => setShowError(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
