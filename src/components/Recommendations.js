import React from "react";

const Recommendations = ({ animes }) => {
  const randomAnime = animes[Math.floor(Math.random() * animes.length)];

  return (
    <div>
      <h2>Recommended for you</h2>
      <div>
        <img src={randomAnime.image} alt={randomAnime.title} />
        <p>{randomAnime.title}</p>
      </div>
    </div>
  );
};

export default Recommendations;
