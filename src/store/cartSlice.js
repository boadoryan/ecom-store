import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  defaultItems: {},
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
    updateCartPrices: (state, action) => {
      // Check if defaultItems is empty; if it is, store the original items
      if (Object.keys(state.defaultItems).length === 0) {
        state.defaultItems = { ...state.items };
      } else {
        state.defaultItems = {};
      }

      const exchangeRate = action.payload;

      // Reset state.items to its original values from defaultItems
      // state.items = JSON.parse(JSON.stringify(state.defaultItems));

      // Update item prices based on the exchange rate
      Object.keys(state.items).forEach((itemId) => {
        const item = { ...state.items[itemId].item };
        item.price *= 2;
        state.items[itemId].item = item;
      });
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
