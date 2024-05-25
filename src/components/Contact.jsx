import React from "react";
import styled from "styled-components";

const PersonalInfoContainer = styled.section`
  padding: 4rem 2rem;
  background: #e0dcdc;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex; /* Add flexbox display */
  flex-direction: column; /* Align items vertically */
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  display: inline-block; /* Display inline to fit in a single line */
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PersonalInfo = () => {
  return (
    <PersonalInfoContainer id="contact">
      <InfoItem>
        <Label>Name:</Label>
        <InfoText>Tushar Lohtia</InfoText>
      </InfoItem>
      <InfoItem>
        <Label>Email:</Label>
        <InfoText>tushar.lohtia19@gmail.com</InfoText>
      </InfoItem>
      <InfoItem>
        <Label>Phone:</Label>
        <InfoText>+91 9780951925</InfoText>
      </InfoItem>
      <InfoItem>
        <Label>LinkedIn:</Label>
        <InfoText>
          <Link
            href="https://www.linkedin.com/in/tushar-lohtia-6b4952235"
            target="_blank"
          >
            linkedin.com/in/tusharlohtia
          </Link>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <Label>Git Profile:</Label>
        <InfoText>
          <Link href="https://github.com/TusharLohtia" target="_blank">
            github.com/tusharlohtia
          </Link>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <Label>Resume:</Label>
        <InfoText>
          <Link
            href="https://drive.google.com/file/d/1GfpWuT_HZJQlko2fzLrNqghsTXNBKret/view?usp=drivesdk"
            target="_blank"
          >
            Download Resume
          </Link>
        </InfoText>
      </InfoItem>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;
