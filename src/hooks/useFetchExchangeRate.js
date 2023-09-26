import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateExchangeRate,
  updateCurrencyToConvertTo,
  updateBaseRate,
} from "../store/exchangeRateSlice";
import axios from "axios";

const useFetchExchangeRate = (url) => {
  const [currencyToConvertTo, setCurrencyToConvertTo] = useState("cad");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [baseRate, setBaseRate] = useState(null);
  const dispatch = useDispatch();

  // Mapping of currency symbols
  const currencySymbols = {
    usd: "$",
    cad: "$",
    gbp: "£",
    eur: "€",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setExchangeRate(response.data.cad[currencyToConvertTo]);
        setBaseRate(response.data.cad.cad);
        dispatch(updateExchangeRate(response.data.cad[currencyToConvertTo]));
        dispatch(updateBaseRate(response.data.cad.cad));
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchData();
  }, [currencyToConvertTo]);

  return {
    exchangeRate,
    setCurrencyToConvertTo,
    currencyToConvertTo,
    baseRate,
  };
};

export default useFetchExchangeRate;
