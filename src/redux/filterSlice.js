import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
     handleFilter(state, action) {
      return action.payload;
    },
  },
});

export const { handleFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


export const selectFilter = state => state.filter;