import { createSlice } from "@reduxjs/toolkit";

const statesBlogSlice = createSlice({
  name: "statesBlog",
  initialState: {
    category: "",
    selected: "Date: news",
    tag: "",
    page: 1,
  },
  reducers: {
    changeBlogCategory(state, action) {
      if (state.category !== action.payload.category) {
        return {
          ...state,
          category: action.payload.category,
        };
      } else {
        return {
          ...state,
          category: "",
        };
      }
    },
    changeBlogTag(state, action) {
      if (state.tag !== action.payload.tag) {
        return {
          ...state,
          tag: action.payload.tag,
        };
      } else {
        return {
          ...state,
          tag: "",
        };
      }
    },
    changeBlogSelected(state, action) {
      return {
        ...state,
        selected: action.payload.selected,
      };
    },
    changeBlogPage(state, action) {
      return {
        ...state,
        page: action.payload.page,
      };
    },
    resetBlogStates(state, action) {
      return {
        category: "",
        selected: "Date: news",
        tag: "",
        page: 1,
      };
    },
  },
});

export default statesBlogSlice.reducer;
export const {
  changeBlogCategory,
  changeBlogTag,
  changeBlogSelected,
  changeBlogPage,
  resetBlogStates,
} = statesBlogSlice.actions;
