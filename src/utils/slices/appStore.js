import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cardSlice";

const appStore = configureStore({
  reducer: {
    cart: createReducer,
  },
});

export default appStore;
