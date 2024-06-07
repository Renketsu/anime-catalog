import React, { useState } from "react";
import Hero from "../components/Hero";
import AnimeList from "../components/AnimeList";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";

const sampleAnimes = [
  {
    id: 1,
    title: "Naruto",
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
  },
  {
    id: 2,
    title: "One Piece",
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
  },
  {
    id: 4,
    title: "My Hero Academia",
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
  },
  {
    id: 5,
    title: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
  },
];

const HomePage = () => {
  const [filteredAnimes, setFilteredAnimes] = useState(sampleAnimes);

  const handleSearch = (query) => {
    const filtered = sampleAnimes.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAnimes(filtered);
  };

  return (
    <div>
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <AnimeList animes={filteredAnimes} />
      <Recommendations animes={sampleAnimes} />
    </div>
  );
};

export default HomePage;
