import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white text-center">
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
