import { createSlice } from "@reduxjs/toolkit";
import { fetchDrugs } from "./operations";

const handlePending = state => {
  state.isDrugsLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isDrugsLoading = false;
  state.error = action.payload;
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState: {
    drugs: [],
    isDrugsLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDrugs.pending, handlePending)
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.drugs = action.payload;
        state.isDrugsLoading = false;
        state.error = null;
      })
      .addCase(fetchDrugs.rejected, handleRejected);
  },
});

export const drugReducer = drugsSlice.reducer;

export const selectDrugs = state => state.drugs.drugs;
export const selectisDrugsLoading = state => state.drugs.isDrugsLoading;
export const selectError = state => state.drugs.error;