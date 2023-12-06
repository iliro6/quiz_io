import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../data/data";

const initialState = {
  selected: "",
  categories: categories,
  selectedNumber: 0,
  url: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    SelectItem: (state, action) => {
      const selectedItem = state.categories.find(
        (id) => action.payload === id.id
      );
      state.selected = selectedItem.category;
      state.categories.forEach((item) => {
        if (item.category === selectedItem.category) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    },

    updateUrl: (state, action) => {
      const selectedItem = state.categories.find(
        (id) => action.payload === id.id
      );
      state.selectedNumber = selectedItem.id;
      state.url = `https://opentdb.com/api.php?amount=10&category=${state.selectedNumber.toString()}&difficulty=medium&type=multiple`;
    },
  },
});

export default categorySlice.reducer;

export const { SelectItem, updateUrl } = categorySlice.actions;
