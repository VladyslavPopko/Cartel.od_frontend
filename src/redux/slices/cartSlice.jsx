import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  finalPrice: 0,
  finalOldPrice: 0,
  qty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find(
        (item) =>
          item.id === payload.id &&
          item.category === payload.category &&
          item.size === payload.size
      );
      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.items.push({ ...payload, qty: 1 });
      }
      if (state.qty >= 1) {
        state.items.forEach((el) => (el.price = 849));
      }
      if (state.qty >= 2) {
        state.items.forEach((el) => (el.price = 799));
      }

      state.finalPrice = state.finalPrice + payload.price;
      state.finalOldPrice = state.finalOldPrice + payload.old_price;
      state.qty = state.qty + 1;
      console.log(state.items);
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
      state.finalPrice = state.finalPrice - payload.price * payload.qty;
      state.finalOldPrice =
        state.finalOldPrice - payload.old_price * payload.qty;
      state.qty = state.qty - payload.qty;
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find(
        (item) =>
          item.id === payload.id &&
          item.category === payload.category &&
          item.size === payload.size
      );
      if (item.qty <= 1) {
        state.items = state.items.filter(
          (item) =>
            item.size !== payload.size
        );
        if (state.qty > 1) {
          state.items.forEach((el) => (el.price = 999));
        }
        if (state.qty > 2) {
          state.items.forEach((el) => (el.price = 849));
        }
        if (state.qty > 3) {
          state.items.forEach((el) => (el.price = 799));
        }
      } else {
        if (state.qty > 1) {
          state.items.forEach((el) => (el.price = 999));
        }
        if (state.qty > 2) {
          state.items.forEach((el) => (el.price = 849));
        }
        if (state.qty > 3) {
          state.items.forEach((el) => (el.price = 799));
        }
        item.qty = item.qty - 1;
      }
      state.finalPrice = state.finalPrice - payload.price;
      state.finalOldPrice = state.finalOldPrice - payload.old_price;
      state.qty = state.qty - 1;
    },
    incrementQty: (state, { payload }) => {
      const item = state.items.find(
        (item) =>
          item.id === payload.id &&
          item.category === payload.category &&
          item.size === payload.size
      );
      if (state.qty >= 1) {
        state.items.forEach((el) => (el.price = 849));
      }
      if (state.qty >= 2) {
        state.items.forEach((el) => (el.price = 799));
      }
      item.qty = item.qty + 1;
      state.finalPrice = state.finalPrice + payload.price;
      state.finalOldPrice = state.finalOldPrice + payload.old_price;
      state.qty = state.qty + 1;
    },
  },
});

export const { addToCart, deleteFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
