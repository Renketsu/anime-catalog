import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileDetail = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.cardShadow};
`;

const ProfilePage = () => {
  // Exemplo de dados de perfil
  const userProfile = {
    username: "johndoe",
    email: "johndoe@example.com",
    favoriteAnimes: ["Naruto", "One Piece", "Attack on Titan"],
  };

  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <ProfileDetail>
        <strong>Username:</strong> {userProfile.username}
      </ProfileDetail>
      <ProfileDetail>
        <strong>Email:</strong> {userProfile.email}
      </ProfileDetail>
      <ProfileDetail>
        <strong>Favorite Animes:</strong>
        <ul>
          {userProfile.favoriteAnimes.map((anime, index) => (
            <li key={index}>{anime}</li>
          ))}
        </ul>
      </ProfileDetail>
    </ProfileContainer>
  );
};

export default ProfilePage;
