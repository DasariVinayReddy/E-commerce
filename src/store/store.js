import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself.
