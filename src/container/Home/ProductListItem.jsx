import React from "react";
import {
  updatePriceByCurrency,
  capitalizeFirstLetter,
} from "../../utils/stringUtils";

import { useSelector } from "react-redux";

const ProductListItem = ({ item }) => {
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  return (
    <div className="flex flex-col justify-center py-8 px-4 border border-black rounded bg-white text-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full h-48 sm:h-60 md:h-42 lg:h-48 xl:h-48 mb-4 overflow-hidden">
        <img className="h-full w-full object-contain" src={item.image} alt="" />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors duration-300">
          {capitalizeFirstLetter(item.category)}
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl my-2 truncate">
          {item.title}
        </p>
        <p className="font-bold text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-xl">
          {updatePriceByCurrency(item.price, exchangeRate, currencyToConvertTo)}
        </p>
      </div>
    </div>
  );
};

export default ProductListItem;
