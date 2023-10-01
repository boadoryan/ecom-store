import React from "react";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const [showItemAddedNotification, setShowItemAddedNotification] =
    useState(false);

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
    setShowItemAddedNotification(true);
  };

  return (
    <>
      <ResponsiveContainer>
        <div className="py-20 lg:grid grid-cols-2 xl:mx-20 xl:gap-20">
          <SelectedProductImage data={data} id={id} />
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
            showItemAddedNotification={showItemAddedNotification}
            setShowItemAddedNotification={setShowItemAddedNotification}
          />
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default SelectedProductPage;
