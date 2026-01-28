import { createSlice } from "@reduxjs/toolkit";

const languagesSlice = createSlice({
  name: "language",
  initialState: {
    languages: ["EN", "RU"],
    selectedLanguage: "EN",
  },
  reducers: {
    changeLanguage(state, action) {
      return {
        ...state,
        selectedLanguage: action.payload.selectedLanguage,
      };
    },
  },
});

export default languagesSlice.reducer;
export const { changeLanguage } = languagesSlice.actions;
