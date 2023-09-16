import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ]);

  const [currency, setCurrency] = useState("usd");
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        const rates = await fetchExchangeRates();
        setExchangeRates(rates);

        // Update prices based on selected currency
        updatePrices(products, currency, rates);

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currency]);

  const fetchProducts = async () => {
    // Replace this with your actual product data fetching logic
    return [
      { id: 1, name: "Item 1", price: 10 },
      { id: 2, name: "Item 2", price: 20 },
      { id: 3, name: "Item 3", price: 30 },
    ];
  };

  const fetchExchangeRates = async () => {
    const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json`;
    const response = await axios.get(apiUrl);
    const currencyData = response.data;
    return {
      cadToUSD: currencyData.cad.usd.toFixed(2),
      cadToEUR: currencyData.cad.eur.toFixed(2),
    };
  };

  const updatePrices = (products, selectedCurrency, rates) => {
    products.forEach((product) => {
      if (selectedCurrency === "usd") {
        product.price = (product.price * rates.cadToUSD).toFixed(2);
      } else if (selectedCurrency === "eur") {
        product.price = (product.price * rates.cadToEUR).toFixed(2);
      }
    });
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="cad">CAD</option>
        <option value="eur">EUR</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}: ${item.price} {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyConverter;
