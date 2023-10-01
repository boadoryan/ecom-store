import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exchangeRate: 1,
  currencyToConvertTo: "",
  baseRate: 1,
  currencySymbol: "$",
};

const exchangeRateSlice = createSlice({
  name: "exchangeRate",
  initialState,
  reducers: {
    updateExchangeRate: (state, action) => {
      if (action.payload === 1) return;
      state.exchangeRate = action.payload;
    },
    updateCurrencyToConvertTo: (state, action) => {
      state.currencyToConvertTo = action.payload;
    },
    updateBaseRate: (state, action) => {
      state.baseRate = action.payload;
    },
    updateCurrencySymbol: (state, action) => {
      console.log(action.payload);
      if (action.payload === "$") state.currencySymbol = "$";
      state.currencySymbol = action.payload;
    },
  },
});

export const {
  updateExchangeRate,
  updateCurrencyToConvertTo,
  updateBaseRate,
  updateCurrencySymbol,
} = exchangeRateSlice.actions;
export default exchangeRateSlice.reducer;
