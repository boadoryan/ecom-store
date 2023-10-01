import FormInput from "../../components/FormInput";
import Select from "../../components/CountrySelect";
import { validateCustomerInformationForm } from "../../formValidation";
const CustomerInformationForm = ({ formData, setFormData }) => {
  return (
    <>
      <p className="font-bold text-lg">Contact Information</p>
      <div className=" rounded p-4 border bg-slate-50 my-4">
        <FormInput
          labelName={"Email"}
          inputType={"text"}
          placeHolder={"Email"}
          formData={formData}
          setFormData={setFormData}
          handleVerification={validateCustomerInformationForm}
        />
      </div>
      <p className="font-bold text-lg mb-4">Shipping Information</p>
      <div className=" rounded p-4 bg-slate-50 border ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <FormInput
            labelName={"First Name"}
            inputType={"text"}
            placeHolder={"First Name"}
            formData={formData}
            setFormData={setFormData}
            handleVerification={validateCustomerInformationForm}
          />
          <FormInput
            labelName={"Last Name"}
            inputType={"text"}
            placeHolder={"Last Name"}
            formData={formData}
            setFormData={setFormData}
            handleVerification={validateCustomerInformationForm}
          />
        </div>
        <FormInput
          labelName={"Phone Number"}
          inputType={"text"}
          placeHolder={"Phone Number"}
          formData={formData}
          setFormData={setFormData}
          handleVerification={validateCustomerInformationForm}
        />
        <FormInput
          labelName={"Address"}
          inputType={"text"}
          placeHolder={"Address"}
          formData={formData}
          setFormData={setFormData}
          handleVerification={validateCustomerInformationForm}
        />

        {/* Country and Region Select  */}
        <div className="grid grid-cols-1">
          <Select
            formData={formData}
            setFormData={setFormData}
            handleVerification={validateCustomerInformationForm}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <FormInput
            labelName={"City"}
            inputType={"text"}
            placeHolder={"City"}
            formData={formData}
            setFormData={setFormData}
            handleVerification={validateCustomerInformationForm}
          />
          <FormInput
            labelName={"Postal Code"}
            inputType={"text"}
            placeHolder={"Postal Code"}
            formData={formData}
            setFormData={setFormData}
            handleVerification={validateCustomerInformationForm}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerInformationForm;
