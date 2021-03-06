import { darken } from "polished";

const theme = {
  colors: {
    black: "#222222",
    white: "#FAFAFA",
    dark: "#333333",
    blue: "#8BC9CF",
    transparentDeepBlack: "rgba(0, 0, 0, 0.5)",
    transparentBlack: "rgba(0, 0, 0, 0.2)",
    transparentDark: "rgba(0, 0, 0, 0.03)",
    transparentWhite: "rgba(255, 255, 255, 0.2)",
    transparentGrey: "#E9E9E9",
    red: "#E68B52",
    green: "#BDCF8B"
  },
  text: {
    fonts: {
      serif: '"Playfair Display", serif',
      sansSerif: "Oswald, sans-serif"
    }
  }
};

theme.colors.primary = theme.colors.blue;
theme.colors.darkPrimary = darken(0.25, theme.colors.primary);
theme.colors.secondary = theme.colors.green;
theme.text.fonts.primary = theme.text.fonts.sansSerif;
theme.text.fonts.secondary = theme.text.fonts.sansSerif;

export default theme;
