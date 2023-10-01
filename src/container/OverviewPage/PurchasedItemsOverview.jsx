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
      <div>
        <h3 className="font-bold text-xl mb-4">Your Items:</h3>
        <div className="border border-black rounded">
          {Object.keys(cart).map((itemId) => {
            const item = cart[itemId].item;
            const quantity = cart[itemId].quantity;
            return (
              <div key={itemId} className="flex p-8 gap-8">
                <div className="flex justify-center items-center">
                  <img
                    className="h-[5rem] object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl font-bold ">{item.title}</p>
                  <div>Quantity: {quantity}</div>
                  {/* <p className="">Item Price: {item.price.toFixed(2)}</p> */}
                  <p className="">
                    Item Price:{" "}
                    {updatePriceByCurrency(
                      item.price,
                      exchangeRate,
                      currencyToConvertTo,
                      currencySymbol
                    )}
                  </p>
                  <p className="">
                    {/* Item Subtotal: {(item.price * quantity).toFixed(2)} */}
                    Item Subtotal:{" "}
                    {updatePriceByCurrency(
                      item.price * quantity,
                      exchangeRate,
                      currencyToConvertTo,
                      currencySymbol
                    )}
                  </p>
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
