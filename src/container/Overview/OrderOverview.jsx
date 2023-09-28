import { capitalizeFirstLetter } from "../../utils/stringUtils";
import PaymentInfoOverview from "./PaymentInfoOverview";
import CustomerInfoOverview from "./CustomerInfoOverview";
import PurchasedItemsOverview from "./PurchasedItemsOverview";
import OrderInfoOverview from "./OrderInfoOverview";
import { useSelector } from "react-redux";
import {
  updatePriceByCurrency,
  formatCreditCardNumber,
} from "../../utils/stringUtils";

const OrderOverview = ({ formData, total, tax }) => {
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const finalTotal = updatePriceByCurrency(
    total * tax + total,
    exchangeRate,
    currencyToConvertTo
  );

  const {
    firstName,
    lastName,
    address,
    country,
    city,
    postalCode,
    phoneNumber,
    email,
    region,
    cardNumber,
    nameOnCard,
    expirationDate,
  } = formData;

  const generateRandomOrderNumber = () => {
    // Generate a random integer between 1 and 9999 (inclusive)
    const randomOrderNumber = Math.floor(Math.random() * 9999) + 1;

    // You can add leading zeros if needed to ensure a consistent length, e.g., 0001, 0002, etc.
    const paddedOrderNumber = String(randomOrderNumber).padStart(4, "0");

    return paddedOrderNumber;
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col mb-36 mt-16">
          <div className="flex justify-center items-center">
            <img
              className="h-[6rem] mb-4 object-contain"
              src="/src/assets/undraw_order_confirmed_re_g0if.svg"
              alt=""
            />
          </div>
          <h1 className="text-6xl font-bold text-center">Thank you!</h1>
          <h1 className="text-2xl font-medium text-center my-6">
            Order #{generateRandomOrderNumber()} has been successfully
            completed.
          </h1>
          <div className="w-full text-center text-lg">
            <span className="font-bold ">Estimated shipping time: </span>
            <span>3-5 business days</span>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-4"> */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-4 w-2/5">
            <CustomerInfoOverview
              firstName={firstName}
              lastName={lastName}
              address={address}
              city={capitalizeFirstLetter(city)}
              region={capitalizeFirstLetter(region)}
              country={country}
              postalCode={postalCode}
              phoneNumber={phoneNumber}
              email={email}
            />
            <PaymentInfoOverview
              cardNumber={formatCreditCardNumber(cardNumber)}
              expirationDate={expirationDate}
              nameOnCard={nameOnCard}
            />
            <OrderInfoOverview
              finalTotal={finalTotal}
              total={total}
              tax={tax}
            />
          </div>
          <div className="w-3/5">
            <PurchasedItemsOverview
              finalTotal={finalTotal}
              total={total}
              tax={tax}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default OrderOverview;
