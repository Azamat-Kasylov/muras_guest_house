/* eslint-disable jsx-a11y/alt-text */
import NavBar from "./NavBar";
import styled from "styled-components";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <StyledHeader className="header" $isVisible={isVisible}>
      <div className="container">
        <NavBar setIsVisible={setIsVisible} />
        <BurgerMenu setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ $isVisible: boolean }>`
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 4px 16px 0 #00000023;
  z-index: 999;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
    height: ${({ $isVisible }) => ($isVisible ? "230px" : "50px")};
    will-change: height;
    display: flex;
    align-items: start;
    justify-content: space-between;
    overflow: hidden;
    transition: all 0.3s linear;
  }
`;

export default Header;
