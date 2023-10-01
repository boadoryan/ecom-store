import React from "react";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {capitalizeFirstLetter,updatePriceByCurrency} from "../../utils/stringUtils";
import { useState } from "react";
import { addItemToCart } from "../../store/cartSlice";

const SelectedProductInfo = ({ data, id }) => {
  
  // Redux variables
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector((state) => state.exchangeRate.currencyToConvertTo);
  const currencySymbol = useSelector((state) => state.exchangeRate.currencySymbol);
  const dispatch = useDispatch();

  // Component state variables
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  // Selected product
  const currentProductSelected = data[id - 1];

  // FUNCTIONS 
  const decrementQuantity = () => {if (quantity > 1) {setQuantity(quantity - 1)}};

  const incrementQuantity = () => {setQuantity(quantity + 1)};

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
    <div className="p-6 md:p-8 lg:p-10 rounded bg-[#e2ebf8] h-full flex flex-col border-2 border-black">
      {/* Category Name */}
      <div className="md:text-start mb-2">
        {capitalizeFirstLetter(currentProductSelected.category)}
      </div>

      {/* Product Title */}
      <div className="font-bold text-xl md:text-3xl">
        {currentProductSelected.title}
      </div>

      {/* Price */}
      <div className="md:text-start my-6">
        <span className="text-4xl font-bold">
          {updatePriceByCurrency(
            currentProductSelected.price,
            exchangeRate,
            currencyToConvertTo,
            currencySymbol
          )}
        </span>
      </div>

      {/* Description */}
      <div className="text-md md:text-lg">
        <div className="font-bold mb-2">Description:</div>
        {currentProductSelected.description}
      </div>

      {/* Quantity */}
      <div className="md:text-start flex flex-col  md:items-start my-6">
        <div className="font-bold md:text-lg mb-4">Quantity:</div>
        <div className="flex items-center">
          <button
            onClick={decrementQuantity}
            className="rounded p-2 bg-white border border-black hover:bg-[#f0f0f0]"
          >
            -
          </button>
          <input
            type="number"
            className="appearance-none border border-black hover:bg-[#f0f0f0] bg-white text-center py-3 px-6 mx-2 rounded leading-tight focus:outline-none custom-no-spin"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button
            onClick={incrementQuantity}
            className="rounded p-2 bg-white border border-black hover:bg-[#f0f0f0]"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="relative">
        <div className="text-center md:text-start">
          <Button
            handleOnClick={addItemWithQuantity}
            isBordered={true}
            text={"Add To Cart"}
            className="px-4 py-2 border border-black hover:bg-gray-200"
          />
        </div>
        {showPopup && (
          <div className="absolute min-w-[280px] text-center -top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 border border-gray-300 rounded shadow-md">
            Item successfully added to cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedProductInfo;
