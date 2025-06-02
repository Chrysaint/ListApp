import styled from "styled-components";
import { TMovie } from "../model/card";
import { CardButton } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { Text } from "@/shared/ui/Text";
import { Link } from "react-router-dom";
import * as styles from "@/app/styles/variables";

const CardWrapper = styled.li`
  max-width: 300px;
  width: 100%;
  text-align: center;
  &:hover {
    .card-header::after {
      position: absolute;
      content: "";
      inset: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const CardNameLink = styled(Link)`
  display: block;
  justify-self: center;
  &:hover > *,
  &:focus > * {
    color: ${styles.COLOR.accent};
  }
`;

export const Card = (card: TMovie) => {
  return (
    <CardWrapper data-movie-id={card.kinopoiskId}>
      <CardHeader
        className="card-header"
        img={card.posterUrl}
        id={card.kinopoiskId}
        ratingKinopoisk={card.ratingKinopoisk}
        ratingImdb={card.ratingImdb}
      />
      <CardButton>Добавить в список</CardButton>
      <CardNameLink to={`/movie/id=${card.kinopoiskId}`}>
        <Text size="md">
          {card.nameRu
            ? card.nameRu
            : card.nameEn
            ? card.nameEn
            : card.nameOriginal}
        </Text>
      </CardNameLink>
    </CardWrapper>
  );
};
