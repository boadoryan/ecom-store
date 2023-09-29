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
      <div className="md:mb-20 mb-8 mx-2">
        <div className="grid gap-4 grid-cols-1 md:grid md:grid-cols-3 lg:grid">
          {/* First category */}
          <div className="flex flex-col justify-center align-center items-center bg-black">
            <div className="h-[440px] w-full md:block homepage-category-item rounded">
              <img
                className="h-full w-full object-cover rounded shadow-img"
                src="../../../public/assets/electronics_category.jpg"
                alt=""
              />
              <p className="homepage-category-item-subtitle text-2xl text-white font-bold">
                The latest in
              </p>
              <p className="homepage-category-item-title text-6xl text-white font-bold">
                Electronics
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center align-center items-center">
            <div className="h-[440px] w-full md:block homepage-category-item rounded">
              <img
                className="h-full w-full object-cover rounded shadow-img"
                src="../../../public/assets/clothing_category.jpg"
                alt=""
              />
              <p className="homepage-category-item-subtitle text-2xl text-white font-bold">
                Men's and women's
              </p>
              <p className="homepage-category-item-title text-6xl text-white font-bold">
                Clothing
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center align-center items-center">
            <div className="h-[440px] w-full md:block homepage-category-item rounded">
              <img
                className="h-full w-full object-cover rounded shadow-img object-right-bottom"
                src="../../../public/assets/jewelry_category.jpg"
                alt=""
              />
              <p className="homepage-category-item-subtitle text-2xl text-white font-bold">
                The finest artisan
              </p>
              <p className="homepage-category-item-title text-6xl text-white font-bold">
                Jewelry
              </p>
            </div>
          </div>

          {/* Second category */}
          {/* ... (similar structure for other categories) */}
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
