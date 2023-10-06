import React from "react";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import { useParams } from "react-router-dom";
import SelectedProductInfo from "./SelectedProductInfo";
import SelectedProductImage from "./SelectedProductImage";
import ScrollToTop from "../../utils/ScrollToTop";

const SelectedProductPage = ({ data }) => {
  const { id } = useParams();

  return (
    <>
      <ResponsiveContainer>
        <ScrollToTop />
        <div className="lg:my-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <SelectedProductImage data={data} id={id} />
          <SelectedProductInfo data={data} id={id} />
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default SelectedProductPage;
