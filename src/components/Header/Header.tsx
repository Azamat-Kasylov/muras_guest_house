/* eslint-disable jsx-a11y/alt-text */
import NavBar from "./NavBar";
import styled from "styled-components";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <StyledHeader className="header" isVisible={isVisible}>
      <div className="container">
        <NavBar setIsVisible={setIsVisible} />
        <BurgerMenu setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
    </StyledHeader>
  );
};

interface StyledHeaderProp {
  isVisible: boolean;
}

const StyledHeader = styled.header<StyledHeaderProp>`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #f0eee8;
  box-shadow: 0 4px 16px 0 #0000001f;
  z-index: 999;

  .container {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
    height: ${({ isVisible }) => (isVisible ? "240px" : "60px")};
    display: flex;
    align-items: start;
    justify-content: space-between;
    overflow: hidden;
    transition: all 0.3s linear;
  }
`;

export default Header;
