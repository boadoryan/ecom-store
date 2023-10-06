import { capitalizeFirstLetter } from "../../utils/stringUtils";
import PaymentInfoOverview from "./PaymentInfoOverview";
import CustomerInfoOverview from "./CustomerInfoOverview";
import PurchasedItemsOverview from "./PurchasedItemsOverview";
import OrderInfoOverview from "./OrderInfoOverview";
import OrderConfirmation from "./OrderConfirmation";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePriceByCurrency,
  formatCreditCardNumber,
} from "../../utils/stringUtils";
import { Link } from "react-router-dom";
import { clearPurchasedItems } from "../../store/cartSlice";
import ScrollToTop from "../../utils/ScrollToTop";

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

  return (
    <>
      <ScrollToTop/>
      <div className="flex flex-col w-full mt-12 justify-center align-center items-center ">
        <OrderConfirmation />
        <div className="flex flex-col gap-8 lg:gap-24 md:flex-row">
          <div className="flex-col md:flex-col w-full md:w-1/2">
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
