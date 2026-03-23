import React from "react";
import styled from "styled-components";

const FooterNavigation = () => {
  return (
    <Nav>
      <h3 className="f_nav-title">Navigation</h3>
      <ul className="f_nav-list">
        <li className="f_nav-item">
          <a href="#aboutUs">About us</a>
        </li>
        <li className="f_nav-item">
          <a href="#rooms">Rooms</a>
        </li>
        <li className="f_nav-item">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="f_nav-item">
          <a href="#services">Services</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  padding-top: 20px;
  margin: 0 auto;

  .f_nav-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .f_nav-title {
    text-transform: uppercase;
    color: #7e7367;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    margin-bottom: 25px;
  }

  .f_nav-item {
    list-style: none;
  }

  a {
    color: #7e7367;
    transition: all 0.3s;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 30px;
  }
`;

export default FooterNavigation;
