import React from "react";

const ResponsiveContainer = ({
  children,
  paddingY,
  paddingX,
  marginX,
  marginY,
}) => {
  const containerStyles = {
    paddingTop: paddingY,
    paddingBottom: paddingY,
    paddingLeft: paddingX,
    paddingRight: paddingX,
    marginLeft: marginX,
    marginRight: marginX,
    marginTop: marginY,
    marginBottom: marginY,
  };

  return (
    <div
      className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-32 max-w-[1920px] mt-[6rem]"
      style={containerStyles}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
