import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice"; // Import the reducer, not the actions
import exchangeRateReducer from "./exchangeRateSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // whitelist: ["exchangeRate", "currencyToConvertTo"],
};

const reducer = combineReducers({
  cart: cartSliceReducer,
  exchangeRate: exchangeRateReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export { store };
