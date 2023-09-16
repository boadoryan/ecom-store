import React, { useState } from "react";
import Button from "../../components/Button";
import CheckoutForm from "../Checkout/CheckoutForm";
import InfoForm from "../Checkout/InfoForm";

const Overview = ({ total, setShowCheckout }) => {
  const shippingCost = 5;
  const tax = 0.07;

  // const [showCheckout, setShowCheckout] = useState(false);

  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage the current step of the form
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div>
        <div className="border rounded min-h-[20rem] p-8 mt-4">
          <h1 className="font-bold text-3xl mb-8">Summary</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Item Total</p>
              <p>{`$${total.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Shipping</p>
              <p>{`$${shippingCost.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Tax (7%)</p>
              <p>{`$${(total * tax + total).toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="font-bold text-lg">Discount</p>
              <p>{`-`}</p>
            </div>
            <div>
              <Button
                text={"Checkout"}
                isBordered={true}
                hoverColor={"#e6ede8"}
                handleOnClick={() => setShowCheckout(true)} // Open the modal when "Checkout" is clicked
              />
              <Button text={"Continue Shopping"} isBordered={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
