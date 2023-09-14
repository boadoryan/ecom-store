import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../store/store";
import CartItem from "./CartItem";
import ResponsiveContainer from "../../components/ResponsiveContainer";

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
    <ResponsiveContainer>
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
            <tbody className="">
              {Object.keys(cart).map((itemId) => {
                const item = cart[itemId].item;
                const quantity = cart[itemId].quantity;
                return (
                  <CartItem
                    key={itemId}
                    itemId={itemId}
                    item={item}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
      <p className="text-center mt-4">Your total is: {total}</p>
    </ResponsiveContainer>
  );
};

export default Cart;
