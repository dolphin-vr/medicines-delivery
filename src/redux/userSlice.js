import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "def",
    email: "def",
    phone: "111",
    address: "def",
  },
  reducers: {
    editUser: (state, action) => {
      console.log('user reducer payload= ', action.payload);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const { editUser,  } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = state => state.user;