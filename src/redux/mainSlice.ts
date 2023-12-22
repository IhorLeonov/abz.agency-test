import {
  // PayloadAction,
  isAnyOf,
  createSlice,
} from "@reduxjs/toolkit";
import { getAllCharacters } from "./operations";

interface MainState {
  isLoading: boolean;
  error: string | null;
  data: object;
}

const initialState = {
  isLoading: false,
  error: "Qwe",
  data: {},
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // setInputValues: (state, action: PayloadAction<FormInputValues>) => {
    //   state.inputValues = action.payload;
    // },
    resetError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getAllCharacters.fulfilled, (state, action) => {
      // const { characters } = action.payload.data;
      // handleSameFulfilled(state);
      // state.data.charactersData = characters.results;
      // state.data.charactersPages = characters.info.pages;
      // })
      .addMatcher(
        isAnyOf(
          getAllCharacters.pending
          // getFilteredChars.pending,
          // getLocations.pending,
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllCharacters.rejected
          // getFilteredChars.rejected,
          // getLocations.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const { resetError } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
