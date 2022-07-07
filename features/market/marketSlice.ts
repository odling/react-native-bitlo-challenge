import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMarket } from "../../services/MarketService";

const initialState: { data: IMarket[] } = {
  data: [],
};

const marketSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMarkets(state, action: PayloadAction<IMarket[]>) {
      state.data = action.payload;
    },
  },
});

export const { setMarkets } = marketSlice.actions;
export default marketSlice.reducer;
