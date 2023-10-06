import React from "react";

const SelectedProductImage = ({ data, id }) => {
  return (
    <div className="flex justify-center align-center items-center rounded">
      <img
        className="w-[250px] lg:w-[350px] h-auto object-cover"
        src={data[id - 1].image}
        alt=""
      />
    </div>
  );
};

export default SelectedProductImage;
