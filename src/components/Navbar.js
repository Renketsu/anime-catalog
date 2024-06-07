import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUser, FaHistory, FaHome, FaSignInAlt } from "react-icons/fa";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.cardShadow};
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link
          to="/"
          style={{ color: "white", fontSize: "1.5rem", textDecoration: "none" }}
        >
          Crunchyroll Clone
        </Link>
      </div>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <FaHome /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/history">
            <FaHistory /> History
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">
            <FaUser /> Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">
            <FaSignInAlt /> Login
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
