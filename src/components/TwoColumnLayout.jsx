import React from "react";

const TwoColumnLayout = ({
  leftColumn,
  rightColumn,
  leftWidth = "lg:w-1/2",
  rightWidth = "lg:w-1/2",
}) => {
  return (
    <div className="container flex flex-col lg:flex-row">
      <div className={`lg:flex-grow ${leftWidth}`}>{leftColumn}</div>
      <div className={rightWidth}>{rightColumn}</div>
    </div>
  );
};

export default TwoColumnLayout;
