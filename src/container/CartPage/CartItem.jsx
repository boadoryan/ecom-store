import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItemFromCart } from "../../store/cartSlice";
import { updatePriceByCurrency } from "../../utils/stringUtils";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const CartItem = ({ itemId, item, quantity, handleQuantityChange }) => {
  const dispatch = useDispatch();
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );

  return (
    <div
      key={itemId}
      className="border border-black rounded flex flex-col justify-center items-center md:grid md:grid-cols-9 mb-4 py-4 "
    >
      <div className="col-span-1 px-4 py-2">
        <div className=" flex md:flex justify-center items-center">
          <img
            className=" h-[10rem] md:h-[6rem] object-contain"
            src={item.image}
            alt=""
          />
        </div>
      </div>
      <div className="col-span-3 px-4 py-2 flex md:px-4 md:py-2 md:text-md lg:text-lg">
        <div className="flex flex-col">
          <p className="md:text-sm text-sm lg:text-md md:text-start text-center">
            {capitalizeFirstLetter(item.category)}
          </p>

          <p className="font-bold md:text-md md:text-start lg:text-lg my-2 text-center">
            {item.title}
          </p>
          <div className="text-center md:text-start">
            {updatePriceByCurrency(
              item.price,
              exchangeRate,
              currencyToConvertTo,
              currencySymbol
            )}
          </div>
        </div>
      </div>
      <div className="col-span-2 my-4 px-4 py-2 md:ml-8">
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
      <div className="col-span-2 px-4 py-2 flex gap-2 md:block  text-center font-bold md:text-md lg:text-lg ml-4">
        <span className="font-bold md:hidden">Item Total:</span>
        <p>
          {updatePriceByCurrency(
            item.price * quantity,
            exchangeRate,
            currencyToConvertTo,
            currencySymbol
          )}
        </p>
      </div>

      <div className="col-span-1 ml-4">
        <div className="text-2xl md:text-md lg:text-2xl my-2">
          {/* Button for mobile */}
          <button
            className="block md:hidden border text-sm px-4 py-2 rounded hover:bg-red-400 border-black"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          >
            Remove
          </button>

          {/* Icon for larger screens */}
          <div className="hidden md:block">
            <div className="flex justify-center items-center mr-3">
              <button
                className="text-sm rounded border-black"
                onClick={() => dispatch(removeItemFromCart(item.id))}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="hover:text-red-400 text-2xl"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
