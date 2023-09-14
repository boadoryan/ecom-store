import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItemFromCart, updateItemQuantity } from "../../store/store";
import Button from "../../components/Button";

const Cart = ({ capitalizeFirstLetter }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = Object.values(cart).reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.item.price * currentItem.quantity;
    return accumulator + itemTotal;
  }, 0);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
  };

  return (
    <div className="mt-48 mx-20">
      {Object.keys(cart).length > 0 ? (
        <div className="max-w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-8 py-2 text-left">Item</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-2 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="border">
              {Object.keys(cart).map((itemId) => {
                const item = cart[itemId].item;
                const quantity = cart[itemId].quantity;
                return (
                  <tr key={itemId} className="mx-12 border">
                    <td className="px-8 py-2">
                      <div className="w-full h-full flex">
                        <img
                          className="h-[5rem] object-contain"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex flex-col justify-center align-center flex-wrap  w-[350px]">
                        <p className="text-sm">
                          {capitalizeFirstLetter(item.category)}
                        </p>
                        <p className="font-bold text-xl">{item.title}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-bold text-xl">
                      {`$${item.price.toFixed(2)}`}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleQuantityChange(itemId, quantity - 1)
                          }
                          className="rounded bg-[#d3d3d3] p-2"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="appearance-none bg-[#d3d3d3] text-center py-2 px-2 mx-2 rounded leading-tight focus:outline-none custom-no-spin"
                          value={quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              itemId,
                              parseInt(e.target.value, 10)
                            )
                          }
                          min="0"
                        />
                        <button
                          onClick={() =>
                            handleQuantityChange(itemId, quantity + 1)
                          }
                          className="rounded bg-[#d3d3d3] p-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-bold text-xl">
                      {`$${(quantity * item.price).toFixed(2)}`}
                    </td>
                    <td className="px-2 py-2 flex ">
                      <div className="flex justify-start text-2xl ">
                        <Button
                          handleOnClick={() =>
                            dispatch(removeItemFromCart(item.id))
                          }
                          text={<FontAwesomeIcon icon={faTrash} />}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
      {/* <p className="text-center mt-4">Your total is: {total}</p> */}
    </div>
  );
};

export default Cart;
