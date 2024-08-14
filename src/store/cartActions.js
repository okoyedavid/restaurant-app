import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "restaurant,",
  initialState: [],
  reducers: {
    updateCart: (state, action) => {
      return action.payload.items;
    },

    addToCart: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            added: true,
          };
        }
        return item;
      });
    },

    handleQuantityUpdate: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity + action.payload.value <= 0) {
            return { ...item, added: false, quantity: 0 };
          }
          return {
            ...item,
            quantity: item.quantity + action.payload.value,
            cost: item.quantity * item.cost,
          };
        }
        return item;
      });
    },

    removeItem: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            added: false,
          };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  handleQuantityUpdate,
  updateCart,
  removeItem,
} = slice.actions;

export default slice.reducer;
