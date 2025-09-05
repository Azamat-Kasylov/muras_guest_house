import React from "react";
import styled from "styled-components";
import ServisesItem from "./ServisesItem";

const Servises = () => {
  return (
    <StyledServises id="servises">
      <h2>Our servises</h2>
      <ServisesItem />
    </StyledServises>
  );
};

const StyledServises = styled.section`
  min-height: 100vh;
  padding: 0 1rem 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff7e5;
`;

export default Servises;
