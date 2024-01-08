import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const configSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
