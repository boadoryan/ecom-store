import React from "react";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { updatePriceByCurrency } from "../../utils/stringUtils";

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
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currentProductSelected = data[id - 1];

  return (
    <div className="px-4 py-8 md:p-12 rounded bg-[#e2ebf8] h-full flex flex-col border border-black">
      {/* Category Name */}
      <div className="md:text-start">
        {capitalizeFirstLetter(currentProductSelected.category)}
      </div>

      {/* Product Title */}
      <div className="font-bold mt-2 text-xl md:text-4xl">
        {currentProductSelected.title}
      </div>

      {/* Price */}
      <div className="md:text-start my-6">
        <span className="text-4xl font-bold">
          {updatePriceByCurrency(
            currentProductSelected.price,
            exchangeRate,
            currencyToConvertTo
          )}
        </span>
      </div>

      {/* Description */}
      <div className="text-md md:text-xl">
        <div className="font-bold mb-2">Description:</div>
        {currentProductSelected.description}
      </div>

      {/* Quantity */}
      <div className="text-center md:text-start flex flex-col items-center my-4 md:items-start">
        <div className="font-bold md:text-xl my-4">Quantity:</div>
        <div className="flex items-center">
          <button onClick={decrementQuantity} className="rounded p-2 bg-white">
            -
          </button>
          <input
            type="number"
            className="appearance-none bg-white text-center py-3 px-12 mx-2 rounded leading-tight focus:outline-none custom-no-spin"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button onClick={incrementQuantity} className="rounded p-2 bg-white">
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="text-center md:text-start mt-2">
        <Button handleOnClick={addItemWithQuantity} text={"Add To Cart"} />
      </div>
    </div>
  );
};

export default SelectedProductInfo;
