import "./App.css";
import { useFetchProducts } from "./hooks/useFetchProducts";
import HomePage from "./container/HomePage/HomePage";
import SelectedProductPage from "./container/SelectedProductPage/SelectedProductPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CartPage from "./container/CartPage/CartPage";
import useFetchExchangeRate from "./hooks/useFetchExchangeRate";
import { useSelector } from "react-redux";
import Loading from "./Loading";
// import OrderOverview  from "./container/OverviewPage/OrderOverview";

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

  // const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  return (
    <>
      <Navbar setCurrencyToConvertTo={setCurrencyToConvertTo} />
      {loading ? (
        <Loading />
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
          {/* <Route path="/overview" element={<OrderOverview />}></Route> */}
        </Routes>
      )}
    </>
  );
}

export default App;
