import React from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  justify-items: center;
`;
const AnimeList = ({ animes }) => {
  return (
    <List>
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </List>
  );
};

export default AnimeList;
