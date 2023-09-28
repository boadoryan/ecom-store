import React from "react";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItemToCart } from "../../store/cartSlice";
import SelectedProductInfo from "./SelectedProductInfo";
import SelectedProductImage from "./SelectedProductImage";

const SelectedProductPage = ({
  data,
  capitalizeFirstLetter,
  exchangeRate,
  currencyToConvertTo,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addItemWithQuantity = () => {
    const itemToAdd = data[id - 1];
    const quantityToAdd = quantity; // Get the quantity
    dispatch(addItemToCart({ item: itemToAdd, quantity: quantityToAdd })); // Pass the object with named properties
  };

  return (
    <>
      <ResponsiveContainer>
        <div className=" px-4 md:px-8 py-20 lg:grid grid-cols-2 lg:p-4">
          <div className="">
            <SelectedProductImage data={data} id={id} />
          </div>
          <div className="">
            <SelectedProductInfo
              addItemWithQuantity={addItemWithQuantity}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              setQuantity={setQuantity}
              data={data}
              capitalizeFirstLetter={capitalizeFirstLetter}
              id={id}
              quantity={quantity}
              exchangeRate={exchangeRate}
              currencyToConvertTo={currencyToConvertTo}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default SelectedProductPage;
