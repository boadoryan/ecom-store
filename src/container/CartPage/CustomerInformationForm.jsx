import FormInput from "../../components/FormInput";
import Select from "../../components/CountrySelect";
import { validateCustomerInformationForm } from "../../formValidation";
const CustomerInformationForm = ({ formData, setFormData }) => {
  return (
    <>
      <p className="font-bold text-2xl mb-8">Contact Information</p>
      <div className="border rounded px-8 py-4 bg-[#f4f4f4]">
        <FormInput
          labelName={"Email"}
          inputType={"text"}
          placeHolder={"Email"}
          formData={formData}
          setFormData={setFormData}
          handleVerification={validateCustomerInformationForm}
        />
      </div>
      <p className="font-bold text-2xl mt-8 mb-8">Shipping Information</p>
      <div className="border rounded py-4 px-8  bg-[#f4f4f4]">
        <div className="grid grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 gap-4">
          <Select
            formData={formData}
            setFormData={setFormData}
            handleVerification={validateCustomerInformationForm}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
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
