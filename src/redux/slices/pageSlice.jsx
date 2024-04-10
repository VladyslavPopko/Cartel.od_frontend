import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const pageSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;
