import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItemFromCart } from "../../store/cartSlice";
import Button from "../../components/Button";
import { updatePriceByCurrency } from "../../utils/stringUtils";
const CartItem = ({
  itemId,
  item,
  capitalizeFirstLetter,
  quantity,
  handleQuantityChange,
}) => {
  const dispatch = useDispatch();
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );

  console.log("exchangeRate in cartItem", exchangeRate);
  return (
    <div
      key={itemId}
      className="border grid grid-cols-7 mb-4 py-2 items-center"
    >
      <div className="col-span-1 px-4 py-2">
        <div className="flex justify-center items-center">
          <img className="h-[5rem] object-contain" src={item.image} alt="" />
        </div>
      </div>
      <div className="col-span-2 px-4 py-2">
        <div className="flex flex-col">
          <p className="text-sm">{capitalizeFirstLetter(item.category)}</p>
          <p className="font-bold text-xl">{item.title}</p>
        </div>
      </div>
      <div className="col-span-1 px-4 py-2 font-bold text-xl">
        {updatePriceByCurrency(item.price, exchangeRate, currencyToConvertTo)}
      </div>
      <div className="col-span-1 px-4 py-2">
        <div className="flex items-center">
          <button
            onClick={() => handleQuantityChange(itemId, quantity - 1)}
            className="rounded bg-[#d3d3d3] p-2"
          >
            -
          </button>
          <input
            type="number"
            className="appearance-none bg-[#d3d3d3] w-1/2 text-center py-2 px-2 mx-2 rounded leading-tight focus:outline-none custom-no-spin"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(itemId, parseInt(e.target.value, 10))
            }
            min="0"
          />
          <button
            onClick={() => handleQuantityChange(itemId, quantity + 1)}
            className="rounded bg-[#d3d3d3] p-2"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 px-4 py-2 font-bold text-xl">
        {`$${
          currencyToConvertTo !== "cad"
            ? (quantity * item.price * exchangeRate).toFixed(2)
            : (quantity * item.price).toFixed(2)
        }`}
      </div>
      <div className="col-span-1">
        <div className="text-2xl">
          <Button
            handleOnClick={() => dispatch(removeItemFromCart(item.id))}
            text={<FontAwesomeIcon icon={faTrash} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
