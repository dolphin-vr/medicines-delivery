import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "./operations";

const handlePending = state => {
  state.isOrderLoading = true;
  state.status = null;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isOrderLoading = false;
  state.error = action.payload;
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isOrderLoading: false,
    status: null,
    error: null,
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    editOrderItem: (state, action) => {
      const idx = state.orders.findIndex(el => el._id === action.payload._id);
      if (idx === -1) {
        state.error = "Item not found";
      } else {
        state.orders.splice(idx, 1);
      }
    },
    removeOrder: (state, action) => {
      const idx = state.orders.findIndex(el => el.shop === action.payload);
      if (idx === -1) {
        state.error = "Item not Order";
      } else {
        state.orders[idx].amount = action.payload.amount;
      }
    },
    emptyOrder: state => {
      state.orders = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postOrder.pending, handlePending)
      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = action.payload;
        state.isOrderLoading = false;
        state.error = null;
      })
      .addCase(postOrder.rejected, handleRejected);
  },
});

export const { addOrder,editOrderItem, emptyOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;

export const selectOrders = state => state.order.orders;
export const selectIsOrderLoading = state => state.order.isOrderLoading;
export const selectError = state => state.order.error;