import styled from "styled-components";
import { CardPlayButton } from "./CardPlayButton";
import { TMDB_API_VALUES } from "@/app/config/config";

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

type Props = { img: string; className?: string };

export const CardHeader = ({ img, className }: Props) => {
  return (
    <CardHeaderWrapper className={className || ""}>
      <img src={`${TMDB_API_VALUES.imgURL + img}`} alt="Movie Logo" />
      <CardPlayButton />
    </CardHeaderWrapper>
  );
};
