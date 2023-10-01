import React from "react";
import { updatePriceByCurrency } from "../../utils/stringUtils";

import { useSelector } from "react-redux";
const OrderInfoOverview = ({ total, tax, finalTotal }) => {
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">Order Information:</h3>
      <div className="border p-4 border-black rounded">
        <div className="flex justify-between text-lg mb-2">
          <p>Total before tax:</p>
          {/* {`$${total}`} */}
          {updatePriceByCurrency(
            total,
            exchangeRate,
            currencyToConvertTo,
            currencySymbol
          )}
        </div>
        <div className="flex justify-between text-lg my-2">
          <p>Tax:</p>
          {`$${(total * tax).toFixed(2)}`}
        </div>
        <div className="flex justify-between text-lg my-2">
          <p>Shipping:</p>
          $0.00
        </div>
        <div className="flex justify-between text-lg mt-8">
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
        </div>
      </div>
    </div>
  );
};

export default OrderInfoOverview;
