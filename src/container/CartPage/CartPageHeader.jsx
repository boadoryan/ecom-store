import React from "react";

const CartPageHeader = ({ isFirstStep, back }) => {
  return (
    <>
      {isFirstStep ? (
        <div>
          <p className="font-bold text-4xl mb-4">YOUR CART</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:justify-between mb-16">
          <div>
            <p className="text-3xl font-bold mb-2">You're almost there!</p>
            <p className="">
              Fill in the information below so we can ship your items.
            </p>
          </div>
          <div>
            {!isFirstStep ? (
              <button
                className="mt-4 border border-black rounded px-6 py-2 hover:bg-[#f0f0f0]"
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
