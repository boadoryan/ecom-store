import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { updatePurchasedItems } from "../../store/cartSlice";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import CartPageHeader from "./CartPageHeader";
import Cart from "./Cart";
import CustomerInformationForm from "./CustomerInformationForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import OrderOverview from "../OverviewPage/OrderOverview";
import ErrorModal from "../../ErrorModal";

const CartPage = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    city: "",
    country: "",
    region: "",
    postalCode: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
  });
  const {
    steps,
    currentStepIndex,
    step,
    goTo,
    next,
    back,
    isLastStep,
    isFirstStep,
  } = useMultistepForm([
    <Cart />,
    <CustomerInformationForm formData={formData} setFormData={setFormData} />,
    <PaymentForm formData={formData} setFormData={setFormData} />,
  ]);

  const tax = 0.07;
  const cart = useSelector((state) => state.cart.items);
  const total = Object.values(cart).reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.item.price * currentItem.quantity;
    return accumulator + itemTotal;
  }, 0);

  const dispatch = useDispatch();
  // const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showError, setShowError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    if (allFieldsFilled) {
      dispatch(updatePurchasedItems());
      setShowOverview(true);
      setShowError(false);

      console.log("Form Data:", formData);
    } else {
      console.log("Some fields are missing.");
      setShowError(true);
    }
  };
  return (
    <ResponsiveContainer>
      <div className="flex flex-col md:my-4 md:flex-col lg:flex-col xl:flex-row gap-12 pb-48">
        {showOverview ? (
          <OrderOverview formData={formData} tax={tax} />
        ) : (
          <div className=" md:w-full lg:w-full xl:w-3/5 flex flex-col">
            <form action="" onSubmit={handleSubmit}>
              <CartPageHeader isFirstStep={isFirstStep} back={back} />
              {step}
              <div className="flex justify-end">
                {!isFirstStep && !isLastStep ? (
                  <div className="self-end">
                    <button
                      className="mt-4 border border-black rounded px-6 py-2 hover:bg-[#f0f0f0]"
                      onClick={next}
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                ) : null}
                {isLastStep && (
                  <div className="group relative">
                    <button
                      type="submit"
                      className="mt-4 border border-black rounded px-6 py-2 hover:bg-[#f0f0f0] disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </form>
            {showError && <ErrorModal setShowError={setShowError} />}
          </div>
        )}
        {!showOverview ? (
          <div className="md:w-full lg:w-full xl:w-2/5">
            <OrderSummary
              setShowCheckout={setShowCheckout}
              next={next}
              back={back}
              total={total}
              tax={tax}
              isFirstStep={isFirstStep}
            />
          </div>
        ) : null}
      </div>
    </ResponsiveContainer>
  );
};

export default CartPage;
