import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  purchasedItems: {},
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

    // Clear the current cart.
    clearCart: (state) => {
      state.items = {};
    },

    // Clear the purchased items.
    clearPurchasedItems: (state) => {
      console.log(state.purchasedItems);
      state.purchasedItems = {};
    },

    // Update the purchasedItems array before the cart is cleared.
    updatePurchasedItems: (state) => {
      state.purchasedItems = { ...state.items };
      console.log(state.purchasedItems);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  updateCartPrices,
  clearCart,
  updatePurchasedItems,
  clearPurchasedItems,
} = cartSlice.actions;

export default cartSlice.reducer;
