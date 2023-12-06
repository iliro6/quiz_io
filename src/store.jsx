import { configureStore } from "@reduxjs/toolkit";
import category from  './features/categorues'

export const store = configureStore({
  reducer:{
    category
  }
});
