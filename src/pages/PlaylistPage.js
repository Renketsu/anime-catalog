import React, { useState } from "react";
import AddPlaylistForm from "../components/AddPlaylistForm";

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);

  const handleAddPlaylist = (name) => {
    setPlaylists([...playlists, { id: playlists.length + 1, name }]);
  };

  return (
    <div>
      <h1>Your Playlists</h1>
      <AddPlaylistForm onAdd={handleAddPlaylist} />
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistPage;
