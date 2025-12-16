import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {

    // hadi bach n zido product l cart
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

    // hadi bach n diro remove l product mn cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    
    // hadi bach n diro update l quantity
    updateQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.qty = action.payload.qty;
    }
  }
});

export const { addToCart, removeFromCart, updateQty } = cartSlice.actions;
export default cartSlice.reducer;