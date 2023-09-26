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
      <div className="mb-20 border border-black rounded bg-white">
        <TwoColumnLayout
          leftColumn={
            <div className="h-full flex p-12">
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <h3 className="font-bold text-7xl ">YOUR</h3>
                  <h3 className="font-bold  gradient-text text-7xl ">
                    ONE-STOP SHOP
                  </h3>
                  <h3 className="font-bold text-7xl ">FOR EVERYTHING.</h3>
                  {/* <div className="flex justify-center items-center">
                    <img
                      className="h-[6rem] mb-4 object-contain"
                      src="/src/assets/undraw_shopping_bags_noba.svg"
                      alt=""
                    />
                  </div> */}
                </div>

                {/* <h3 className="text-4xl font-medium mt-8">All in one shop</h3> */}
                {/* <div className="mt-32">
                  <p className="text-2xl font-bold mb-4">
                    Find the best deals on:
                  </p>
                  <div className="flex gap-8">
                    {data.map((item) => {
                      if (!categories.includes(item.category)) {
                        categories.push(item.category);
                        return (
                          <p className="text-xl p-2" key={item.category}>
                            {cleanAndCapitalize(item.category)}
                          </p>
                        );
                      }
                      return null; // Skip rendering for duplicate categories
                    })}
                  </div>
                </div> */}
              </div>
            </div>
          }
          rightColumn={
            <div className="h-full flex justify-center align-center py-8">
              <img
                className="h-[24rem] mb-4 object-contain"
                src="/src/assets/undraw_web_shopping_re_owap.svg"
                alt=""
              />
            </div>
            // <div className="flex flex-col w-full h-[38rem] p-16">
            //   <img
            //     className="h-full w-full object-contain"
            //     src={currentImage || ""}
            //     alt=""
            //   />
            // </div>
          }
        ></TwoColumnLayout>
      </div>
    </>
  );
};

export default HeroBanner;
