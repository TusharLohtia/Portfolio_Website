// src/components/Navbar.js
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ff4b2b;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.942);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-family: "Pacifico", cursive;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #000000;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Tushar Portfolio</Logo>
      <Menu>
        <MenuItem>
          <MenuLink href="#hero">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#about">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
