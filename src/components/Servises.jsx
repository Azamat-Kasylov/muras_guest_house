import React from "react";
import styled from "styled-components";
import ServisesItem from "./ServisesItem";

const Servises = () => {
  return (
    <StyledServises id="servises">
      <h2>Our servises</h2>
      <Container>
        <ServisesItem />
      </Container>
    </StyledServises>
  );
};

const StyledServises = styled.section`
  min-height: 100vh;
  padding: 0 1rem 50px;
  background-color: #f3f2f2;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Servises;
