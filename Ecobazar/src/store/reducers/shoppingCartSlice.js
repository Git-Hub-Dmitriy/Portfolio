import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    shoppingCart: [],
  },
  reducers: {
    addShoppingCart(state, action) {
      const found = state.shoppingCart?.find(
        (item) => item.id === action.payload.product.id
      );
      if (!found) {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart,
            { ...action.payload.product, amount: action.payload.amount },
          ],
        };
      }
    },
    removeShoppingCart(state, action) {
      state.shoppingCart = state.shoppingCart?.filter(
        (item) => item.id !== action.payload
      );
    },
    plusAmountProductCart(state, action) {
      state.shoppingCart = state.shoppingCart?.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    },
    minusAmountProductCart(state, action) {
      state.shoppingCart = state.shoppingCart?.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount === 1 ? item.amount : item.amount - 1,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export default shoppingCartSlice.reducer;
export const {
  addShoppingCart,
  removeShoppingCart,
  plusAmountProductCart,
  minusAmountProductCart,
} = shoppingCartSlice.actions;
