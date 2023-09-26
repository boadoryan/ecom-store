import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const InfoBanner = ({ data }) => {
  console.log(data);

  // Assuming 'data' is an array of objects with 'title' properties
  const filteredData = data.filter((item) => {
    // Split the title into words and count them
    const words = item.title.split(" ");
    return words.length <= 7; // Filter items with titles having 5 or more words
  });

  console.log(filteredData);

  const randomNumIndex = Math.floor(Math.random() * filteredData.length);
  const randomProduct = filteredData[randomNumIndex];
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mb-4">
        Featured Product
      </h2>
      <div className="mx-2 flex flex-col gap-2">
        {/* Right Column (60%) */}
        <div className="col-span-3 border border-black rounded flex justify-center items-center py-4 bg-white ">
          <div className="">
            <img
              className="  h-[10rem] lg:h-[25rem] object-contain"
              src={randomProduct.image}
              alt="featured item"
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-5 gap-4">
          {/* Left Column (40%) */}
          <div className=" px-4 py-8 lg:p-16 border border-black rounded col-span-2 bg-[#e2ebf8]">
            <div className="">
              {capitalizeFirstLetter(randomProduct.category)}
            </div>
            <div className=" my-4 text-3xl font-bold lg:text-5xl w-4/5">
              {randomProduct.title
                .split(" ") // Split the title into an array of words
                .slice(0, 5) // Select the first 5 words
                .join(" ")}
            </div>
            <Link to={`/product/${randomProduct.id}`}>
              <button className="border border-black lg:mt-8 p-4">
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
