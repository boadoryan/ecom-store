import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faCartShopping,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#2d526c] p-6 md:px-12 shadow-lg sticky top-0 z-50 opacity-95 ">
      <div className="container mx-auto flex gap-8 justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl md:text-2xl">
          Shoply.
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <div>
            <label htmlFor="currency" className="text-white">
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
          </div>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition-colors relative"
          >
            <span className="mr-2">Cart</span>
            <FontAwesomeIcon icon={faCartShopping} />
            {totalQuantity > 0 && (
              <span className="bg-[#7fddff] text-black rounded-full h-5 w-5 absolute -top-2 -right-6 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center">
          {!isMobileMenuOpen ? (
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
            </button>
          ) : (
            <button onClick={closeMobileMenu} className="text-white text-2xl">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-[100px] mt-16 bg-[#5767aa] text-white p-8">
            <div className="flex justify-center gap-8">
              <div className="">
                <label htmlFor="currency" className="text-lg">
                  Currency:
                </label>
                <select
                  onChange={(e) => handleCurrencyChange(e)}
                  name="currency"
                  id="id"
                  className="bg-white px-2 py-1 font-bold ml-2 rounded currency-select text-black"
                  defaultValue={currencyToConvertTo}
                >
                  <option value="cad">CAD</option>
                  <option value="usd">USD</option>
                  <option value="gbp">GBP</option>
                  <option value="eur">EUR</option>
                </select>
              </div>
              <Link
                to="/cart"
                className="text-white hover:text-gray-300 transition-colors relative text-lg"
              >
                <span className="mr-2">Cart</span>
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity > 0 && (
                  <span className="bg-[#7fddff] text-black rounded-full h-5 w-5 absolute -top-2 left-16 flex items-center justify-center text-xs">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
