// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 My Portfolio. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
