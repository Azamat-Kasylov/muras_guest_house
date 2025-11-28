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
  color: red;
  font-size: 13px;
  position: absolute;
`;

export default ErrorMessage;
