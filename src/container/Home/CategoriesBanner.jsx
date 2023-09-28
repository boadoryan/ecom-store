import React from "react";
import { faShirt, faComputer, faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesBanner = ({ data }) => {
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl lg:mb-4 mx-2 mb-4">
        Find the best deals on:
      </h2>
      <div className="md:mb-20 mb-8 border border-black rounded p-4 mx-2">
        <div className=" sm:grid md:grid md:grid-cols-3 lg:grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center lg:p-8">
            <div className="rounded-full p-8 ">
              <FontAwesomeIcon
                icon={faComputer}
                className=" text-5xl lg:text-7xl"
              />
            </div>
            <p className=" text-md lg:text-xl">Electronics</p>
          </div>
          <div className="flex flex-col items-center lg:p-8">
            <div className="rounded-full p-8">
              <FontAwesomeIcon
                icon={faShirt}
                className=" text-5xl lg:text-7xl"
              />
            </div>
            <p className=" sm:text-sm text-md lg:text-xl">
              Men's and Women's Clothing
            </p>
          </div>
          <div className="flex flex-col items-center lg:p-8">
            <div className="rounded-full p-8">
              <FontAwesomeIcon icon={faGem} className=" text-5xl lg:text-7xl" />
            </div>
            <p className=" text-md lg:text-xl">Jewellery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
