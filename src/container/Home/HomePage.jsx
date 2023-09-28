import React from "react";
import HeroBanner from "./HeroBanner";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import FullProductList from "./FullProductList";
import InfoBanner from "./InfoBanner";
import CategoriesBanner from "./CategoriesBanner";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const HomePage = ({ data, capitalizeFirstLetter }) => {
  return (
    <ResponsiveContainer>
      <HeroBanner data={data} capitalizeFirstLetter={capitalizeFirstLetter} />
      <CategoriesBanner data={data} />
      <InfoBanner data={data} />
      <FullProductList
        data={data}
        capitalizeFirstLetter={capitalizeFirstLetter}
      />
    </ResponsiveContainer>
  );
};

export default HomePage;
