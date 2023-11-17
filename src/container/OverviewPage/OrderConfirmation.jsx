import React from "react";

const OrderConfirmation = () => {
  const generateRandomOrderNumber = () => {
    const randomOrderNumber = Math.floor(Math.random() * 9999) + 1;
    const paddedOrderNumber = String(randomOrderNumber).padStart(4, "0");
    return paddedOrderNumber;
  };

  return (
    <>
      <div className="flex flex-col mb-16 ">
        <div className="flex justify-center items-center">
          <img
            className="h-[16rem] mb-12 object-contain"
            src="assets/order_successful.svg"
            alt="order confirmed"
          />
        </div>
        <h1 className=" text-3xl md:text-6xl font-bold text-center">
          Thank you!
        </h1>
        <h1 className=" text-lg md:text-2xl font-medium text-center my-2 md:my-6">
          Order #{generateRandomOrderNumber()} has been successfully completed.
        </h1>
        <div className="w-full text-center md:text-lg">
          <div className="flex flex-col items-center md:flex-row gap-2 justify-center">
            <span className="font-bold ">Estimated shipping time: </span>
            <span>3-5 business days</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
