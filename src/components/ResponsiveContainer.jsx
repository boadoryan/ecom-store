import React from "react";

const ResponsiveContainer = ({ children }) => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col pb-20">
      <div className="flex-grow mx-4 my-12 md:mx-12 lg:mx-20">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
