import React from "react";
import { useSelector } from "react-redux";

const CartPreview = () => {
  const cart = useSelector((state) => state.cart.items);

  console.log(cart);

  return (
    <div className="absolute bg-white border p-4 right-0 mt-2 w-64">
      <h2 className="text-xl font-semibold">Cart Preview</h2>
      <ul>
        {Object.keys(cart).map((itemId) => {
          const item = cart[itemId].item;
          const quantity = cart[itemId].quantity;
          return (
            <li key={itemId}>
              {item.title} - Quantity: {quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartPreview;
