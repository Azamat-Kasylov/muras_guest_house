import styled from "styled-components";

const Button = () => {
  return (
    <StyledButton className="button">
      <a href="#intro">Book now</a>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #f6e7a7;
  border: none;
  border-radius: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffe46d;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export default Button;
