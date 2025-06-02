const DARK_BLUE_COLOR = "#161827";
const ACCENT_COLOR = "#F2B007";
const FONT_COLOR = "#E7E7E7";
const BACKGROUND_COLOR = "#252943";
const WHITE_COLOR = "#f7f7f7";
const BLACK_COLOR = "#000";

const DEFAULT_FONT_SIZE = "1rem";
const SMALL_FONT_SIZE = "0.875rem";
const MEDIUM_FONT_SIZE = "1.125rem";
const LARGE_FONT_SIZE = "2rem";

export type TFontSize = "sm" | "md" | "df" | "lg";
export type TFontColor =
  | "darkBlue"
  | "accent"
  | "font"
  | "background"
  | "white"
  | "black";

export const FONT_SIZE: { [key in TFontSize]: string } = {
  sm: SMALL_FONT_SIZE,
  md: MEDIUM_FONT_SIZE,
  df: DEFAULT_FONT_SIZE,
  lg: LARGE_FONT_SIZE,
};

export const COLOR: { [key in TFontColor]: string } = {
  darkBlue: DARK_BLUE_COLOR,
  accent: ACCENT_COLOR,
  font: FONT_COLOR,
  background: BACKGROUND_COLOR,
  white: WHITE_COLOR,
  black: BLACK_COLOR,
};
