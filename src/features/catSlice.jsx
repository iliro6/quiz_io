import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../data/data";
import axios from "axios";
import { useEffect } from "react";

const selectedFromLocal = JSON.parse(localStorage.getItem(`selected`));
const selectedNumFromLocal = JSON.parse(localStorage.getItem(`selectedNumber`));

const initialState = {
  selected: selectedFromLocal,
  categories: categories,
  selectedNumber: selectedNumFromLocal,
  url: "",
  isLoading: false,
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
    getLocalItems: (state, action) => {
     
      state.url = `https://opentdb.com/api.php?amount=10&category=${state.selectedNumber}&difficulty=medium&type=multiple`;
    },

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
      state.url = `https://opentdb.com/api.php?amount=10&category=${state.selectedNumber}&difficulty=medium&type=multiple`;

      state.selected = selectedItem.category;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCatItems.pending, (state) => {
      state.isLoading = true;
      state[`data${state.selected}`] = [];
    });
    builder.addCase(getCatItems.fulfilled, (state, action) => {
      state.isLoading = false;
      const { results } = action.payload;
      if(results){

        state[`data${state.selected}`] = results;
      }

      

      localStorage.setItem("selected", JSON.stringify(state.selected));
      localStorage.setItem(
        "selectedNumber",
        JSON.stringify(state.selectedNumber)
      );
    });
    builder.addCase(getCatItems.rejected, (state) => {
      null;
    });
  },
});

export default categorySlice.reducer;

export const { SelectItem, updateUrl, getLocalItems, updateLocalStorage } =
  categorySlice.actions;
