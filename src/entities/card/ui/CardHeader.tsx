import styled from "styled-components";
import { CardPlayButton } from "./CardPlayButton";
import NoMovieLogo from "@assets/NoMovie.png";
import { Link } from "react-router-dom";
import { MovieRate } from "@/shared/ui/MovieRate";
import * as styles from "@/app/styles/variables";

export const CardHeaderWrapper = styled.div`
  height: 450px;
  width: 100%;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;

    background-color: rgba(0, 0, 0, 0.2);
  }
  & > img {
    object-fit: cover;
    object-position: top;
  }
`;

const CardHeaderLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const CardRatings = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

type Props = {
  img: string;
  id: number;
  className?: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
};

export const CardHeader = ({
  img,
  id,
  className,
  ratingKinopoisk,
  ratingImdb,
}: Props) => {
  return (
    <CardHeaderWrapper className={className || ""}>
      <CardHeaderLink to={`/movie/id=${id}`} />
      <CardRatings>
        {ratingKinopoisk && (
          <MovieRate company="kinopoisk" rate={ratingKinopoisk} />
        )}
        {ratingImdb && <MovieRate company="imdb" rate={ratingImdb} />}
      </CardRatings>

      <img src={img !== null ? `${img}` : NoMovieLogo} alt="Movie Logo" />
      <CardPlayButton />
    </CardHeaderWrapper>
  );
};
