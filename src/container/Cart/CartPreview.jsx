import React from "react";
import { useSelector } from "react-redux";

const CartPreview = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="absolute bg-white  p-4 right-0 shadow-lg mt-8 w-[36rem]">
      <h2 className="text-lg mb-4 font-semibold">Cart Preview</h2>
      {Object.keys(cart).map((itemId) => {
        const item = cart[itemId].item;
        const quantity = cart[itemId].quantity;
        return (
          <div key={itemId} className=" grid grid-cols-5 border my-2">
            <div className="w-full h-full  col-span-1 flex justify-center items-center p-2">
              <img
                className="h-[5rem] object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="col-span-3  p-2">
              <p className="font-bold overflow-hidden">{item.title}</p>
            </div>
            <div className="col-span-1  p-2 flex justify-center items-center">
              <p className="font-bold">{`x${quantity}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPreview;
