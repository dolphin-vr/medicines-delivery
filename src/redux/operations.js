import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const requester = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchShops = createAsyncThunk("shops/fetchShops", async (_, thunkAPI) => {
  try {
    console.log("get shops");
    const response = await requester.get("/shops");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
