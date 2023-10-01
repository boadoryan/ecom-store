import React from "react";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updatePriceByCurrency } from "../../utils/stringUtils";

const Overview = ({ next, total, tax }) => {
  const cart = useSelector((state) => state.cart.items);
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const currencySymbol = useSelector(
    (state) => state.exchangeRate.currencySymbol
  );

  return (
    <>
      <div>
        <div className="border border-black rounded min-h-[20rem] p-8 mt-4">
          <h1 className="font-bold text-3xl mb-8">Summary</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Item Total</p>
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
              <p className="font-bold text-lg">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Tax (7%)</p>
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
              <p className="font-bold text-lg">Discount</p>
              <p>{`-`}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Order Total</p>
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
              {Object.keys(cart).length > 0 ? (
                <Button
                  text={"Checkout"}
                  isBordered={true}
                  hoverColor={"#e6ede8"}
                  handleOnClick={next}
                />
              ) : null}
              <div
                className="w-full rounded px-2 py-4 border text-center bg-white hover:bg-[#f0f0f0] border-black
              my-4"
              >
                <Link to="/">Continue Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
