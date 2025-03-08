import styled from "styled-components";
import * as styles from "@/app/styles/variables";

const Button = styled.button`
  background-color: ${styles.COLOR.darkBlue};
  color: ${styles.COLOR.font};
  font-size: ${styles.FONT_SIZE.sm};
  text-align: center;
  border-radius: calc(200 / 12 * 100%);
  transition: color 200ms ease-in;

  &:hover,
  &:focus-visible {
    color: ${styles.COLOR.accent};
  }
`;

export const PrimaryButton = styled(Button)`
  padding: 16px;
`;

export const FilterButton = styled(Button)`
  padding: 6px;
`;

export const CardButton = styled(Button)`
  padding: 8px 12px;
  border-radius: 0 0 12px 12px;
`;
