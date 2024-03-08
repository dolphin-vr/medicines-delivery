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
      // console.log('user state= ', state.user);
      // console.log('user payl= ', action.payload);
      state.user = { ...action.payload }
      // console.log('state= ', state)
    },
  },
});

export const { editUser,  } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = state => state.user;