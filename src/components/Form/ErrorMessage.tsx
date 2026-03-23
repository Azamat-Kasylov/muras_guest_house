import styled from "styled-components";

interface ErrorMessageProps {
  children: React.ReactNode;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className = "",
}) => {
  return (
    <StyledErrorMessage className={className}>{children}</StyledErrorMessage>
  );
};

const StyledErrorMessage = styled.p`
  width: 100%;
  color: red;
  font-size: 13px;
  text-align: center;
  position: absolute;
`;

export default ErrorMessage;
