import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../data/data";
import axios from "axios";

const initialState = {
  selected: "",
  categories: categories,
  selectedNumber: 0,
  url: "",
};

export const getCatItems = createAsyncThunk(
  "category/getQuestions",
  async (_, THAPI) => {
    try {
      const res = await axios(THAPI.getState().category.url);
      return res.data;
    } catch (error) {}
  }
);

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

      state.selected = selectedItem.category;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCatItems.pending, (state) => {})
      .addCase(getCatItems.fulfilled, (state, action) => {
        state[`data${state.selected}`] = action.payload;
      })
      .addCase(getCatItems.rejected, (state) => {
        null;
      });
  },
});

export default categorySlice.reducer;

export const { SelectItem, updateUrl } = categorySlice.actions;
