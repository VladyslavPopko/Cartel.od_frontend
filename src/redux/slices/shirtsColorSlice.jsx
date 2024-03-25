import { createSlice } from "@reduxjs/toolkit";
import { ONE_SHIRT } from "../../constanses/data_shirts";


const initialState = { selectedColor: ONE_SHIRT };

const shirtsColorSlice = createSlice({
  name: "shirtColor",
  initialState,
  reducers: {
    shirtsChangeColor: (state, {payload}) => {
      state.selectedColor = payload;
    },
  },
});

export const { shirtsChangeColor } = shirtsColorSlice.actions;
export default shirtsColorSlice.reducer;