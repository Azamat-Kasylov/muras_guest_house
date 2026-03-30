import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Div>
      <div className="spinner"></div>
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 50px;
    height: 50px;
    border: 6px solid rgba(87, 87, 87, 0.3);
    border-top: 6px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
