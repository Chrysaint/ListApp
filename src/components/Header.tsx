import styled from "styled-components";
import * as pallete from "@/styles/variables";

export const Header = styled.header`
  padding-block: 30px;
  background-color: ${pallete.DARK_BLUE_COLOR};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
