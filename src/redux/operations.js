import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const requester = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchShops = createAsyncThunk("shops/fetchShops", async (_, thunkAPI) => {
  try {
    const response = await requester.get("/shops");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchDrugs = createAsyncThunk("drugs/fetchDrugs", async (_, thunkAPI) => {
  try {
    const response = await requester.get("/drugs");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchAssortment = createAsyncThunk("drugs/fetchAssortment", async (_, thunkAPI) => {
  try {
    const response = await requester.get("/assortment");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const postOrder = createAsyncThunk("order/postOrder", async (order, thunkAPI) => {
  try {
    const response = await requester.post("/order", order);
    // console.log("data= ", response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const postCartItem = createAsyncThunk("cart/postCartItem", async (item, thunkAPI) => {
  try {
    const response = await requester.post("/cart", item);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const postArticle = createAsyncThunk("assortment/postArticle", async (goods, thunkAPI) => {
  try {
    const response = await requester.post("/assortment", goods);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
