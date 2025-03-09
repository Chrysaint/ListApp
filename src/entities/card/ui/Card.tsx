import styled from "styled-components";
import { TMovieCard } from "../model/card";
import { CardButton } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { Text } from "@/shared/ui/Text";

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

export const Card = (card: TMovieCard) => {
  return (
    <CardWrapper data-movie-id={card.id}>
      <CardHeader className="card-header" img={card.poster_path} />
      <CardButton>Добавить в список</CardButton>
      <Text size="md">{card.title}</Text>
    </CardWrapper>
  );
};
