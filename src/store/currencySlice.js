// currencySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrencyData = createAsyncThunk(
  "currency/fetchCurrencyData",
  async () => {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"
    );
    const data = await response.json();
    return data;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrencyData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCurrencyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer } = currencySlice;
export default currencySlice.reducer;
