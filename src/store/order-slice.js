import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addCustomerOrder(state, actions) {
      const newOrder = actions.payload;
      state.order.unshift(newOrder);
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
