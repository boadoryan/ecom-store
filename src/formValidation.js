export function validateCustomerInformationForm(name, value) {
  // if (name === "phoneNumber") {
  //   const naPhoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  //   const euPhoneNumberRegex = /^\+\d{1,4}\d{6,15}$/;
  //   const ukPhoneNumberRegex = /^\+44\d{10}$/;

  //   if (
  //     naPhoneNumberRegex.test(value) ||
  //     euPhoneNumberRegex.test(value) ||
  //     ukPhoneNumberRegex.test(value)
  //   ) {
  //     return { isValid: true, errorText: "" };
  //   } else {
  //     return { isValid: false, errorText: "Invalid phone number." };
  //   }
  // }

  if (name === "email") {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;

    if (emailRegex.test(value)) {
      return { isValid: true, errorText: "" };
    } else {
      return { isValid: false, errorText: "Invalid email." };
    }
  }

  if (name === "postalCode") {
    const canadaPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const usPostalCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const europePostalCodeRegex = /^[0-9]{5}$/;
    const ukPostalCodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s*\d[A-Za-z]{2}$/;

    if (
      canadaPostalCodeRegex.test(value) ||
      usPostalCodeRegex.test(value) ||
      europePostalCodeRegex.test(value) ||
      ukPostalCodeRegex.test(value)
    ) {
      return { isValid: true, errorText: "" };
    } else {
      return { isValid: false, errorText: "Invalid postal code." };
    }
  }

  return { isValid: true, errorText: "" };
}

export function validatePaymentForm(name, value) {
  if (name === "cardNumber") {
    const creditCardRegex =
      /^(4[0-9]{12}(?:[0-9]{3})?)$|^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$|^(3[47][0-9]{13})$/;

    return creditCardRegex.test(value.replace(/\s/g, ""))
      ? { isValid: true, errorText: "" }
      : { isValid: false, errorText: "Invalid credit card number." };
  }

  if (name === "securityCode") {
    const isNumeric = /^\d+$/.test(value);
    return isNumeric && value.length === 3
      ? { isValid: true, errorText: "" }
      : {
          isValid: false,
          errorText:
            "Invalid security code. It should be 3 digits and contain only numbers.",
        };
  }

  if (name === "expirationDate") {
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const [inputMonth, inputYear] = value.split("/");
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // January is 1, February is 2, etc.

    if (inputYear >= currentYear && inputMonth >= currentMonth) {
      return { isValid: true, errorText: "" };
    } else if (!expirationDateRegex.test(value)) {
      return { isValid: false, errorText: "Invalid format. Use MM/YY." };
    } else {
      return {
        isValid: false,
        errorText: "Invalid expiration date. Your card might be expired.",
      };
    }
  }

  // Default case: field is valid
  return { isValid: true, errorText: "" };
}
