import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import modalSlice from "./modal-slice";
import checkOutSlice from "./checkout-slice";
import orderModalSlice from "./order-modal-slice";
import orderSlice from "./order-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
    checkOut: checkOutSlice.reducer,
    orderModal: orderModalSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
