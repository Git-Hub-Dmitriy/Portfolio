import { createSlice } from "@reduxjs/toolkit";

const statesShopSlice = createSlice({
  name: "statesShop",
  initialState: {
    category: "",
    tag: "",
    sorted: "Latest",
    page: 1,
    min: 0,
    max: 500,
    rating: "",
  },
  reducers: {
    changeShopCategory(state, action) {
      if (action.payload.category !== state.category) {
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
    changeShopRating(state, action) {
      if (action.payload.rating !== state.rating) {
        return {
          ...state,
          rating: action.payload.rating,
        };
      } else {
        return {
          ...state,
          rating: "",
        };
      }
    },
    changeShopTag(state, action) {
      if (action.payload.tag !== state.tag) {
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
    changeShopPrice(state, action) {
      return {
        ...state,
        min: action.payload.min,
        max: action.payload.max,
      };
    },
    changeShopPage(state, action) {
      return {
        ...state,
        page: action.payload.page,
      };
    },
    changeShopSort(state, action) {
      return {
        ...state,
        sorted: action.payload.sorted,
      };
    },
    statesShopReset(state, action) {
      return {
        ...state,
        category: "",
        tag: "",
        sorted: "Latest",
        page: 1,
        min: 0,
        max: 500,
        rating: "",
      };
    },
  },
});

export default statesShopSlice.reducer;
export const {
  changeShopCategory,
  changeShopRating,
  changeShopTag,
  changeShopPrice,
  changeShopPage,
  changeShopSort,
  statesShopReset,
} = statesShopSlice.actions;
