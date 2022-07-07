const palette = {
    purple: "#5A31F4",
    green: "#0ECD9D",
    pink: "#eb4d5c",
    red: "#CD0E61",
    black: "#0B0B0B",
    white: "#F0F2F3",
    gray: "gray",
    lightGray: "#ded3d3",
    blue: "blue"
  };
  
  export const theme = {
    light: {
      background: palette.white,
      foreground: palette.white,
      primary: palette.black,
      secondary: palette.gray,
      positive: palette.green,
      negative: palette.red,
      neutral: palette.pink,
      info: palette.blue
    },
    dark: {
      background: palette.black,
      foreground: palette.black,
      primary: palette.white,
      secondary: palette.gray,
      positive: palette.green,
      negative: palette.red,
      neutral: palette.pink,
      info: palette.blue
    },
  };
  
  export type IColors = typeof theme["light"];
  
  