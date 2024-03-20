import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  finalPrice: 0,
  qty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.items.push({ ...payload, qty: 1 });
      }
      state.finalPrice = state.finalPrice + payload.price;
      state.qty = state.qty + 1;
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
      state.finalPrice = state.finalPrice - payload.price * payload.qty;
      state.qty = state.qty - payload.qty;
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item.qty <= 1) {
        state.items = state.items.filter((item) => item.id !== payload.id);
      } else {
        item.qty = item.qty - 1;
      }
      state.finalPrice = state.finalPrice - payload.price;
      state.qty = state.qty - 1;
    },
    incrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      item.qty = item.qty + 1;
      state.finalPrice = state.finalPrice + payload.price;
      state.qty = state.qty + 1;
    },
  },
});

export const { addToCart, deleteFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
