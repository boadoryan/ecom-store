import React from "react";
import Footer from "../Footer";

const ResponsiveContainer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1920px]">
      <div className="flex-grow mx-4 my-12 md:mx-12 lg:mx-20">
        {/* <div className="flex-grow mx-4 md:mx-64 my-">{children}</div> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResponsiveContainer;
