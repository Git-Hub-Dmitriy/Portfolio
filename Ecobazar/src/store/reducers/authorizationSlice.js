import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    authorization: false,
  },
  reducers: {
    changeAuthorization(state, action) {
      return {
        ...state,
        authorization: action.payload,
      };
    },
  },
});

export default authorizationSlice.reducer;
export const { changeAuthorization } = authorizationSlice.actions;
