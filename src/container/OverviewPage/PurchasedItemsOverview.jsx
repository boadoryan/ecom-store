import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearCart } from "../../store/cartSlice";
import { updatePriceByCurrency } from "../../utils/stringUtils";

const PurchasedItemsOverview = () => {
  const cart = useSelector((state) => state.cart.purchasedItems);
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector((state) => state.exchangeRate.currencyToConvertTo);
  const currencySymbol = useSelector((state) => state.exchangeRate.currencySymbol);

  const dispatch = useDispatch();

  const [cartCleared, setCartCleared] = useState(false);

  useEffect(() => {
    if (!cartCleared) {
      setCartCleared(true);
      setTimeout(() => {
        dispatch(clearCart());
      }, 3000);
    }
  }, []);
  return (
    <>
      <div className="mb-4 w-full">
        <h3 className="font-bold text-xl mb-4">Your Items:</h3>
        <div className="border border-black rounded p-2 flex flex-col  justify-center align-center">
          {Object.keys(cart).map((itemId) => {
            const item = cart[itemId].item;
            const quantity = cart[itemId].quantity;
            return (
              <div
                key={itemId}
                className="grid grid-cols-2 py-4 px-2 gap-8 md:gap-4 overflow-x-hidden"
              >
                <div className="">
                  <p className="text-md font-bold mb-2 ">{item.title}</p>
                  <div className="text-sm">Quantity: {quantity}</div>
                  <p className="text-sm">
                    Item Price:{" "}
                    {updatePriceByCurrency(
                      item.price,
                      exchangeRate,
                      currencyToConvertTo,
                      currencySymbol
                    )}
                  </p>
                  <p className="text-sm">
                    Item Subtotal:{" "}
                    {updatePriceByCurrency(
                      item.price * quantity,
                      exchangeRate,
                      currencyToConvertTo,
                      currencySymbol
                    )}
                  </p>
                </div>
                <div className="flex items-center justify-center ">
                  <img
                    className="h-[6rem] object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PurchasedItemsOverview;
