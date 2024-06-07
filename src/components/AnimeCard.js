import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.cardShadow};
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.cardShadow};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  padding: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
`;

const AnimeCard = ({ anime }) => {
  return (
    <Card>
      <CardImage src={anime.image} alt={anime.title} />
      <CardTitle>{anime.title}</CardTitle>
    </Card>
  );
};

export default AnimeCard;
