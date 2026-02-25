import NavBarItem from "./NavBarItem";
import { navBarData } from "../data";
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <StyledNavBar>
      {navBarData.map((i, index) => (
        <NavBarItem link={i.link} title={i.title} key={index} />
      ))}
    </StyledNavBar>
  );
};

const StyledNavBar = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 50px;

  @media (max-width: 1024px) {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export default NavBar;
