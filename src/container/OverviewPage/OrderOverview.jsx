import { capitalizeFirstLetter } from "../../utils/stringUtils";
import PaymentInfoOverview from "./PaymentInfoOverview";
import CustomerInfoOverview from "./CustomerInfoOverview";
import PurchasedItemsOverview from "./PurchasedItemsOverview";
import OrderInfoOverview from "./OrderInfoOverview";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePriceByCurrency,
  formatCreditCardNumber,
} from "../../utils/stringUtils";
import { Link } from "react-router-dom";
import { clearPurchasedItems } from "../../store/cartSlice";

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

  const dispatch = useDispatch();

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
    const paddedOrderNumber = String(randomOrderNumber).padStart(4, "0");
    return paddedOrderNumber;
  };

  return (
    <>
      <div className="flex flex-col w-full mt-12 items-center ">
        <div className="flex flex-col mb-16 ">
          <div className="flex justify-center items-center">
            <img
              className="h-[8rem] mb-12 object-contain md:h-[10rem]"
              src="assets/undraw_order_confirmed_re_g0if.svg"
              alt=""
            />
          </div>
          <h1 className=" text-3xl md:text-6xl font-bold text-center">
            Thank you!
          </h1>
          <h1 className=" text-lg md:text-2xl font-medium text-center my-2 md:my-6">
            Order #{generateRandomOrderNumber()} has been successfully
            completed.
          </h1>
          <div className="w-full text-center md:text-lg">
            <div className="flex flex-col items-center md:flex-row gap-2 justify-center">
              <span className="font-bold ">Estimated shipping time: </span>
              <span>3-5 business days</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row justify-center align-center">
          <div className="flex-col md:flex-col gap-4 w-full md:w-1/2">
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
            <Link
              className="mt-4 border border-black rounded px-6 py-2 hover:bg-[#f0f0f0]"
              onClick={() => dispatch(clearPurchasedItems())}
              to="/"
            >
              Back To Home
            </Link>
          </div>
          <div className="md:w-1/2 -order-1 md:order-1 ">
            <PurchasedItemsOverview
              finalTotal={finalTotal}
              total={total}
              tax={tax}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOverview;
