import { createSlice } from "@reduxjs/toolkit";
import { fetchAssortment, postArticle } from "./operations";

const handlePending = state => {
  state.isAssortmentLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isAssortmentLoading = false;
  state.error = action.payload;
};

const assortmentSlice = createSlice({
  name: "assortment",
  initialState: {
    assortment: [],
    isAssortmentLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAssortment.pending, handlePending)
      .addCase(fetchAssortment.fulfilled, (state, action) => {
        state.assortment=action.payload;
        state.isAssortmentLoading = false;
        state.error = null;
      })
      .addCase(fetchAssortment.rejected, handleRejected)
      .addCase(postArticle.pending, handlePending)
      .addCase(postArticle.fulfilled, (state, action) => {
        state.assortment.push(action.payload);
        state.isAssortmentLoading = false;
        state.error = null;
      })
      .addCase(postArticle.rejected, handleRejected);
  },
});

export const assortmentReducer = assortmentSlice.reducer;

export const selectAssortment = state => state.assortment.assortment;
export const selectisAssortmentLoading = state => state.assortment.isAssortmentLoading;
export const selectError = state => state.assortment.error;