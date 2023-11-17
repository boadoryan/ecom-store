import React from "react";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updatePriceByCurrency } from "../../utils/stringUtils";
import { ScrollToTop } from "../../utils/scrollUtils";

const Overview = ({ next, total, isFirstStep }) => {
  const cart = useSelector((state) => state.cart.items);
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );
  const tax = 0.07;
  return (
    <>
      <div>
        <div className="border border-black rounded min-h-[20rem] p-8 mt-4">
          <h1 className="font-bold text-3xl mb-8">Summary</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg md:text-md">Item Total</p>
              <p>
                {updatePriceByCurrency(
                  total,
                  exchangeRate,
                  currencyToConvertTo,
                  currencySymbol
                )}
              </p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg md:text-md">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg md:text-md">Tax (7%)</p>
              <p>
                {updatePriceByCurrency(
                  total * tax,
                  exchangeRate,
                  currencyToConvertTo,
                  currencySymbol
                )}
              </p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg md:text-md">Discount</p>
              <p>{`-`}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg md:text-md">Order Total</p>
              <p>
                {updatePriceByCurrency(
                  total * tax + total,
                  exchangeRate,
                  currencyToConvertTo,
                  currencySymbol
                )}
              </p>
            </div>
            <div>
              {Object.keys(cart).length > 0 && isFirstStep ? (
                <button
                  onClick={next}
                  className="w-full rounded py-3 bg-white hover:bg-[#f4f4f4] border border-black
              mt-6"
                >
                  Checkout
                </button>
              ) : null}
            </div>
            <Link
              className="w-full rounded py-3 bg-white hover:bg-[#f4f4f4] border text-center border-black
              mt-2"
              to="/"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
