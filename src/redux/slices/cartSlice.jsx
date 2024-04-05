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
          item.name === payload.name &&
          item.size === payload.size
      );
      if (item) {
        item.qty = item.qty + 1;
      } else {
        const index = payload.id + payload.category + payload.name + payload.size;
        state.items.push({ ...payload, qty: 1, index: index });
      }
      if (state.qty >= 1) {
        state.items.forEach(
          (el) => (el.price = Math.round(el.price_const * 0.9))
        );
      }
      if (state.qty >= 2) {
        state.items.forEach(
          (el) => (el.price = Math.round(el.price_const * 0.85))
        );
      }

      state.finalPrice = 0;
      state.items.map(
        (el) => (state.finalPrice = state.finalPrice + el.price * el.qty)
      );
      state.finalOldPrice = state.finalOldPrice + payload.old_price;
      state.qty = state.qty + 1;
      //start facebook pixels event
      // fbq("track", "AddToCart");
      //end facebook pixels event
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.index !== payload.index);
      state.finalPrice = state.finalPrice - payload.price * payload.qty;
      state.finalOldPrice =
        state.finalOldPrice - payload.old_price * payload.qty;
      state.qty = state.qty - payload.qty;
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find(
        (item) =>
          item.id === payload.id &&
          item.index === payload.index &&
          item.name === payload.name &&
          item.size === payload.size
      );
      if (item.qty <= 1) {
        state.items = state.items.filter(
          (item) => item.index !== payload.index
        );
        if (state.qty > 1) {
          state.items.forEach((el) => (el.price = el.price_const));
        }
        if (state.qty > 2) {
          state.items.forEach(
            (el) => (el.price = Math.round(el.price_const * 0.9))
          );
        }
        if (state.qty > 3) {
          state.items.forEach(
            (el) => (el.price = Math.round(el.price_const * 0.85))
          );
        }
      } else {
        if (state.qty > 1) {
          state.items.forEach((el) => (el.price = el.price_const));
        }
        if (state.qty > 2) {
          state.items.forEach(
            (el) => (el.price = Math.round(el.price_const * 0.9))
          );
        }
        if (state.qty > 3) {
          state.items.forEach(
            (el) => (el.price = Math.round(el.price_const * 0.85))
          );
        }
        item.qty = item.qty - 1;
      }
      state.finalPrice = 0;
      state.items.map(
        (el) => (state.finalPrice = state.finalPrice + el.price * el.qty)
      );
      state.finalOldPrice = state.finalOldPrice - payload.old_price;
      state.qty = state.qty - 1;
    },
    incrementQty: (state, { payload }) => {
      const item = state.items.find(
        (item) =>
          item.id === payload.id &&
          item.index === payload.index &&
          item.size === payload.size
      );
      if (state.qty >= 1) {
        state.items.forEach(
          (el) => (el.price = Math.round(el.price_const * 0.9))
        );
      }
      if (state.qty >= 2) {
        state.items.forEach(
          (el) => (el.price = Math.round(el.price_const * 0.85))
        );
      }
      item.qty = item.qty + 1;
      state.finalPrice = 0;
      state.items.map(
        (el) => (state.finalPrice = state.finalPrice + el.price * el.qty)
      );
      state.finalOldPrice = state.finalOldPrice + payload.old_price;
      state.qty = state.qty + 1;
    },
    deleteCart: (state) => {
      delete state.items;
      state.items = [];
      state.finalPrice = 0;
      state.finalOldPrice = 0;
      state.qty = 0;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQty,
  decrementQty,
  deleteCart,
} = cartSlice.actions;
export default cartSlice.reducer;
