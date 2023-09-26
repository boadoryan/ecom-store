export const capitalizeFirstLetter = (string) => {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
};

export const updatePriceByCurrency = (
  price,
  exchangeRate,
  currencyToConvertTo
) => {
  return currencyToConvertTo !== "cad"
    ? `$${(price * exchangeRate).toFixed(2)}`
    : `$${price.toFixed(2)}`;
};

export const convertToCamelCase = (str) => {
  str = str.replace(/\([^)]*\)/g, "");

  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase(); // Lowercase the first word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export const formatCreditCardNumber = (creditCardNumber) => {
  const groups = creditCardNumber.split(" ");

  // Replace the first 3 groups with 'XXXX'
  const maskedGroups = groups.map((group, index) =>
    index < 3 ? "XXXX" : group
  );

  // Join the masked groups with spaces
  const maskedCardNumber = maskedGroups.join(" ");

  return maskedCardNumber;
};
