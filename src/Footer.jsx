import React from "react";

const Footer = () => {
  return (
    <footer className=" py-6 text-white text-center bg-[#2d526c]">
      <div className="container mx-auto">
        <p className="font-bold mb-2">
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights
          reserved.
        </p>
        <p>Designed and Built by Ryan Boado</p>
      </div>
    </footer>
  );
};

export default Footer;
