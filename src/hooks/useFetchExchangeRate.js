import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateExchangeRate, updateBaseRate } from "../store/exchangeRateSlice";
import axios from "axios";

const useFetchExchangeRate = (url) => {
  const [currencyToConvertTo, setCurrencyToConvertTo] = useState("cad");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currencySymbol, setCurrencySymbol] = useState(null); // To be implemented.
  const dispatch = useDispatch();

  // Mapping of currency symbols
  const currencySymbols = { // To be implemented.
    usd: "$",
    cad: "$",
    gbp: "£",
    eur: "€",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch(updateExchangeRate(response.data.cad[currencyToConvertTo]));
        dispatch(updateBaseRate(response.data.cad.cad));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, [currencyToConvertTo]);

  return {
    error,
    loading,
    setCurrencyToConvertTo,
    currencyToConvertTo,
  };
};

export default useFetchExchangeRate;
