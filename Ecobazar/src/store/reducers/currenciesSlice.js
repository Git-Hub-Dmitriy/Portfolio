import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
  name: "currency",
  initialState: {
    currencies: ["USD", "ГРН"],
    selectedCurrency: "USD",
  },
  reducers: {
    changeCurrency(state, action) {
      return {
        ...state,
        selectedCurrency: action.payload.selectedCurrency,
      };
    },
  },
});

export default currenciesSlice.reducer;
export const { changeCurrency } = currenciesSlice.actions;
