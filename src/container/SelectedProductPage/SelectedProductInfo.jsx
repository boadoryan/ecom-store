import React from "react";
import Button from "../../components/Button";

const SelectedProductInfo = ({
  data,
  capitalizeFirstLetter,
  id,
  decrementQuantity,
  incrementQuantity,
  quantity,
  setQuantity,
  addItemWithQuantity,
}) => {
  return (
    <div className="p-4 md:text-start md:p-12 rounded bg-[#e7e7e7] h-full flex flex-col ">
      {/* Category Name */}
      <div className="">{capitalizeFirstLetter(data[id - 1].category)}</div>

      {/* Product Title  */}
      <div className="font-bold text-xl md:text-4xl mt-2 mb-8">
        {data[id - 1].title}
      </div>

      {/* Price */}
      <div className="">
        {/* <span className="font-bold mr-2">Price:</span> */}
        <span className="text-4xl font-bold">{`$${data[id - 1].price.toFixed(
          2
        )}`}</span>
      </div>

      {/* Description */}
      <div className="text-lg text-start md:text-xl  my-12">
        <div className="font-bold mb-4">Description:</div>
        {data[id - 1].description}
      </div>

      {/* Quantity */}
      <div className=" mb-8">
        <div className="font-bold md:text-xl mb-4">Quantity:</div>
        <button onClick={decrementQuantity} className=" rounded p-2 bg-white">
          -
        </button>
        <input
          type="number"
          className="appearance-none bg-white text-center py-3 px-3 mx-2 rounded leading-tight focus:outline-none custom-no-spin"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <button onClick={incrementQuantity} className=" rounded p-2 bg-white">
          +
        </button>
      </div>

      {/* Add to Cart */}
      <div>
        <Button handleOnClick={addItemWithQuantity} text={"Add To Cart"} />
      </div>
    </div>
  );
};

export default SelectedProductInfo;
