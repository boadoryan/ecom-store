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
      <div className="flex flex-col min-h-screen px-2 border">
        <div className="flex-grow my-12 lg:flex lg:items-center justify-center md:flex md:items-center md:justify-center xl:flex xl:items-center xl:justify-center">
          <div className="container lg:flex lg:gap-16">
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
            />
          </div>
        </div>
      </div>
      {/* <ResponsiveContainer> */}
      {/* <div className="my-16">
          <TwoColumnLayout
            leftColumn={<SelectedProductImage data={data} id={id} />}
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
                exchangeRate={exchangeRate}
                currencyToConvertTo={currencyToConvertTo}
              />
            }
          ></TwoColumnLayout>
        </div> */}

      {/* </ResponsiveContainer> */}
    </>
  );
};

export default SelectedProductPage;
