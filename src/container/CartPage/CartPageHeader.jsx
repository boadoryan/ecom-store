import React from "react";

const CartPageHeader = ({ isFirstStep, back }) => {
  return (
    <>
      {isFirstStep ? (
        <div>
          <p className="font-bold text-4xl mb-4">YOUR CART</p>
        </div>
      ) : (
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-3xl font-bold">You're almost there!</p>
            <p className="text-xl">
              Fill in the information below so we can ship your items.
            </p>
          </div>
          <div>
            {!isFirstStep ? (
              <button
                className="mt-4 border rounded px-6 py-2"
                onClick={back}
                type="button"
              >
                Back
              </button>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPageHeader;