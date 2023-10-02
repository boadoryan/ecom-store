import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const InfoBanner = ({ data }) => {
  // Return only the products with a title less than 7 words.
  const filteredData = data.filter((item) => {
    const words = item.title.split(" ");
    return words.length <= 7;
  });

  // Random number to get a random item.
  const randomNumIndex = Math.floor(Math.random() * filteredData.length);

  // Random product
  const randomProduct = filteredData[randomNumIndex];
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mb-4">
        Featured Product
      </h2>
      {/* <div className="md:grid md:grid-cols-5 gap-8 lg:grid  lg:grid-cols-5 lg:gap-4 shadow"> */}
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-5 md:gap-4">
        <div className="col-span-3  border-2 border-black rounded flex justify-center items-center py-4 bg-white ">
          <div className="">
            <img
              className=" h-[20rem] md:h-[16rem] lg:h-[25rem]  lg:p-8 object-contain"
              src={randomProduct.image}
              alt="featured item"
            />
          </div>
        </div>
        <div className=" px-4 py-8 md:flex flex-col justify-center lg:px-8 border-2 border-black rounded col-span-2 bg-[#e2ebf8]">
          <div className="md:text-xl">
            {capitalizeFirstLetter(randomProduct.category)}
          </div>
          <div className=" my-4 text-3xl font-bold md:text-3xl md:my-4 lg:text-5xl w-4/5">
            {randomProduct.title
              .split(" ") // Split the title into an array of words
              .slice(0, 5) // Select the first 5 words
              .join(" ")}
          </div>
          <Link to={`/product/${randomProduct.id}`}>
            <button className="border rounded  border-black lg:mt-8 px-6 py-2 hover:bg-[#f0f0f0]">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoBanner;