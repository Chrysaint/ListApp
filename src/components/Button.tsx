import styled from "styled-components";
import * as pallete from "@/styles/variables";

export const Button = styled.button`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  color: ${pallete.FONT_COLOR};
  background-color: ${pallete.DARK_BLUE_COLOR};
  border-radius: 8px;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${pallete.ACCENT_COLOR};
  }
`;
