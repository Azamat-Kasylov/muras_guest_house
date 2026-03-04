import NavBarItem from "./NavBarItem";
import { navBarData } from "../../data";
import styled from "styled-components";

interface Props {
  setIsVisible: (v: boolean) => void;
}

const NavBar: React.FC<Props> = ({ setIsVisible }) => {
  return (
    <StyledNavBar>
      <a href="/muras_guest_house/">
        <img className="header-logo" src="./logo.PNG" alt="muras logo" />
      </a>
      <div className="nav_wrapper">
        {navBarData.map((i, index) => (
          <NavBarItem
            link={i.link}
            title={i.title}
            key={index}
            setIsVisible={setIsVisible}
          />
        ))}
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding-left: 30px;
    flex-direction: column;
  }

  .nav_wrapper {
    padding-right: 60px;
    display: flex;
    gap: 60px;

    @media (max-width: 1024px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }

  .header-logo {
    max-width: 100%;
    max-height: 60px;
  }
`;

export default NavBar;
