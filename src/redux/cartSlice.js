import { createSlice } from "@reduxjs/toolkit";
import { postCartItem } from "./operations";

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addCartItem: (state, action) => {
      const idx = state.cart.findIndex(el => el._id === action.payload._id);
      if (idx === -1) {
        state.cart.push({ ...action.payload, amount: 1 });
      } else {
        state.cart[idx].amount +=1;
      }
      // console.log("state= ", state);
    },    
    editCartItem: (state, action) => {
      console.log('payl= ', action.payload);
      console.log('state= ', state.cart);
      const idx = state.cart.findIndex(el => el._id === action.payload._id);
      console.log('idx= ', idx);
      if (idx === -1) {
        state.error="Item not found"
      } else {
        console.log("cart idem #", idx, "  =  ", state.cart[idx]);
        state.cart[idx].amount = action.payload.amount;
      }
      // console.log("state= ", state);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postCartItem.pending, handlePending)
      .addCase(postCartItem.fulfilled, (state, action) => {
        state.cart.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postCartItem.rejected, handleRejected);
  },
});

export const { addCartItem, editCartItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCart = state => state.cart.cart;
export const selectIsLoading = state => state.cart.isLoading;
export const selectError = state => state.cart.error;