import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cartActions";

const cartStore = configureStore({
  reducer: {
    restaurant: reducer,
  },
});

export default cartStore;
