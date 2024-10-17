import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [],
  cart: [],
};

const slice = createSlice({
  name: "restaurant,",
  initialState,
  reducers: {
    fillMenu(state, action) {
      state.menu = action.payload;
    },

    updateMenu(state, action) {
      const item = state.menu.find((item) => item.id === action.payload);
      item.addedToCart = true;
      item.totalPrice = item.price;
      state.cart.push(item);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      const menuItem = state.menu.find((item) => item.id === action.payload);

      menuItem.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity <= 1) slice.caseReducers.deleteItem(state, action);
      else {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      }

      const menuItem = state.menu.find((item) => item.id === action.payload);
      if (menuItem.quantity === 1) slice.caseReducers.deleteItem(state, action);
      else {
        menuItem.quantity--;
      }
    },
    deleteItem(state, action) {
      const item = state.menu.find((item) => item.id === action.payload);
      item.addedToCart = false;
      item.quantity = 1;

      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  fillMenu,
  updateMenu,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} = slice.actions;

export default slice.reducer;
