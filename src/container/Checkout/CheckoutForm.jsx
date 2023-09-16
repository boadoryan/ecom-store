import React from "react";
import FormInput from "../../components/FormInput";

const CheckoutForm = ({ setShowCheckout }) => {
  return (
    <div className="p-6 min-w-[50rem]">
      <div className="flex justify-between">
        <div>
          <p className="text-3xl font-bold">You're almost there!</p>
          <p className="text-xl">
            Fill in the information below so we can ship your items.
          </p>
        </div>
        <button
          className="border px-8 mx-4"
          onClick={() => setShowCheckout(false)}
        >
          Back
        </button>
      </div>
      <p className="font-bold text-2xl mt-16 mb-8">Contact Information</p>
      <div className="border rounded p-4 my-8 bg-[#f4f4f4]">
        <FormInput labelName={"Email"} inputType={"text"}></FormInput>
      </div>
      <p className="font-bold text-2xl mt-4 mb-8">Shipping Information</p>
      <div className="border rounded p-4 my-8 bg-[#f4f4f4]">
        <div className="grid grid-cols-2 gap-4">
          <FormInput labelName={"First Name"} inputType={"text"}></FormInput>
          <FormInput labelName={"Last Name"} inputType={"text"}></FormInput>
        </div>
        <FormInput labelName={"Phone Number"} inputType={"text"}></FormInput>
        <FormInput labelName={"Address"} inputType={"text"}></FormInput>
        <div className="grid grid-cols-3 gap-4">
          <FormInput labelName={"City"} inputType={"text"}></FormInput>
          <FormInput labelName={"Province"} inputType={"text"}></FormInput>
          <FormInput labelName={"Postal Code"} inputType={"text"}></FormInput>
        </div>
      </div>
      <button>Continue To Payment</button>
    </div>
  );
};

export default CheckoutForm;
