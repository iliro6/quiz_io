import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
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
  error: false,
};

export const getCatItems = createAsyncThunk(
  "category/getQuestions",
  async (_, THAPI) => {
    try {
      const res = await axios(THAPI.getState().category.url);
      return res.data;
    } catch (error) {
      console.log(error);
      if (error.response.status >= 400) {
        THAPI.getState().category.error = true;
      }
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getLocalItems: (state, action) => {
      state.url = `https://opentdb.com/api.php?amount=10&category=${state.selectedNumber}&difficul=mype=multiple`;
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

    selectChoice: (state, action) => {
      const { item, question } = action.payload;

      const selectedChoice = state[`data${state.selected}`].find(
        (item) => item.question === question
      );

      state[`data${state.selected}`] = state[`data${state.selected}`].map(
        (items) => {
          if (selectedChoice === items) {
            return { ...items, selected: item };
          } else {
            return { ...items };
          }
        }
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCatItems.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state[`data${state.selected}`] = [];
    });
    builder.addCase(getCatItems.fulfilled, (state, action) => {
      state.isLoading = false;
      const result = action.payload?.results || [];
      if (result) {
        const modifiedArray = result.map((item) => {
          return { ...item, selected: "" };
        });

        state[`data${state.selected}`] = modifiedArray;
      }
      localStorage.setItem("selected", JSON.stringify(state.selected));
      localStorage.setItem(
        "selectedNumber",
        JSON.stringify(state.selectedNumber)
      );
    });
    builder.addCase(getCatItems.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export default categorySlice.reducer;

export const {
  SelectItem,
  updateUrl,
  getLocalItems,
  updateLocalStorage,
  selectChoice,
} = categorySlice.actions;
