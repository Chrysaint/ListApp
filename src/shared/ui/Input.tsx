import styled from "styled-components";
import * as styles from "@/app/styles/variables";

export const Input = styled.input`
  color: ${styles.COLOR.font};
  font-size: ${styles.FONT_SIZE.md};
  width: 100%;
  background: none;
  transition: outline 200ms ease-in;
  &::placeholder {
    color: ${styles.COLOR.font};
  }
`;
