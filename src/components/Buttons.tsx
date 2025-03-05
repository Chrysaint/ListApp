import styled from "styled-components";
import * as pallete from "@/styles/variables";
import PlayIcon from "@assets/icons/play.svg";

type buttonPaddings = "small" | "medium" | "large";
type flexAlign = "center" | "flex-start" | "flex-end";
type flexJustify = "center" | "flex-start" | "space-between" | "flex-end";

type flexButtonProps = {
  align?: flexAlign;
  justify?: flexJustify;
  gap?: number;
};

const BUTTON_SIZES: { [key in buttonPaddings]: string } = {
  small: "6px 12px",
  medium: "12px 16px",
  large: "16px 20px",
};

export const Button = styled.button<{ size: buttonPaddings }>`
  padding: ${(props) => BUTTON_SIZES[props.size] || BUTTON_SIZES["medium"]};
  text-align: center;
  color: ${pallete.FONT_COLOR};
  background-color: ${pallete.DARK_BLUE_COLOR};
  border-radius: 8px;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${pallete.ACCENT_COLOR};
  }
`;

export const FlexButton = styled(Button)<{ config: flexButtonProps }>`
  display: flex;
  align-items: ${(props) => props.config.align || "flex-start"};
  justify-content: ${(props) => props.config.justify || "flex-start"};
  gap: ${(props) => props.config.gap || "4px"};
`;

const ButtonRounded = styled(Button)`
  position: relative;
  border-radius: 50%;
  max-width: 50px;
  width: 100%;
  aspect-ratio: 1;

  & > img {
    position: absolute;
    inset: 0;
    left: 50%;
    transform: translateX(-30%);
    aspect-ratio: 1;
    width: 15px;
  }

  &:hover,
  &:focus {
    filter: brightness(1.4);
  }
`;

export const RoundedButton = () => {
  return (
    <ButtonRounded size="medium">
      <img src={PlayIcon} alt="playIcon" />
    </ButtonRounded>
  );
};
