import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../data/data";

const initialState = {
  selected: '',
  categories: categories,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    SelectItem: (state, action) => {
      const selectedItem = state.categories.find(id =>  action.payload === id.id);
      state.selected = selectedItem.category;
      state.categories.forEach((item)=>{
        if(item.category === selectedItem.category){
            item.selected = true;
        }
        else{
            item.selected=false
        }
      })

      
    },
  },
});

export default categorySlice.reducer;

export const { SelectItem } = categorySlice.actions;
