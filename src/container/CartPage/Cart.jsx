import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../store/cartSlice";
import CartItem from "./CartItem";
const Cart = () => {
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
          <div className="max-w-full overflow-x-hidden">
            <div className="grid grid-cols-9 gap-4">
              <div className="col-span-1 px-4 py-2 flex justify-center hidden md:block text-center">
                <p>Item</p>
              </div>
              <div className="col-span-3 px-4 py-2 hidden md:block">Name</div>
              <div className="col-span-2 px-4 py-2 hidden md:block text-center">
                Quantity
              </div>
              <div className="col-span-2 px-4 py-2 hidden md:block text-center">
                Total
              </div>
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
                  quantity={quantity}
                  handleQuantityChange={handleQuantityChange}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 justify-center items-center">
          <img
            className="h-[18rem]"
            src="/public/assets/undraw_empty_cart_co35.svg"
            alt=""
          />
          <p className="text-xl">Looks like your cart is empty.</p>
        </div>
      )}
    </>
  );
};

export default Cart;
