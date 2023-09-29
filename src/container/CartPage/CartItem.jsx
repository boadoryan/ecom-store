import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItemFromCart } from "../../store/cartSlice";
import { updatePriceByCurrency } from "../../utils/stringUtils";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import Button from "../../components/Button";

const CartItem = ({ itemId, item, quantity, handleQuantityChange }) => {
  const dispatch = useDispatch();
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );

  console.log("exchangeRate in cartItem", exchangeRate);
  return (
    <div
      key={itemId}
      className="border flex flex-col md:grid md:grid-cols-7 lg:grid lg:grid-cols-7 xl:grid xl:grid-cols-7 mb-4 py-2 items-center"
    >
      <div className="col-span-1 px-4 py-2">
        <div className=" flex md:flex justify-center items-center">
          <img
            className=" h-[10rem] md:h-[5rem] object-contain"
            src={item.image}
            alt=""
          />
        </div>
      </div>
      <div className="col-span-2 px-4 py-2">
        <div className="flex flex-col">
          <p className="md:text-sm text-sm lg:text-md md:text-start text-center">
            {capitalizeFirstLetter(item.category)}
          </p>
          <p className="font-bold md:text-md  lg:text-lg truncate">
            {item.title}
          </p>
        </div>
      </div>
      <div className="col-span-1 flex gap-2 md:px-4 md:py-2 font-bold md:text-md lg:text-lg ">
        <p className="font-bold md:hidden">Price:</p>
        {updatePriceByCurrency(item.price, exchangeRate, currencyToConvertTo)}
      </div>
      <div className="col-span-1 my-4 px-4 py-2">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => handleQuantityChange(itemId, quantity - 1)}
            className="rounded bg-[#d3d3d3] md: p-2"
          >
            -
          </button>
          <div className="appearance-none bg-[#d3d3d3] w-full text-center py-2 px-16 md:px-4 mx-2 rounded">
            {quantity}
          </div>
          <button
            type="button"
            onClick={() => handleQuantityChange(itemId, quantity + 1)}
            className="rounded bg-[#d3d3d3] p-2"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 px-4 py-2 font-bold md:text-md lg:text-lg">
        <span className="font-bold md:hidden">Item Total:</span>
        {` $${
          currencyToConvertTo !== "cad"
            ? (quantity * item.price * exchangeRate).toFixed(2)
            : (quantity * item.price).toFixed(2)
        }`}
      </div>

      <div className="col-span-1">
        <div className="text-2xl md:text-md lg:text-2xl my-2">
          {/* Button for mobile */}
          <button
            className="block md:hidden border text-sm px-4 py-2 rounded bg-red-"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          >
            Remove
          </button>

          {/* Icon for larger screens */}
          <div className="hidden md:block">
            <Button
              handleOnClick={() => dispatch(removeItemFromCart(item.id))}
              text={<FontAwesomeIcon icon={faTrash} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
