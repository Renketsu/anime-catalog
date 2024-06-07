import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import SocialShare from "../components/SocialShare";

const AnimeDetailPage = ({ animes }) => {
  const { id } = useParams();
  const anime = animes.find((anime) => anime.id.toString() === id);

  if (!anime) {
    return <div>Anime not found</div>;
  }

  const animeUrl = `https://yourwebsite.com/anime/${id}`;

  return (
    <div>
      <img src={anime.image} alt={anime.title} />
      <h1>{anime.title}</h1>
      <p>Descrição do anime...</p>
      <p>Classificação: 8.5</p>
      <p>Gêneros: Ação, Aventura</p>
      <CommentSection />
      <SocialShare url={animeUrl} title={anime.title} />
    </div>
  );
};

export default AnimeDetailPage;
