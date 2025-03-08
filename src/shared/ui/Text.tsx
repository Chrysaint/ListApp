import styled from "styled-components";
import * as styles from "@/app/styles/variables";

type TextColors = Exclude<styles.TFontColor, "darkBlue" | "background">;
type TextProps = {
  size?: styles.TFontSize;
  color?: TextColors;
  children: React.ReactNode;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ size }) => styles.FONT_SIZE[size || "df"]};
  color: ${({ color }) => styles.COLOR[color || "font"]};
  font-weight: 400;
`;
