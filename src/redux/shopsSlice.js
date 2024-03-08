import { createSlice } from "@reduxjs/toolkit";
import { fetchShops } from "./operations";

const handlePending = state => {
  state.isShopsLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isShopsLoading = false;
  state.error = action.payload;
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    shops: [],
    isShopsLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShops.pending, handlePending)
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.shops = action.payload;
        state.isShopsLoading = false;
        state.error = null;
      })
      .addCase(fetchShops.rejected, handleRejected);

  },
});

export const shopsReducer = shopsSlice.reducer;

export const selectShops = state => state.shops.shops;
export const selectisShopsLoading = state => state.shops.isShopsLoading;
export const selectError = state => state.shops.error;