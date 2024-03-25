import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import shirtsColorReducer from "./slices/shirtsColorSlice";

export const store = configureStore({
    reducer: {
        shirtsColor: shirtsColorReducer,
        cart: cartReducer,
    }
})