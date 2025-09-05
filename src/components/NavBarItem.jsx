import styled from "styled-components";

const NavBarItem = ({ title, id }) => {
  return (
    <StyledNavBarItem className="nav-item">
      <a href={`#${id}`}>{title}</a>
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
`;

export default NavBarItem;
