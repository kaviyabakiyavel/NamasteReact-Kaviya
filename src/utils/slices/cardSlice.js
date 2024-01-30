import { createSlice, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  //1. name of the slice
  name: "cart",
  //2. inital state
  initialState: {
    items: [],
  },
  //3. actions
  reducers: {
    addItem: (state, action) => {
      //mutating state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

//export action
export const { addItem, removeItem, clearCart } = cardSlice.actions;

//export reducer
export default cardSlice.reducer;
