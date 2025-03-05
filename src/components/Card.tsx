import styled from "styled-components";

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 40px;
`;

export const CardWrapper = styled.div`
  display: grid;
  max-width: 260px;
  width: 100%;
`;

export const CardImage = styled.img`
  object-fit: cover;
`;
