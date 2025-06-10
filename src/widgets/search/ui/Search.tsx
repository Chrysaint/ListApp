import * as styles from "@/app/styles/variables";
import { Input } from "@/shared/ui/Input";
import styled from "styled-components";
import SearchIcon from "@assets/icons/search-icon.svg";
import { SearchList } from "./SearchList";
// import { fetchMoviesByQuery } from "@/shared/api/useTMDBSearch";
// import { useEffect, useState } from "react";
// import useDebounce from "@/shared/utils/useDebounce";
import { useEffect, useState } from "react";
import useDebounce from "@/shared/utils/useDebounce";
import { fetchMoviesByQuery } from "@/shared/api/useKPSearch";
import { TMovie } from "@/entities/card/model/card";

const SearchWrapper = styled.div`
  position: relative;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 575px;
  width: 100%;
  border-bottom: 1px solid ${styles.COLOR.font};
  &:focus-within {
    border-bottom: 1px solid ${styles.COLOR.accent};

    & > ul {
      display: block;
    }
  }
`;

const SearchIconLogo = styled.img`
  width: 18px;
  aspect-ratio: 1;
  cursor: pointer;
`;

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState<TMovie[]>([]);

  const debouncedSearchValue = useDebounce(searchValue, 500);
  useEffect(() => {
    if (debouncedSearchValue) {
      fetchMoviesByQuery(debouncedSearchValue).then((movies) => {
        setSearchList(movies);
      });
    } else {
      setSearchList([]);
    }
  }, [debouncedSearchValue]);

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <SearchWrapper>
        <Input
          placeholder="Поиск"
          value={searchValue}
          onChange={handleSearchInput}
        />
        <SearchIconLogo src={SearchIcon} alt="searchIcon" />
        {SearchList.length && <SearchList list={searchList} />}
      </SearchWrapper>
    </>
  );
};
