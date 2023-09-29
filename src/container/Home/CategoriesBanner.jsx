import React from "react";
import {
  faShirt,
  faComputer,
  faGem,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesBanner = ({ data }) => {
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl lg:mb-4 mx-2 mb-4">
        Find the best deals on:
      </h2>
      <div className="md:mb-20 mb-8 rounded border">
        <div className=" sm:grid md:grid md:grid-cols-3 lg:grid grid-cols-3 gap-4">
          <div className="border p-10 relative">
            <div className="flex flex-col justify-center align-center items-center border">
              <div className="h-full md:block homepage-category-item">
                <p className=" text-2xl md:text-5xl text-black font-bold absolute bottom-[60px] left-[60px]">
                  Electronics
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center lg:p-8">
            <div className="h-full md:block md:p-8  flex justify-center align-center">
              <img
                className=" rounded  h-[32rem] sm:h-[14rem] md:h-[20rem] lg:h-[24rem] mb-4 object-contain"
                src="/src/assets/clothing_category.jpg"
                alt=""
              />
            </div>
            <p className=" sm:text-sm text-md lg:text-xl">
              Men's and Women's Clothing
            </p>
          </div> */}
          {/* <div className="flex flex-col items-center lg:p-8">
            <div className="h-full md:block md:p-8  flex justify-center align-center">
              <img
                className=" rounded h-[10rem] sm:h-[14rem] md:h-[20rem] lg:h-[24rem] mb-4 object-contain"
                src="/src/assets/jewelry_category.jpg"
                alt=""
              />
            </div>
            <p className=" text-md lg:text-xl">Jewelry</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
