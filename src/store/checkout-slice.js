import { createSlice } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
  name: "check-out",
  initialState: {
    show: false,
  },
  reducers: {
    showCheckOut(state) {
      state.show = true;
    },
    hideCheckOut(state) {
      state.show = false;
    },
  },
});

export const checkOutActions = checkOutSlice.actions;
export default checkOutSlice;
