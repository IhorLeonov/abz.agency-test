import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Token"] = token;
};

export const getUsers = createAsyncThunk("main/getUsers", async (page: number, thunkAPI) => {
  try {
    const res = await axios.get(`/users`, {
      params: {
        page,
        count: 6,
      },
      signal: thunkAPI.signal,
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPositions = createAsyncThunk("main/getPositions", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/positions`, {
      signal: thunkAPI.signal,
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getToken = createAsyncThunk("main/getToken", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/token`);
    setAuthHeader(res.data.token);

    return res.data;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

interface Params {
  formData: FormData;
}

export const postNewUser = createAsyncThunk(
  "main/postNewUser",
  async ({ formData }: Params, thunkAPI) => {
    try {
      const res = await axios.post(`/users`, formData);
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
