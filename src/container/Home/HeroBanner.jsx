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
      <div className="bg-white mx-2 p-8 grid md:grid md:grid-cols-2 border border-black rounded md:mb-20 mb-8 ">
        <div className="flex flex-col justify-center order-last md:order-1 lg:ml-12">
          <h3 className="font-bold text-3xl sm:text-5xl md:text-7xl">YOUR</h3>
          <h3 className="font-bold gradient-text text-3xl sm:text-5xl md:text-7xl">
            ONE-STOP SHOP
          </h3>
          <h3 className="font-bold text-3xl sm:text-5xl md:text-7xl">
            FOR EVERYTHING.
          </h3>
        </div>

        <div className="h-full md:block md:p-8 order-1 flex justify-center align-center">
          <img
            className=" h-[10rem] sm:h-[14rem] md:h-[20rem] lg:h-[24rem] mb-4 object-contain"
            src="/src/assets/undraw_web_shopping_re_owap.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
