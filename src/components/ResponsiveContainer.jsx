import React from "react";
import Footer from "../Footer";

const ResponsiveContainer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-4 my-12 md:mx-16 ">
        {/* <div className="flex-grow mx-4 md:mx-64 my-">{children}</div> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResponsiveContainer;
