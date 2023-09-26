import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exchangeRate: 1,
  currencyToConvertTo: "",
  baseRate: 1,
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
  },
});

export const { updateExchangeRate, updateCurrencyToConvertTo, updateBaseRate } =
  exchangeRateSlice.actions;
export default exchangeRateSlice.reducer;
