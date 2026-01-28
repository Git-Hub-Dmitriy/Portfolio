import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    removeProductWishlist(state, action) {
      return {
        ...state,
        wishlist: state.wishlist?.filter(
          (product) => product.id !== action.payload
        ),
      };
    },
    addProductWishlist(state, action) {
      const found = state.wishlist.find(
        (item) => item.id === action.payload.product.id
      );
      if (!found) {
        return {
          ...state,
          wishlist: [...state.wishlist, { ...action.payload.product }],
        };
      }
    },
  },
});

export default wishlistSlice.reducer;
export const { removeProductWishlist, addProductWishlist } =
  wishlistSlice.actions;
