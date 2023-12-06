import { configureStore } from "@reduxjs/toolkit";
import category from  './features/catSlice'

export const store = configureStore({
  reducer:{
    category
  }
});
