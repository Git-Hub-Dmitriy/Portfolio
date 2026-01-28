import { createSlice } from "@reduxjs/toolkit";

const activeModalSlice = createSlice({
  name: "activeModal",
  initialState: {
    modalReview: false,
    productId: 0,
    activeImage: false,
  },
  reducers: {
    changeModalReview(state, action) {
      return {
        ...state,
        modalReview:
          action.payload.modalReview !== undefined
            ? action.payload.modalReview
            : state.modalReview,
        productId:
          action.payload.id !== undefined ? action.payload.id : state.productId,
        activeImage:
          action.payload.activeImage !== undefined
            ? action.payload.activeImage
            : state.activeImage,
      };
    },
  },
});

export default activeModalSlice.reducer;
export const { changeModalReview } = activeModalSlice.actions;
