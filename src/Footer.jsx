import React from "react";

const Footer = () => {
  return (
    <footer className=" py-8 border text-black text-center">
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
