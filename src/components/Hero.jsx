import React from "react";
import styled from "styled-components";
import heroBackground from "../assets/hero-background.jpg"; // Ensure you have this image in your assets folder
import profileImage from "../assets/profile-image1.jpeg"; // Ensure you have your photograph in the assets folder

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroBackground}) center/cover no-repeat;
  color: #fff;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 250px; /* Adjust the width as needed */
  height: auto;
  border-radius: 50%;
  margin-bottom: 2rem; /* Add some space between the photograph and the text */
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
`;

const HeroButton = styled.a`
  padding: 0.75rem 2rem;
  background: #ff4b2b;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #ff4b2b;
    background: linear-gradient(to right, #ff4b2b, #ff416c);
  }
`;
const ProjectLink = styled.a`
  display: block;
  font-size: 1.2rem;
  color: #007bff;
  margin-top: 0.5rem;
  padding-bottom: 20px;
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <ProfileImage src={profileImage} alt="Profile" />{" "}
      {/* Add your photograph here */}
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>
        MERN Stack Developer | Web Designer | Content Creator
      </HeroSubtitle>
      <ProjectLink href="https://github.com/TusharLohtia">
        GitHub Profile
      </ProjectLink>
      <HeroButton href="#about">Learn More</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
