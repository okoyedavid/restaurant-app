import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cartActions";
import logger from "./middleware/logger";

const cartStore = configureStore({
  reducer: {
    restaurant: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default cartStore;
