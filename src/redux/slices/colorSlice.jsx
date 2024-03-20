import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedColor: "Brown" };

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state, {payload}) => {
      state.selectedColor = payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;