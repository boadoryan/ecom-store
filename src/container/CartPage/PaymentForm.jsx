import React from "react";
import FormInput from "../../components/FormInput";
import { validatePaymentForm } from "../../formValidation";
const PaymentForm = ({ formData, setFormData }) => {
  return (
    <>
      <p className="font-bold text-xl  mb-4">Payment Information</p>
      <div className=" rounded p-4 border bg-slate-50 my-4">
        <FormInput
          labelName={"Card Number (For testing: 4111 1111 1111 1111)"}
          inputType={"text"}
          placeHolder={"Card Number (Visa, Mastercard, AMEX)"}
          formData={formData}
          setFormData={setFormData}
          handleVerification={validatePaymentForm}
        />
        <FormInput
          labelName={"Name On Card"}
          inputType={"text"}
          placeHolder={"Name On Card"}
          formData={formData}
          setFormData={setFormData}
          handleVerification={validatePaymentForm}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            labelName={"Expiration Date (MM/YY)"}
            inputType={"text"}
            placeHolder={"Expiration Date (ex: 09/25)"}
            formData={formData}
            setFormData={setFormData}
            handleVerification={validatePaymentForm}
          />
          <FormInput
            labelName={"Security Code (3 digits)"}
            inputType={"text"}
            placeHolder={"Security Code"}
            formData={formData}
            setFormData={setFormData}
            handleVerification={validatePaymentForm}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
