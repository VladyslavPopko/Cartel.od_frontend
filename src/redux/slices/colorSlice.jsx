import { createSlice } from "@reduxjs/toolkit";
import { ONE } from "../../constanses/constanses";

const initialState = { selectedColor: ONE };

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