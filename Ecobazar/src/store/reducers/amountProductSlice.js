import { createSlice } from "@reduxjs/toolkit";

const amountProductSlice = createSlice({
  name: "amountProduct",
  initialState: {
    value: 1,
  },
  reducers: {
    incrementedProduct(state, action) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrementedProduct(state, action) {
      if (state.value > 1) {
        return {
          ...state,
          value: state.value - 1,
        };
      }
    },
    resetProduct(state, action) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default amountProductSlice.reducer;
export const { incrementedProduct, decrementedProduct, resetProduct } =
  amountProductSlice.actions;
