import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  reducers: {
    editUser: (state, action) => {
      state.user = { ...action.payload }
    },
  },
});

export const { editUser,  } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = state => state.user;