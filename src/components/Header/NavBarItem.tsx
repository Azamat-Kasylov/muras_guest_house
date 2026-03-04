import styled from "styled-components";
import { NavBarDataInterface } from "../../data";
import { NavLink } from "react-router-dom";

interface Props extends NavBarDataInterface {
  setIsVisible: (v: boolean) => void;
}

const NavBarItem: React.FC<Props> = ({ title, link, setIsVisible }) => {
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <StyledNavBarItem className="nav_item" onClick={handleClick}>
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
    color: #eea435;
  }

  .active {
    color: #eea435;
  }
`;

export default NavBarItem;
