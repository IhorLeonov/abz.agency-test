import { isAnyOf, createSlice } from "@reduxjs/toolkit";
import { getPositions, getToken, getUsers } from "./operations";
import { MainState } from "../types/interfaces";

const handleSameFulfilled = (state: MainState) => {
  state.isLoading = false;
  state.error = "";
};

const initialState = {
  isLoading: false,
  error: "",
  data: { users: [], token: "", page: 1, total_pages: null, positions: [] },
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setPage: (state) => {
      state.data.page = state.data.page + 1;
    },
    resetError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        const { page, total_pages, users } = action.payload;
        handleSameFulfilled(state);

        state.data.page = page;
        state.data.total_pages = total_pages;
        state.data.users = [...state.data.users, ...users];
      })
      .addCase(getPositions.fulfilled, (state, action) => {
        handleSameFulfilled(state);
        state.data.positions = action.payload.positions;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        handleSameFulfilled(state);
        state.data.token = action.payload.token;
      })
      .addMatcher(isAnyOf(getUsers.pending, getPositions.pending, getToken.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(getUsers.rejected, getPositions.rejected, getToken.rejected),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const { resetError, setPage } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
