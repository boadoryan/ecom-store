import React from "react";

const PaymentInfoOverview = ({ cardNumber, nameOnCard, expirationDate }) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">Payment Information:</h3>
      <div className="border p-4">
        <div className="flex flex-col gap-y-4">
          <div>
            <p className="font-bold ">Card Number:</p>
            <p>{cardNumber}</p>
          </div>
          <div>
            <p className="font-bold ">Name on card:</p>
            <p>{nameOnCard}</p>
          </div>
          <div>
            <p className="font-bold ">Expr. Date:</p>
            <p>{expirationDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoOverview;
