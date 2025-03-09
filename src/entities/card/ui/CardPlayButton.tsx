import { Button } from "@/shared/ui/Button";
import PlayIcon from "@assets/icons/play.svg";
import styled from "styled-components";

const CardPlayButtonWrapper = styled(Button)`
  border-radius: 100%;
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  & > img {
    width: 30%;
    height: 100%;
    margin-left: 8px;
  }

  &:hover {
    filter: brightness(0.7);
  }
`;

export const CardPlayButton = () => {
  return (
    <CardPlayButtonWrapper>
      <img src={PlayIcon} alt="Play" />
    </CardPlayButtonWrapper>
  );
};
