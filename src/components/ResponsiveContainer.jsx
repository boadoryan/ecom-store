import React from "react";
import Footer from "../Footer";

const ResponsiveContainer = ({
  children,
  paddingY,
  paddingX,
  marginX,
  marginY,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-36 my-12">{children}</div>
      <Footer />
    </div>
  );
};

export default ResponsiveContainer;
