import React from "react";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import { useParams } from "react-router-dom";
import SelectedProductInfo from "./SelectedProductInfo";
import SelectedProductImage from "./SelectedProductImage";

const SelectedProductPage = ({ data }) => {
  const { id } = useParams();

  return (
    <>
      <ResponsiveContainer>
        <div className="py-12 grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:mr-6 xl:mr-12">
          <SelectedProductImage data={data} id={id} />
          <SelectedProductInfo data={data} id={id} />
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default SelectedProductPage;
