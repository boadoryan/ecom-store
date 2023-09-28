import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart.
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items[item.id];

      existingItem
        ? (existingItem.quantity += quantity)
        : (state.items[item.id] = { item, quantity });
    },

    // Remove an item from the cart.
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      delete state.items[itemIdToRemove];
    },

    // Update an item's quantity in the cart.
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity = Math.max(quantity, 0);
      }
      if (state.items[id].quantity === 0) {
        delete state.items[id];
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  updateCartPrices,
} = cartSlice.actions;

export default cartSlice.reducer;
