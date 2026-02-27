/* eslint-disable jsx-a11y/alt-text */
import Button from "./Button";
import NavBar from "./NavBar";
import styled from "styled-components";
import { useState } from "react";
import Music from "./Music";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledHeader className="header" isVisible={isVisible}>
      <a href="/muras_guest_house/">
        <img src="./logo.PNG" alt="muras logo" />
      </a>
      <Music />
      <NavBar setIsVisible={setIsVisible} />
      <Button />
      <button onClick={handleClick} className="burgerHidden">
        {isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            style={{ width: "35px" }}
          >
            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </button>
    </StyledHeader>
  );
};

interface StyledHeaderProp {
  isVisible: boolean;
}

const StyledHeader = styled.header<StyledHeaderProp>`
  padding: 0 20px;
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  background-color: rgba(0, 163, 165, 1);
  backdrop-filter: blur(3px);
  z-index: 999;

  .burgerHidden {
    display: none;
  }

  @media (max-width: 1024px) {
    padding-bottom: 1rem;
    height: ${({ isVisible }) => (isVisible ? "220px" : "60px")};
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
      width: 30px;
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

    @media (max-width: 1024px) {
      padding-left: 0;
    }
  }
`;

export default Header;
