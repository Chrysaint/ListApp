import * as styles from "@/app/styles/variables";
import { Input } from "@/shared/ui/Input";
import styled from "styled-components";
import SearchIcon from "@assets/icons/search-icon.svg";

const SearchWrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 575px;
  width: 100%;
  border-bottom: 1px solid ${styles.COLOR.font};
  &:focus-within {
    border-bottom: 1px solid ${styles.COLOR.accent};
  }
`;

const SearchIconLogo = styled.img`
  width: 18px;
  aspect-ratio: 1;
  cursor: pointer;
`;

export const Search = () => {
  return (
    <SearchWrapper>
      <Input placeholder="Поиск" />
      <SearchIconLogo src={SearchIcon} alt="searchIcon" />
    </SearchWrapper>
  );
};
