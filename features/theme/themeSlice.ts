import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { theme } from "../../constants/Theme";

interface IThemeState {
  name: keyof typeof theme;
}

const initialState: IThemeState = {
  name: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state) {
      state.name = state.name === "dark" ? "light" : "dark";
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
