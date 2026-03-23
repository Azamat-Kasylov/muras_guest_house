/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";

interface Props {
  setIsVisible: (v: boolean) => void;
  isVisible: boolean;
}

const BurgerMenu: React.FC<Props> = ({ setIsVisible, isVisible }) => {
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledDiv onClick={handleClick} className="burgerHidden">
      {isVisible ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 30px;
    padding-top: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default BurgerMenu;
