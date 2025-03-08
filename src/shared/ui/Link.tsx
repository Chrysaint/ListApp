import styled from "styled-components";
import * as styles from "@/app/styles/variables";
import { NavLink } from "react-router-dom";

type LinkSize = "default" | "large";

export const Link = styled(NavLink)<{ size?: LinkSize }>`
  font-size: ${({ size }) =>
    size === "large" ? styles.FONT_SIZE.lg : styles.FONT_SIZE.df};
  transition: color 200ms linear;
  &.active {
    color: ${styles.COLOR.accent};
  }

  &:hover,
  &:focus-visible {
    color: ${styles.COLOR.accent};
  }
`;
