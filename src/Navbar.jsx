import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCurrencyToConvertTo,
  updateCurrencySymbol,
} from "./store/exchangeRateSlice";

const Navbar = ({ setCurrencyToConvertTo }) => {
  const cart = useSelector((state) => state.cart.items);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const totalQuantity = Object.keys(cart).length;
  const dispatch = useDispatch();

  const currencySymbols = {
    usd: "$",
    cad: "$",
    gbp: "£",
    eur: "€",
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrencyToConvertTo(newCurrency);
    dispatch(updateCurrencySymbol(currencySymbols[newCurrency]));
    dispatch(updateCurrencyToConvertTo(newCurrency));
  };

  return (
    <nav className="py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 shadow-sm bg-[#f0f0f0]">
      <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="text-black font-bold text-xl sm:text-2xl">
            Trendie
          </Link>
          <ul className="flex border gap-20 md:gap-0 space-x-6 mt-4 sm:mt-0">
            <li>
              <label htmlFor="currency" className="">
                Currency:
              </label>
              <select
                onChange={(e) => handleCurrencyChange(e)}
                name="currency"
                id="id"
                className="bg-white px-2 py-1 font-bold ml-2 rounded currency-select"
                defaultValue={currencyToConvertTo}
              >
                <option value="cad">CAD</option>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
                <option value="eur">EUR</option>
              </select>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-black hover:text-gray-300 transition-colors relative"
              >
                <span className="mr-2">Cart</span>
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity > 0 && (
                  <span className="bg-[#7fddff] text-black rounded-full h-5 w-5 absolute -top-2 -right-6 flex items-center justify-center text-xs">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
