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

  console.log(cleanAndCapitalize(data[0].category));

  return (
    <>
      <div className="mb-20">
        <TwoColumnLayout
          leftColumn={
            <div className="h-full flex p-12">
              <div className="flex flex-col justify-evenly">
                <div className="relative">
                  <h3 className="font-bold gradient-text text-8xl ">YOUR</h3>
                  <h3 className="font-bold  gradient-text text-8xl ">
                    ESSENTIALS
                  </h3>
                </div>

                <h3 className="text-4xl font-medium mt-8">
                  Delivered right to your door
                </h3>
                <div className="mt-32">
                  <p className="text-2xl font-bold mb-8">Shop the following:</p>
                  <div className="flex gap-8">
                    {data.map((item) => {
                      if (!categories.includes(item.category)) {
                        categories.push(item.category);
                        return (
                          <p className="text-xl border p-2" key={item.category}>
                            {cleanAndCapitalize(item.category)}
                          </p>
                        );
                      }
                      return null; // Skip rendering for duplicate categories
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
          rightColumn={
            <div className="flex flex-col w-full h-[38rem] p-16">
              <img
                className="h-full w-full object-contain"
                src={currentImage || ""}
                alt=""
              />
            </div>
          }
        ></TwoColumnLayout>
      </div>
    </>
  );
};

export default HeroBanner;
