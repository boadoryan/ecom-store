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
      <div className="flex-grow mx-4 md:mx-6 md:my-12 lg:mx-6 lg:my-8 xl:mx-16 xl:my-8">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResponsiveContainer;
