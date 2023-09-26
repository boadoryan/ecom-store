import React, { useState, useEffect } from "react";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import ResponsiveContainer from "../../components/ResponsiveContainer";

const HeroBanner = ({ data, capitalizeFirstLetter }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const autoNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  function cleanAndCapitalize(text) {
    // Split the text by commas
    const parts = text.split(", ");

    // Capitalize each part and join them back together with commas
    const cleanedText = parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(", ");

    return cleanedText;
  }

  useEffect(() => {
    const intervalId = setInterval(autoNextImage, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentImage = data[currentImageIndex].image;
  const categories = [];

  return (
    <>
      <div className="border border-black rounded bg-white mx-2">
        {/* <div className="container lg:flex lg:gap-16"> */}
        <div className="flex p-8">
          <div className="flex flex-col justify-center">
            <div className="">
              <h3 className="font-bold text-4xl ">YOUR</h3>
              <h3 className="font-bold  gradient-text text-4xl ">
                ONE-STOP SHOP
              </h3>
              <h3 className="font-bold text-4xl ">FOR EVERYTHING.</h3>
            </div>
          </div>
        </div>
        {/* 
        <div className="h-full flex justify-center align-center py-8">
          <img
            className="h-[6rem] mb-4 object-contain"
            src="/src/assets/undraw_web_shopping_re_owap.svg"
            alt=""
          />
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default HeroBanner;
