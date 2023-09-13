import React from "react";

const SelectedProductImage = ({ data, id }) => {
  return (
    <div className="h-full w-full p-8 flex justify-center">
      <img
        className="sm:h-[36rem] md:h-[36rem] lg:h-[36rem] xl:h-[36rem] object-contain"
        src={data[id - 1].image}
        alt=""
      />
    </div>
  );
};

export default SelectedProductImage;
