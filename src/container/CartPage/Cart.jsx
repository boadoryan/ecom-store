import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../store/cartSlice";
import CartItem from "./CartItem";
const Cart = ({ capitalizeFirstLetter }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
  };
  return (
    <>
      {Object.keys(cart).length > 0 ? (
        <div>
          <h1 className="font-bold text-xl mb-8">
            Item Total: {Object.keys(cart).length}
          </h1>
          <div className="max-w-full overflow-x-auto">
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-1 px-4 py-2 flex justify-center hidden md:block">
                <p>Item</p>
              </div>
              <div className="col-span-2 px-4 py-2 hidden md:block">Name</div>
              <div className="col-span-1 px-4 py-2 hidden md:block">Price</div>
              <div className="col-span-1 px-4 py-2 hidden md:block">
                Quantity
              </div>
              <div className="col-span-1 px-4 py-2 hidden md:block">Total</div>
              <div className="col-span-1 px-4 py-2 hidden md:block flex justify-center">
                <p>Action</p>
              </div>
            </div>
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
          </div>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </>
  );
};

export default Cart;