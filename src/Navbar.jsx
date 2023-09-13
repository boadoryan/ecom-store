import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import CartPreview from "./container/Cart/CartPreview"; // Import the CartPreview component

const Navbar = () => {
  const cart = useSelector((state) => state.cart.items);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const totalQuantity = Object.keys(cart).length;

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className="bg-gray-800 py-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
      <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl sm:text-2xl">
            E-Commerce Store
          </Link>
          <ul className="flex space-x-4 mt-4 sm:mt-0">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="relative"
            >
              <Link
                to="/cart"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <span className="mr-2">Cart</span>{" "}
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity > 0 && (
                  <span className="bg-red-500 text-white rounded-full h-5 w-5 absolute bottom-5 left-14 flex items-center justify-center text-xs">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              {isHovered && <CartPreview />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
