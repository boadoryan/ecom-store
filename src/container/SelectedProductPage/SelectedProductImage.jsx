import React from "react";

const SelectedProductImage = ({ data, id }) => {
  return (
    <div className="h-full w-full p-8 flex justify-center align-center items-center">
      <img
        className="h-[24rem] md:h-[28rem] object-contain"
        src={data[id - 1].image}
        alt=""
      />
    </div>
  );
};

export default SelectedProductImage;
