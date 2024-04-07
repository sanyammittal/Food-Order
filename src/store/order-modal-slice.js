import { createSlice } from "@reduxjs/toolkit";

const orderModalSlice = createSlice({
  name: "orderModal",
  initialState: {
    show: false,
  },
  reducers: {
    showOrderModal: (state) => {
      state.show = true;
    },
    hideOrderModal: (state) => {
      state.show = false;
    },
  },
});

export const orderModalActions = orderModalSlice.actions;
export default orderModalSlice;
