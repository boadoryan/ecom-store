import React from "react";
import HeroBanner from "./HeroBanner";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import FullProductList from "./FullProductList";
import InfoBanner from "./InfoBanner";
import CategoriesBanner from "./CategoriesBanner";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const HomePage = ({ data, capitalizeFirstLetter }) => {
  return (
    // <ResponsiveContainer>
    <div className="flex-grow my-12 lg:flex lg:items-center justify-center md:flex md:items-center md:justify-center xl:flex xl:items-center xl:justify-center">
      <div className="container lg:flex lg:gap-16">
        <HeroBanner data={data} capitalizeFirstLetter={capitalizeFirstLetter} />
        <CategoriesBanner data={data} />
        <InfoBanner data={data} />
        <FullProductList
          data={data}
          capitalizeFirstLetter={capitalizeFirstLetter}
        />
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default HomePage;
