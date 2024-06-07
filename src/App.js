import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage"; // Verifique esta linha
import AnimeDetailPage from "./pages/AnimeDetailPage";
import PlaylistPage from "./pages/PlaylistPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />{" "}
          {/* Verifique esta linha */}
          <Route
            path="/anime/:id"
            element={<AnimeDetailPage animes={sampleAnimes} />}
          />
          <Route path="/playlists" element={<PlaylistPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
