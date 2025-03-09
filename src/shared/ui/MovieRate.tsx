import styled from "styled-components";
import * as styles from "@/app/styles/variables";
import KPLogo from "@assets/moviePlatforms/kinopoisk.png";
import IMDBLogo from "@assets/moviePlatforms/imdb.png";

const MovieRateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.img`
  width: 20px;
  aspect-ratio: 1;
`;

const Rate = styled.span`
  font-size: ${styles.FONT_SIZE.sm};
  color: black;
`;

type MovieRateCompany = "kinopoisk" | "imdb";
type MovieRateProps = {
  company: MovieRateCompany;
  rate?: number;
};

export const MovieRate = ({ company, rate }: MovieRateProps) => {
  return (
    <MovieRateWrapper>
      <Logo src={company === "kinopoisk" ? KPLogo : IMDBLogo} />
      <Rate>{rate || "None"}</Rate>
    </MovieRateWrapper>
  );
};
