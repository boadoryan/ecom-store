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
import { ScrollToTop } from "../../utils/scrollUtils";
import { useLocation } from "react-router-dom";
import ResponsiveContainer from "../../components/ResponsiveContainer";

const OrderOverview = ({ total }) => {
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
  const currencyToConvertTo = useSelector(
    (state) => state.exchangeRate.currencyToConvertTo
  );
  const state = useLocation();
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
  } = state.state;

  return (
    <>
      <ResponsiveContainer>
        <ScrollToTop />
        <div className="flex flex-col w-full mt-12 justify-center items-center px-2 ">
          <OrderConfirmation />
          <div className="flex flex-col gap-8 lg:gap-24 md:flex-row">
            <div className="flex-col md:flex-col w-full">
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
              <OrderInfoOverview total={total} />
              <Link
                className="mt-4 border border-black rounded px-6 py-2.5 bg-white hover:bg-[#f4f4f4]"
                onClick={() => dispatch(clearPurchasedItems())}
                to="/"
              >
                Back To Home
              </Link>
            </div>
            <div className="-order-1 md:order-1 w-full">
              <PurchasedItemsOverview total={total} />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default OrderOverview;
