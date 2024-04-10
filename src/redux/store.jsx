import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import pageReducer from "./slices/pageSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        pagination: pageReducer,
    }
})