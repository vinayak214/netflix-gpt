import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gtp",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTResults: (state, action) => {},
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
