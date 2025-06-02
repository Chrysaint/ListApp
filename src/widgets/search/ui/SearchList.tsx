import { TMovie } from "@/entities/card/model/card";
import { SearchItem } from "./SearchItem";
import styled from "styled-components";
import { getMovieTitle } from "@/shared/utils/getMovieTitle";

const SearchListWrapper = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translate(-50%, 0);
  display: none;
  max-width: 450px;
  width: 100%;
  z-index: 3;
`;

type TSearchList = {
  list: TMovie[];
  elementsToShow?: number;
};

export const SearchList = ({ list, elementsToShow }: TSearchList) => {
  const elementsCounter = elementsToShow ? elementsToShow - 1 : 5;
  const movieList = list.slice(0, elementsCounter);
  console.log("movie list: ", movieList);
  return (
    <SearchListWrapper>
      {movieList.map((movie) => (
        <SearchItem
          title={getMovieTitle(movie)}
          image={movie.posterUrlPreview}
          id={movie.kinopoiskId}
        />
      ))}
    </SearchListWrapper>
  );
};
