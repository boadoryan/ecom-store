import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-12 text-white text-center relative bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
