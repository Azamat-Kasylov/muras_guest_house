import styled from "styled-components";

const Button: React.FC = () => {
  const handleClick = () => {
    console.log("soon");
  };

  return (
    <StyledButton className="button" onClick={handleClick}>
      <a href="#intro">Book now</a>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #f8fafc;
  border: none;
  border-radius: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #bddde4;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default Button;

// Код бронирования: 70L4GCКод доступа: U4G698Итого: $497.40
