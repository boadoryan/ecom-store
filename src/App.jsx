import React, { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import FullProductList from "./container/FullProductList/FullProductList";
import SelectedProductPage from "./container/SelectedProductPage/SelectedProductPage";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./container/Cart/Cart";
import useFetchExchangeRate from "./hooks/useFetchExchangeRate";
import { capitalizeFirstLetter } from "./utils/stringUtils";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  let price = 1;

  const EXCHANGE_RATE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json";

  const PRODUCTS_URL = "https://fakestoreapi.com/products";

  const {
    loading: exchangeRateLoading,
    error: exchangeRateError,
    setCurrencyToConvertTo,
    baseRate,
    exchangeRate,
  } = useFetchExchangeRate(EXCHANGE_RATE_URL);
  const { data, loading, error } = useFetch(PRODUCTS_URL, exchangeRate);

  return (
    <>
      <Navbar
        setCurrencyToConvertTo={setCurrencyToConvertTo}
        exchangeRate={exchangeRate}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <FullProductList
                data={data}
                capitalizeFirstLetter={capitalizeFirstLetter}
              ></FullProductList>
            }
          ></Route>
          <Route
            path="product/:id"
            element={
              <SelectedProductPage
                data={data}
                capitalizeFirstLetter={capitalizeFirstLetter}
              ></SelectedProductPage>
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart capitalizeFirstLetter={capitalizeFirstLetter} />}
          ></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
