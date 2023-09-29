import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import CartPreview from "./container/CartPage/CartPreview";
import { updateCartPrices } from "./store/cartSlice"; // Import the action to update cart prices
import { updateCurrencyToConvertTo } from "./store/exchangeRateSlice";

const Navbar = ({ setCurrencyToConvertTo }) => {
  const cart = useSelector((state) => state.cart.items);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  // const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  // const [isHovered, setIsHovered] = useState(false);
  const totalQuantity = Object.keys(cart).length;
  const dispatch = useDispatch();

  // const handleHover = () => {
  //   setIsHovered(true);
  // };

  // const handleLeave = () => {
  //   setIsHovered(false);
  // };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrencyToConvertTo(newCurrency);
    dispatch(updateCurrencyToConvertTo(newCurrency));
  };

  return (
    <nav className=" py-6 px- sm:px-4 md:px-6 lg:px-8 xl:px-10 shadow-sm">
      <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="text-black font-bold text-xl sm:text-2xl">
            Trendiez
          </Link>
          <ul className="flex space-x-6 mt-4 sm:mt-0">
            <li>
              {/* <Link
                to="/"
                className="text-black hover:text-gray-300 transition-colors"
              >
                Home
              </Link> */}
            </li>
            {/* <li>
              <Link
                to="/about"
                className="text-black hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/contact"
                className="text-black hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li> */}
            <li>
              <label htmlFor="currency" className="">
                Currency:
              </label>
              <select
                onChange={(e) => handleCurrencyChange(e)}
                name="currency"
                id="id"
                className="bg-white px-2 font-bold"
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
                className="text-black hover:text-gray-300 transition-colors"
              >
                <span className="mr-2">Cart</span>{" "}
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity > 0 && (
                  <span className="bg-[#e2ebf8] text-black rounded-full h-5 w-5 absolute bottom-5 left-14 flex items-center justify-center text-xs">
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
