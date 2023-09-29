import React from "react";
import HeroBanner from "./HeroBanner";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import FullProductList from "./FullProductList";
import InfoBanner from "./InfoBanner";
import CategoriesBanner from "./CategoriesBanner";

const HomePage = ({ data }) => {
  return (
    <ResponsiveContainer>
      <HeroBanner />
      <CategoriesBanner data={data} />
      <InfoBanner data={data} />
      <FullProductList data={data} />
    </ResponsiveContainer>
  );
};

export default HomePage;
