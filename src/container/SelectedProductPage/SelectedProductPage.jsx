import React from "react";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItemToCart, removeItemFromCart } from "../../store/store";
import SelectedProductInfo from "./SelectedProductInfo";
import SelectedProductImage from "./SelectedProductImage";

const SelectedProductPage = ({ data, capitalizeFirstLetter }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
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
        <TwoColumnLayout
          leftColumn={<SelectedProductImage data={data} id={id} />}
          // rightMargin={"mb-96"}
          rightColumn={
            <SelectedProductInfo
              addItemWithQuantity={addItemWithQuantity}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              setQuantity={setQuantity}
              data={data}
              capitalizeFirstLetter={capitalizeFirstLetter}
              id={id}
              quantity={quantity}
            />
          }
        ></TwoColumnLayout>
      </ResponsiveContainer>
    </>
  );
};

export default SelectedProductPage;
