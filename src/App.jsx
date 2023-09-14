import React, { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import FullProductList from "./container/FullProductList/FullProductList";
import SelectedProductPage from "./container/SelectedProductPage/SelectedProductPage";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./container/Cart/Cart";
import Footer from "./Footer";

function App() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const capitalizeFirstLetter = (string) => {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(" ");
  };
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
