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
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-5 md:gap-4">
        <div className="col-span-3  border-2 border-black rounded flex justify-center items-center py-8 bg-white ">
          <img
            className=" h-[20rem] md:h-[12rem] lg:h-[16rem] object-contain"
            src={randomProduct.image}
            alt="featured item"
          />
        </div>
        <div className="border-2 border-black rounded flex items-center col-span-2 bg-[#deecf6]">
          <div className="flex flex-col gap-12 p-8">
            <div>
              <div className="md:text-base">
                {capitalizeFirstLetter(randomProduct.category)}
              </div>
              <div className="text-3xl font-bold lg:text-3xl">
                {randomProduct.title
                  .split(" ") // Split the title into an array of words
                  .slice(0, 5) // Select the first 5 words
                  .join(" ")}
              </div>
            </div>
            <Link to={`/product/${randomProduct.id}`}>
              <button className="border rounded  border-black  w-[144px]  py-2.5 bg-[#f9f9f9] hover:bg-[#f4f4f4]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBanner;
