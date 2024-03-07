import { createSlice } from "@reduxjs/toolkit";
import { fetchDrugs } from "./operations";

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState: {
    drugs: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDrugs.pending, handlePending)
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.drugs = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchDrugs.rejected, handleRejected);
  },
});

export const drugReducer = drugsSlice.reducer;

export const selectDrugs = state => state.drugs.drugs;
export const selectIsLoading = state => state.drugs.isLoading;
export const selectError = state => state.drugs.error;