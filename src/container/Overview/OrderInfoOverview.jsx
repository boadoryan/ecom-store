import React from "react";

const OrderInfoOverview = ({ total, tax, finalTotal }) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">Order Information:</h3>
      <div className="border p-4">
        <div className="flex justify-between text-lg mb-2">
          <p>Total before tax:</p>
          {`$${total}`}
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
          <div className="font-bold">{finalTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoOverview;
