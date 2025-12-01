import styled from "styled-components";
import { NavBarDataInterface } from "../data";
import { NavLink } from "react-router-dom";

const NavBarItem: React.FC<NavBarDataInterface> = ({ title, link }) => {
  return (
    <StyledNavBarItem className="nav-item">
      <NavLink to={link}>{title}</NavLink>
    </StyledNavBarItem>
  );
};

const StyledNavBarItem = styled.li`
  a {
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    transition: color 0.3s;
  }
  a:hover {
    color: #f6e7a7;
  }

  .active {
    color: #f6e7a7;
  }
`;

export default NavBarItem;
