import { navBarData } from "../../data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  setIsVisible: (v: boolean) => void;
}

const NavBar: React.FC<Props> = ({ setIsVisible }) => {
  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <StyledNavBar>
      <a href="/muras_guest_house/">
        <img
          width={"50px"}
          height={"50px"}
          className="header-logo"
          src="./logo.webp"
          fetchPriority="high"
          alt="muras logo"
        />
      </a>
      <ul className="nav_list">
        {navBarData.map((i, index) => (
          <li className="nav_item" key={index}>
            <NavLink to={i.link} onClick={handleClick}>
              {i.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .nav_list {
    margin: 0;
    padding: 0;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .nav_item {
    list-style: none;
    font-family: "Montserrat", sans-serif;
  }

  .header-logo {
    max-width: 100%;
    max-height: 50px;
  }

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

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-left: 30px;

    .nav_list {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export default NavBar;
