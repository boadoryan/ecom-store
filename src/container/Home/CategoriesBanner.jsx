import React from "react";
import { useRef } from "react";
import {
  faShirt,
  faComputer,
  faGem,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesBanner = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl lg:mb-4 mx-2 mb-4">
        Find the best deals on:
      </h2>
      <div className="md:mb-20 mb-8 mx-2">
        <div className="grid gap-6 grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4">
          {/* First category */}
          <a onClick={() => scrollToSection("electronics-homepage-section")}>
            <div className="flex flex-col justify-end h-[300px] p-6 bg-[#FFCBA4] border-2 border-black rounded shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Newest</p>
              <p className="text-5xl md:text-4xl text-black font-bold">
                Electronics
              </p>
            </div>
          </a>
          <a
            onClick={() => scrollToSection("womens-clothing-homepage-section")}
          >
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#FFF3B0] border-2 border-black rounded shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Women's </p>
              <p className=" text-5xl md:text-4xl text-black font-bold">
                Clothing
              </p>
            </div>
          </a>
          <a onClick={() => scrollToSection("jewelery-homepage-section")}>
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#AEC6CF] border-2 border-black rounded shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Artisan</p>
              <p className=" text-5xl md:text-4xl text-black font-bold">
                Jewelry
              </p>
            </div>
          </a>
          <a onClick={() => scrollToSection("mens-clothing-homepage-section")}>
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#A1EFD3] border-2 border-black rounded shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Men's</p>
              <p className=" text-5xl md:text-4xl text-black font-bold">
                Clothing
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
