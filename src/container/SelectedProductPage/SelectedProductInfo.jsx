import React from "react";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  capitalizeFirstLetter,
  updatePriceByCurrency,
} from "../../utils/stringUtils";
import { useState } from "react";
import { addItemToCart } from "../../store/cartSlice";

const SelectedProductInfo = ({ data, id }) => {
  // Redux variables
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );
  const dispatch = useDispatch();

  // Component state variables
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  // Selected product
  const currentProductSelected = data[id - 1];

  // FUNCTIONS
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addItemWithQuantity = () => {
    const itemToAdd = data[id - 1];
    const quantityToAdd = quantity; // Get the quantity
    dispatch(addItemToCart({ item: itemToAdd, quantity: quantityToAdd })); // Pass the object with named properties
    setShowPopup(true);

    // Hide the popup message after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Adjust the duration as needed
  };

  return (
    <div className="rounded bg-[#e2ebf8] flex flex-col border-2 border-black p-4 sm:p-6 md:p-8 xl:p-12">
      {/* Category Name */}
      <div className="mb-2 text-xs md:text-sm xl:text-base">
        {capitalizeFirstLetter(currentProductSelected.category)}
      </div>

      {/* Product Title */}
      <div className="text-lg sm:text-2xl md:text-3xl font-bold xl:text-4xl ">
        {currentProductSelected.title}
      </div>

      {/* Price */}
      <div className="font-bold text-2xl md:text-3xl xl:text-4xl my-4">
        <span className="">
          {updatePriceByCurrency(
            currentProductSelected.price,
            exchangeRate,
            currencyToConvertTo,
            currencySymbol
          )}
        </span>
      </div>

      {/* Description */}
      <div>
        <div className="text-base font-medium mb-2 md:text-lg ">Description:</div>
        <p className="text-base sm:text-base md:text-lg ">
          {currentProductSelected.description}
        </p>
      </div>

      {/* Quantity */}
      <div className="my-8">
        <div className="mb-2 font-medium md:text-lg">Quantity:</div>
        <div className="flex">
          <button
            onClick={decrementQuantity}
            className="border border-black py-1 px-2 rounded bg-white hover:bg-[#f0f0f0]"
          >
            -
          </button>
          <input
            type="number"
            className="appearance-none border border-black hover:bg-[#f0f0f0] bg-white w-full text-center py-1.5 sm:py-2.5 xl:py-3 md:w-[200px] lg:w-[200px] px-10 mx-2 rounded leading-tight focus:-none custom-no-spin"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button
            onClick={incrementQuantity}
            className="border border-black py-1 px-2 rounded bg-white hover:bg-[#f0f0f0]"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="relative">
        <div className="">
          <button
            onClick={addItemWithQuantity}
            className="border border-black rounded w-full p-2 sm:py-2.5 md:p-3 xl:p-4 bg-white hover:bg-[#f0f0f0]"
          >
            Add To Cart
          </button>
        </div>
        {showPopup && (
          <div className="absolute min-w-[280px] text-center -top-10 left-1/2 transform -translate-x-1/2 bg-white  p-2 border border-gray-300 rounded shadow-md">
            Item successfully added to cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedProductInfo;
