import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center justify-center align-center mt-36 gap-4 mx-12 ">
        <img className="h-[25rem]" src="assets/loading.svg" alt="loading image" />
        <div className="font-bold text-4xl">Welcome to Trendie!</div>
        <div className="font-medium text-xl md:text-2xl">
          Please give us a second as we load the store.
        </div>
      </div>
    </>
  );
};

export default Loading;
