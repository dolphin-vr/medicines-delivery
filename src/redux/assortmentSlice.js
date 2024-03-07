import { createSlice } from "@reduxjs/toolkit";
import { fetchAssortment, postArticle } from "./operations";

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const assortmentSlice = createSlice({
  name: "assortment",
  initialState: {
    assortment: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAssortment.pending, handlePending)
      .addCase(fetchAssortment.fulfilled, (state, action) => {
        state.assortment=action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAssortment.rejected, handleRejected)
      .addCase(postArticle.pending, handlePending)
      .addCase(postArticle.fulfilled, (state, action) => {
        state.assortment.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postArticle.rejected, handleRejected);
  },
});

export const assortmentReducer = assortmentSlice.reducer;

export const selectAssortment = state => state.assortment.assortment;
export const selectIsLoading = state => state.assortment.isLoading;
export const selectError = state => state.assortment.error;