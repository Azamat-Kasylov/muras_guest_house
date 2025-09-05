/* eslint-disable jsx-a11y/alt-text */
import Button from "./Button";
import NavBar from "./NavBar";
import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledHeader className="header" isVisible={isVisible}>
      <a href="/#">
        <img src="/logo.png" alt="muras logo" />
      </a>
      <NavBar isVisible={isVisible} />
      <Button />
      <button onClick={handleClick} className="burgerHidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 16px;
  padding: 0 20px;
  width: calc(100% - 32px);
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  background-color: rgba(0, 163, 165, 0.8);
  backdrop-filter: blur(3px);
  border-radius: 30px;
  z-index: 1;

  .burgerHidden {
    display: none;
  }

  @media (max-width: 992px) {
    padding-bottom: 1rem;
    height: ${({ isVisible }) => (isVisible ? "35%" : "60px")};
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow: hidden;
    transition: all 0.3s linear;

    .burgerHidden {
      display: block;
      position: absolute;
      right: 25px;
      top: 32px;
      transform: translateY(-50%);
      &:hover {
        cursor: pointer;
      }
    }
    button {
      margin: 0;
      padding: 0;
      background: none;
      border: none;
    }

    svg {
      width: 25px;
      height: 100%;
    }
  }

  a {
    display: flex;
  }

  img {
    max-width: 100%;
    height: 60px;
    padding-left: 20px;

    @media (max-width: 992px) {
      padding-left: 0;
    }
  }
`;

export default Header;
