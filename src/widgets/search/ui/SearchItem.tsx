import styled from "styled-components";
import * as styles from "@/app/styles/variables";
import { NavLink } from "react-router-dom";
import NoMovieLogo from "@assets/NoMovie.png";

const SearchItemWrapper = styled.div`
  max-width: 450px;
  max-height: 80px;
  height: 100%;
  width: 100%;
  background-color: ${styles.COLOR.darkBlue};
  display: flex;
  overflow: hidden;
  *:hover {
    background-color: ${styles.COLOR.background};
  }
`;

const SearchItemImageWrapper = styled.div`
  width: 20%;
  height: 100%;
`;

const SearchItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const SearchItemDataWrapper = styled(NavLink)`
  padding: 12px;
  display: grid;
  align-items: center;
  width: 100%;
`;

const SearchItemTitle = styled.h3`
  color: ${styles.COLOR.font};
  font-size: clamp(${styles.FONT_SIZE.sm}, 1rem, ${styles.FONT_SIZE.df});
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 85%;
  width: 100%;
`;

type SearchItemProps = {
  id: number;
  title: string;
  image: string;
};

export const SearchItem = ({ id, title, image }: SearchItemProps) => {
  return (
    <SearchItemWrapper>
      <SearchItemImageWrapper>
        <SearchItemImage
          src={image !== null ? `${image}` : NoMovieLogo}
          alt={title}
        />
      </SearchItemImageWrapper>
      <SearchItemDataWrapper to={`/movie/id=${id}`}>
        <SearchItemTitle>{title}</SearchItemTitle>
      </SearchItemDataWrapper>
    </SearchItemWrapper>
  );
};
