import { Nav } from "./Nav";
import { Wrapper } from "@/shared/utils/utils";
import * as styles from "@/app/styles/variables";
import styled from "styled-components";
import { Logo } from "@/shared/ui/Logo";
import LogoIcon from "@assets/icons/logo.svg";
import { Search } from "./Search";
import { Link } from "@/shared/ui/Link";

const StyledHeader = styled.header`
  background-color: ${styles.COLOR.darkBlue};
  padding-block: 20px;
  margin-bottom: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <HeaderWrapper>
          <Link to="/">
            <Logo src={LogoIcon} />
          </Link>
          <Search />
          <Nav />
        </HeaderWrapper>
      </Wrapper>
    </StyledHeader>
  );
};
