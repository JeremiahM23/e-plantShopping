import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectTotalItems = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0); // Sum up the quantities of all items in the cart
};

export default cartSlice.reducer;

