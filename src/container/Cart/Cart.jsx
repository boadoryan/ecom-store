import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../store/cartSlice";
import CartItem from "./CartItem";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import Overview from "./Overview";
import CheckoutForm from "../Checkout/CheckoutForm";

const Cart = ({ capitalizeFirstLetter, showCurrencySelector }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [showCheckout, setShowCheckout] = useState(false);

  const total = Object.values(cart).reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.item.price * currentItem.quantity;
    return accumulator + itemTotal;
  }, 0);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
  };

  return (
    <ResponsiveContainer>
      <div className="flex gap-12">
        <div className="w-3/5">
          {showCheckout ? (
            // Render the CheckoutForm when showCheckout is true
            <CheckoutForm setShowCheckout={setShowCheckout} />
          ) : (
            // Render the cart items
            <>
              {Object.keys(cart).length > 0 ? (
                <div>
                  <h1 className="font-bold text-3xl mb-8">
                    Item Total: {Object.keys(cart).length}
                  </h1>
                  <div className="max-w-full overflow-x-auto">
                    <div className="grid grid-cols-7 gap-4">
                      <div className="col-span-1 px-4 py-2 flex justify-center">
                        <p>Item</p>
                      </div>
                      <div className="col-span-2 px-4 py-2">Name</div>
                      <div className="col-span-1 px-4 py-2">Price</div>
                      <div className="col-span-1 px-4 py-2">Quantity</div>
                      <div className="col-span-1 px-4 py-2">Total</div>
                      <div className="col-span-1 px-4 py-2 flex justify-center">
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
          )}
        </div>
        <div className="w-2/5">
          <Overview total={total} setShowCheckout={setShowCheckout} />
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default Cart;
