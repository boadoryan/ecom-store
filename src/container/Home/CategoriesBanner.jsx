import React from "react";
import { faShirt, faComputer, faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesBanner = ({ data }) => {
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mb-4">
        Find the best deals on:
      </h2>
      <div className="mb-20 border border-black rounded p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-8">
            <div className="rounded-full p-8 ">
              <FontAwesomeIcon icon={faComputer} className="text-7xl" />
            </div>
            <p className="text-xl">Electronics</p>
          </div>
          <div className="flex flex-col items-center p-8">
            <div className="rounded-full p-8">
              <FontAwesomeIcon icon={faShirt} className="text-7xl" />
            </div>
            <p className="text-xl">Men's and Women's Clothing</p>
          </div>
          <div className="flex flex-col items-center p-8">
            <div className="rounded-full p-8">
              <FontAwesomeIcon icon={faGem} className="text-7xl" />
            </div>
            <p className="text-xl">Jewellery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
