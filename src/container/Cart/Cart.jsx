import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeItemFromCart } from "../../store/store";
import Button from "../../components/Button";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = Object.values(cart).reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.item.price * currentItem.quantity;
    return accumulator + itemTotal;
  }, 0);

  return (
    <>
      <div className="h-screen">
        {Object.keys(cart).length > 0 ? (
          Object.keys(cart).map((itemId) => {
            const item = cart[itemId].item;
            const quantity = cart[itemId].quantity;
            return (
              <div key={itemId} className="border">
                <p>Item Title: {item.title}</p>
                <p>Item Id: {item.id}</p>
                <div className="w-full overflow-hidden h-[5rem]">
                  <img
                    className="h-full w-full object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <p>Item Price: {item.price.toFixed(2)}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: {(quantity * item.price).toFixed(2)}</p>
                <Button
                  handleOnClick={() => dispatch(removeItemFromCart(item.id))}
                  text={"Remove Item From Cart"}
                />
              </div>
            );
          })
        ) : (
          <p>You have no items in your cart.</p>
        )}
        <p>Your total is: {total}</p>
      </div>
    </>
  );
};

export default Cart;
