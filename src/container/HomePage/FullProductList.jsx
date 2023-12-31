import React from "react";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";
import {
  capitalizeFirstLetter,
  convertFirstLetterToLowerWithHyphens,
} from "../../utils/stringUtils";

const FullProductList = ({ data, exchangeRate, currencyToConvertTo }) => {
  const productsByCategory = data.reduce((acc, item) => {
    const category = capitalizeFirstLetter(item.category);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div
          key={category}
          className="my-20"
          id={`${convertFirstLetterToLowerWithHyphens(
            category
          )}-homepage-section`}
        >
          <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
            {category}
            <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-normal ml-2">{`(${products.length})`}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 my-4 sm:my-8">
            {products.map((product) => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductListItem
                    item={product}
                    exchangeRate={exchangeRate}
                    currencyToConvertTo={currencyToConvertTo}
                  ></ProductListItem>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FullProductList;
