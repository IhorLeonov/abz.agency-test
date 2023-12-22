import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllCharacters = createAsyncThunk(
  "main/getAllCharacters",
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, {
        // query: GET_ALL_CHARACTERS,
        variables: { page },
      });
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
