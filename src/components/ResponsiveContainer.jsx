import React from "react";
import Footer from "../Footer";

const ResponsiveContainer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-4 md:mx-64 md:my-24 lg:mx-6 lg:my-8 xl:mx-16 xl:my-8">
        {/* <div className="flex-grow mx-4 md:mx-64 my-">{children}</div> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResponsiveContainer;
