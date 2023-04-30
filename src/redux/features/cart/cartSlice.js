import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  total: 0,
  cartAvatars: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartAvatars.push(action.payload);
      state.total = state.cartAvatars.length;
    },
    removeFromCart: (state, action) => {
      state.cartAvatars = state.cartAvatars.filter(
        (avatar) => avatar.id !== action.payload
      );
      state.total = state.cartAvatars.length;
    },
    removeAllItemFromCart: (state) => {
      state.cartAvatars = [];
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, removeAllItemFromCart } =
  cartSlice.actions;
