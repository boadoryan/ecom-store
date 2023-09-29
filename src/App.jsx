import "./App.css";
import { useFetchProducts } from "./hooks/useFetchProducts";
import HomePage from "./container/Home/HomePage";
import SelectedProductPage from "./container/SelectedProductPage/SelectedProductPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CartPage from "./container/CartPage/CartPage";
import useFetchExchangeRate from "./hooks/useFetchExchangeRate";
import { useSelector } from "react-redux";

function App() {
  const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);

  const EXCHANGE_RATE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json";

  const PRODUCTS_URL = "https://fakestoreapi.com/products";

  const {
    loading: exchangeRateLoading,
    error: exchangeRateError,
    setCurrencyToConvertTo,
    currencyToConvertTo,
    baseRate,
  } = useFetchExchangeRate(EXCHANGE_RATE_URL);

  const { data, loading, error } = useFetchProducts(PRODUCTS_URL, exchangeRate);

  return (
    <>
      <Navbar setCurrencyToConvertTo={setCurrencyToConvertTo} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <HomePage data={data} currencyToConvertTo={currencyToConvertTo} />
            }
          ></Route>
          <Route
            path="product/:id"
            element={
              <SelectedProductPage
                data={data}
                currencyToConvertTo={currencyToConvertTo}
              />
            }
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
