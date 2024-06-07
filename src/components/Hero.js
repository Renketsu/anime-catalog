import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Anime 1" />
            <HeroTitle>Anime 1</HeroTitle>
            <HeroSubtitle>Descrição do Anime 1</HeroSubtitle>
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Anime 2" />
            <HeroTitle>Anime 2</HeroTitle>
            <HeroSubtitle>Descrição do Anime 2</HeroSubtitle>
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Anime 3" />
            <HeroTitle>Anime 3</HeroTitle>
            <HeroSubtitle>Descrição do Anime 3</HeroSubtitle>
          </div>
        </Carousel>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
