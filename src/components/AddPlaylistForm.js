import React, { useState } from "react";

const AddPlaylistForm = ({ onAdd }) => {
  const [playlistName, setPlaylistName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlistName.trim()) {
      onAdd(playlistName);
      setPlaylistName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="New Playlist"
      />
      <button type="submit">Add Playlist</button>
    </form>
  );
};

export default AddPlaylistForm;
