import React from "react";
import HeroBanner from "./HeroBanner";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import FullProductList from "./FullProductList";
import FeaturedProduct from "./FeaturedProduct";
import CategoriesBanner from "./CategoriesBanner";

const HomePage = ({ data }) => {
  return (
    <ResponsiveContainer>
      <HeroBanner />
      <CategoriesBanner data={data} />
      <FeaturedProduct data={data} />
      <FullProductList data={data} />
    </ResponsiveContainer>
  );
};

export default HomePage;
