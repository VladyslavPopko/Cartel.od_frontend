import { configureStore } from "@reduxjs/toolkit";
import ColorReducer from "./slices/colorSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        color: ColorReducer,
        cart: cartReducer,
    }
})