import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../data/data";
import { shuffle } from "../util/functions";

const selectedFromLocal = JSON.parse(localStorage.getItem(`selected`));
const selectedNumFromLocal = JSON.parse(localStorage.getItem(`selectedNumber`));

const initialState = {
  selected: selectedFromLocal,
  categories: categories,
  selectedNumber: selectedNumFromLocal,
  url: "",
  isLoading: false,
  error: false,
  isModalOpen:false,
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
      state.localCheck = true;
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
    handleShuffle: (state, action) => {
      shuffle(action.payload);
    },
    setupResult: (state, action) => {
      let count = 0;
      state[`result${state.selected}`] = { checked: count, uncompleted: 0,wrongs:0 };
  
      state[`data${state.selected}`].map((item) => {
        if (item.correct_answer === item.selected) {
         
          state[`result${state.selected}`].checked += 1;
        }
        else if(item.selected === ''){
          state[`result${state.selected}`].uncompleted += 1;
        }
        else {
         state[`result${state.selected}`].wrongs += 1;
        }
        
      });
    },
    openModal:(state,action) => {
     state.isModalOpen = true;
    },
    closeModal : (state,action) => {
      state.isModalOpen = false;

    }
  },

  extraReducers: (builder) => {
    builder.addCase(getCatItems.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state[`data${state.selected}`] = [];
    });
    builder.addCase(getCatItems.fulfilled, (state, action) => {
      state.isLoading = false;
      const result = action.payload?.results || null;
      if (!result) {
        state.error = true;
      } else if (result) {
        const modifiedArray = result.map((item) => {
          let { correct_answer, incorrect_answers } = item;
          const ShuffledArray = shuffle([...incorrect_answers, correct_answer]);
          return { ...item, selected: "", ShuffledArray, quizResult: {} };
        });

        state[`data${state.selected}`] = modifiedArray;
      }

      localStorage.setItem("selected", JSON.stringify(state.selected));
      localStorage.setItem(
        "selectedNumber",
        JSON.stringify(state.selectedNumber)
      );
      state.error = false;
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
  handleShuffle,
  setupResult,
  closeModal,
  openModal
} = categorySlice.actions;
