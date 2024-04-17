import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import pageReducer from "./slices/pageSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pagination: pageReducer,
    search: searchReducer,
  },
});
