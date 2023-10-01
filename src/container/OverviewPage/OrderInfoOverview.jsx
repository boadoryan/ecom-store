import React from "react";
import { updatePriceByCurrency } from "../../utils/stringUtils";

import { useSelector } from "react-redux";
const OrderInfoOverview = ({ tax }) => {
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );

  const cart = useSelector((state) => state.cart.purchasedItems);
  const total = Object.values(cart).reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.item.price * currentItem.quantity;
    return accumulator + itemTotal;
  }, 0);

  const totalWithTax = total * tax;
  const finalTotal = total * tax + total;
  console.log(cart, total, finalTotal);

  return (
    <div>
      <h3 className="font-bold text-xl mb-4">Order Information:</h3>
      <div className="border p-4 border-black rounded">
        {Object.keys(cart).map((itemId) => {
          return (
            <div key={itemId} className="flex flex-col">
              {/* Total Before Tax:  */}
              <div className="flex justify-between mb-2">
                <p className="font-bold">Total before tax:</p>
                {updatePriceByCurrency(
                  total,
                  exchangeRate,
                  currencyToConvertTo,
                  currencySymbol
                )}
              </div>

              {/* Tax */}
              <div className="flex justify-between my-2">
                <p className="font-bold">Tax:</p>
                {updatePriceByCurrency(
                  totalWithTax,
                  exchangeRate,
                  currencyToConvertTo,
                  currencySymbol
                )}
              </div>

              {/* Shipping */}
              <div>
                <div className="flex justify-between my-2">
                  <p className="font-bold">Shipping:</p>
                  $0.00
                </div>
              </div>

              {/* Subtotal with tax */}
              <div className="flex justify-between mt-8">
                <p className="font-bold">Order Subtotal (with tax):</p>
                <div className="font-bold">
                  {updatePriceByCurrency(
                    finalTotal,
                    exchangeRate,
                    currencyToConvertTo,
                    currencySymbol
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="flex justify-between mb-2">
          <p>Total before tax:</p>
          {updatePriceByCurrency(
            total,
            exchangeRate,
            currencyToConvertTo,
            currencySymbol
          )}
        </div>
        <div className="flex justify-between my-2">
          <p>Tax:</p>
          {`$${(total * tax).toFixed(2)}`}
        </div>
        <div className="flex justify-between my-2">
          <p>Shipping:</p>
          $0.00
        </div>
        <div className="flex justify-between mt-8">
          <p className="font-bold">Order Subtotal (with tax):</p>
          <div className="font-bold">
            {updatePriceByCurrency(
              total,
              exchangeRate,
              currencyToConvertTo,
              currencySymbol,
              finalTotal
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OrderInfoOverview;
