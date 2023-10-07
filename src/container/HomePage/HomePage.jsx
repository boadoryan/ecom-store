import React from "react";
import HeroBanner from "./HeroBanner";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import FullProductList from "./FullProductList";
import FeaturedProduct from "./FeaturedProduct";
import CategoriesBanner from "./CategoriesBanner";
import ScrollToTop from "../../utils/ScrollToTop";

const HomePage = ({ data }) => {
  return (
    <div className="outline flex justify-center align-center">
      <ResponsiveContainer>
        <ScrollToTop />
        <HeroBanner />
        <CategoriesBanner data={data} />
        <FeaturedProduct data={data} />
        <FullProductList data={data} />
      </ResponsiveContainer>
    </div>
  );
};

export default HomePage;
