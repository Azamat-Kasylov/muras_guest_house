import NavBarItem from "./NavBarItem";
import { data } from "../data";
import styled from "styled-components";

const NavBar = ({ isVisible }) => {
  return (
    <StyledNavBar className={` ${!isVisible ? "hiddenNav" : ""}`}>
      {data.map((i) => (
        <NavBarItem title={i.title} id={i.id} key={i.id} />
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

  @media (max-width: 992px) {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export default NavBar;
