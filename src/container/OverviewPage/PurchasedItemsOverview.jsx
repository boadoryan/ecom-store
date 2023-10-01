import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearCart } from "../../store/cartSlice";
import { updatePriceByCurrency } from "../../utils/stringUtils";

const PurchasedItemsOverview = () => {
  const cart = useSelector((state) => state.cart.purchasedItems);
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );

  const dispatch = useDispatch();

  // State variable to track whether the cart has been cleared or not
  const [cartCleared, setCartCleared] = useState(false);
  useEffect(() => {
    if (!cartCleared) {
      // Set cartCleared to true to prevent clearing the cart multiple times
      setCartCleared(true);

      // Introduce a 3-second delay before clearing the cart
      setTimeout(() => {
        // After the delay, clear the cart
        dispatch(clearCart());
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  }, [dispatch, cartCleared]);
  return (
    <>
      <div className="mb-4">
        <h3 className="font-bold text-xl mb-4">Your Items:</h3>
        <div className="border border-black rounded p-8 flex flex-col  justify-center align-center">
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
                    className="h-[6rem] md:h-[6rem] object-contain"
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
