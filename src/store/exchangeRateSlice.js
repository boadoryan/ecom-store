import { createSlice } from "@reduxjs/toolkit";

const initialState = { exchangeRate: null };

const exchangeRateSlice = createSlice({
  name: "exchangeRate",
  initialState,
  reducers: {
    updateExchangeRate: (state, action) => {
      state.exchangeRate = action.payload;
    },
  },
});

export const { updateExchangeRate } = exchangeRateSlice.actions;
export default exchangeRateSlice.reducer;
